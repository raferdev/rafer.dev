FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
ENV WEB_SERVER_URL="http://server_nginx:80"
RUN corepack enable

WORKDIR /app

COPY /../package.json /../pnpm-lock.yaml /app

FROM base AS deps

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install playwright

FROM base as runner

COPY --from=deps /app/node_modules /app/node_modules
COPY ../tests /app/tests
COPY /../playwright.config.ts /app
RUN pnpm exec playwright install

EXPOSE 3000

CMD [ "pnpm", "run", "test.playwright" ]