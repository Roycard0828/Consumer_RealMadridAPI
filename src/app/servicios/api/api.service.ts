import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListPlayers } from '../../modelos/listplayers.interface'
import {Observable} from 'rxjs'
import { Player } from 'src/app/modelos/player.interface';
import { Response } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://34.125.7.41:8108/api"

  constructor(private http: HttpClient) { }

  getAllPlayers():Observable<ListPlayers[]>{
    let direction: string = this.url + "/players";
    return this.http.get<ListPlayers[]>(direction);
  }

  postPlayer(form:Player):Observable<Response>{
    let direction: string = this.url + "/players"
    return this.http.post<Response>(direction, form);
  }
}
