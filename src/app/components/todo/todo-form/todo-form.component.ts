import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  todo: Todo = {
    title: '',
    description: '',
    completed: false,
  };

  @Output() create = new EventEmitter<Todo>();

  submit() {
    this.create.emit(this.todo);

    this.todo = {
      title: '',
      description: '',
      completed: false,
    };
  }
}
