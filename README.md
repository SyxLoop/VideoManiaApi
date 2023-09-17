# VideoManiaApi
Esta es la API de VideoMania.

## Descripción:
Esta es una API en la cual se hace el manejo de usuarios, suscripciones, lista de peliculas y lista de reproduccion.

## Para ejecutar el proyecto, deben verificar la instalacion de las dependencias, de no tenerlas seguir los siguientes comandos:
1. Instale las dependencias;
    - `npm install` (Instalará todas las librerias necesarias de Node JS).

> [!NOTE]
> Si se generan problemas respecto al `package.json`, ejecuta el comando `npm init`.

2. Inicie la aplicación:
    - `npm run dev`.

Recuerde verificar el `package.json` (escriba los parametros de no aparecer):
* Verificar qe esté `"main": "index.js"`.
* Debe mostrar `"type": "module"`.
* En "scripts" debe aparecer `"dev": "nodemon src/index.js"`.

## Dependencias:
Este proyecto depende de las siguientes bibliotecas o modulos:

* express (Instalación: `npm i express`).
* Nodemon (Instalación: `npm i nodemon`).
* Mysql2 (Instalación: `npm i mysql2`).
* Bcrypt (Instalación: `npm i bcrypt`).

