/* beautify preserve:start */
import { pubsub } from "../index";
/* beautify preserve:end */
export const viewTodoModal = {
  init: () => {
    pubsub.add('getDetailsOfTodo', viewTodoModal.render);
    pubsub.add('foundProjectOfViewedTodo', viewTodoModal.fillProjectField);
  },
  render: (todo) => {
    const container = document.querySelector('body');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', viewTodoModal.closeModal)

    container.appendChild(modalOverlay);

    const form = document.createElement('form');
    form.classList = 'todo-form modal-content centered-position md:w-[600px]';

    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-3xl';
    header.textContent = todo.title;

    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'todo-desc';
    const descLabelContent = document.createElement('div');
    descLabelContent.classList = 'text-xl';
    descLabelContent.textContent = 'Description:';
    const descInput = document.createElement('p');
    descInput.name = 'todo-desc';
    descInput.id = 'todo-desc';
    descInput.textContent = todo.desc || 'No description provided';
    descInput.classList = 'form-item';
    descLabel.appendChild(descLabelContent);
    descLabel.appendChild(descInput);

    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'todo-date';
    const dateLabelContent = document.createElement('div');
    dateLabelContent.classList = 'text-xl';
    dateLabelContent.textContent = 'Deadline:';
    const dateInput = document.createElement('p');
    dateInput.type = 'date';
    dateInput.name = 'todo-date';
    dateInput.id = 'todo-date';
    dateInput.classList = 'form-item';
    dateInput.textContent = todo.format();
    dateLabel.appendChild(dateLabelContent);
    dateLabel.appendChild(dateInput);

    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'todo-project';
    const projectLabelContent = document.createElement('div');
    projectLabelContent.classList = 'text-xl';
    projectLabelContent.textContent = 'Project:';
    const projectInput = document.createElement('p');
    projectInput.name = 'project-id';
    projectInput.id = 'project-id';
    projectInput.classList = 'form-item';

    projectLabel.appendChild(projectLabelContent);
    projectLabel.appendChild(projectInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'todo-priority';
    const priorityLabelContent = document.createElement('div');
    priorityLabelContent.classList = 'text-xl';
    priorityLabelContent.textContent = 'Priority:';
    const priorityInput = document.createElement('p');
    priorityInput.name = 'todo-priority';
    priorityInput.id = 'todo-priority';
    priorityInput.classList = 'form-item';
    const highOption = document.createElement('option');
    highOption.textContent = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
    priorityInput.appendChild(highOption);
    priorityLabel.appendChild(priorityLabelContent);
    priorityLabel.appendChild(priorityInput);


    form.appendChild(header);
    form.appendChild(descLabel);
    form.appendChild(dateLabel);
    form.appendChild(projectLabel);
    form.appendChild(priorityLabel);

    container.appendChild(form);

    pubsub.emit('queryProject', {projectId: todo.projectId})
  },
  fillProjectField: (project) => {
  const projectName = document.querySelector('#project-id');
  projectName.textContent = project?.name || 'Not belong to any project';
  },
  closeModal: () => {
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
};