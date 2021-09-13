import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(private router:Router, private temaService: TemaService) { }
  
  listaTemas: Tema[]

  ngOnInit(){
    if(environment.token == ''){
      //alert('Sua seção expirou')
      this.router.navigate(['/entrar'])
    }
    this.findAllTemas()
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.tema = new Tema()
      this.findAllTemas()
      
    }, erro=>{
      if(erro.status == 500){
        alert('Valor invalido')
      }
    })
    
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

}
