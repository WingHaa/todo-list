import {
  pubsub
} from "../index";

export const confirmDeletionModal = {
  init: () => {
    pubsub.add('confirmDeleteData', confirmDeletionModal.render);
  },
  render: (request) => {
    const container = document.querySelector('body')
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', confirmDeletionModal.closeModal)

    container.appendChild(modalOverlay);

    const form = document.createElement('form');
    form.classList = 'project-form modal-content centered-position md:w-[600px]';

    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-2xl';
    if (request.type == 'project') {
    header.textContent = `Are you sure you want to delete ${request.name}? All todos associated with ${request.name} will get delete too.`;
    } else {
    header.textContent = `Are you sure you want to delete ${request.name}`;
    }

    const buttonDiv = document.createElement('div');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel'; cancelButton.addEventListener('pointerdown', confirmDeletionModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Delete';
    form.addEventListener('submit', (ev) => confirmDeletionModal.deleteData(ev, request));

    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);

    form.appendChild(header);
    form.appendChild(buttonDiv);

    container.appendChild(form);
    pubsub.add('closeProjectForm', confirmDeletionModal.closeModal);
  },
  closeModal: (ev) => {
    ev.preventDefault();
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
  deleteData: (ev, request) => {
    ev.preventDefault();
    request.element.remove();
    confirmDeletionModal.closeModal(ev);
    if (request.type == 'project') pubsub.emit('projectDeletion', request.projectId);
    // if (request.type == 'todo')
  },
};