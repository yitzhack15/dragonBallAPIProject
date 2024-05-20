import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../services/characterService';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  @Input() characterName: string;
  public characters: any = [];
  public singleCharacters: any;

  constructor(private _http: CharacterService){
    this.characterName = '';
  }

  ngOnInit(){
    this.getCharacters();
  }

  getCharacters(){
    this._http.getCharacters().subscribe((charactersFromAPI) => {
      this.characters = charactersFromAPI;
    },
    (error) => {
      console.error('Error fetching data', error);
    }
  );
  }

  getCharacterByName(){
    this._http.getCharacterByName(this.characterName).subscribe((characterFromAPI) => {
      this.singleCharacters = characterFromAPI;
    },
    (error) => {
      console.error('Error fetching data', error);
    }
  );
  }
}
