import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
name:string='Pedro';
age: any= '30';
adress: any= "Rua Dona Laura";
profissao: any= "Programador";
hobbie: any='estudar';

}
