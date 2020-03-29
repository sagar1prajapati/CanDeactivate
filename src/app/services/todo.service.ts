import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http:HttpClient) { }
  
  GetAllTodoById(id:number):Observable<ToDo>{
    let url=environment.baseUrl+'todos/'+id;
    return this.http.get<ToDo>(url);
  }
}
