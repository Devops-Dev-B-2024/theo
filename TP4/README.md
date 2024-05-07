# Pipeline CI/CD

Ce projet utilise une pipeline CI/CD pour automatiser les processus d'analyse, de construction, de linting et de test. Voici une description de chaque étape :

## Analyse

L'analyse est déclenchée lors d'un push ou d'une pull request sur la branche main. Elle utilise Node.js et npm pour effectuer une analyse d'audit sur le projet.

## Build

La construction est également déclenchée lors d'un push ou d'une pull request sur la branche main. Elle utilise Docker pour construire une image du projet.

## Lint

Le linting est effectué avec EsLint et est déclenché lors d'un push ou d'une pull request sur la branche main.

## Test

Les tests sont exécutés avec npm et sont déclenchés lors d'un push ou d'une pull request sur la branche main.
