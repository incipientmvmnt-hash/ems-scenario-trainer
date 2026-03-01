# MEDIC7 Pro Backend — Setup Guide

## What Was Built

### 1. Database Schema (`schema.sql`)
- **`profiles`** table: user_id, display_name, subscription_status (free/pro), subscription_expires_at, created_at
- **`answers`** table: tracks every answer with scenario_id, question_index, question_type, selected_answer (JSONB), is_correct, time_taken_ms, category, difficulty, level_filter
- **`user_stats`** view: computed stats by user + category (total_attempts, correct_count, avg_time_ms)
- **Row Level Security**: Users can only read/write their own data
- **Auto-profile trigger**: Creates a profile row when a user signs up

### 2. Auth Integration (in index.html)
- Supabase JS client v2 loaded from CDN
- Login/signup modal (email + password)
- Session persistence via Supabase auth
- Auth bar in header showing: user name, Pro badge (if subscribed), Dashboard link (if Pro), Sign Out button
- Anonymous users see a "Sign In" button

### 3. Score Tracking
- Every answer submission (Pro users only) is logged to the `answers` table
- Tracks: scenario_id, question_index, question_type, selected answer, correct/incorrect, time taken (ms), category, difficulty, level_filter

### 4. Pro Feature Gating
- Checks `profiles.subscription_status` on login
- Pro users: score tracking enabled, dashboard link visible
- Free users: no tracking, no dashboard
- Expiration support via `subscription_expires_at`

### 5. Analytics Dashboard
- Overall stats: scenarios attempted, total questions, accuracy %, avg time
- Bar chart showing accuracy by category (Chart.js)
- Weakest domain callout with "Train This Domain" button
- Recent 20 answers history
- Fully themed (dark + light mode)

---

## Setup Steps Required

### Step 1: Run the SQL Schema
1. Go to [Supabase SQL Editor](https://supabase.com/dashboard/project/syomwtowczbifyiledmg/sql/new)
2. Copy the entire contents of `schema.sql`
3. Paste and click "Run"
4. Verify: you should see `profiles`, `answers` tables and `user_stats` view in the Table Editor

### Step 2: Enable Email Auth (if not already)
1. Go to Supabase Dashboard → Authentication → Providers
2. Ensure "Email" provider is enabled
3. For testing, you may want to disable "Confirm email" in Authentication → Settings

### Step 3: Test It
1. Open the app in a browser
2. Click "Sign In" → "Don't have an account? Sign Up"
3. Create a test account with email + password
4. You'll be signed in as a **free** user (no tracking, no dashboard)

### Step 4: Flag a User as Pro (for testing)
Run this in the Supabase SQL Editor, replacing the email:

```sql
UPDATE public.profiles
SET subscription_status = 'pro',
    subscription_expires_at = '2027-01-01T00:00:00Z'
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'your-test-email@example.com'
);
```

After running this, sign out and back in (or refresh) — you'll see the Pro badge and Dashboard link.

### Step 5: Verify Tracking
1. As a Pro user, complete a scenario
2. Check the `answers` table in Supabase Table Editor — you should see rows
3. Click "Dashboard" to see your analytics

---

## Files Modified/Created
- `index.html` — Added Supabase client, auth modal, score tracking, dashboard, pro gating
- `schema.sql` — Database schema (must be run manually in Supabase SQL Editor)
- `PRO-BACKEND-SETUP.md` — This file
