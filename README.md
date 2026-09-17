# Huru Garden

A React + Vite frontend and Express API for Huru Garden, a community-centered hospitality and play space in Kakuma.

## Run locally

```bash
npm run install:all
npm run dev
```

The client runs at `http://localhost:5173` and proxies API requests to `http://localhost:5000`.

To configure visitor email notifications, copy `server/.env.example` to `server/.env` and set the email provider variables. When a visitor submits the contact or booking form, the server sends the message to `CONTACT_EMAIL`; the visitor's address is used as `replyTo` so you can reply directly to them. Without a verified domain, use Resend's `onboarding@resend.dev` test sender and set `CONTACT_EMAIL` to the email address associated with your Resend account. Test-mode delivery is limited to that account email. Without email settings in local development, submissions are printed as a mail preview in the server log.

To enable M-Pesa STK Push payments, set the `MPESA_*` variables in `server/.env`. Use `MPESA_ENVIRONMENT=sandbox` for Daraja testing and change it to `production` for live payments. `MPESA_CALLBACK_URL` must be a publicly reachable HTTPS URL pointing to `/api/mpesa/callback`; localhost cannot receive Safaricom callbacks.

## Project shape

- `client/`: React Router pages, reusable layout/UI components, responsive brand styles, and API service layer.
- `server/`: Express routes and controllers for `/api/bookings`, `/api/contact`, `/api/mpesa`, and `/api/health`.
- `client/tailwind.config.js`: Huru brand tokens and font-family configuration.
