
# Docker TP 2

## 4.

### a)

Dockerfile : 
```yaml
FROM node:20-alpine

WORKDIR /api

COPY . .

RUN rm -rf node_modules

RUN npm install --omit=dev
ENV PORT 3000
EXPOSE 3000
CMD ["node", "server.js"]
```

Création : 
```yaml
docker build . -t nodejsapi
```

### b)
connexion :
```yaml
docker run -d -p "3000:3000" --name nodejs_api nodejsapi   
```

### c) 