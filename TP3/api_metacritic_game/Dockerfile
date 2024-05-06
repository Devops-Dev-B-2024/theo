# Utilisez une image de base Node.js
FROM node:latest

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez le fichier package.json dans le conteneur
COPY package*.json ./

# Installez les dépendances NPM
RUN npm install

# Copiez le reste des fichiers du répertoire actuel dans le conteneur
COPY . .

# Copiez le script wait-for-it.sh dans le conteneur
COPY wait-for-it.sh /usr/wait-for-it.sh

# Rendez le script wait-for-it.sh exécutable
RUN chmod +x /usr/wait-for-it.sh

# Exposez le port 3000 pour que votre application soit accessible
EXPOSE 3000

# Utilisez le script wait-for-it.sh pour attendre que la base de données soit prête avant de démarrer votre application
CMD /usr/wait-for-it.sh db:3306 -- node server.js


# Requête de mis en place dans docker (avoir lancé Docker au préalable) : docker compose up --build -d