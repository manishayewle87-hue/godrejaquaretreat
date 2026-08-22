# Google Advanced Programmatic SEO & Multi-Engine Indexing Workflow

An enterprise-grade, automated indexing pipeline engineered to instantly submit, verify, and monitor 300+ programmatic SEO routes and core landing pages across **Google Search** (via Google Indexing API v3) and **Bing / Yandex / Seznam / Naver** (via IndexNow Protocol).

*Service Account Configured:* `godrejaqua@vivid-reality-419916.iam.gserviceaccount.com`

---

## 1. System Architecture

```
                       ┌────────────────────────┐
                       │  Git Push / Daily Cron │
                       └───────────┬────────────┘
                                   │
                     ┌─────────────▼──────────────┐
                     │ GitHub Actions CI Pipeline │
                     └─────────────┬──────────────┘
                                   │
                 ┌─────────────────┴─────────────────┐
                 ▼                                   ▼
      ┌──────────────────────┐             ┌────────────────────┐
      │ Git Diff URL Tracker │             │ Live Sitemap Parser│
      └──────────┬───────────┘             └─────────┬──────────┘
                 │                                   │
                 └─────────────────┬─────────────────┘
                                   │
                     ┌─────────────▼──────────────┐
                     │ Smart Priority Scorer      │
                     │ (Tier 1 > Configs > Silos) │
                     └─────────────┬──────────────┘
                                   │
                     ┌─────────────▼──────────────┐
                     │ Quota Guardian & State     │
                     │ Cache (.cache/state.json)  │
                     └─────────────┬──────────────┘
                                   │
            ┌──────────────────────┴──────────────────────┐
            ▼                                             ▼
┌─────────────────────────┐                   ┌─────────────────────────┐
│ Google Indexing API v3  │                   │ IndexNow Protocol       │
│ (Real-Time Notification)│                   │ (Bing / Yandex / Seznam)│
└─────────────────────────┘                   └─────────────────────────┘
```

---

## 2. Google Indexing API Setup Guide

To enable automated pushes to Google Indexing API v3:

### Step 1: Create a Google Cloud Service Account
1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., `godrej-retreat-seo`).
3. Enable the **Web Search Indexing API**:
   - Navigate to **APIs & Services > Library**.
   - Search for **"Indexing API"** and click **Enable**.
4. Create a Service Account:
   - Go to **IAM & Admin > Service Accounts**.
   - Click **Create Service Account** (Name: `google-indexer-bot`).
   - Grant role **Editor** or **Viewer**.
   - Click **Done**.
5. Generate JSON Key:
   - Click the three dots next to your new service account > **Manage Keys**.
   - Click **Add Key > Create New Key > JSON**.
   - A `.json` file will download to your computer.

### Step 2: Grant Owner Permissions in Google Search Console
> [!IMPORTANT]
> The service account email (e.g., `google-indexer-bot@godrej-retreat-seo.iam.gserviceaccount.com`) **MUST** be added as a **Verified Owner** in Google Search Console for your domain property.

1. Open [Google Search Console](https://search.google.com/search-console).
2. Select your property (`https://godrejaquaretreat.godrejparkworld.com` or domain property).
3. Go to **Settings > Users and permissions**.
4. Click **Add User**:
   - Email: paste your service account email.
   - Permission: **Owner** (mandatory for Indexing API).
   - Click **Add**.

---

## 3. GitHub Secrets Configuration

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add the following repository secrets:

| Secret Name | Value Description | Example |
|---|---|---|
| `GOOGLE_APPLICATION_CREDENTIALS_JSON` | Entire raw content of your GCP downloaded Service Account JSON key | `{"type":"service_account","project_id":"..."}` |
| `INDEXNOW_API_KEY` | Key matching the verification file in `/public` | `godrej-retreat-indexnow-key-2026` |
| `NEXT_PUBLIC_SITE_URL` | Production website base URL | `https://godrejaquaretreat.godrejparkworld.com` |

---

## 4. IndexNow Protocol Verification

The verification key is hosted at:
`https://godrejaquaretreat.godrejparkworld.com/godrej-retreat-indexnow-key-2026.txt`

When the pipeline pushes URLs to `https://api.indexnow.org/indexnow`, search engines (Bing, Yandex, Seznam, Naver) verify this text file on your domain and immediately schedule deep crawling.

---

## 5. Automated Git Workflow Triggers

The GitHub Actions workflow [`.github/workflows/seo-indexing.yml`](file:///.github/workflows/seo-indexing.yml) runs automatically under three conditions:

1. **On `git push` to `main`**:
   - Triggers when files in `src/**`, `public/**`, or `scripts/**` change.
   - Analyzes git diff to pinpoint newly created/modified pages.
   - Pushes updated routes to Google and Bing with zero manual effort.
2. **Daily Scheduled Cron**:
   - Runs every day at `03:30 UTC` (09:00 AM IST) to refresh indexing and ensure search engine freshness.
3. **Manual Trigger (`workflow_dispatch`)**:
   - Navigate to **GitHub Actions > Advanced Programmatic SEO & Google Indexing Workflow > Run workflow**.
   - Choose:
     - **Discovery Mode**: `smart` (recommended), `diff` (git changes only), `tier1` (core flagship pages only), `sitemap` (full sitemap).
     - **Search Engine**: `all`, `google`, `indexnow`.
     - **Max Limit**: `1` to `180` (capped at 180 to protect Google daily quota).
     - **Force Re-index**: `true` or `false`.

---

## 6. Developer CLI Commands

You can also run the indexing engine locally from the terminal:

```bash
# Run multi-engine smart indexing (default)
npm run index:all

# Run Google Indexing API push only
npm run index:google

# Run IndexNow push only (Bing / Yandex)
npm run index:indexnow

# Index only routes modified in git diff
npm run index:diff

# Index only Tier 1 flagship authority routes
npm run index:tier1

# View state cache statistics (how many URLs are currently tracked)
npm run index:status
```

---

## 7. Quota Guardian & State Persistence

Google allocates a default quota of **200 URL notifications per day per GCP project**. To protect against quota exhaustion:
- The engine persists state in `.cache/indexing-state.json`.
- URLs indexed within the last **7 days** are automatically skipped unless marked as modified in git or explicitly overridden with `--force`.
- In GitHub Actions, the `.cache` directory is preserved across workflow runs using `actions/cache@v4`.
