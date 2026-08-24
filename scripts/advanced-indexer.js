#!/usr/bin/env node

/**
 * ============================================================================
 * ADVANCED GOOGLE & MULTI-ENGINE PROGRAMMATIC SEO INDEXING ENGINE
 * ============================================================================
 * Features:
 *  - Google Indexing API v3 (Real-time URL Notification Push)
 *  - IndexNow Protocol Integration (Bing, Yandex, Seznam, Naver, Yahoo)
 *  - Git-Diff Change Detection (Only index modified/new programmatic routes)
 *  - Smart Tiered Priority Sorting (Flagship > Configs > Clusters > Locations)
 *  - Quota Guardian & State Persistence (Avoid quota burnout with .cache/state)
 *  - Exponential Backoff & Rate-Limited Batch Throttling
 *  - GitHub Actions Step Summary Markdown Generator
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');
const { google } = require('googleapis');
const xml2js = require('xml2js');

// --- CONFIGURATION ---
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.godrejparkworld.com';
const SITEMAP_URL = `${DEFAULT_SITE_URL}/sitemap.xml`;
const CACHE_DIR = path.join(process.cwd(), '.cache');
const STATE_FILE = path.join(CACHE_DIR, 'indexing-state.json');
const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY || 'godrej-retreat-indexnow-key-2026';
const GOOGLE_DAILY_QUOTA = parseInt(process.env.GOOGLE_INDEXING_DAILY_LIMIT || '180', 10);
const THROTTLE_DELAY_MS = 350; // Delay between Google API calls to avoid rate limits

// --- ARGUMENT PARSING ---
const args = process.argv.slice(2);
const getArg = (flag, defaultValue) => {
  const arg = args.find(a => a.startsWith(`--${flag}=`));
  if (arg) return arg.split('=')[1];
  if (args.includes(`--${flag}`)) return true;
  return defaultValue;
};

const MODE = getArg('mode', 'smart'); // 'smart' | 'diff' | 'sitemap' | 'tier1'
const ENGINE = getArg('engine', 'all'); // 'all' | 'google' | 'indexnow'
const LIMIT = parseInt(getArg('limit', '50'), 10);
const FORCE = getArg('force', false) === true;
const SHOW_STATUS = getArg('status', false) === true;

// --- TIER 1 PRIORITY URLS ---
const TIER1_ROUTES = [
  '/',
  '/godrej-properties-pune',
  '/godrej-the-retreat-hinjewadi',
  '/godrej-the-aqua-retreat-hinjewadi',
  '/godrej-park-world-hinjewadi',
  '/godrej-properties-hinjewadi-pune',
  '/eoi',
  '/directory',
  '/godrej-park-world-pune-masterplan',
  '/godrej-park-world-pune-luxury-residences',
  '/godrej-park-world-pune-aqua-lifestyle',
  '/godrej-park-world-pune-premium-amenities',
  '/godrej-park-world-pune-hinjewadi-location',
  '/godrej-park-world-pune-gallery',
  '/configurations/godrej-the-retreat-2-bhk-flats-hinjewadi',
  '/configurations/godrej-the-retreat-3-bhk-luxury-apartments',
  '/configurations/godrej-the-retreat-floor-plans-pune',
  '/configurations/godrej-the-retreat-price-list',
  '/configurations/godrej-the-retreat-sample-flat-hinjewadi',
  '/blog',
  '/blog/godrej-the-retreat-hinjewadi-buyers-guide-2026',
  '/blog/godrej-the-retreat-vs-godrej-elements-vs-lodha-panache',
  '/properties/godrej-the-retreat',
  '/properties/godrej-the-retreat-hinjewadi',
  '/properties/godrej-the-retreat-price',
  '/properties/godrej-the-retreat-floor-plan',
  '/properties/godrej-the-retreat-brochure',
  '/properties/godrej-the-retreat-reviews',
  '/clusters/the-aqua-retreat',
  '/clusters/godrej-the-retreat',
];

// --- HELPER: Sleep ---
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --- STATE MANAGEMENT ---
function loadState() {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }
    if (fs.existsSync(STATE_FILE)) {
      const content = fs.readFileSync(STATE_FILE, 'utf8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.warn('⚠️ Could not load cache state:', err.message);
  }
  return { lastRun: null, indexedUrls: {} };
}

function saveState(state) {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (err) {
    console.warn('⚠️ Could not save cache state:', err.message);
  }
}

// --- GIT DIFF DETECTOR ---
function getGitChangedUrls(baseUrl) {
  const changedUrls = new Set();
  try {
    // Check files changed in the latest commit or working tree
    let gitDiffOutput = '';
    try {
      gitDiffOutput = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    } catch {
      gitDiffOutput = execSync('git status --porcelain', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    }

    const changedFiles = gitDiffOutput.split('\n').filter(Boolean);
    console.log(`🔍 Git Diff detected ${changedFiles.length} modified files.`);

    for (const file of changedFiles) {
      if (file.includes('src/app/page.tsx')) {
        changedUrls.add(`${baseUrl}/`);
      } else if (file.includes('src/app/godrej-the-retreat-hinjewadi/')) {
        changedUrls.add(`${baseUrl}/godrej-the-retreat-hinjewadi`);
      } else if (file.includes('src/app/godrej-properties-hinjewadi-pune/')) {
        changedUrls.add(`${baseUrl}/godrej-properties-hinjewadi-pune`);
      } else if (file.includes('src/app/godrej-park-world-pune-masterplan/')) {
        changedUrls.add(`${baseUrl}/godrej-park-world-pune-masterplan`);
      } else if (file.includes('src/app/godrej-park-world-pune-luxury-residences/')) {
        changedUrls.add(`${baseUrl}/godrej-park-world-pune-luxury-residences`);
      } else if (file.includes('src/data/blog.ts') || file.includes('src/data/blogArticlesPillar.ts')) {
        changedUrls.add(`${baseUrl}/blog`);
        changedUrls.add(`${baseUrl}/blog/godrej-the-retreat-hinjewadi-buyers-guide-2026`);
        changedUrls.add(`${baseUrl}/blog/godrej-the-retreat-vs-godrej-elements-vs-lodha-panache`);
      } else if (file.includes('src/app/properties/[location]/page.tsx')) {
        changedUrls.add(`${baseUrl}/properties/godrej-the-retreat-hinjewadi`);
        changedUrls.add(`${baseUrl}/properties/godrej-the-retreat-price`);
        changedUrls.add(`${baseUrl}/properties/godrej-the-retreat-floor-plan`);
      }
    }
  } catch (err) {
    console.warn('⚠️ Git diff analysis skipped:', err.message);
  }
  return Array.from(changedUrls);
}

// --- FETCH SITEMAP URLS ---
async function fetchSitemapUrls(sitemapUrl) {
  return new Promise((resolve) => {
    https.get(sitemapUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        xml2js.parseString(data, (err, result) => {
          if (err || !result || !result.urlset || !result.urlset.url) {
            console.warn('⚠️ Could not parse live sitemap.xml. Falling back to local Tier 1 routes.');
            return resolve([]);
          }
          const urls = result.urlset.url.map((u) => (typeof u.loc === 'string' ? u.loc : u.loc[0]));
          resolve(urls);
        });
      });
    }).on('error', (err) => {
      console.warn(`⚠️ Sitemap fetch failed (${err.message}). Using local route generation.`);
      resolve([]);
    });
  });
}

// --- URL SCORING & SORTING ---
function calculateUrlScore(url) {
  const urlPath = new URL(url).pathname;
  if (urlPath === '' || urlPath === '/') return 100;
  if (urlPath.includes('godrej-the-retreat')) return 95;
  if (urlPath.includes('godrej-properties-hinjewadi-pune')) return 90;
  if (urlPath.startsWith('/blog/godrej-the-retreat')) return 85;
  if (urlPath.startsWith('/clusters/')) return 80;
  if (urlPath.startsWith('/configurations/')) return 75;
  if (urlPath.startsWith('/properties/')) return 70;
  if (urlPath.startsWith('/investments/')) return 65;
  if (urlPath.startsWith('/amenities/')) return 60;
  if (urlPath.startsWith('/blog/')) return 55;
  return 50;
}

// --- GOOGLE INDEXING API CLIENT ---
async function getGoogleAuthClient() {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    return null;
  }
  try {
    const keys = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: keys.client_email,
        private_key: keys.private_key,
      },
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    return await auth.getClient();
  } catch (err) {
    console.error('❌ Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON:', err.message);
    return null;
  }
}

// --- PUSH TO GOOGLE INDEXING API ---
async function pushToGoogleIndexing(urls, authClient, state) {
  const results = [];
  if (!authClient) {
    console.log('ℹ️ Google API authentication not configured. Skipping Google API push.');
    return results;
  }

  const indexing = google.indexing({ version: 'v3', auth: authClient });
  console.log(`\n🚀 Submitting ${urls.length} URLs to Google Indexing API v3...`);

  let count = 0;
  for (const url of urls) {
    if (count >= GOOGLE_DAILY_QUOTA) {
      console.warn(`🛑 Reached Google daily quota limit (${GOOGLE_DAILY_QUOTA}). Halting submissions.`);
      break;
    }

    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });

      console.log(`  ✅ [Google API] Indexed: ${url} (Status: ${response.status})`);
      results.push({ url, engine: 'Google Indexing API', status: 'Success', code: response.status });
      
      // Update state
      if (!state.indexedUrls[url]) state.indexedUrls[url] = {};
      state.indexedUrls[url].google = {
        lastSubmitted: new Date().toISOString(),
        status: response.status,
      };

      count++;
      await sleep(THROTTLE_DELAY_MS);
    } catch (err) {
      console.error(`  ❌ [Google API] Failed: ${url} - ${err.message}`);
      results.push({ url, engine: 'Google Indexing API', status: 'Failed', error: err.message });
    }
  }

  return results;
}

// --- PUSH TO INDEXNOW PROTOCOL (Bing, Yandex, Seznam, Naver) ---
async function pushToIndexNow(urls, state) {
  const results = [];
  if (urls.length === 0) return results;

  console.log(`\n📡 Submitting ${urls.length} URLs to IndexNow Protocol (Bing, Yandex, Seznam)...`);

  const host = new URL(urls[0]).host;
  const payload = JSON.stringify({
    host: host,
    key: INDEXNOW_KEY,
    keyLocation: `https://${host}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  return new Promise((resolve) => {
    const req = https.request(
      'https://api.indexnow.org/indexnow',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (res) => {
        let responseBody = '';
        res.on('data', (d) => (responseBody += d));
        res.on('end', () => {
          const isSuccess = res.statusCode === 200 || res.statusCode === 202;
          console.log(`  ${isSuccess ? '✅' : '⚠️'} [IndexNow] Response Code: ${res.statusCode}`);

          for (const url of urls) {
            results.push({
              url,
              engine: 'IndexNow (Bing/Yandex)',
              status: isSuccess ? 'Success' : 'Warning',
              code: res.statusCode,
            });

            if (isSuccess) {
              if (!state.indexedUrls[url]) state.indexedUrls[url] = {};
              state.indexedUrls[url].indexNow = {
                lastSubmitted: new Date().toISOString(),
                status: res.statusCode,
              };
            }
          }
          resolve(results);
        });
      }
    );

    req.on('error', (err) => {
      console.error(`  ❌ [IndexNow] Request error:`, err.message);
      for (const url of urls) {
        results.push({ url, engine: 'IndexNow', status: 'Failed', error: err.message });
      }
      resolve(results);
    });

    req.write(payload);
    req.end();
  });
}

// --- WRITE GITHUB ACTIONS STEP SUMMARY ---
function writeGitHubSummary(results, totalDiscovered) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;

  const successful = results.filter((r) => r.status === 'Success').length;
  const failed = results.filter((r) => r.status === 'Failed').length;

  let md = `## 🚀 Programmatic SEO & Google Indexing Workflow Report\n\n`;
  md += `| Metric | Count |\n`;
  md += `|---|---|\n`;
  md += `| **Total URLs Discovered** | \`${totalDiscovered}\` |\n`;
  md += `| **URLs Dispatched** | \`${results.length}\` |\n`;
  md += `| **Successful Pushes** | ✅ \`${successful}\` |\n`;
  md += `| **Failed Pushes** | ❌ \`${failed}\` |\n\n`;

  md += `### 📋 Submission Details\n\n`;
  md += `| Target URL | Engine | Status | Code / Message |\n`;
  md += `|---|---|---|---|\n`;

  for (const r of results.slice(0, 40)) {
    const icon = r.status === 'Success' ? '✅' : '❌';
    md += `| \`${r.url}\` | ${r.engine} | ${icon} ${r.status} | ${r.code || r.error || 'OK'} |\n`;
  }

  if (results.length > 40) {
    md += `\n*... and ${results.length - 40} more URLs successfully submitted.*`;
  }

  try {
    fs.appendFileSync(summaryPath, md);
    console.log('📊 GitHub Actions Step Summary written.');
  } catch (err) {
    console.warn('⚠️ Could not write step summary:', err.message);
  }
}

// --- MAIN RUNNER ---
async function main() {
  console.log('================================================================');
  console.log('⚡ GOOGLE & MULTI-ENGINE PROGRAMMATIC SEO INDEXING ENGINE');
  console.log('================================================================');
  console.log(`🌐 Base URL: ${DEFAULT_SITE_URL}`);
  console.log(`⚙️ Mode: ${MODE} | Engine: ${ENGINE} | Limit: ${LIMIT} | Force: ${FORCE}\n`);

  const state = loadState();

  if (SHOW_STATUS) {
    const count = Object.keys(state.indexedUrls).length;
    console.log(`📊 Indexed State Cache: ${count} URLs tracked.`);
    console.log(`🕒 Last Run: ${state.lastRun || 'Never'}`);
    return;
  }

  // 1. URL Discovery
  let rawUrls = [];
  if (MODE === 'diff') {
    rawUrls = getGitChangedUrls(DEFAULT_SITE_URL);
    if (rawUrls.length === 0) {
      console.log('ℹ️ No git-modified routes found. Falling back to Tier 1 routes.');
      rawUrls = TIER1_ROUTES.map((r) => `${DEFAULT_SITE_URL}${r}`);
    }
  } else if (MODE === 'tier1') {
    rawUrls = TIER1_ROUTES.map((r) => `${DEFAULT_SITE_URL}${r}`);
  } else {
    // Smart & Sitemap Modes: Combine Live Sitemap + Tier 1 + Git Diff
    const sitemapUrls = await fetchSitemapUrls(SITEMAP_URL);
    const tier1Full = TIER1_ROUTES.map((r) => `${DEFAULT_SITE_URL}${r}`);
    const gitDiffUrls = getGitChangedUrls(DEFAULT_SITE_URL);

    const merged = new Set([...tier1Full, ...gitDiffUrls, ...sitemapUrls]);
    rawUrls = Array.from(merged);
  }

  console.log(`📌 Total Candidate URLs Discovered: ${rawUrls.length}`);

  // 2. Score & Sort URLs by Priority
  const scoredUrls = rawUrls.map((url) => ({
    url,
    score: calculateUrlScore(url),
    lastGoogle: state.indexedUrls[url]?.google?.lastSubmitted,
  }));

  scoredUrls.sort((a, b) => b.score - a.score);

  // 3. Filter URLs based on State (Unless FORCE is enabled)
  let targetUrls = [];
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  for (const item of scoredUrls) {
    if (FORCE) {
      targetUrls.push(item.url);
    } else {
      const lastGoogleTime = item.lastGoogle ? new Date(item.lastGoogle).getTime() : 0;
      // Re-index if never submitted or older than 7 days
      if (now - lastGoogleTime > SEVEN_DAYS_MS) {
        targetUrls.push(item.url);
      }
    }
    if (targetUrls.length >= LIMIT) break;
  }

  console.log(`🎯 Filtered target batch to push: ${targetUrls.length} URLs`);

  if (targetUrls.length === 0) {
    console.log('✨ All discovered URLs have been recently submitted within the last 7 days. Nothing to index!');
    return;
  }

  // 4. Authenticate & Execute Submissions
  const allResults = [];
  const googleAuthClient = await getGoogleAuthClient();

  if (ENGINE === 'all' || ENGINE === 'google') {
    const googleResults = await pushToGoogleIndexing(targetUrls, googleAuthClient, state);
    allResults.push(...googleResults);
  }

  if (ENGINE === 'all' || ENGINE === 'indexnow') {
    const indexNowResults = await pushToIndexNow(targetUrls, state);
    allResults.push(...indexNowResults);
  }

  // 5. Update State & Step Summary
  state.lastRun = new Date().toISOString();
  saveState(state);
  writeGitHubSummary(allResults, rawUrls.length);

  console.log('\n================================================================');
  console.log('✅ Indexing Workflow Completed Successfully.');
  console.log('================================================================');
}

main().catch((err) => {
  console.error('💥 Fatal Indexing Engine Error:', err);
  process.exit(1);
});
