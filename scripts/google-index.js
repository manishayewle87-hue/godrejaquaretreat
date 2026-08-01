const { google } = require('googleapis');
const fs = require('fs');
const xml2js = require('xml2js');
const https = require('https');

// ==========================================
// GOOGLE INDEXING API AUTOMATION SCRIPT
// ==========================================
// 1. You must have a Service Account JSON Key from Google Cloud Platform.
// 2. The JSON key should be available via an environment variable.
//    (e.g., GOOGLE_APPLICATION_CREDENTIALS_JSON)

const SITEMAP_URL = 'https://godrejaquaretreat.godrejparkworld.com/sitemap.xml';

async function getSitemapUrls() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        xml2js.parseString(data, (err, result) => {
          if (err) return reject(err);
          if (!result.urlset || !result.urlset.url) return resolve([]);
          
          const urls = result.urlset.url.map(u => u.loc[0]);
          resolve(urls);
        });
      });
    }).on('error', reject);
  });
}

async function requestIndexing(urls) {
  // Check if credentials exist
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    console.log("⚠️  GOOGLE_APPLICATION_CREDENTIALS_JSON is not set.");
    console.log("⚠️  Skipping Google Indexing API push.");
    return;
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

    const authClient = await auth.getClient();
    
    // We only push a few URLs to avoid quota limits for this run, 
    // ideally the newest ones, or loop through all.
    const urlLimit = Math.min(urls.length, 50); // Batch limit
    console.log(`Pushing ${urlLimit} URLs to Google Indexing API...`);

    const indexing = google.indexing({ version: 'v3', auth: authClient });

    for (let i = 0; i < urlLimit; i++) {
      const url = urls[i];
      try {
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED',
          },
        });
        console.log(`✅ Indexed: ${url} | Status: ${response.status}`);
      } catch (err) {
        console.error(`❌ Failed: ${url} | Error: ${err.message}`);
      }
    }
  } catch (error) {
    console.error("Critical Error authenticating with Google APIs:", error);
  }
}

async function run() {
  console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
  try {
    const urls = await getSitemapUrls();
    console.log(`Found ${urls.length} URLs in the sitemap.`);
    if (urls.length > 0) {
      await requestIndexing(urls);
    }
  } catch (e) {
    console.error("Error running index script:", e);
  }
}

run();
