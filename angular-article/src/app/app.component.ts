import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-article';
  familiaPai = [
    {nome: 'Getulio', sobrenome: 'Ferreira'},
    {nome: 'Luiza', sobrenome: 'Ferreira'},
    {nome: 'Tereza', sobrenome: 'Ferreira'},
  ];

  receiverFeedback( resposta ) {
    console.log('O evento chegou no pai', resposta);
  }
}
