import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarefasService } from './../tarefas.service';

@Component({
  selector: 'app-detalhes-tarefas',
  templateUrl: './detalhes-tarefas.component.html'
})
export class DetalhesTarefasComponent implements OnInit {
  tarefa;
  id: number;

  constructor(
    private tarefas: TarefasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });
    this.tarefa = this.tarefas.consultaUmaTarefa(this.id);
  }

}
