# Huru Garden

A React + Vite frontend and Express API for Huru Garden, a community-centered hospitality and play space in Kakuma.

## Run locally

```bash
npm run install:all
npm run dev
```

The client runs at `http://localhost:5173` and proxies API requests to `http://localhost:5000`.

To configure email notifications, copy `server/.env.example` to `server/.env` and add SMTP credentials. Without SMTP settings, submissions are printed as a mail preview in the server log.

## Project shape

- `client/`: React Router pages, reusable layout/UI components, responsive brand styles, and API service layer.
- `server/`: Express routes and controllers for `/api/bookings`, `/api/contact`, and `/api/health`.
- `client/tailwind.config.js`: Huru brand tokens and font-family configuration.
