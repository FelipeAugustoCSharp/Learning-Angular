import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight{
      background-color: yellow;
      font-weight: bold;
}
    `
  ]
})
export class DataBindingComponent {
  url:string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem:string = 'http://lorempixel.com.br/500/400/?1'
  valorAtual:string = '';
  valorSalvo:string = '';
  isMouseOver:boolean = false;
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }


  botaoClicado(){
    alert('BotaoClicado')
  }
  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
    
  }
  constructor() {

  }
}
