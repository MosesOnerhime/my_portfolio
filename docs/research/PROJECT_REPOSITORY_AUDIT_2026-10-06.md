# Project Repository Audit, 6 October 2026

This audit records the evidence used to strengthen the public portfolio. The three external repositories were inspected read-only. Their existing local changes were not modified or included in the portfolio commit.

## Beyond 90

Source inspected: `D:\repos\Drixil Interactive\Beyond-90`

Verified portfolio-safe facts:

- Beyond 90 is a competitive Roblox football game made under Drixil Interactive.
- One player controls one footballer, with position-based team play and a broadcast-style camera.
- The experience is organized across Lobby, Match, and Training places that share one build.
- The repository documents passing, shooting, reception, defending, goalkeeping, set pieces, AI footballers, replays, progression, customization, and cross-device controls.
- The gameplay rules are designed around server-authoritative systems.
- The public game destination supplied by Moses is `https://www.roblox.com/games/138362130200118/Beyond-90`.

Evidence boundary: the portfolio describes the project as actively developing. It does not claim that every locally documented or uncommitted feature is present in the current public Roblox build.

## Volleyball Rally

Source inspected: `D:\repos\Drixil Interactive\Volleyball-Rally`

Verified portfolio-safe facts:

- Volleyball Rally is an arcade indoor volleyball game for Roblox made under Drixil Interactive.
- The documented design centers on three intents: Control, Attack, and Hustle.
- Context and camera aim support serving, passing, setting, spiking, tipping, blocking, and diving without assigning a separate control to every technique.
- The experience uses server-authoritative match logic, AI athletes for open roster positions, and touch, keyboard and mouse, and gamepad support.
- The project is structured as a multi-place experience covering menus, a rally hub or arena, and venues.
- The public game destination supplied by Moses is `https://www.roblox.com/games/87714615725428/Volleyball-Rally`.

Visual assets were sourced from the current project media folder supplied by Moses. The icon and thumbnail were resized and encoded as WebP for the portfolio:

- `public/volleyball-rally/icon.webp`
- `public/volleyball-rally/thumbnail.webp`

Evidence boundary: source documents vary between a central 3v3 concept and broader 2v2, 3v3, and 6v6 mode plans. The portfolio leads with the verified 3v3 positioning and does not claim that every planned mode is public.

## Forge

Source inspected: `D:\repos\Forge`

Verified portfolio-safe facts:

- Forge is a private gym, nutrition, and physique tracking product.
- It is a mobile-first installable PWA built with Next.js, TypeScript, Tailwind CSS, and Supabase.
- The repository documents Supabase Auth, PostgreSQL Row Level Security, and private Storage for user-owned data and media.
- Product areas include workout logging, nutrition, measurements, progress photos, routine templates, and private exercise media.
- Workout sets can be queued while offline, and the rest timer persists across navigation and reloads.
- The repository contains desktop and 390px mobile verification assets and automated test coverage.
- The verified production destination is `https://forge-runo.vercel.app/`.

The portfolio preview uses a compressed crop of the repository's desktop dashboard capture at `public/forge/dashboard.webp`.

## Drixil Interactive destinations

The following destinations were supplied directly by Moses and are centralized in `app/data/site.ts`:

- Roblox community: `https://www.roblox.com/share/g/451345789`
- TikTok: `https://www.tiktok.com/@drixil.interactive`
- Instagram: `https://www.instagram.com/drixil.interactive`
- YouTube: `https://www.youtube.com/@drixil.interactive`
- X: `https://x.com/drixil_inter`

Tracking query parameters were omitted from the stored social URLs because they are unnecessary for reaching the profiles.

## Content decisions

- Motion designer is now part of the portfolio-level positioning and capabilities.
- No standalone motion project was invented. Furreal.aex remains the current evidence, pending the additional links and content Moses plans to provide.
- Beyond 90 and Volleyball Rally received direct Roblox links and Drixil Interactive community and social links.
- The portfolio link hub is broader than the previous Furreal-focused Linktree: it groups products, games, motion/media, professional profiles, and contact destinations.
- No achievements, client names, usage metrics, testimonials, or performance claims were added.
