import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teste-component',
  templateUrl: './teste-component.component.html',
  styleUrls: ['./teste-component.component.css'],
})
export class TesteComponentComponent implements OnInit {
  quali: string =
    ' Focado, Determinado, Foco no Desenvolvimento, Direcionado a Metas e Vontade de Crescer!';

  @Input() name: string = '';
  @Input() userData!: {email: string, telefone: string};
  constructor() {}

  ngOnInit(): void {}
}
