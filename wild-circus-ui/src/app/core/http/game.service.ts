import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Game} from "../../shared/models/game";
import {GameAlternative} from '../../shared/models/game_alternative';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  configUrl = `${environment.apiUrl}/games`;

  constructor(private http: HttpClient) { }

  public getListGame(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.configUrl}`);
  }

  public getGameById(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.configUrl}/${id}`);
  }

  public getAlternativeById(id: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.configUrl}/alternative/${id}`);
  }

  public postAlternative(idGame: string, idAlternative: string): Observable<GameAlternative> {
    return this.http.post<GameAlternative>(`${this.configUrl}/add/alternative`, {idGame,idAlternative});
  }

  public postGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.configUrl}`, game);
  }

  public putGame(id: string, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.configUrl}/edit/${id}`, game);
  }

  public deleteGame(id: number): Observable<Game> {
    return this.http.delete<Game>(`${this.configUrl}/delete/${id}`);
  }

  public getRandomGame(): Observable<Game> {
    return this.http.get<Game>(`${this.configUrl}/random`);
  }

  public getSearch(name: string): Observable<Game> {
    return this.http.get<Game>(`${this.configUrl}/search/${name}`);
  }

}
