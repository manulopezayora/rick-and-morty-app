import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, CharacterResult } from '../shared/model/character.model';
import { generateQueryStrings } from '../../shared/utils/generateQueryStrings'

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters(): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character`);
  }

  public getCharactersByPage(page: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character`, {
      params: generateQueryStrings({ page })
    });
  }

  public getCharacterDetail(id: string): Observable<CharacterResult> {
    return this.http.get<CharacterResult>(`${this.baseUrl}/character/${id}`);
  }
}
