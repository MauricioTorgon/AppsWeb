import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUsuariosComponent } from './screens/registro-usuarios/registro-usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'registro', component: RegistroUsuariosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }