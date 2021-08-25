import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecao-cursos',
  templateUrl: './colecao-cursos.component.html',
  styleUrls: ['./colecao-cursos.component.css']
})
export class ColecaoCursosComponent {
  cursos = []
  
  onCursoAdicionado(curso) {
    this.cursos = [...this.cursos, curso]
  }
}


