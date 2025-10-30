import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { LoginScreenComponent } from '../screens/login-screen/login-screen.component';
import { RegistroUsuariosComponent } from '../screens/registro-usuarios/registro-usuarios.component';

// Esta es la configuración de tu imagen
const routes: Routes = [
  {
    path: '', // Este path estará vacío (lo definiremos en el router principal)
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginScreenComponent },
      { path: 'registro-usuarios', component: RegistroUsuariosComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }