import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  tarefas = [
    {
      id: 0,
      nome: 'Aprender angular',
      descricao: 'Aprender o básico sobre o angular 2+',
      completo: false
    },
    {
      id: 1,
      nome: 'Aprender css',
      descricao: 'Aprender o básico sobre css',
      completo: false
    },
    {
      id: 2,
      nome: 'Aprender lógica',
      descricao: 'Aprender a pensar',
      completo: true
    },
    {
      id: 3,
      nome: 'Aprender sobre variáveis',
      descricao: 'Aprender tudo sobre variaveis',
      completo: true
    },
    {
      id: 4,
      nome: 'Aprender Javascript',
      descricao: 'Aprender tudo sobre Javascript',
      completo: false
    },
    {
      id: 5,
      nome: 'Aprender a ferver água',
      descricao: 'Aprender o básico sobre como ferver água',
      completo: true
    },
  ];
  constructor(private http: HttpClient) { }

  obterTarefas() {
    return this.tarefas;
  }

  consultaUmaTarefa(id) {
    const index = this.tarefas.findIndex(item => item.id === id);
    return this.tarefas[index];
  }
  //
  mudaStatusTarefa(id) {
    const index = this.tarefas.findIndex(item => item.id === id);
    this.tarefas[index].completo = !this.tarefas[index].completo;
  }

  excluiTarefa(id) {
    const index = this.tarefas.findIndex(item => item.id === id);
    this.tarefas.splice(index, 1);
  }

  cadastroTarefa(nome, descricao) {
    this.tarefas.push({
      id: this.tarefas[this.tarefas.length - 1].id + 1,
      nome: nome,
      descricao: descricao,
      completo: false
    });
  }
  
  consultaStatusTarefa(status: boolean) {
    return this.tarefas.filter(item => item.completo === status);
  }
  
}
