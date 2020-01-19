import { Component, OnInit } from '@angular/core';

import { TodoserviceService }  from '../todoservice.service';

@Component({
  selector: 'app-view-to-do-list',
  templateUrl: './view-to-do-list.component.html',
  styleUrls: ['./view-to-do-list.component.css']
})
export class ViewToDoListComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
