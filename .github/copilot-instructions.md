# Copilot Instructions — Núcleo Gastronômico 🍽️

Purpose: short, actionable guide to help an AI coding agent be immediately productive in this repository.

## Big picture
- Framework: **Next.js (App Router)** with TypeScript and Tailwind. Server components + client components coexist. See `app/layout.tsx`, `app/page.tsx`.
- Data & domain: restaurants are a **static in-repo dataset** at `src/lib/restaurants.ts` (exported `RESTAURANTS` + `getRestaurantById`). Adding a restaurant = edit this file.
- Reviews flow: client UI -> server action -> Firebase (Storage + Firestore). Server actions live at `app/restaurant/[id]/actions.ts` and are used by the client component `src/components/ReviewModal.tsx`.
- Firebase: singletons in `src/lib/firebase.ts` export `db`, `storage`, `auth`. This repo uses Firebase Auth, Storage and Firestore.

## Key patterns & conventions
- "use client" is explicit: client-only components (UI, geolocation, file inputs) must have `"use client"` (e.g. `ReviewModal.tsx`, `RestaurantCard.tsx`).
- Server actions use `"use server"` and are imported into client components. Example: `uploadReviewPhoto` and `saveReviewToFirestore` are defined in `app/restaurant/[id]/actions.ts` and imported by `ReviewModal`.
- Authentication: Firebase Auth with popup providers (`google`, `github`, `microsoft`, `apple`) performed in `ReviewModal.tsx` via `signInWithPopup(auth, provider)`.
- Location gating: distance calculation is centralized in `src/lib/geo.ts`. The UI uses a 1km threshold for development (see comment in `ReviewModal`).
- Images: `next.config.ts` configures `images.unsplash.com` in `remotePatterns`; when adding external images, update `next.config.ts`.
- Types: domain shapes (e.g., `Restaurant`) are defined in `src/lib/restaurants.ts`—follow these when adding or returning objects.

## Developer workflows & commands
- Start dev server: `npm run dev` (also supports `yarn dev`, `pnpm dev`, `bun dev`).
- Build: `npm run build`; Start production: `npm run start`.
- Lint: `npm run lint` (ESLint config via `eslint-config-next`).
- Debugging guidance: client-side issues → browser console; server actions and server logs → Next.js dev terminal. Add `console.log` to server actions for quick telemetry.

## Integration & edge notes
- Firebase config is currently hard-coded in `src/lib/firebase.ts`. For prod/CI, replace with environment variables and add instructions in README/CI. There is no Firebase emulator configured in the repo.
- Server actions are trusted to run on the server and can call Firebase SDK directly—do not duplicate server-only logic on the client.
- `Image` component remote domains are restricted by `next.config.ts`; add domains or remote patterns if necessary.

## Small actionable rules for agents
- To add a restaurant: edit `src/lib/restaurants.ts` and include `coords`. Ensure external image domain is allowed in `next.config.ts`.
- To add a review flow: create server action under `app/restaurant/[id]/actions.ts` (use `"use server"`), call Firebase SDK, return IDs or errors; call it from `ReviewModal` or another `"use client"` component.
- Use existing utilities: `getDistanceFromLatLonInMeters` (in `src/lib/geo.ts`) instead of reimplementing distance logic.
- Follow TypeScript types in `src/lib/restaurants.ts` when creating new data shapes.

## What’s *not* in the repo (important to know)
- No automated tests or CI workflows present.
- No environment variable pattern for Firebase; credentials are in code (change before publishing).

---
If any of these areas are unclear or you want more detail (e.g., testing strategy, CI snippets, or environment variable migration steps), tell me which part to expand. ✅