# nhl-fanteasy

Monorepo for Angular web app, Express API, and Python ranker service focused on Yahoo Fantasy NHL.

## Structure

- `web`: Angular app (SSR) to connect Yahoo league and display rankings/suggestions
- `api`: Express API for Yahoo OAuth2 and data endpoints
- `shared-domain`: Shared TypeScript models used by `web` and `api`
- `python/ranker`: Python package for custom rankings and AI suggestions

## Getting Started

1. Copy `.env.example` to `.env` and fill in Yahoo credentials.
2. Install Node deps: `npm install --legacy-peer-deps`
3. Start API: `npm run serve:api`
4. In another terminal, start Web: `npm run serve:web`

Optional Python setup:
```bash
cd python
python3 -m venv .venv
source .venv/bin/activate
pip install -e ranker
```

## Scripts

- `npm run serve:web`
- `npm run serve:api`
- `npm run build:web`
- `npm run build:api`

## Notes

- Web dev server proxies `/api` to the API on port 3333.
- Yahoo OAuth endpoints are scaffolded but not implemented yet.
