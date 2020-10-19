import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private Url_Base = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    //Retorna un observable para ser utilizado de manera personalizada en otros compoenentes
    return this.http.get(`${this.Url_Base}/users?per_page=6&delay=3`)
      .pipe(
        map((resp:any) => {
          return resp.data;
        })
      )
  }

  getUsuarioById(id: string) {
    return this.http.get(`${this.Url_Base}/users/${ id }`)
      .pipe(
        map((resp:any) => {
          return resp.data;
        })
      )
  }


}
