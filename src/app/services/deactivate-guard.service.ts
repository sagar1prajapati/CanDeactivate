import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<RegisterComponent>  {
  constructor() { }
  canDeactivate(component: RegisterComponent, currentRoute: ActivatedRouteSnapshot): boolean 
  {
    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }
}
