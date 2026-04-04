import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Tarefas em a Fazer

  private todoTasks$ = new BehaviorSubject<any[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable();

  // Tarefas em Fazendo

  private doingTasks$ = new BehaviorSubject<any[]>([]);
  readonly doingTasks = this.todoTasks$.asObservable();

  // Tarefas em Concluido

  private doneTasks$ = new BehaviorSubject<any[]>([]);
  readonly doneTasks = this.todoTasks$.asObservable();
}
