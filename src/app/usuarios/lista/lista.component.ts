import { Component, OnInit } from '@angular/core';
//import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe(({ usuarios, loading, error }) => {
      this.usuarios = usuarios;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch(cargarUsuarios());

    /*this.usuarioService.getUsuarios()
      .subscribe(usuarios => {
        console.log(usuarios);
        this.usuarios = usuarios;
      });*/
    
    
  }

}

// Los efectos escuchan acciones y reaccionan en base a o que acaba de suceder o lo que acaban de decir el store que procese
