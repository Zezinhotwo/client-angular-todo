import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoApiServices {
  constructor (private http:HttpClient){}
  
  private url = "http://localhost:8080/todos";


  getUsers():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  }

  postUsers(obj:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.url,obj);
  }

}
