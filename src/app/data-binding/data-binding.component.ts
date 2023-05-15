import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url: string = 'informação';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor(){}

    ngOnInit(){
    }

}
