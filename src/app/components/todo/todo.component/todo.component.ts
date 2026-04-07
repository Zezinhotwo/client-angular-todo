import { Component, OnInit } from '@angular/core';
import { TodoApiServices } from '../../../services/todo-api.service';
import { Todo } from '../../../models/todo';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home.component',
  imports: [CommonModule, TodoFormComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo?: Todo;
  showForm: boolean = false;
  constructor(private service: TodoApiServices) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.service.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  createTodo(todo: Todo) {
    this.service.postTodo(todo).subscribe(() => {
      this.loadTodos();
    });
  }

  deleteTodo(id: number) {
    this.service.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
