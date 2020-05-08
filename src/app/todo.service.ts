import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

import { ITodo } from './todo-list/todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  todoUrl = 'api/todoData';  // URL to web api


  getTodo(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todoUrl);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}