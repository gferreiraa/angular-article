import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log(this.recebeFamilia);
    this.feedback();
  }

  feedback() {
    this.respostaFamilia.emit({nome: 'Rafaela', sobrenome: 'Ferreira'});
  }

}
