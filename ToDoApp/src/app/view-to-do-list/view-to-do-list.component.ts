import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoserviceService }  from '../todoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-to-do-list',
  templateUrl: './view-to-do-list.component.html',
  styleUrls: ['./view-to-do-list.component.css']
})
export class ViewToDoListComponent implements OnInit {

  todos: any[];
  constructor(private todoService: TodoserviceService, private router: Router) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data:any) => {
      console.log(data);
      this.todos = data;
    });
  }


  deleteTodo(id){
    console.log('delete todo with id = ' + id);
    this.todoService.deleteTodo(id).subscribe(res =>{
      console.log('delete res= ' + res);

      this.todoService.getTodos().subscribe((data:any) => {
        console.log(data);
        this.todos = data;
      });
    });
  }

}
