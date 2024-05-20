import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class CharacterService {

    public path = 'https://dragonball-api.com/api/';

    constructor(private _http: HttpClient){}

    getCharacters(): Observable<any>{
        const url = this.path + 'characters';
        return this._http.get<any>(url);
    }

    getCharacterByName(characterName: string): Observable<any>{
        const url = 'https://dragonball-api.com/api/characters?name=' + characterName;
        return this._http.get<any>(url);
    }
}