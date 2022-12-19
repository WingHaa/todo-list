/* beautify preserve:start */
import { pubsub } from "../index";
import addIcon from "../img/todo-add.png";
/* beautify preserve:end */

export const todoFooter = {
  init: () => {
    pubsub.add('serveTodoFooter', todoFooter.render);
  },
  render: () => {
    const container = document.querySelector('main');
    // create button to add todo
    const addTodoContainer = document.createElement('span');
    addTodoContainer.classList = 'content-start flex flex-row gap-3 hover:text-blue-600 cursor-pointer';
    addTodoContainer.id = 'add';
    const addTodoIcon = document.createElement('img');
    addTodoIcon.classList = 'w-10';
    addTodoIcon.src = addIcon;
    const addTodoLabel = document.createElement('p');
    addTodoLabel.classList = 'self-center';
    addTodoLabel.textContent = 'Add todo';

    addTodoContainer.appendChild(addTodoIcon);
    addTodoContainer.appendChild(addTodoLabel);
    addTodoContainer.addEventListener('pointerdown', todoFooter.serveTodoForm);

    container.appendChild(addTodoContainer);
  },
  serveTodoForm: () => {
    pubsub.emit('queryProject', {
      type: 'modal',
    });
  },
};