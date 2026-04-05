import { Component, OnInit } from '@angular/core';
import { TodoApiServices } from '../../services/todo-api.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-home.component',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  todo:Todo[] = [];

  constructor(private service:TodoApiServices){}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(){
    this.service.getUsers().subscribe((data) => {
      this.todo = data;
    })

  }

}
