import { createReducer, on } from '@ngrx/store';
// De manera generica ya que en el archivo 'index.ts' se exportan todas las accines de manera centralizada
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
  usuarios: Usuario[],
  loaded: boolean,
  loading: boolean,
  error: any,

}

export const usuariosInitialState: UsuariosState = {
  usuarios: [],
  loaded: false,
  loading: false,
  error: null,
}

const _usuariosReducer = createReducer(usuariosInitialState,

    //Inicio de la carga de usuario. Solo pone el loading en true
  on(cargarUsuarios, state => ({ ...state, loading: true })),
    
  // Carga de usuarios al store desde la respuesta http
  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuarios: [...usuarios]

  })),

  // Carga de la información ante un error en la petición http
  on(cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loader: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }

  })),

);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}