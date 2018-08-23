# Progressus
Este proyecto tendrá las siguientes tecnologías:
1 - Lerna, para manejar diferentes paquetes y que estos se puedan compartir, debido a que habrán componentes que se reutilizarán para el admin del usuario y el del médico, se utilizará esta tecnología para escribir un solo paquete y reutilizarlo
2 - Next, es un framework sobre React para crear aplicaciones renderizadas desde el servidor, pero tiene la ventaja de que si se quiere un servicio estático se puede hacer al igual que habilita el enrutamiento más fácil.
3 - React, Redux y firebase por su puesto.
4 - Material UI, es una librería de diseño para usar el patrón de diseño de Meterial design.

## Estructura
La estructura del proyecto será una estructura monorepo
```
/
  package.json
  packages/
    doctor/
      __test__/
      pages/
      components/
      redux/
      src/
      static/
      package.json
      next.config.js
    user/
      __test__/
      pages/
      components/
      redux/
      src/
      static/
      package.json
      next.config.js
    core/
      __test__/
      components/
      utils/
      package.json
```
