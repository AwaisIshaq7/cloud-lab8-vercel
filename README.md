**Project Title**: Cloud Lab 8 - Vercel Deployment (my-lab8-app)

**Description**
- This repository contains the Next.js application created for Cloud Lab 8. The app demonstrates building and deploying a Next.js project to Vercel and includes configuration, environment handling, and basic app pages.

**Assignment**
- Objective: Build, document, and deploy the Next.js application to Vercel. Provide a clear README that explains how to run, build, and deploy the project, and include student identification information.

**Author**
- Name: Muhammad Awais Ishaq
- Enrollment: 01-131232-052

**Prerequisites**
- Node.js (v16+ recommended)
- npm (or yarn)
- A Vercel account (for deployment)

**Setup**
1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd my-lab8-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file: copy any required variables into `.env.local` at the project root. Example:

   ```text
# .env.local
# NEXT_PUBLIC_API_URL=https://api.example.com
   ```

**Available Scripts**
- `npm run dev` - Runs the app in development mode (http://localhost:3000).
- `npm run build` - Builds the app for production.
- `npm run start` - Runs the built app in production mode.
- `npm run lint` - Runs linter (if configured).

**Project Structure (high level)**
- `app/` - Next.js app routes and components (Root layout, pages).
- `public/` - Static assets.
- `package.json` - Project scripts and dependencies.
- `.env.local` - Local environment variables (not committed).

**Deployment (Vercel)**
1. Sign in to Vercel and import the Git repository.
2. Ensure the root is set to the repository root and framework is detected as `Next.js`.
3. Add any environment variables in the Vercel project settings (matching `.env.local`).
4. Deploy — Vercel will run `npm install` and `npm run build` automatically.

**Submission Checklist**
- README.md present with student details.
- App runs locally via `npm run dev`.
- Deployed URL (provide the live link in your submission after deployment).

**Notes**
- Do not commit secrets or `.env.local` to the repository.
- If you make additional changes, update this README with the deployed URL and short notes about implemented features.

If you want, I can also add the deployed URL or adjust wording for a specific grading rubric—tell me what to include.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
