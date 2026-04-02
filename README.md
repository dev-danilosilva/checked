# checked. — Landing Page

Marketing landing page for **checked**, a privacy-first checklist app. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Exports as a fully static site.

## Stack

- **Next.js 15** (static export)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build and export static site to `out/` |
| `npm start` | Serve the production build |

## Environment variables

Create a `.env.local` file at the root:

```env
# Endpoint for the early access email form (Formspree, Mailchimp, Loops, etc.)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<YOUR_ID>
```

If `NEXT_PUBLIC_FORM_ENDPOINT` is not set, form submissions are silently skipped (useful during development).

## Internationalization

The site supports **English**, **Portuguese**, and **Spanish**. All copy lives in `app/i18n/translations.ts`. Users can switch languages via the nav or footer.

To add a new language:

1. Add a new locale key to the `Language` type in `translations.ts`.
2. Create a translations object for that locale.
3. Register it in the `translations` record.
4. Add the language code to the `langs` array in `Nav` and `Footer` (`app/page.tsx`).

## Project structure

```
app/
  components/
    EarlyAccessForm.tsx   # Email capture form
  i18n/
    LanguageContext.tsx   # React context + hook for translations
    translations.ts       # All copy in EN / PT / ES
  globals.css             # Global styles and Tailwind base
  layout.tsx              # Root layout
  page.tsx                # Full page (Hero, HowItWorks, Features, EarlyAccess, Footer)
```

## Deployment

The project is configured for static export (`output: 'export'` in `next.config.ts`). After `npm run build`, deploy the `out/` directory to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).
