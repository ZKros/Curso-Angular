import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = ' Daniel ';
  age: number = 23;
  job: string = 'Estudar Angular/React';
  hobbies = ['Correr', ' Ver Anime', ' Estudar', ' Foco no Futuro'];
  car = {
    name: 'Civic',
    year: 2019,
    color: 'Roxo',
  };

  constructor() {}

  ngOnInit(): void {}
}
