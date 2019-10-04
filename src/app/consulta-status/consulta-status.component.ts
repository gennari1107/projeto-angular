import { TarefasService } from './../tarefas.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-status',
  templateUrl: './consulta-status.component.html'

})
export class ConsultaStatusComponent implements OnInit {
  tarefas;
  status;
  
  constructor(
    private tarefaService: TarefasService
  ) { }

  ngOnInit() {
    this.status = true;
    this.tarefas = this.tarefaService.consultaStatusTarefa(this.status);
  }

  completoStatus() {
    this.status = !this.status;
    this.tarefas = this.tarefaService.consultaStatusTarefa(this.status);
  }
 


}
