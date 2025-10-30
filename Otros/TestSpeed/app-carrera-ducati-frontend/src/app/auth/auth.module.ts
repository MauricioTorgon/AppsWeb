import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa el routing que acabamos de crear
import { AuthRoutingModule } from './auth-routing.module';

// Importa los componentes que este módulo "posee"
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { LoginScreenComponent } from '../screens/login-screen/login-screen.component';
import { RegistroUsuariosComponent } from '../screens/registro-usuarios/registro-usuarios.component';

// Importa los módulos de Angular Material que usará el Login
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    // Declara los componentes
    AuthLayoutComponent,
    LoginScreenComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    // Importaciones necesarias
    CommonModule,
    AuthRoutingModule, // Nuestro archivo de rutas

    // Módulos de Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AuthModule { }