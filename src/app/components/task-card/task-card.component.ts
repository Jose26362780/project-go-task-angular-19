import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  private readonly _modalControllService = inject(ModalControllerService);

  openEditTaskModal() {
    const dialogRef = this._modalControllService.openEditTaskModal({
      name: 'Nome Tarefa',
      description: 'Descrição da tarefa',
    });

    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa alterada: ', taskForm);
    });
  }
}
