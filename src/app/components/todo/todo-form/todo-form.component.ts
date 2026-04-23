import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo';
import { FormsModule } from '@angular/forms';
import { addDays, getToday } from '../../../utils/dateFormat';
@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  todo: Todo = {
    title: '',
    description: '',
    prioridade: 1,
    completed: false,
    start: getToday(),
    end: addDays(1),
  };

  @Output() create = new EventEmitter<Todo>();

  ngOnInit() {}

  submit() {
    this.create.emit(this.todo);

    this.todo = {
      title: '',
      description: '',
      prioridade: 0,
      completed: false,
      start: getToday(),
      end: addDays(1),
    };
  }
}
