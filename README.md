# espacios_academicos_crud
Repositorio para el manejo de los espacios académicos del sistema de gestión académica (SGA)  

API CRUD desarrollada en NestJS para la gestión de base de datos no relacional (MongoDB). 

# Especificaciones Técnicas

## Tecnologías Implementadas y Versiones

* [NestJS](https://github.com/nestjs/nest)
* [MongoDB](https://github.com/mongodb/mongo)

**Entorno Local:** NodeJS Version: v16.5.0 | NPM Version: 7.19.1 | Nest CLI Version: 8.2.0 | MongoDB version: v5.0.6

## Variables de Entorno

```shell
USER: process.env.ESPACIOS_ACADEMICOS_CRUD_USER,
PASS: process.env.ESPACIOS_ACADEMICOS_CRUD_PASS,
HOST: process.env.ESPACIOS_ACADEMICOS_CRUD_HOST,
PORT: process.env.ESPACIOS_ACADEMICOS_CRUD_PORT,
DB: process.env.ESPACIOS_ACADEMICOS_CRUD_DB,
HTTP_PORT: process.env.ESPACIOS_ACADEMICOS_CRUD_HTTP_PORT,
AUTH_DB: process.env.ESPACIOS_ACADEMICOS_CRUD_AUTH_DB 
```
**Nota:** Las variables se pueden encontrar en el fichero _src/config/configuration.ts_ y están identificadas con **ESPACIOS_ACADEMICOS_CRUD_**

## Ejecución del Proyecto

```shell
#1. Clonar el repositorio
git clone git@github.com:udistrital/espacios_academicos_crud.git #Opcion 1: Via SSH
git clone https://github.com/udistrital/espacios_academicos_crud.git #Opcion 2: Via HTTPS

#2. Moverse a la carpeta del repositorio
cd espacios_academicos_crud

#3. Moverse a la rama **develop**
git pull origin develop && git checkout develop

#4. Instalar dependencias
npm install
# Si no se instalan en su totalidad, ejecutar:
npm install --save @nestjs/mongoose mongoose
npm install --save @nestjs/swagger swagger-ui-express

#5. Alimentar todas las variables de entorno que utiliza el proyecto.
ESPACIOS_ACADEMICOS_CRUD_HTTP_PORT=3000 ...
```

## Ejecución Pruebas

Pruebas unitarias

```shell
# En proceso...
```

# Estado CI

| Develop | Relese 0.0.1 | Master |
| -- | -- | -- |
| [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/espacios_academicos_crud/status.svg?ref=refs/heads/develop)](https://hubci.portaloas.udistrital.edu.co/udistrital/espacios_academicos_crud) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/espacios_academicos_crud/status.svg?ref=refs/heads/release/0.0.1)](https://hubci.portaloas.udistrital.edu.co/udistrital/espacios_academicos_crud) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/espacios_academicos_crud/status.svg)](https://hubci.portaloas.udistrital.edu.co/udistrital/espacios_academicos_crud) |

# Modelo de Datos

![Modelo de datos Espacios academicos](/database/espacios_academicos_v6.png)

# Licencia

This file is part of espacios_academicos_crud.

espacios_academicos_crud is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

espacios_academicos_crud is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with novedades_crud. If not, see https://www.gnu.org/licenses/.
