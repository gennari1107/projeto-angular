import { ActivatedRoute } from '@angular/router';
import { TarefasService } from './../tarefas.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-tarefas',
  templateUrl: './status-tarefas.component.html',
})
export class StatusTarefasComponent implements OnInit {
  @Input() tarefa;

  constructor(
    private tarefas: TarefasService,
  ) { }

  ngOnInit() {
  }

  mudaStatus() {
    this.tarefas.mudaStatusTarefa(this.tarefa.id);
  }

}
