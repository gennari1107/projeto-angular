import { DetalhesTarefasComponent } from './detalhes-tarefas/detalhes-tarefas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';
import { ConsultaStatusComponent } from './consulta-status/consulta-status.component';


const routes: Routes = [
  { path: '', component: ListaTarefasComponent },
  { path: 'cadastro', component: CadastrarTarefasComponent },
  { path: 'consulta', component: ConsultaStatusComponent },
  { path: 'detalhe/:id', component: DetalhesTarefasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
