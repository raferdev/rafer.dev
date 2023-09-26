FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat
RUN npm i -g pnpm@8.7.6

FROM base AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

CMD ["cp","-fr","out","build"]