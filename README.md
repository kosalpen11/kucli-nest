# kucli-nest

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[![NestJS](https://img.shields.io/badge/NestJS-9.0.0-red.svg)](https://nestjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18.11.18-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.7.4-blue.svg)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![pnpm](https://img.shields.io/badge/pnpm-Package%20Manager-orange.svg)](https://pnpm.io/)

A modern, scalable NestJS application with Docker support, Kubernetes configuration, and comprehensive development tooling.

## 🚀 Features

- **NestJS Framework**: Progressive Node.js framework for building efficient server-side applications
- **TypeScript**: Full TypeScript support with strict type checking
- **Docker Support**: Complete Docker and Docker Compose setup for development and production
- **Kubernetes Ready**: K8s manifests for container orchestration
- **Environment Configuration**: Flexible configuration management with environment variables
- **Health Checks**: Built-in health check endpoints
- **Testing**: Unit and E2E testing with Jest
- **Code Quality**: ESLint and Prettier for code formatting and linting
- **Hot Reload**: Development mode with automatic reloading

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm
- [Docker](https://www.docker.com/) (optional, for containerized development)
- [Docker Compose](https://docs.docker.com/compose/) (optional)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kucli-nest
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration values
   ```

## 🏃‍♂️ Running the Application

### Local Development

```bash
# Development mode with hot reload
pnpm run start:dev

# Production mode
pnpm run start:prod

# Debug mode
pnpm run start:debug
```

### Docker Development

```bash
# Start development environment with hot reload
pnpm run docker:dev

# Build and run production container
pnpm run docker:prod

# View logs
pnpm run docker:logs

# Stop containers
pnpm run docker:down
```

### Manual Docker Commands

```bash
# Build the Docker image
pnpm run docker:build

# Run the container
pnpm run docker:run

# Clean up Docker resources
pnpm run docker:clean
```

## 🧪 Testing

```bash
# Unit tests
pnpm run test

# Unit tests in watch mode
pnpm run test:watch

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov

# Debug tests
pnpm run test:debug
```

## 🔧 Development Tools

```bash
# Code formatting
pnpm run format

# Linting with auto-fix
pnpm run lint

# Build the application
pnpm run build
```

## 🌍 Environment Variables

The application uses the following environment variables (see `env.example`):

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development, production, test) | `development` |
| `PORT` | Application port | `3000` |
| `HOST` | Application host | `0.0.0.0` |
| `LOG_LEVEL` | Logging level | `info` |
| `CORS_ORIGIN` | CORS origin | `http://localhost:3000` |
| `API_PREFIX` | API prefix | `api` |
| `API_VERSION` | API version | `v1` |

## 🏥 Health Check

The application includes a health check endpoint:

```bash
GET /health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🐳 Docker Configuration

This project includes comprehensive Docker support:

- **Multi-stage builds** for optimized production images
- **Development mode** with hot reload and volume mounting
- **Health checks** for container orchestration
- **Environment-specific configurations**

For detailed Docker documentation, see [DOCKER_README.md](./DOCKER_README.md).

## ☸️ Kubernetes Deployment

Kubernetes manifests are available in the `k8s/` directory:

- `deployment.yaml` - Application deployment
- `service.yaml` - Service configuration
- `ingress.yaml` - Ingress rules
- `configmap.yaml` - Configuration management

## 📁 Project Structure

```
kucli-nest/
├── src/
│   ├── config/           # Configuration module
│   │   ├── config.module.ts
│   │   └── config.service.ts
│   ├── app.controller.ts # Main application controller
│   ├── app.service.ts    # Main application service
│   ├── app.module.ts     # Root application module
│   └── main.ts          # Application entry point
├── test/                # E2E tests
├── k8s/                 # Kubernetes manifests
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose configuration
├── healthcheck.js       # Health check script
├── env.example          # Example environment variables
└── README.md           # This file
```

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `start` | Start the application |
| `start:dev` | Start in development mode with hot reload |
| `start:debug` | Start in debug mode |
| `start:prod` | Start in production mode |
| `build` | Build the application |
| `test` | Run unit tests |
| `test:watch` | Run tests in watch mode |
| `test:e2e` | Run E2E tests |
| `test:cov` | Run tests with coverage |
| `lint` | Run ESLint with auto-fix |
| `format` | Format code with Prettier |
| `docker:build` | Build Docker image |
| `docker:run` | Run Docker container |
| `docker:dev` | Start development environment |
| `docker:prod` | Start production environment |
| `docker:down` | Stop Docker containers |
| `docker:logs` | View Docker logs |
| `docker:clean` | Clean Docker resources |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [NestJS Documentation](https://docs.nestjs.com/)
- **Community**: [NestJS Discord](https://discord.gg/G7Qnnhy)
- **Issues**: Create an issue in this repository

## 🔗 Links

- [NestJS Framework](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [pnpm](https://pnpm.io/)
