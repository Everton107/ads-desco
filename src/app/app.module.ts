
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import { InputComponent } from './input/input.component';
@NgModule({
   
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    ButtonComponent,
    InputComponent,

          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuComponent,
    FormsModule, 
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };

