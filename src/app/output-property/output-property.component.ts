import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  constructor(){ /* TODO document why this constructor is empty */  }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty


  }
}
