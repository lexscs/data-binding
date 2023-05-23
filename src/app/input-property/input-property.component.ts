import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {
  @Input('nome') nomeCurso: string = '';


  constructor(){ /* TODO document why this constructor is empty */  }


  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty

  }
}
