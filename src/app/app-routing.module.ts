import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'formulario', loadChildren: './pages/formulario/formulario.module#FormularioPageModule' },
  
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'formulario2', loadChildren: './pages/formulario2/formulario2.module#Formulario2PageModule' },
  { path: 'datos-formulario/:info', loadChildren: './pages/datos-formulario/datos-formulario.module#DatosFormularioPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
