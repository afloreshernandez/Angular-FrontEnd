import { Injectable, Inject } from '@angular/core';
import  { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class ToDoService {

    uri = 'http://localhost:8080/todos';
  
    constructor(private http: HttpClient) { }
  
    addToDo(toDoDescription, toDoPriority, toDoStatus, toDoDeadline) {
      const obj = {
        toDoDescription,
        toDoPriority,
        toDoStatus,
        toDoDeadline
      };
      console.log('check object before posting ');
      console.log(obj);
      this.http.post(`${this.uri}`, obj)
          .subscribe(res => console.log('Done'));
    }
  
    getToDos() {
      return this.http.get(`${this.uri}`);
    }
  
    editToDo(id) {
        return this.http.get(`${this.uri}/${id}`);
    }
  
    updateProduct(toDoDescription, toDoPriority, toDoStatus, toDoDeadline, id) {
      const obj = {
        toDoDescription,
        toDoPriority,
        toDoStatus,
        toDoDeadline
      };
  
      console.log(`${this.uri}/${Number(id)}`);
  
      this.http.put(`${this.uri}/${Number(id)}`, obj)
        .subscribe(res => console.log('Done'));
    }
  
  
    deleteToDo(id) {
      return this.http.delete(`${this.uri}/${Number(id)}`);
    }
  
  }
  