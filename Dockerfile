# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Define the argument that Docker expects during the build
ARG PUBLIC_TURNSTILE_SITE_KEY
ARG N8N_API_URL
ARG N8N_API_USER
ARG N8N_API_PASSWORD
# Expose it to the environment so Vite/SvelteKit can read it
ENV PUBLIC_TURNSTILE_SITE_KEY=$PUBLIC_TURNSTILE_SITE_KEY
ENV TURNSTILE_SECRET_KEY=$TURNSTILE_SECRET_KEY
ENV N8N_API_URL=$N8N_API_URL
ENV N8N_API_USER=$N8N_API_USER
ENV N8N_API_PASSWORD=$N8N_API_PASSWORD
ENV API_URL=$API_URL
ENV API_TOKEN=$API_TOKEN

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev && npm cache clean --force

# Copy built application from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["node", "build"]