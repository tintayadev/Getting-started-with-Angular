# Getting Started with Angular

Bienvenido a este taller introductorio de Angular, donde aprenderás los conceptos fundamentales para desarrollar aplicaciones web utilizando este poderoso framework. Durante el taller, construirás una aplicación funcional paso a paso. 

## Índice

1. [Introducción](#introducción)
2. [Configuración del Entorno](#configuración-del-entorno)
3. [Creando tu Primer Componente](#creando-tu-primer-componente)
4. [Manejo de Eventos](#manejo-de-eventos)
5. [Mostrar Resultados de Búsqueda](#mostrar-resultados-de-búsqueda)
6. [Filtrar Resultados de Búsqueda](#filtrar-resultados-de-búsqueda)
7. [Mostrar Detalles](#mostrar-detalles)
8. [Mejorara las Plantillas](#mejorar-las-plantillas)

---

## Introducción

Angular es un framework desarrollado por Google para construir aplicaciones web dinámicas y modernas. En este taller, exploraremos sus conceptos fundamentales y desarrollaremos una aplicación desde cero.

## Configuración del Entorno
### Qué aprenderás
- Cómo usar la CLI de Angular para crear un proyecto nuevo
- Cómo usar componentes de Angular para compilar una interfaz de usuario
- Cómo compartir datos en componentes y otras partes de una app
- Cómo usar controladores de eventos en Angular

### Requisitos Previos
Conocimientos básicos de HTML, CSS, TypeScript (o JavaScript), Git y la línea de comandos.

### Instalación
1. Verifica la version de Node JS con el comando `node --version`, en nuestro caso usaremos la version 18 (`nvm use node 18`, este comando nos ayuda a estar en la version deseada)
2. Instala Angular CLI con `npm install -g @angular/cli@18`, y una vez instalado revisa la version de Angular con el comando `ng version`
4. Crea un nuevo proyecto ingresando el comando `ng new Introduction_to_Angular`
5. Ahora ingresa `ng serve` para hacer correr tu proyecto creado

... Ahora si viene lo chido!

## Creando tu Primer Componente 
Angular utiliza componentes para estructurar sus aplicaciones, estos son reutilizables. Los componentes combinan HTML, CSS y lógica en TypeScript

### Preparación para crear un componente
1. Usa el comando `ng generate component character-list` o `ng g c character-list`
2. Integra el componente en el archivo de plantilla principal, para ello vamonos a `app.component.html` para agregar el header y la sección para integrar nuestro componente
   ```
   <header>
      <img src="../assets/logosantatracker.gif" class="logo-santa">
      Santa Tracker List
      <a href="https://santatracker.google.com/">
        <button class="jugar">Juega ahora</button>
      </a>
   </header>
   <section>
     <app-character-list></app-character-list>
   </section>
   ```
     > Nota: Tambien agregaremos los estilos y la tipografia
3. Ahora nos vamos a `character-list.component.html` y agregamos lo siguiente para crear el buscador de personajes de Santa Tracker
   ```
   <label for="character-search">Search for a new character</label>
   <input id="character-search" #search placeholder="Ex: Santa Clauss">
   <button>Search</button>
   ```
   > Nota: Aqui tambien agregaremos estilos CSS

## Manejo de Eventos

Los eventos permiten la interacción usuario-aplicación.

### Ejemplo práctico
1. Enlaza un botón con `(click)="nombreMetodo()"`.
2. Define el método en el archivo TypeScript.

## Mostrar Resultados de Búsqueda

Usa directivas como `*ngFor` para iterar datos.

### Ejemplo
Crea una lista dinámica que muestre resultados.

## Filtrar Resultados de Búsqueda

Aplica un filtro simple usando `ngModel` para enlazar un campo de búsqueda.

## Mostrar Detalles

Implementa rutas para navegar a vistas detalladas.

### Ejemplo práctico
Define una ruta con parámetros y enlázala a un componente detallado.

## Mejorar las Plantillas

Aplica estilos personalizados y mejora el diseño con Angular Material.

