import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../shared/model/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters(): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character`)
  }
}
