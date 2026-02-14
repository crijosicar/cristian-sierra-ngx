# Cristian Sierra - Portfolio

A modern SvelteKit portfolio application with Docker support and Nginx Proxy Manager compatibility.

## Prerequisites

- Node.js 20 or higher (for local development)
- Docker and Docker Compose (for containerized deployment)
- Nginx Proxy Manager (optional, for reverse proxy setup)

## Environment Setup

1. Copy the environment sample file:

   ```bash
   cp .env.sample .env
   ```

2. Update the `.env` file with your configuration:
   - Set your EmailJS credentials
   - Configure API tokens and URLs
   - Update Turnstile keys
   - For Docker: Use `REDIS_HOST=redis` (service name)
   - For local dev: Use `REDIS_HOST=localhost`

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Docker Deployment

### Quick Start

1. Ensure you have a `.env` file configured (see Environment Setup above)

2. Make sure the Nginx Proxy Manager network exists:

   ```bash
   docker network create nginxproxymanager-network
   ```

3. Start all services:

   ```bash
   docker-compose up -d
   ```

4. Check service status:
   ```bash
   docker-compose ps
   ```

### Available Services

- **app**: SvelteKit application (port 3000)
- **redis**: Redis cache (port 6379)
- **mongodb**: MongoDB database (port 27017)

### Docker Commands

```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Rebuild after code changes
docker-compose up -d --build app

# Remove volumes (caution: deletes data)
docker-compose down -v
```

## Nginx Proxy Manager Setup

1. In Nginx Proxy Manager, create a new Proxy Host:
   - **Domain Names**: Your domain (e.g., `cristian-sierra.com`)
   - **Scheme**: `http`
   - **Forward Hostname/IP**: `cristian-sierra-app` (container name)
   - **Forward Port**: `3000`
   - **Cache Assets**: Enable
   - **Block Common Exploits**: Enable
   - **Websockets Support**: Enable

2. Configure SSL (SSL tab):
   - Request a new SSL certificate
   - Enable Force SSL
   - Enable HTTP/2 Support

3. The app service is already connected to the `nginxproxymanager-network`

## Building for Production (Non-Docker)

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `/src` - SvelteKit application source code
- `/static` - Static assets
- `/build` - Production build output
- `Dockerfile` - Multi-stage Docker build configuration
- `docker-compose.yml` - Service orchestration

## Configuration

All configuration is managed through environment variables. See `.env.sample` for available options.

Key variables:

- `PORT` - Application port (default: 3000)
- `NODE_ENV` - Environment mode (production/development)
- `REDIS_HOST` - Redis hostname (redis for Docker, localhost for local)
- `PUBLIC_APP_URL` - Public-facing application URL
