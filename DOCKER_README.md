# Docker Setup for kucli-nest

This project includes Docker configuration for easy development and deployment.

## Prerequisites

- Docker
- Docker Compose
- pnpm (for local development)

## Environment Setup

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` file with your configuration values.

## Docker Commands

### Development Mode
```bash
# Start development environment with hot reload
pnpm run docker:dev

# Or using docker-compose directly
docker-compose --profile dev up
```

### Production Mode
```bash
# Build and run production container
pnpm run docker:prod

# Or using docker-compose directly
docker-compose up -d
```

### Manual Docker Commands
```bash
# Build the Docker image
pnpm run docker:build

# Run the container
pnpm run docker:run

# Stop containers
pnpm run docker:down

# View logs
pnpm run docker:logs

# Clean up Docker resources
pnpm run docker:clean
```

## Environment Variables

The application uses the following environment variables:

- `NODE_ENV`: Environment (development, production, test)
- `PORT`: Application port (default: 3000)
- `HOST`: Application host (default: 0.0.0.0)
- `LOG_LEVEL`: Logging level (default: info)
- `CORS_ORIGIN`: CORS origin (default: http://localhost:3000)
- `API_PREFIX`: API prefix (default: api)
- `API_VERSION`: API version (default: v1)

## Health Check

The application includes a health check endpoint at `/health` that returns:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Docker Compose Services

### Production Service (`app`)
- Uses multi-stage build for optimized production image
- Runs on port 3000
- Includes health checks
- Uses production environment variables

### Development Service (`app-dev`)
- Uses development build with hot reload
- Mounts source code for live updates
- Uses development environment variables
- Accessible via `--profile dev` flag

## File Structure

```
kucli-nest/
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Docker Compose configuration
├── .dockerignore          # Files to exclude from Docker build
├── healthcheck.js         # Health check script
├── env.example            # Example environment variables
├── src/
│   ├── config/            # Configuration module
│   │   ├── config.module.ts
│   │   └── config.service.ts
│   └── ...
└── ...
```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, modify the port mapping in `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Map host port 3001 to container port 3000
```

### Permission Issues
If you encounter permission issues, ensure your user is in the docker group:
```bash
sudo usermod -aG docker $USER
```

### Clean Build
For a completely fresh build:
```bash
docker-compose down
docker system prune -f
docker-compose build --no-cache
``` 