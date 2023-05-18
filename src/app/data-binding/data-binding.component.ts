import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.scss']

  styles: [
    `
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
  `
  ]
})
export class DataBindingComponent implements OnInit {
  url: string = 'informação';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;


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

  constructor() { }

  ngOnInit() {
  }
}
