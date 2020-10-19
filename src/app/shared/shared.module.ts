import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    //Manero d elas directivas de enrutamiento en este módulo
    RouterModule
  ],
  //Componentes a utilizar fuera de este módulo
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
