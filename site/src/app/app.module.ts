import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import  {FormsModule} from "@angular/forms";

import  {ObjetivoComponent} from "./objetivo/objetivo.component";
import  {CalculadoraComponent} from "./calculadora/calculadora.component";
import  {NumeroComponent} from "./numero/numero.component";
import  {HelloWorldComponent} from "./helloWorld/helloWorld.component";
@NgModule({
  declarations: [
    AppComponent, ObjetivoComponent, CalculadoraComponent, NumeroComponent, HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
