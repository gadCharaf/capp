import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProxyListComponent } from './proxy-list/proxy-list.component';
import { ProxyComponent } from './proxy-list/proxy/proxy.component';
import { ProxyFormComponent } from './proxy-list/proxy-form/proxy-form.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderComponent } from './provider-list/provider/provider.component';
import { ProviderFormComponent } from './provider-list/provider-form/provider-form.component';
import { ParcoursListComponent } from './parcours-list/parcours-list.component';
import { ParcoursComponent } from './parcours-list/parcours/parcours.component';
import { ParcoursFormComponent } from './parcours-list/parcours-form/parcours-form.component';
import { ProfileComponent } from './admin/profiles/profile/profile.component';
import { ProfileFormComponent } from './admin/profiles/profile-form/profile-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {ParcoursService} from './services/parcours.service';
import {ProfilesService} from './services/profiles.service';
import {ProvidersService} from './services/providers.service';
import {ProxiesService} from './services/proxies.service';
import { HeaderComponent } from './header/header.component';
import {ProfilesComponent} from './admin/profiles/profiles.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SystemService} from './services/proxies/system.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProxyListComponent,
    ProxyComponent,
    ProxyFormComponent,
    ProviderListComponent,
    ProviderComponent,
    ProviderFormComponent,
    ParcoursListComponent,
    ParcoursComponent,
    ParcoursFormComponent,
    ProfileComponent,
    ProfileFormComponent,
    HeaderComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ParcoursService,
    ProfilesService,
    ProvidersService,
    ProxiesService,
    SystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
