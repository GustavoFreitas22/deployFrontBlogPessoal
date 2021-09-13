import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://freitasblog.herokuapp.com/postagens/all', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://freitasblog.herokuapp.com/postagens/post', postagem ,this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://freitasblog.herokuapp.com/postagens/edit', postagem, this.token)
  }

  getPostagemById(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://freitasblog.herokuapp.com/postagens/${id}`, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://freitasblog.herokuapp.com/postagens/delete/${id}`, this.token)
  }

}
