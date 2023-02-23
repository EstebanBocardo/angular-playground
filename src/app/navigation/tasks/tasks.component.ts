import { Component, OnInit } from '@angular/core';
import { Task } from 'server/types';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public isCreating: boolean;

  constructor(private tasksService: TasksService) {
    this.tasks = [];
    this.isCreating = false;
  }

  ngOnInit(): void {
    this.tasksService.getAll().subscribe((tasks) => (this.tasks = tasks));
  }

  toggleIsCreating(): void {
    this.isCreating = !this.isCreating;
  }
}
