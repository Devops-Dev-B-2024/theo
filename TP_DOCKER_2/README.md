
# Docker TP 2

## Question 3 :

### a)
```yaml
docker pull httpd
```

### b)
```yaml
docker images
```
### d)

requete exécuté dans le dossier du fichier index.html
```yaml
docker run -d -p 8080:80 -v .:/usr/local/apache2/htdocs/ --name helloworld httpd
```


### e)
```yaml
docker rm helloworld (--force)
```

### f)
```yaml
docker run -d -p 8080:80 --name helloworld httpd 

docker cp index.html helloworld:/usr/local/apache2/htdocs/
```


## Question 4 :

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

### Utilisation d'un Dockerfile :

#### Avantages :

1. **Reproductibilité :** Un Dockerfile permet de définir précisément l'environnement de votre application, ce qui rend le déploiement reproductible et prévisible sur différentes machines ou environnements.
2. **Personnalisation :** Vous pouvez configurer votre environnement d'exécution selon vos besoins spécifiques en ajoutant des dépendances, des paramètres de configuration, etc.
3. **Versionnement :** Vous pouvez versionner votre Dockerfile avec votre code source pour garder une trace des modifications apportées à votre environnement d'exécution.
4. **Automatisation :** Les Dockerfiles peuvent être utilisés dans des pipelines CI/CD pour automatiser le processus de construction et de déploiement.

#### Inconvénients :

1. **Maintenance :** Les Dockerfiles nécessitent une certaine maintenance pour s'assurer qu'ils restent à jour avec les nouvelles dépendances, correctifs de sécurité, etc.
2. **Complexité :** Pour des projets simples, l'utilisation d'un Dockerfile peut sembler être une surcharge de complexité inutile.

### Utilisation d'une commande `docker run` avec un volume monté :

#### Avantages :

1. **Simplicité :** La création d'un conteneur avec une commande `docker run` est simple et rapide, ce qui peut être utile pour des tests rapides ou des cas d'utilisation temporaires.
2. **Flexibilité :** Vous pouvez facilement modifier le comportement du conteneur en modifiant simplement la commande `docker run`, sans avoir à modifier un fichier Dockerfile.
3. **Pas de gestion de fichier supplémentaire :** Vous n'avez pas besoin de maintenir un fichier Dockerfile supplémentaire.

#### Inconvénients :

1. **Moins reproductible :** Chaque fois que vous exécutez une nouvelle commande `docker run`, vous pouvez obtenir un environnement légèrement différent, ce qui peut entraîner des problèmes de reproductibilité.
2. **Moins contrôlé :** Vous avez moins de contrôle sur l'environnement du conteneur, ce qui peut rendre plus difficile la gestion des dépendances et des configurations.
3. **Difficile à partager :** Il peut être difficile de partager et de reproduire un environnement de conteneur spécifique utilisant uniquement une commande `docker run`.

En résumé, l'utilisation d'un Dockerfile est généralement recommandée pour des projets plus complexes ou pour des déploiements en production, où la reproductibilité et le contrôle de l'environnement sont importants. Cependant, pour des cas d'utilisation plus simples ou temporaires, l'utilisation d'une commande `docker run` avec un volume monté peut être plus pratique.


## Question 5 :

### a)

```yaml
docker pull mysql     
docker pull phpmyadmin
```

