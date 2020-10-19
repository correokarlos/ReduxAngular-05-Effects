//IMPORTANTE:  Los efectos escuchan acciones y reaccionan en base a 
  //o que acaba de suceder o lo que acaban de decir el store que procese
  import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as  usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';



@Injectable()
  //Es simplemente un servicio de Angular
export class UsauriosEffects {

  constructor(
    //Simbolo de dolar, simplemente es una convención para indicar que es un Observable
      //Iyención de un observable que esta pendiente de todas las aciones que se disparan
    private actions$: Actions,
    private usuarioService: UsuarioService

  ) { }


  cargarUsuarios$ = createEffect(
    //Callback que regrese un Observable
    () => this.actions$.pipe(
      // Especifica cual es la acción que debe escuchar este Observable
      ofType(usuariosActions.cargarUsuarios), // evaluar esta acción
      //tap(data => console.log('effect map', data)), --> Pruebas
      //Disparar un nuevo Observable y que se unan. Se va a encargar de pedir la información
      mergeMap(
        //Necesita un callback que es el Observable que se quiere disparar. El servicio que retorna los usuarios
        () => this.usuarioService.getUsuarios()
          .pipe(
            //tap(data => console.log('getUsuarios offect', data)) --> Pruebas

            //Disparar una acción. usuariosService: los que vienen de 'getUsuarios()', usaurios: los que pide la acción
            map(usuariosService => usuariosActions.cargarUsuariosSuccess({ usuarios: usuariosService })),
            
            // Manejo de cualquier error que suceda en la petición
              //Necesito regresar un Oservable, hay que trasformar la respuesta del catchError a un Observable mediante el agumento 'of'
            catchError(err => of(usuariosActions.cargarUsuariosError({payload: err})))
        )
      )
    )
  );
  

  
}