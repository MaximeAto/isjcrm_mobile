import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'tableau-debord',
        loadChildren: () => import('./tableau-debord/tableau-debord.module').then( m => m.TableauDebordPageModule)
      },
      {
        path: 'candidats/:status',
        loadChildren: () => import('./candidats/candidats.module').then( m => m.CandidatsPageModule)
      },
      {
        path: 'ajouter-candidat',
        loadChildren: () => import('./ajouter-candidat/ajouter-candidat.module').then( m => m.AjouterCandidatPageModule)
      },
    ]
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
