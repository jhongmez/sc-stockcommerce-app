import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadComponent: () => import('./pages/home/home.component').then( m => m.HomeComponent)
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
