import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {
  @Output() adicionarCursoEvent = new EventEmitter()
  
  adicionarCurso(nome, carga) {
    this.adicionarCursoEvent.emit({ nome, carga })
  }
}
