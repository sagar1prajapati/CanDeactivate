import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-resolve-component',
  templateUrl: './resolve-component.component.html',
  styleUrls: ['./resolve-component.component.css']
})
export class ResolveComponentComponent implements OnInit {
 ToDoObj: ToDo;
  constructor(private _router: Router, private _route : ActivatedRoute)
   {
    this.ToDoObj = this._route.snapshot.data['ToDolist'];
   }
  ngOnInit() {
  }

}
