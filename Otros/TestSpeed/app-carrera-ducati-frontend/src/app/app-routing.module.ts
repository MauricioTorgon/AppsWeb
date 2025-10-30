import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Cuando alguien visite la raíz del sitio...
    // Carga perezosamente el AuthModule
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // Aquí irían otras rutas, por ejemplo, la parte "privada" de la app
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }