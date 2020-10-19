import { ActionReducerMap } from '@ngrx/store';
// Apuntamos directamente al index donde tenemos la refrencia atodo lo que el exporte
import * as reducers from './reducers';


export interface AppState {
   usuarios: reducers.UsuariosState,
   usuario: reducers.UsuarioState,
   
}


export const appReducers: ActionReducerMap<AppState> = {
   usuarios: reducers.usuariosReducer,
   usuario: reducers.usuarioReducer,

}