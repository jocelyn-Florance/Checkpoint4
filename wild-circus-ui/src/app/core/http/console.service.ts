import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Console} from '../../shared/models/console';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  configUrl = `${environment.apiUrl}/consoles`;

  constructor(private http: HttpClient) { }

  public getListConsole(): Observable<Console[]> {
    return this.http.get<Console[]>(`${this.configUrl}`);
  }

  public getConsoleById(id: string): Observable<Console> {
    return this.http.get<Console>(`${this.configUrl}/${id}`);
  }

  public postConsole(console: Console): Observable<Console> {
    return this.http.post<Console>(`${this.configUrl}`, console);
  }
}
