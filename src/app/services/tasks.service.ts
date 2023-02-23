import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HOST_URL } from 'server/constants';
import { Task } from 'server/types';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${HOST_URL}/tasks`);
  }
}
