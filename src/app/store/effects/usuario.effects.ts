import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as  usuarioActions from '../actions/usuario.actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()

export class UsaurioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService

  ) { }


  cargarUsuario$ = createEffect(

    () => this.actions$.pipe(

      ofType(usuarioActions.cargarUsuario), 
      //mergeMap: recibo la acción con toda la información de las misma.
      mergeMap(
        (action) => this.usuarioService.getUsuarioById(action.id)
          .pipe(
            map(usuarioService => usuarioActions.cargarUsuarioSuccess({ usuario: usuarioService })),
            catchError(err => of(usuarioActions.cargarUsuarioError({payload: err})))
        )
      )
    )
  );
  

  
}