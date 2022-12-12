import { pubsub } from "../index";
export const todoHeader = {
  init: () => {
    pubsub.add('serveTodoHeader', todoHeader.render);
  },
  render: (todo) => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const heading = document.createElement('h2')
    heading.classList = 'content-heading font-bold text-xl';
    heading.textContent = todo.name;

    container.appendChild(heading)
  },
};