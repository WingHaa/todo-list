import { pubsub } from "../index";
export const todayHeader = {
  init: () => {
    pubsub.add('serveTodayHeader', todayHeader.render);
  },
  render: () => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const heading = document.createElement('h2')
    heading.classList = 'content-heading font-bold text-xl';
    heading.textContent = `Here are the tasks that will be due today`;

    container.appendChild(heading)
  },
};