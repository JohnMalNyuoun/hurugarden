# Huru Garden

A React + Vite frontend and Express API for Huru Garden, a community-centered hospitality and play space in Kakuma.

## Run locally

```bash
npm run install:all
npm run dev
```

The client runs at `http://localhost:5173` and proxies API requests to `http://localhost:5000`.

## Meta Pixel

Copy `client/.env.example` to `client/.env`, then set `VITE_META_PIXEL_ID` to the Pixel ID from Meta Events Manager. Add the same environment variable in your production host and rebuild/redeploy the client. The Pixel loads only after the visitor selects **Accept All** in the cookie banner; it records a `PageView` for each React route.

To configure visitor email notifications, copy `server/.env.example` to `server/.env` and set the email provider variables. When a visitor submits the contact or booking form, the server sends the message to `CONTACT_EMAIL`; the visitor's address is used as `replyTo` so you can reply directly to them. Without a verified domain, use Resend's `onboarding@resend.dev` test sender and set `CONTACT_EMAIL` to the email address associated with your Resend account. Test-mode delivery is limited to that account email. Without email settings in local development, submissions are printed as a mail preview in the server log.

## Project shape

- `client/`: React Router pages, reusable layout/UI components, and responsive brand styles.
- `server/`: Express routes and controllers for `/api/bookings`, `/api/contact`, and `/api/health`.
- `client/tailwind.config.js`: Huru brand tokens and font-family configuration.
