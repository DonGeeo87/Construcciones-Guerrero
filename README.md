# Construcciones Guerrero

Sitio web de Construcciones Guerrero, empresa de construcción.

## Stack
- Frontend: HTML/JS (Vite) + Docker
- Backend: API (carpeta `api/`)
- Deploy: VPS vía Docker Compose + GitHub Actions

## Estructura
```
api/            API backend
assets/         Recursos estáticos
dist/           Build de producción
docker-compose.yml
Dockerfile
```

## Desarrollo
```bash
docker compose up -d       # Levantar api + web
```

## Despliegue
Pipeline de GitHub Actions a VPS. Ver `GUIA-CONEXION-VPS-DEPLOY.md`.
