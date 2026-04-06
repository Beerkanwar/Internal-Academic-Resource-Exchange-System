# Internal Academic Resource Exchange System

A complete web application tailored for the Dr. B R Ambedkar National Institute of Technology Jalandhar.

## Important Credentials

The backend requires a PostgreSQL database to run correctly. For convenience, the system is configured to use the following defaults (placed inside `backend/.env`):

- **Database Type**: PostgreSQL
- **Database URL**: `postgresql://postgres:postgres@localhost:5432/nitj_resources?schema=public`
- **Database Name Expected**: `nitj_resources`
- **Expected Postgres Username**: `postgres`
- **Expected Postgres Password**: `postgres` (or modify `backend/.env` to match your local setup).

> **Note**: You must manually create a database named `nitj_resources` in your local Postgres instance before running the backend.

## Quick Start
1. Create the database in pgAdmin or via terminal: `CREATE DATABASE nitj_resources;`
2. Open terminal in `/backend`, run `npm i` (if not done) then `npx prisma db push`
3. Run `npm run dev` to start the backend.
4. Open another terminal in `/frontend`, run `npm i` then `npm run dev`.