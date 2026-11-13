# Volleyball Rally results and game-page update

Date: 2026-11-13

## Scope

Update `/work/collections/games` and `/work/volleyball-rally` from the user-supplied Roblox Creator Hub / Roblox Analytics figures dated through 12 November 2026. Update the Beyond 90 project copy as supplied. The user explicitly requested a near-top results strip, detailed results lower on the case study, a reserved 30-second gameplay-video slot, and phone-width checks.

## Content applied

- Replaced Volleyball Rally's stale “fast 3v3” card language with authentic Roblox volleyball in 2v2, 3v3 and 6v6.
- Added a four-item results strip, all dated to the supplied 12 November 2026 cutoff, and eight detailed result notes with the source attribution.
- Kept the benchmark phrasing as a comparison against Roblox's top-10,000 benchmark for daily players; it does not state that Rally is a top-10,000 game.
- Added the user's explanation for delaying paid ads, the cross-device detail, update count and player-country list.
- Made the result explicit that all growth so far was organic, with no ads at all.
- Added a labeled placeholder for a future 30-second gameplay video. No video file was supplied or embedded.
- Updated Beyond 90 copy with the supplied EA FC comparison, animation count and in-development status. No player statistics were added.
- Updated the Rally tag list with the requested tools and expanded the approach text with AI-first, several-agent workflow wording.

No revenue, Robux or payer information was added.

## Number inventory for user review

The following numeric claims are published in the Rally case study or card. The strip uses the compact `144K+` form specifically requested for presentation; the detail uses the supplied `144,000+` form.

- 2v2, 3v3 and 6v6.
- Results cutoff: 12 November 2026.
- Best day: 11,102 daily players (11 Nov 2026).
- About 20x the first month's daily-player average in the first five weeks.
- All growth so far was organic, with no ads at all.
- 144K+ visits (12 Nov 2026) in the strip; 144,000+ visits (12 Nov 2026) in the detail.
- Development started 7 Sep 2026; public testing opened 9 Oct 2026.
- 537 daily players on average (9 Oct to 3 Nov); 5,257 a day (4 to 10 Nov), about 10x; 11,102 on 11 Nov, about 20x the first-month average.
- Peak concurrent players: 169 (11 Nov 2026).
- Above the benchmark since 8 Nov 2026; 7,869 against 4,482 on 10 Nov.
- Day-1 retention about 10.5% (4 to 10 Nov); benchmark range 7.2% to 13.6% (50th to 90th percentile).
- Day-7 retention 3.18% (3 Nov); genre 90th percentile 2.93%.
- 54% on phones (4 to 10 Nov).
- 13 public updates in about two months.
- Biggest player countries: United States, Brazil, Philippines (9 Oct to 2 Nov).
- Beyond 90: 500+ animations.
- Gameplay slot: 30-second video.

## Verification

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; all 27 static pages generated. The build warns that the local Browserslist dataset is 11 months old; dependencies were not changed.
- Phone check targets both requested routes at 390px width, and the Beyond 90 case study, and checks copy, numbers, collection card content and horizontal overflow. QA script: `.impeccable/review/volleyball-results-qa.cjs` (ignored local QA files).
- Result-strip and detailed-stat captures are local and ignored, not public assets.

## Delivery state

User requested a GitHub push and live verification on 2026-11-13.

- Commit `d56cfa9ba644de02e2c7d94ddb525cca8ff091fb` (`feat: publish Volleyball Rally results`) was pushed to `origin/main`; `git ls-remote` returned the same SHA.
- Vercel deployment `dpl_DcV3hRxjimtKn2xYBH44QAYK7V6B` for the existing `my-portfolio` project is `READY` with target `production`. Vercel deployment metadata reports GitHub repo `MosesOnerhime/my_portfolio`, ref `main`, and commit SHA `d56cfa9ba644de02e2c7d94ddb525cca8ff091fb`.
- The deployment has aliases `www.mosesonerhime.com` and `mosesonerhime.com`.
- Unauthenticated live requests returned HTTP 200 for `/work/collections/games`, `/work/volleyball-rally`, and `/work/beyond-90`. The response HTML contains the organic-growth/no-ads copy and Rally results on the first two pages, plus the in-development and 500+ animations copy on Beyond 90.
- Local source and QA changes outside the five committed paths remain untouched and unstaged.
