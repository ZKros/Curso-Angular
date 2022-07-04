import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Daniel';

  userData={
    email: 'daniel.silva@ucl.br',
    telefone: '(27) 99691-5861',
  };

  title = 'aula1';
}