# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The main multi-role customer/operations-facing frontend for the IMS (Inventory Management System) — part of a multi-repo Supply Chain Management System. React 18 (Create React App), Tailwind + shadcn/radix-ui components. Talks to the `IMS_BackEnd` Spring Boot API. A separate sibling repo, `IMS_Admin`, is the dedicated back-office admin panel — this repo is for the operational roles instead.

## Commands

- `npm install`
- `npm start` — dev server on port 3000 by default (CRA). Since `IMS_Admin` also defaults to port 3000, run one on a different port when working with both simultaneously, e.g. `PORT=3001 npm start`.
- `npm run build` — production build.
- `npm test` — CRA/Jest test runner (interactive watch mode).

## Architecture

### API base URL

`src/Services/index.js` exports `url`, currently hardcoded to the **deployed** backend (`https://ashish2901-ims.onrender.com`), with a commented-out `http://localhost:8080` alternative. Toggle this when you want the app to hit a local backend instead of production.

All API calls live under `src/Services/*Service.js` (one file per domain: Admin, Customer, Supplier, DeliveryMan, WManager, SupplyOrder, Warehouse, Auth, etc.), using `axios` with a JWT bearer token pulled from `localStorage` (`jwt`, `id`, `role`).

### Role-based routing (`src/App.js`)

Auth state and role live in `localStorage` (`id`, `password`, `jwt`, `role`). `App.js` gates routes with per-role wrapper components (`PublicElement` = deliveryman, `UserElement` = wmanager, `SupplierElement`, `CustomerElements`) that render `<NotFound />` if the stored `role` doesn't match. There is no route protection beyond this client-side check — the backend enforces real authorization.

Only **four** of the role folders under `src/` are actually wired into routing:
- `src/Delivery_man/` — delivery man dashboard, pending/completed/return order views.
- `src/Supplier/` — supplier dashboard, approved-by-destination-type (SABDF/SABDT naming = "Supplier Approved By Destination [From/To]") and order history views.
- `src/WManager/` — warehouse manager dashboard, same ABDF/ABDT pattern, pending/cancelled orders.
- `src/Customer/` — customer-facing order view.

`src/Admin/` exists in the source tree but is **not routed** in `App.js` — treat it as legacy/unused; the live admin UI is the separate `IMS_Admin` repo.

### Shared UI

- `src/Custom_Components/` — hand-built shared components (Navbar, Dashboard shell, etc.)
- `src/components/ui/` — shadcn-style primitives (built on Radix), configured via `components.json` + `jsconfig.json` path aliases.
- `src/lib/` — utility helpers (e.g. `cn` class merger for Tailwind).
