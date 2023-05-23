import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
  //styleUrls: ['./data-binding.component.scss'],

})
export class DataBindingComponent implements OnInit {
  url: string = 'informação';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200';

  valorAtual: string = '';
  valorSalvo: any = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor({ evento }: { evento: { novoValor: any; }; }){
    console.log(evento.novoValor);
  }



  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty



  }
}
