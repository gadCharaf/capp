import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {ProfilesComponent} from './admin/profiles/profiles.component';
import {ProfileFormComponent} from './admin/profiles/profile-form/profile-form.component';
import {ParcoursListComponent} from './parcours-list/parcours-list.component';
import {ParcoursComponent} from './parcours-list/parcours/parcours.component';
import {ParcoursFormComponent} from './parcours-list/parcours-form/parcours-form.component';
import {ProviderListComponent} from './provider-list/provider-list.component';
import {ProviderComponent} from './provider-list/provider/provider.component';
import {ProviderFormComponent} from './provider-list/provider-form/provider-form.component';
import {ProxyListComponent} from './proxy-list/proxy-list.component';
import {ProxyComponent} from './proxy-list/proxy/proxy.component';
import {ProxyFormComponent} from './proxy-list/proxy-form/proxy-form.component';

const routes: Routes =  [{ path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'admin/profiles', component: ProfilesComponent },
  { path: 'admin/profiles/new', component: ProfileFormComponent },
  { path: 'parcours', component: ParcoursListComponent },
  { path: 'parcours/view/:id', component: ParcoursComponent },
  { path: 'parcours/new', component: ParcoursFormComponent },
  { path: 'providers', component: ProviderListComponent },
  { path: 'providers/view/:id', component: ProviderComponent },
  { path: 'providers/new', component: ProviderFormComponent },
  { path: 'services', component: ProxyListComponent },
  { path: 'services/view/:id', component: ProxyComponent },
  { path: 'services/new', component: ProxyFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
