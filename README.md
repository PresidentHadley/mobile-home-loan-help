# MobileHomeLoanHelp.com

Next.js (App Router) site for educational mobile/manufactured home financing content + lead capture.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file (copy from `ENV.example` into `.env.local`):

```bash
cp ENV.example .env.local
```

3. Run dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Supabase table

Create the `leads` table in Supabase (SQL from your build prompt).

## Lead submission

The form posts to `POST /api/submit-lead`:
- Validates with Zod
- Checks duplicate emails within 24 hours (429 if found)
- Inserts into Supabase using the Service Role key
- Sends 2 emails via Resend (notification + auto-reply)

## Notes

- This site is educational and not a lender.
- Add the same env vars to Vercel Project Settings after deploying.

