import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../ITasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: ITask): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: ITask): void {
    this.onToggleReminder.emit(task);
  }


}
