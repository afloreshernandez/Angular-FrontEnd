import { Component, OnInit } from '@angular/core';
import { TodoserviceService }  from '../todoservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms'; 

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  form : FormGroup;
  constructor(private fb: FormBuilder, private todoService: TodoserviceService, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      todoDescription: ['', Validators.required], 
      todoStatus: ['', Validators.required],
      todoPriority: ['', Validators.required],
      todoDueDate: ['', Validators.required],
      todoDueTime: ['', Validators.required]
    })
  }

  onSubmit(todoDescription, todoStatus, todoPriority, todoDueDate, todoDueTime){
    console.log(this.form);
    this.todoService.addToDo(todoDescription, todoStatus, todoPriority, todoDueDate, todoDueTime);
  }

}
