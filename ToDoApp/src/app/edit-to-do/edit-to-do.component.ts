import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService }  from '../todoservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css']
})
export class EditToDoComponent implements OnInit {

  form: FormGroup;
  todo: any = {};
  constructor(private route: ActivatedRoute, private router:Router, private todoService: TodoserviceService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('edit id: ' + params.id);
      this.todoService.editToDo(params.id).subscribe(res => {
        this.todo = res;
        console.log("ediy todo");
   //     console.log(this.todo[0].description);
        console.log(this.todo);
      });
    });
  }

  createForm(){
    this.form = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required],
      dueTime: ['', Validators.required]
    });
  }

  updateTodo(todoDescription, todoStatus, todoPriority, todoDueDate, todoDueTime){
    this.route.params.subscribe(params => {
      console.log('params id = ' + params.id);
      this.todoService.updateToDo(todoDescription, todoStatus, todoPriority, todoDueDate, todoDueTime, parseInt(params.id, 10));
    });
  }

}
