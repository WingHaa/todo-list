/* beautify preserve:start */
import { pubsub } from "../index";
/* beautify preserve:end */
export const projectModal = {
  init: () => {
    pubsub.add('addNewProject', projectModal.render);
  },
  render: () => {
    const container = document.querySelector('body')
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', projectModal.closeModal)

    container.appendChild(modalOverlay);

    const form = document.createElement('form');
    form.classList = 'project-form modal-content centered-position md:w-[600px]';

    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-3xl';
    header.textContent = 'Add new project';

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'project-name';
    const labelContent = document.createElement('div');
    labelContent.classList = 'text-xl';
    labelContent.textContent = 'Project name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'project-name';
    nameInput.id = 'project-name';
    nameInput.classList = 'form-item';
    nameInput.addEventListener('input', projectModal.controlSubmit);
    nameLabel.appendChild(labelContent);
    nameLabel.appendChild(nameInput);

    const buttonDiv = document.createElement('div');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('pointerdown', projectModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Confirm';
    confirmButton.disabled = true;
    form.addEventListener('submit', projectModal.submitForm);

    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);

    form.appendChild(header);
    form.appendChild(nameLabel);
    form.appendChild(buttonDiv);

    container.appendChild(form);
    pubsub.add('closeProjectForm', projectModal.closeModal);
  },
  closeModal: (ev) => {
    ev.preventDefault();
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
  controlSubmit: (ev) => {
    const button = document.querySelector('#submit');
    button.disabled = !ev.target.value.trim();
  },
  submitForm: (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const formProps = Object.fromEntries(formData);
    pubsub.emit('projectCreation', formProps);
    projectModal.closeModal(ev);
  },
};