import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Task } from 'server/types';

type ViewModeType = 'View' | 'Delete' | 'Edit';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task | undefined;

  displayMode: ViewModeType;

  constructor() {
    this.displayMode = 'View';
  }

  onDelete(task: Task): void {
    window.alert('Delete: ' + task?.id);
  }

  onEdit(task: Task): void {
    window.alert('Edit');
  }

  setDisplayMode(mode: ViewModeType): void {
    this.displayMode = mode;
  }
}
