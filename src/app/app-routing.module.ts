import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tableau-debord',
    loadChildren: () => import('./home/tableau-debord/tableau-debord.module').then( m => m.TableauDebordPageModule)
  },
  {
    path: 'candidats/:status',
    loadChildren: () => import('./home/candidats/candidats.module').then( m => m.CandidatsPageModule)
  },
  {
    path: 'ajouter-candidat',
    loadChildren: () => import('./home/ajouter-candidat/ajouter-candidat.module').then( m => m.AjouterCandidatPageModule)
  },
  {
    path: 'candidat-details/:id',
    loadChildren: () => import('./candidat-details/candidat-details.module').then( m => m.CandidatDetailsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'notifdetail',
    loadChildren: () => import('./notifdetail/notifdetail.module').then( m => m.NotifdetailPageModule)
  },
  {
    path: 'edit-candidat',
    loadChildren: () => import('./edit-candidat/edit-candidat.module').then( m => m.EditCandidatPageModule)
  },
  {
    path: 'taches/:type',
    loadChildren: () => import('./taches/taches.module').then( m => m.TachesPageModule)
  },
  {
    path: 'tache-details',
    loadChildren: () => import('./tache-details/tache-details.module').then( m => m.TacheDetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
