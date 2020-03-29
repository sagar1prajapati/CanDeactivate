import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<ToDo> {
  constructor(private todoService:TodoService , private router:Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToDo>
  {
      return this.todoService.GetAllTodoById(1);
  }
}
