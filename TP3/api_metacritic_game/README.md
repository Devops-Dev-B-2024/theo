## Table of content

[Dockerfile](#dockerfile)
[Docker Compose](#docker-compose)
[How to use](#utilisation)
[Volumes](#volumes)
[Network](#network)
[Questions / Réponses](#questions)


## Dockerfile

Le Dockerfile est un fichier texte qui contient toutes les commandes, dans l'ordre, nécessaires pour construire une image Docker donnée. Dans ce projet, le Dockerfile est utilisé pour construire l'image pour notre service API.

## docker-compose

Le fichier `docker-compose.yml` est un fichier YAML qui définit les services, les réseaux et les volumes pour une application Docker. Dans ce projet, il définit trois services : `db` (une base de données MySQL), `phpmyadmin` (un outil d'administration de base de données) et `api` (notre service API).

## Utilisation

Pour utiliser Docker et Docker Compose dans ce projet, vous devez d'abord installer Docker Desktop sur votre machine. Une fois que vous avez fait cela, vous pouvez construire et démarrer les services en utilisant la commande suivante à partir de la racine du projet :

```bash
docker-compose up --build
```

Cela construira les images pour les services si nécessaire, puis démarrera les services. Vous pouvez accéder à l'API sur `localhost:3000`, et à phpMyAdmin sur `localhost:8080`.

Pour arrêter les services, vous pouvez utiliser la commande suivante :

```bash
docker-compose down
```

## Volumes

Le service `db` utilise un volume Docker pour stocker les données de la base de données. Cela signifie que les données resteront disponibles même après que le service a été arrêté et redémarré. Le volume est nommé `db_data` et est défini dans la section `volumes` du fichier `docker-compose.yml`.

## Network

Le service `api` est lié au service `db` sous le nom `metaCritic` grace a un network. Cela signifie que l'API peut se connecter à la base de données en utilisant `metaCritic` comme nom d'hôte.

theoMANEVIT31: dockerfile : # Utilisez une image de base Node.js
FROM node:latest

## Questions

- 1
    - Error: Port already in use.
- 2
    - a
        - --production
    - b
        - Ne pas installer les dependances de dev tel que celle de, linting, debug, compilation, test, ...
- 3
    - docker scout
- 4
    - Puisqu'aucun `network` n'etait mis en place.
