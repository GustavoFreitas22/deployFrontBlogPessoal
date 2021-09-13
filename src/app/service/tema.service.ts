import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient, private router: Router) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://freitasblog.herokuapp.com/tema/all', this.token);
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://freitasblog.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema:Tema): Observable<Tema>{
    return this.http.post<Tema>('https://freitasblog.herokuapp.com/tema/post', tema, this.token)
  }

  putTema(tema:Tema): Observable<Tema>{
    return this.http.put<Tema>('https://freitasblog.herokuapp.com/tema/put', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://freitasblog.herokuapp.com/tema/remove/${id}`, this.token)
  }

}
