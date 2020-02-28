import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObjetivoComponent} from "./objetivo/objetivo.component";
import {CalculadoraComponent} from "./calculadora/calculadora.component";
import  {NumeroComponent} from "./numero/numero.component";
import  {HelloWorldComponent} from "./helloWorld/helloWorld.component";



const routes: Routes = [
  {path:"objetivo", component: ObjetivoComponent},
  {path:"calculadora", component: CalculadoraComponent},
  {path:"numero", component: NumeroComponent},
  {path:"helloWorld", component: HelloWorldComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
