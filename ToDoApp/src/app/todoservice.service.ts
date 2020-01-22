import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

 
  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addToDo(description, status, priority, dueDate, dueTime) {
    const obj = {
      description,
      priority,
      status,
      dueDate,
      dueTime
    };
    console.log('check object before posting ');
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getToDos() {
    return this.http.get(`${this.uri}/todos/1`);
  }

  editToDo(id) {
      return this.http.get(`${this.uri}/${id}`);
  }

  updateToDo(description, priority, status, dueDate, dueTime, id) {
    const obj = {
      description,
      priority,
      status,
      dueDate,
      dueTime
    };

    console.log(`${this.uri}/${Number(id)}`);

    this.http.put(`${this.uri}/${Number(id)}`, obj)
      .subscribe(res => console.log('Done'));
  }


  deleteToDo(id) {
    return this.http.delete(`${this.uri}/${Number(id)}`);
  }

}
