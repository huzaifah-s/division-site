# Division AI Website

Self-hosted Webstudio project using React Router.

## Setup

```bash
npm install
```

## Syncing Changes from Webstudio Cloud

When you make changes in Webstudio Cloud and want to sync them locally:

```bash
# 1. Link your project (first time only, or when re-linking)
npx webstudio link

# 2. Sync changes from cloud
npx webstudio sync

# 3. Regenerate route files
npx webstudio build --template react-router

# 4. Restore the image handler (required after build)
git restore 'app/routes/[_image].$.ts'

# 5. Clear cache and restart dev server
rm -rf .react-router
npm run dev
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Important Notes

- Always publish changes in Webstudio Cloud before running `npx webstudio sync`
- The `webstudio build` command regenerates route files but deletes the image handler
- You must restore `app/routes/[_image].$.ts` after each build to keep images working
- Clear `.react-router` cache if changes don't appear after syncing

## URLs

- Local dev: http://localhost:5173/
- Production: http://localhost:3000/ (when using `npm start`)
