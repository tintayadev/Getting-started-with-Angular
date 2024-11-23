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
