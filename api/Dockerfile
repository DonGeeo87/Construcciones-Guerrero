FROM node:22-alpine AS runner
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY api/ ./api/
EXPOSE 3026
CMD ["npx", "tsx", "api/server.ts"]
