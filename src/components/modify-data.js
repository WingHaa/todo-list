/* beautify preserve:start */
import { pubsub } from "../index";
/* beautify preserve:end */

export const modificationModal = {
  init: () => {
    pubsub.add('modifyDataRequest', modificationModal.render);
  },
  render: (request) => {
    const container = document.querySelector('body')
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', modificationModal.closeModal)

    container.appendChild(modalOverlay);

    const form = document.createElement('form');
    form.classList = 'project-form modal-content centered-position md:w-[600px]';

    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-2xl pb-8';
    header.textContent = `Edit ${request.name}`;

    const nameLabel = document.createElement('label');

    if (request.type == 'project-edit') {
      nameLabel.htmlFor = 'project-name';
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'project-name';
      nameInput.id = 'project-name';
      nameInput.classList = 'form-item';
      nameInput.value = request.name;
      nameInput.addEventListener('input', modificationModal.controlSubmit);
      nameLabel.appendChild(nameInput);
    } else {}


    const buttonDiv = document.createElement('div');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('pointerdown', modificationModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Save';
    form.addEventListener('submit', (ev) => modificationModal.modifyData(ev, request));

    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);

    form.appendChild(header);
    form.appendChild(nameLabel)
    form.appendChild(buttonDiv);

    container.appendChild(form);
    pubsub.add('closeProjectForm', modificationModal.closeModal);
  },
  closeModal: (ev) => {
    ev.preventDefault();
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
  modifyData: (ev, request) => {
    ev.preventDefault();
    modificationModal.closeModal(ev);
    if (request.type == 'project-edit') {
      const newProjectName = Object.fromEntries(new FormData(ev.target))['project-name'];
      return pubsub.emit('projectModification', {
        type: request.type,
        name: newProjectName,
        projectId: request.projectId,
        element: request.element,
      });
    }
    if (request.type == 'todo-edit')
      return pubsub.emit('todoModification', {
        type: 'todo',
        todoId: request.todoId,
      });
  },
  controlSubmit: (ev) => {
    const button = document.querySelector('#submit');
    button.disabled = !ev.target.value.trim();
  },
};