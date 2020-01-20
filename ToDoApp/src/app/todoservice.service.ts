import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

 
  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addToDo(todoDescription, todoStatus, todoPriority, todoDueDate, todoDueTime) {
    const obj = {
      todoDescription,
      todoPriority,
      todoStatus,
      todoDueDate,
      todoDueTime
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

  updateToDo(todoDescription, todoPriority, todoStatus, todoDueDate, todoDueTime, id) {
    const obj = {
      todoDescription,
      todoPriority,
      todoStatus,
      todoDueDate,
      todoDueTime
    };

    console.log(`${this.uri}/${Number(id)}`);

    this.http.put(`${this.uri}/${Number(id)}`, obj)
      .subscribe(res => console.log('Done'));
  }


  deleteToDo(id) {
    return this.http.delete(`${this.uri}/${Number(id)}`);
  }

}
