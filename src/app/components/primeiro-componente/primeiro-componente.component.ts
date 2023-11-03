import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
name:string='Pedro';
age: any= '30';
aniversario: any= "07/02";
nascimento: any ="1969";
cidadeNatal: any="Santa Maria ";
adress: any= "Rua Dona Laura";
profissao: any= ['Professor', 'Cirurgião-Dentista', 'Programador'];
hobbie: any= ['correr','estudar', 'Jogar'];
carro: any= 'Uno';
carroAno: any='2015';
city: any="Porto Alegre";
bairro: any="Azenha";
estado: any="Rio Grande do Sul";

constructor(){}
ngOnInit(): void{

}

}
