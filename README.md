# E-commerse - Tienda de Nutrición

El siguiente es un proyecto e-commerse básado en una tienda de alimentos saludables de venta por peso (100gr x unidad) realizada con la libreria de: [React JS](https://es.reactjs.org/). y alojada a través de Git Hub Pages con el siguiente link: [Tienda de Nutrición](https://jaromyrkrykewych.github.io/).

## Dependencias

En este proyecto se utilizaron las siguientes dependencias de trabajo:

-[React Router Dom](https://reactrouter.com/en/main): Dependencia usada para el manejo de rutas y navegación dentro de la aplicación web
-[React Spinners](https://www.npmjs.com/package/react-spinners): Dependencia que ofrece componentes de carga para implementar cada vez que hacemos una llamada a un servidor externo mediante una promesa.
-[Unicons Iconscout](https://iconscout.com/unicons): Libreria de iconos que se pueden importar como componentes.

~~~
"dependencies": {
    "@iconscout/react-unicons": "^1.1.6",
    "firebase": "^9.15.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.4",
    "react-spinners": "^0.13.7",
  },
~~~

## Dependencias de desarrollo

-[GitHub Pages](https://pages.github.com/): Como hemos comentado alojamos la aplicación web con GitHub Pages instalando la dependencia, agregando nuestro repositorio de GitHub en el package.json *"homepage": "https://JaromyrKrykewych.github.io/react-js-ecommerce-krykewych"* y agregando los siguientes scripts en el documento:

~~~
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
~~~

## Estructura de nuestra aplicación web

