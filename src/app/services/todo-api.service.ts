import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoApiServices {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  postTodo(obj: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, obj);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
