# KeenKeeper

KeenKeeper is a friendship management web app that helps you keep important relationships alive with regular check-ins, timeline history, and analytics.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- DaisyUI
- Recharts
- Lucide React Icons

## Core Features

- Home dashboard with hero banner, summary cards, and friends grid.
- Dynamic friend details page with quick check-in actions (Call, Text, Video).
- LocalStorage-backed timeline logging so interactions remain after page reload.
- Timeline page with filter, search, and date sort options.
- Friendship analytics page with a Recharts pie chart by interaction type.
- Active-link navbar, custom 404 page, loading states, and responsive layout.

## Project Routes

- / : Home page
- /friends/[id] : Friend details page
- /timeline : Interaction timeline page
- /stats : Friendship analytics page

## Run Locally

1. Install dependencies:

	npm install

2. Start development server:

	npm run dev

3. Build for production:

	npm run build

4. Start production server:

	npm run start

## Notes

- Friend profiles are stored in data/friends.json.
- Seed timeline data is stored in data/timelineSeed.json.
- New quick check-in entries are persisted in browser LocalStorage.
