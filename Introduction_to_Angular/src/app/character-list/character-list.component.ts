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

  searchCharacters(searchText: string): void {
    if (!searchText) return;
    this.results = this.characterList.filter(
      (location: Character) => location.name
        .toLowerCase()
        .includes(
            searchText.toLowerCase()
      ));
  }
}
