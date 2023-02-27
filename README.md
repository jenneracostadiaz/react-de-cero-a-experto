# React: De cero a experto

React es una librería que nos permite crear aplicaciones, React es predecible, fluye en una sola vía

## Instalaciones Necesarias

- [Google Chrome](https://www.google.com/chrome/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)
- [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/downloads/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass)
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/es/)


## Componentes
Pequeñas piezas de código encapsuladas, que peude tener estado o no, pueden tener estado o no, sólo vamos a ver más adelante y de esa manera podemos romper una aplicación que sea bastante compleja en pequeños componentes o en pequeñas piezas sencillas y fáciles de mantener, que permitan mantener el código limpio y sencillo.

## Instalación

### Por CDN
Insertamos antes de cerrar la etiqueda `</head>`

~~~
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
~~~

### Vite
Instlamos Yarn [Go to WebSite](https://vitejs.dev/)

~~~
npm install -g yarn
~~~

Ejecutamos el siguiente comando

~~~
yarn create vite
~~~

Agregamos el nombre del proyecto, seleccionamos react y la tecnologia a usar, en este caso Javascript.

Ejecutamos el siguiente comando, para que instalen las dependencias que se encuentran en ese proyecto

~~~
yarn
~~~

Para inicializar escribimos el comando:

~~~ 
yarn dev
~~~

