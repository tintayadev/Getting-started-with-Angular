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

La app tiene un campo de entrada y un botón, pero le falta la interacción. Por lo general, en la Web interactúas con los controles y, además, invocas el uso de eventos y controladores de eventos. Usarás esta estrategia para compilar tu app.

Se realizarán cambios en `character-list.component.html` y agregaremos un método  `searchCharacters()` en `character-list.compoment,ts`
1. Ahora nos vamos al archivo `character-list.compoment,ts` y creamos el método  `searchCharacters()` de la siguiente forma
```
searchCharacters(searchText: string) {
    console.log(searchText);
}
```
2. Una vez realizado lo anterior nos vamos a `character-list.component.html` y editaremos el codigo de la siguiente forma
```
<button (click)="searchCharacters(search.value)">Search</button>
```


### Ejemplo práctico
1. Enlaza un botón con `(click)="nombreMetodo()"`.
2. Define el método en el archivo TypeScript.


## Mostrar Resultados de Búsqueda

El siguiente paso es mostrar resultados basados en la entrada del usuario. Cada ubicación tiene las siguientes propiedades:

- **name** (string): "Papá Noel"
- **description** (string): "El alegre repartidor de regalos más famoso del mundo."
- **habbies** (string): "Fabricar juguetes, volar en trineo, leer cartas de niños"
- **image** (string): "/path/to/photo.jpg"

Es posible representar estos datos como un objeto de JavaScript común, pero es mejor usar TypeScript en Angular para evitar errores durante la compilación. En TypeScript, se pueden usar interfaces para definir las características de los datos. Esto se conoce como "dar forma a los datos".

### Crear una Interfaz para los Datos de Ubicación

1. Usa el Angular CLI para generar una interfaz llamada `Character`:
   ```bash
   ng generate interface character
   ```

2. En el archivo `character.ts`, agrega los detalles del tipo para la interfaz:
```typescript
   export interface Character {
    name: string;
    description: string;
    hobbies: string;
    image: string;
  }
```


### Crear Datos de Ejemplo en `app.component.ts`

1. Importa la interfaz desde `./character`:
   ```typescript
   import { Character } from './character';
   ```

2. Crea una propiedad `characterList` en la clase `AppComponent` con el tipo `Character[]` y agrega datos de ejemplo:
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterListComponent } from "./character-list/character-list.component";
import { Character } from './character';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Introduction_to_Angular';
  characterList: Character[] = [
    {
      name: "Papá Noel",
      description: "El alegre repartidor de regalos más famoso del mundo.",
      hobbies: "Fabricar juguetes, volar en trineo, leer cartas de niños",
      image: "../assets/papa_noel.jpeg",
    },
    {
      name: "Los renos",
      description: "Los fieles compañeros de viaje de Papá Noel.",
      hobbies: "Volar, comer hierba, tirar trineo",
      image: "../assets/renos.jpeg",
    },
    {
      name: "Elfos Chef",
      description: "Los expertos en cocina navideña que preparan deliciosos bocadillos para todos.",
      hobbies: "Cocinar, hornear galletas, decorar pasteles",
      image: "../assets/elfos_chef.jpeg",
    },
    {
      name: "El elfo DJ",
      description: "El encargado de poner la música navideña más divertida en el Polo Norte.",
      hobbies: "Poner música, bailar, mezclar canciones",
      image: "../assets/elfo_dj.jpeg",
    },
    {
      name: "Sra. Claus",
      description: "La organizadora y cuidadora del Polo Norte.",
      hobbies: "Tejer, decorar, leer cuentos",
      image: "../assets/sra_claus.jpeg",
    },
    {
      name: "Los pingüinos",
      description: "Los simpáticos habitantes del Polo Sur que ayudan a Papá Noel en sus viajes.",
      hobbies: "Patinar sobre hielo, pescar, cantar",
      image: "../assets/pinguinos.jpeg",
    },
    {
      name: "El Yeti",
      description: "La misteriosa criatura de las montañas nevadas.",
      hobbies: "Esquiar, escalar, jugar con la nieve",
      image: "../assets/yeti.jpeg",
    },
    {
      name: "Los osos",
      description: "Los animales más fuertes y peludos del Polo Norte.",
      hobbies: "Hibernar, pescar, jugar",
      image: "../assets/osos.jpeg",
    }
  ];
}

```

### Compartir Datos entre Componentes

1. Importa `Input` desde `@angular/core` en `housing-list.component.ts` y la interfaz `HousingLocation` desde `./housing-location`:
   ```typescript
   import { Component, OnInit, Input } from '@angular/core';
   import { HousingLocation } from '../housing-location';
   ```

2. Declara una propiedad `locationList` en el cuerpo de la clase del componente y utiliza `@Input` como decorador:
   ```typescript
    import { Component, OnInit, Input } from '@angular/core';
    import { Character } from '../character';
    import { CommonModule } from '@angular/common'; // Importa CommonModule

    @Component({
      selector: 'app-character-list',
      standalone: true,
      imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
      templateUrl: './character-list.component.html',
      styleUrls: ['./character-list.component.css'],
    })
    export class CharacterListComponent implements OnInit {
      @Input() characterList: Character[] = [];
      results: Character[] = [];

      constructor() {}

      ngOnInit(): void {
        console.log('CharacterListComponent inicializado');
      }
      ...
    }
   ```

3. En `app.component.html`, enlaza la propiedad `characterList` al atributo `characterList` del elemento `<app-character-list>`:
   ```html
   <main>
      ...
      <section>
      <app-character-list [characterList]="characterList"></app-character-list>
    </section>
   </main>
   ```

### Mostrar Resultados en el Navegador

1. En `character-list.component.html`, utiliza `*ngFor` para iterar sobre los datos del array `characterList`:
   ```html
   <article *ngFor="let character of characterList">
      <h2>{{ character.name }}</h2>
    </article>
   ```

2. Agrega un cuadro de búsqueda con un botón en `app.component.html`:
   ```html
   <input #search><button (click)="searchHousingLocations(search.value)">Search</button>
   ```

### Nota sobre Errores

- Verifica que el nombre del atributo `Input` coincida con el nombre de la propiedad en la clase TypeScript.
- Asegúrate de usar corchetes `[]` para los atributos de entrada.


## Filtrar Resultados de Búsqueda

Actualmente, la aplicación muestra todos los resultados en lugar de filtrar según la búsqueda del usuario. Para solucionar esto, es necesario actualizar el componente `CharacterListComponent` para que la aplicación funcione como se espera.

### Actualizar `CharacterListComponent`

En el archivo `character-list.component.ts`, agrega una nueva propiedad llamada `results` al componente `CharacterListComponent`. Esta propiedad será de tipo `Character[]`:

```typescript
export class CharacterListComponent implements OnInit {
  @Input() characterList: Character[] = [];
  results: Character[] = [];
  ...
}
```

El array `results` representará las ubicaciones de vivienda que coinciden con la búsqueda del usuario. El siguiente paso es actualizar el método `searchCharacter` para filtrar los valores.

### Filtrar personajes por Búsqueda

Elimina el `console.log` y actualiza el código para asignar a la propiedad `results` el resultado del filtrado de `characterList`, utilizando `searchText` como criterio:

```typescript
searchCharacters(searchText: string): void {
  this.results = this.characterList.filter(
    (location: Character) => location.name
      .toLowerCase()
      .includes(
          searchText.toLowerCase()
    ));
}
```

En este código, se utiliza el método `filter` de los arrays para incluir solo los valores que contienen `searchText`. Todas las comparaciones se realizan utilizando las versiones en minúscula de las cadenas.

### Notas Importantes

1. **Prefijo `this`:** Es necesario usar el prefijo `this` al referirse a las propiedades de una clase dentro de los métodos, como en `this.results` y `this.characterList`.

2. **Propiedades adicionales:** Actualmente, la función de búsqueda solo coincide con la propiedad `name`, pero puedes modificar el código para incluir otras propiedades si lo necesitas.

### Mejorar la Función de Búsqueda

Actualiza el código para evitar filtrar el array si `searchText` está vacío:

```typescript
searchCharacters(searchText: string): void {
  if (!searchText) return;
  this.results = this.characterList.filter(
    (location: Character) => location.name
      .toLowerCase()
      .includes(
          searchText.toLowerCase()
    ));
}
```

### Cambios en la Plantilla

En el archivo `housing-list.component.html`, reemplaza `locationList` con `results` en la directiva `*ngFor`:

```html
<article *ngFor="let character of results">
  <h2>{{ character.name }}</h2>
</article>
```

## Mostrar Detalles

La aplicación necesita permitir que al hacer clic en un resultado de búsqueda, se muestre su información en un panel de detalles. El componente `CharacterListComponent` sabe cuál resultado se seleccionó, ya que muestra los datos. Sin embargo, se requiere una forma de compartir esta información con el componente padre `AppComponent`.

En Angular, `@Input()` envía datos del componente padre al hijo, mientras que `@Output()` permite que los componentes envíen un evento con datos del hijo al componente padre. El decorador `@Output()` utiliza un `EventEmitter` para notificar a los listeners sobre eventos. En este caso, queremos emitir un evento cuando se haga clic en un resultado de búsqueda, enviando el elemento seleccionado como parte del payload.

### Actualizar `CharacterListComponent`

En `character-list.component.ts`, actualiza las importaciones para incluir `Output` y `EventEmitter` de `@angular/core` y `Character` desde su archivo correspondiente:

```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../character';
```

En la clase `CharacterListComponent`, agrega una nueva propiedad llamada `characterSelectedEvent` de tipo `EventEmitter<Character>`:

```typescript
@Output() characterSelectedEvent = new EventEmitter<Character>();
```

La propiedad `characterSelectedEvent` está decorada con `@Output()`, lo que la convierte en parte de la API de este componente. El uso de `EventEmitter` con generics (`Character`) asegura que los datos emitidos sean del tipo esperado, brindando seguridad de tipo y reduciendo errores.

### Crear el Método `selectCharacter`

Actualiza `CharacterListComponent` agregando un nuevo método llamado `selectCharacter`, que acepta un parámetro de tipo `Character`:

```typescript
selectCharacter(character: Character) {
  this.characterSelectedEvent.emit(character);
}
```

Este método emite un evento a través de `characterSelectedEvent`, enviando la ubicación seleccionada por el usuario.

### Vincular al Template

En `character-list.component.html`, agrega un botón dentro del elemento `article` que llame al método `selectCharacter` al hacer clic, pasando la ubicación seleccionada como argumento:

```html
<article *ngFor="let character of results">
    <h2>{{ character.name }}</h2>
    <button (click)="selectCharacter(character)">Ver</button>
</article>
```

Los botones ahora son clicables y transmiten los valores al componente.

### Actualizar `AppComponent` para Escuchar el Evento

En `app.component.html`, escucha el evento `locationSelectedEvent` y maneja el evento con el método `updateSelectedLocation`:

```html
<app-character-list [characterList]="characterList" (characterSelectedEvent)="updateSelectedCharacter($event)"></app-character-list>
```

El argumento `$event` es un objeto de tipo `Character`, ya que es el tipo configurado en el `EventEmitter`.

En `app.component.ts`, agrega una nueva propiedad llamada `selectedLocation` de tipo `Character | undefined`:

```typescript
selectedCharacter: Character | undefined;
```

Crea un nuevo método llamado `updateSelectedLocation`, que actualice la propiedad `selectedLocation` con el valor recibido:

```typescript
updateSelectedCharacter(character: HousingLocation) {
  this.selectedLocation = location;
}
```

### Mostrar los Detalles del Elemento Seleccionado

En `app.component.html`, agrega un nuevo elemento `<article>` para mostrar las propiedades de la ubicación seleccionada. Usa el operador de encadenamiento opcional para manejar posibles valores `undefined` y una sintaxis ternaria para los valores booleanos:

```html
<article>
  <img [src]="selectedCharacter?.image">
  <p>{{selectedCharacter?.name}}</p>
  <p>{{selectedCharacter?.description}}</p>
  <p>{{selectedCharacter?.hobbies}}</p>
</article>
```


## Mejorar las Plantillas

La interfaz de usuario actualmente contiene artefactos de texto del panel de detalles que deberían mostrarse condicionalmente. Vamos a utilizar dos características de Angular: `ng-container` y `*ngIf`.

Si aplicamos la directiva `ngIf` directamente al elemento `<article>`, se produce un cambio de diseño cuando el usuario realiza la primera selección. Para mejorar esta experiencia, podemos envolver los detalles de la ubicación en otro elemento que sea hijo del artículo. Este elemento no tiene estilo ni función, y solo agrega peso al DOM. Para evitar esto, podemos usar `ng-container`. Podemos aplicar directivas a él, pero no aparecerá en el DOM final.

En `app.component.html`, actualiza el artículo para que coincida con el siguiente código:

```html
<article>
  <ng-container>
    <img [src]="selectedCharacter?.image">
    <p>{{selectedCharacter?.name}}</p>
    <p>{{selectedCharacter?.description}}</p>
    <p>{{selectedCharacter?.hobbies ? "Has hobbies" : "Does Not have hobbies"}}</p>
  </ng-container>
</article>
```

Luego, agrega el atributo `*ngIf` al elemento `ng-container`. El valor debe ser `selectedCharacter`.

```html
<article>
  <ng-container *ngIf="selectedLocation">
    ...
  </ng-container>
</article>
```

Ahora, la aplicación solo mostrará el contenido del elemento `ng-container` si `selectedLocation` es verdadero.

Guarda este código y confirma que el navegador ya no muestra los artefactos de texto cuando se carga la página.

Hay una última actualización que podemos hacer en nuestra aplicación. Los resultados de búsqueda en `housing-location.component.html` deberían mostrar más detalles.

En `housing-location.component.html`, actualiza el código a:

```html
<label for="character-search">Search for a new character</label>
<input id="character-search" #search placeholder="Ex: Santa Clauss">
<button (click)="searchCharacters(search.value)">Search</button>

<article *ngFor="let character of results" (click)="selectCharacter(character)">
    <img [src]="character?.image">
    <h2>{{ character.name }}</h2>
    <button (click)="selectCharacter(character)">Ver</button>
</article>
```

Guarda el código y regresa al navegador para ver la aplicación completada.
