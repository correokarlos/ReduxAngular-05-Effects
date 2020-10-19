import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { isLoading } from '../../../../../04-ingresos-egresos/src/app/shared/ui.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({ usuario, loading, error }) => {
      this.usuario = usuario;
    });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }))
    })
  }

}
