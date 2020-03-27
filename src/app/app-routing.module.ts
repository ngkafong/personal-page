import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UpdatesComponent } from './updates/updates.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
	{ path:'home', component: HomeComponent },
	{ path:'about', component: AboutComponent },
	{ path:'updates', component: UpdatesComponent },
	{ path:'contact', component: ContactComponent },
	{ path:'', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
