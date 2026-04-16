import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoApiServices } from '../../../services/todo-api.service';
import { Todo } from '../../../models/todo';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home.component',
  imports: [CommonModule, TodoFormComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo?: Todo;
  showForm: boolean = true;
  constructor(
    private service: TodoApiServices,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.service.getTodos().subscribe((data) => {
      this.todos = data;
      this.cd.detectChanges();
    });
  }

  createTodo(todo: Todo) {
    this.service.postTodo(todo).subscribe((newTodo) => {
      this.todos.push(newTodo);
       this.cd.detectChanges();
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
