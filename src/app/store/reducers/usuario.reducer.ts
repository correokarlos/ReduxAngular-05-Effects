import { createReducer, on } from '@ngrx/store';
// De manera generica ya que en el archivo 'index.ts' se exportan todas las accines de manera centralizada
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  id: string,
  usuario: Usuario,
  loaded: boolean,
  loading: boolean,
  error: any,

}

export const usuarioInitialState: UsuarioState = {
  id: null,
  usuario: null,
  loaded: false,
  loading: false,
  error: null,
}

const _usuarioReducer = createReducer(usuarioInitialState,

    //Inicio de la carga de usuario. Solo pone el loading en true
  on(cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id: id
  })),
    
  // Carga de usuario al store desde la respuesta http
  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuario: {...usuario}

  })),

  // Carga de la información ante un error en la petición http
  on(cargarUsuarioError, (state, { payload }) => ({
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

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}