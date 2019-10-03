import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';
import { ConsultaStatusComponent } from './consulta-status/consulta-status.component';
import { StatusTarefasComponent } from './status-tarefas/status-tarefas.component';
import { ExcluirTarefasComponent } from './excluir-tarefas/excluir-tarefas.component';
import { DetalhesTarefasComponent } from './detalhes-tarefas/detalhes-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ListaTarefasComponent,
    CadastrarTarefasComponent,
    ConsultaStatusComponent,
    StatusTarefasComponent,
    ExcluirTarefasComponent,
    DetalhesTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
