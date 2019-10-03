import { TarefasService } from './../tarefas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html'

})
export class CadastrarTarefasComponent implements OnInit {
  checkoutForm;
  tarefa;
  nome: string;
  descricao: string;

  constructor(
    private tarefas: TarefasService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      nome: [this.nome, [Validators.required, Validators.minLength(3)]],
      descricao: [this.descricao, Validators.required]
    });
  }

  submitForm() {
    if (this.checkoutForm.valid) {
      this.tarefas.cadastroTarefa(this.nome, this.descricao);
      this.checkoutForm.reset();
    } else {
      window.alert('Preencha todos os campos para que seu cadastro seja realizado!');
    }
  }

}
