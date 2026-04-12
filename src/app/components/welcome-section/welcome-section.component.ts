import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
})
export class WelcomeSectionComponent {
  private readonly _modalControllService = inject(ModalControllerService);
  private readonly _taskService = inject(TaskService);

  openNewTaskModal() {
    const dialogRef = this._modalControllService.openNewTaskModal();

    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa criada: ', taskForm);
      if (taskForm) {
        this._taskService.addTask(taskForm);
      }
    });
  }
}
