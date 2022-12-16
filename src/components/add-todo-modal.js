/* beautify preserve:start */
import { pubsub } from "../index";
/* beautify preserve:end */
export const todoModal = {
  init: () => {
    pubsub.add('addNewTodo', todoModal.render);
  },
  render: (projects) => {
    const container = document.querySelector('body');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', todoModal.closeModal)

    container.appendChild(modalOverlay);

    const form = document.createElement('form');
    form.classList = 'todo-form modal-content centered-position md:w-[600px]';

    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-3xl';
    header.textContent = 'Add new todo';

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'todo-name';
    const nameLabelContent = document.createElement('div');
    nameLabelContent.classList = 'text-xl';
    nameLabelContent.textContent = 'Todo name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'todo-name';
    nameInput.id = 'todo-name';
    nameInput.classList = 'form-item';
    nameInput.addEventListener('input', todoModal.controlSubmit);
    nameLabel.appendChild(nameLabelContent);
    nameLabel.appendChild(nameInput);

    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'todo-desc';
    const descLabelContent = document.createElement('div');
    descLabelContent.classList = 'text-xl';
    descLabelContent.textContent = 'What are the details of the todo';
    const descInput = document.createElement('textarea');
    descInput.rows = 3;
    descInput.name = 'todo-desc';
    descInput.id = 'todo-desc';
    descInput.classList = 'form-item';
    descLabel.appendChild(descLabelContent);
    descLabel.appendChild(descInput);

    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'todo-date';
    const dateLabelContent = document.createElement('div');
    dateLabelContent.classList = 'text-xl';
    dateLabelContent.textContent = 'When is the deadline';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'todo-date';
    dateInput.id = 'todo-date';
    dateInput.classList = 'form-item';
    dateInput.valueAsDate = new Date();
    dateLabel.appendChild(dateLabelContent);
    dateLabel.appendChild(dateInput);

    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'todo-project';
    const projectLabelContent = document.createElement('div');
    projectLabelContent.classList = 'text-xl';
    projectLabelContent.textContent = 'Add this todo to project:';
    const projectInput = document.createElement('select');
    projectInput.name = 'project-id';
    projectInput.id = 'project-id';
    projectInput.classList = 'form-item';

    const defaultOption = document.createElement('option');
    defaultOption.value = '0';
    defaultOption.textContent = 'Inbox';
    projectInput.appendChild(defaultOption);
    if (projects) {
      for (let index = 0; index < projects.length; index++) {
        const project = projects[index];
        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        projectInput.appendChild(option);
        const currentProjectHeader = document.querySelector('.project-title');
        if (currentProjectHeader) {
          const currentProjectId = currentProjectHeader.dataset.projectId;
          if (currentProjectId == project.id) projectInput.value = project.id;
        }
      }
    }
    projectLabel.appendChild(projectLabelContent);
    projectLabel.appendChild(projectInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'todo-priority';
    const priorityLabelContent = document.createElement('div');
    priorityLabelContent.classList = 'text-xl';
    priorityLabelContent.textContent = 'How urgent is it?';
    const priorityInput = document.createElement('select');
    priorityInput.name = 'todo-priority';
    priorityInput.id = 'todo-priority';
    priorityInput.classList = 'form-item';
    const highOption = document.createElement('option');
    highOption.value = 'high';
    highOption.textContent = 'High';
    const medOption = document.createElement('option');
    medOption.value = 'med';
    medOption.textContent = 'Medium';
    const lowOption = document.createElement('option');
    lowOption.value = 'low';
    lowOption.textContent = 'Low';
    priorityInput.appendChild(highOption);
    priorityInput.appendChild(medOption);
    priorityInput.appendChild(lowOption);
    priorityLabel.appendChild(priorityLabelContent);
    priorityLabel.appendChild(priorityInput);

    const buttonDiv = document.createElement('button');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('pointerdown', todoModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Confirm';
    confirmButton.disabled = true;
    form.addEventListener('submit', todoModal.submitForm);

    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);

    form.appendChild(header);
    form.appendChild(nameLabel);
    form.appendChild(descLabel);
    form.appendChild(dateLabel);
    form.appendChild(projectLabel);
    form.appendChild(priorityLabel);
    form.appendChild(buttonDiv);

    container.appendChild(form);
    pubsub.add('closeTodoForm', todoModal.closeModal);
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
    pubsub.emit('todoCreation', formProps);
    todoModal.closeModal(ev);
  },
};