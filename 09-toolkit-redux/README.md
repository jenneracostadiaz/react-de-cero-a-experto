# Redux
Es una forma de controlar donde se encuentra la información de mi aplicación en todo momento.

No es propio de React, es una forma de mantener el estado de la aplicación.

## Store
Ahí es donde está la información que mis componentes consumirán

## Reducer
Es una función que maneja un estado, el estado le va a servir información a la vista para que muestre la info deseada, pero no modifica el state, solo esta en modo lectura, cuando se encesita hacer una modificación, se ca a generar un Action, ese Action se va a enviar al Reducer y él sabrá que hacer (agregar, borrar, actualizar). El reducer va a generar un nuevo estado y se lo va a notificar a la vista.

## Proceso de Redux
Siempre vamos a tener un State, que va a ser proveido por el store,  genera la vista, muestra la información, pero si generamos una modificación, se va a diparar un Action, ese Action, no va a ser enviado directamente al Store, sino cae en un Dispacher, recibe dicho Action, no analiza y lo va a enviar a un Reducer especial, ese reducer es una combinación de todos los reducers que hay en mi aplicación y genera un nuevo State.

Este proceso solo va a funcionar si el proceso es sincrono que todo se ejecuta de manera casi instantanea.

Si necesitamos un Action asincrono, no va a enviar a un Middlewares, este va a recibir la tareja, va a ejecutar, va a llamar el API lo procesa lo enviar l Reducer correspondientes y lo envia al State.

## Implementación
Creamos nuestra APP React y creamos un carpeta: /store/store.js
ahí insertamos el siguiente codigo:
~~~
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
~~~