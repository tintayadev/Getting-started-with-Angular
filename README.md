# Getting Started with Angular

Bienvenido a este taller introductorio de Angular, donde aprenderás los conceptos fundamentales para desarrollar aplicaciones web utilizando este poderoso framework. Durante el taller, construirás una aplicación funcional paso a paso. 

## Índice

1. [Introducción](#introducción)
2. [Configuración del Entorno](#configuración-del-entorno)
3. [Crea tu Primer Componente](#crea-tu-primer-componente)
4. [Manejo de Eventos](#manejo-de-eventos)
5. [Mostrar Resultados de Búsqueda](#mostrar-resultados-de-búsqueda)
6. [Filtrar Resultados de Búsqueda](#filtrar-resultados-de-búsqueda)
7. [Mostrar Detalles](#mostrar-detalles)
8. [Mejorara las Plantillas](#mejorar-las-plantillas)

---

## Introducción

Angular es un framework desarrollado por Google para construir aplicaciones web dinámicas y modernas. En este taller, exploraremos sus conceptos fundamentales y desarrollaremos una aplicación desde cero.

## Configuración del Entorno

### Requisitos Previos
- Node.js y npm instalados.
- Angular CLI.

### Instalación
1. Instala Angular CLI: `npm install -g @angular/cli`
2. Crea un nuevo proyecto: `ng new my-angular-app`

## Crea tu Primer Componente

Angular utiliza componentes para estructurar sus aplicaciones. Los componentes combinan HTML, CSS y lógica en TypeScript.

### Crear un componente
1. Usa el comando: `ng generate component nombre-del-componente`.
2. Integra el componente en el archivo de plantilla principal.

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

