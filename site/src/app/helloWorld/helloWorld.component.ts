import  {Component} from "@angular/core";

@Component({
  selector : "helloWorld-component",
  templateUrl :"./helloWorld.component.html",
  styleUrls : ["./helloWorld.component.css"]
})
export class HelloWorldComponent {
  disciplina : string ="POO";
  somar : number = 0;
  nome : string = "";
  anoNascimento : number= 0;

  constructor(){
    this.disciplina = "DDM";
    this.soma = this.calcular(5,5);

  }

  calcular(num1: number, num2: number): number{
    let total = 0;
    total = num1 + num2;
    return total;

  }

  subtrair():void{

  }
  // new Date().getFullYear();

  hello(): void{
      let anoAtual = new Date().getFullYear();
      let idade = anoAtual - this.anoNascimento;
    alert("Hello World \n" +  "Seu Nome " + this.nome +"\n" + "Nasceu em "+this.anoNascimento + "\n" + "Sua idade "+idade);
  }



}
