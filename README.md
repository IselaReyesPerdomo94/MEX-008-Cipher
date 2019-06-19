# The Snitch

## Presentación:
The Snitch nació por la necesidad de mandar textos con información
confidencial o bien, para codificar mensajes que no deben ser leídos en toda la oficina.
Si tu empresa maneja información privada o simplemente deseas mandar una nota a
un compañero, The Snitch es la web indicada para ti.

![](https://github.com/IselaReyesPerdomo94/MEX-008-Cipher/blob/master/img/TheSnitch.gif)

## ¿Cómo funciona?
The Snitch utiliza el cifrado César, conocido por ser uno de los primeros sistemas de cifrado, utilizando el abecedario y
cifrado por sustitución. Es decir, se elige un número de desplazamiento por el cual se sustituirá la letra original con la
letra con desplazamiento.

Por ejemplo: HOLA, con un desplazamiento de 1, tendría como resultado IPMB. La letra H se sustituye por la letra I, que es la siguiente en el orden del abecedario.

El usuario debe elegir si desea cifrar algún texto o descifrar uno.
* Si decide cifrar:
    - Debe dar click en el botón de cifrar.
    - Elegir un número (offset), el cual es el que dictamina el desplazamiento.
    - Ingresar su texto a cifrar.
    - Dar click en el botón con forma de candado.
    - Y listo, aparecerá su mensaje en la parte de abajo.
    - Si desea volver a cifrar, solo debe dar click en borrar, para rellenar los campos.
* Si decide descifrar:
    - Debe dar click en el botón de descifrar.
    - Ingresar el número de desplazamiento (mismo que debe ser proporcionado por la persona que mando el mensaje).
    - Ingresar el texto a descifrar.
    - Y listo, aparecerá su mensaje descifrado en la parte de abajo.
    - Si desea volver a descifrar, solo debe dar click en borrar, para introducir el nuevo offset y texto.

### ¿Cómo se llegó a dicha idea?
Se le preguntó a 12 personas diferentes, 10 mujeres y 2 hombres de entre 20 y 30
años de edad para que utilizarían una página web que cifre y descifre textos.
Se concluyó que utilizarían ese servicio dentro de las empresas, ya sea para mandar
información delicada, o bien, mantener conversaciones privadas con sus compañeros de trabajo.

### Explicación de colores:
Negro: Para denotar elegancia, formalidad y autoridad.
Blanco: Limpieza y la nada (finalmente es la ausencia de un mensaje fácil de comprender).
Azul: Para denotar seguridad y anonimato.
Se utilizó una gama de colores amarillo y verde claros para diferenciar las secciones de cifrar y descifrar.

### Definición del usuario:
El usuario de The Snitch es un joven adulto (hombre o mujer) entre 20 y 30 años que trabaja en oficina, tiene acceso a computadora y a un sistema de mensajería o correo electrónico ya sea privado o público que necesita mantenerse en comunicación con sus compañeros de trabajo.

Entre sus actividades debe compartir información delicada que sería un problema si la persona equivocada llegará a dicha data. O bien, una persona que disfruta enviar chascarrillos a sus pares. Generalmente después de trabajar es usual que salga a comer o beber con sus compañeros de trabajo.

Su experiencia laboral puede ser menor a un año.

### Perfil de usuario:
Hombre o mujer entre 20 a 40 años (90 % mujeres)
Trabajo: administrativos, directivos, empleados con acceso a computadora el 100 % del tiempo.
Trabaja de 8 a 10 horas diarias.
Su educación es carrera técnica o universitaria.
Tecnología: acceso a computadora y experiencia de uso moderado, buena velocidad de internet.
Estatus civil: casad@ o solter@.

## Necesidades técnicas

Este proyecto se realizó con HTML, JavaScript y CSS.

### ¿Cómo ejecutar este proyecto?
Solo necesitas un navegador y dar click en el siguiente link:
https://iselareyesperdomo94.github.io/MEX-008-Cipher/src/index.html

### ¿Cómo puedo descargar, instalar y ejecutar este proyecto?
- Necesitas forkear este repositorio y clonarlo en tu computadora.
- Tener un editor de texto.
- Instalar Node.js y la librería de Mocha.
* Para ejecutar los test, debes correr en tu terminal npm run test.

### Modelo de Negocio

Este proyecto o producto podría ser ofertado para diferentes empresas, en las cuales se les permitiría el acceso por medio de una suscripción. Dicho producto solo podría ser utilizado por los trabajadores de la empresa. O bien, podría ser una aplicación gratuita, 
en la que cualquier persona podría utilizarla teniendo el link, pero, se ofertarían espacios publicitarios. Personalmente, optaría por la primer opción dado que es más seguro, más rápido y secreto. 
