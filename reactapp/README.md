# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Se debe crear una base de datos en mysql.
Nombre recomendado: database_app

Las credenciales de acceso se deberan modificar en el archivo db.js, ubicado en la carpeta "database" dentro
del proyecto "node". Cabe resaltar que dichas credencianles son únicas en cada motor de mysql.
Usuario por defecto: root
Contraseña: 


Seguidamente se deberá crear una tabla llamada contacts en dentro de la base de datos database_app. A continuación se muestra la setencia que se deberá ejecutar en el script.

CREATE TABLE `new_schema`.`contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `cell_phone_number` VARCHAR(45) NOT NULL,
  `landline` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`));


En el directorio del proyecto (node),  ejecutar lo siguiente:

### `npm install`
### `node app.js`

En el directorio del proyecto (reactfront), ejecutar lo siguiente:

### `npm install`
### `npm start`


