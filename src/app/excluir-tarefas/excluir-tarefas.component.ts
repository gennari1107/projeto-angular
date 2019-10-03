import { TarefasService } from './../tarefas.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-excluir-tarefas',
  templateUrl: './excluir-tarefas.component.html'
})
export class ExcluirTarefasComponent implements OnInit {
  @Input() tarefa;

  constructor(
    private tarefas: TarefasService
  ) { }

  ngOnInit() {
  }

  excluirTarefa() {
    this.tarefas.excluiTarefa(this.tarefa.id);
  }


}
