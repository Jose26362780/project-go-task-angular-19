import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Tarefas em a Fazer

  private todoTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable();

  // Tarefas em Fazendo

  private doingTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.todoTasks$.asObservable();

  // Tarefas em Concluido

  private doneTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.todoTasks$.asObservable();
}
