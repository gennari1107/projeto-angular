import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../tarefas.service';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html'

})
export class ListaTarefasComponent implements OnInit {
  listaTarefas;

  constructor(
    private tarefas: TarefasService) { }

  ngOnInit() {
    this.listaTarefas = this.tarefas.obterTarefas();
  }

}
