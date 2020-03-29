import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateGuardService } from './services/deactivate-guard.service';
import { ResolveComponentComponent } from './components/resolve-component/resolve-component.component';
import { ResolveService } from './services/resolve.service';
import { HttpClientModule } from '@angular/common/http';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'resolve', component: ResolveComponentComponent, resolve:{ ToDolist: ResolveService} },
  { path: 'register', component: RegisterComponent , canDeactivate:[DeactivateGuardService] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ContactUsComponent,
    ResolveComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [ResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
