/* beautify preserve:start */
import { pubsub } from "../index";
/* beautify preserve:end */
export const inboxHeader = {
  init: () => {
    pubsub.add('serveInboxHeader', inboxHeader.render);
  },
  render: () => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const heading = document.createElement('h2')
    heading.classList = 'content-heading font-bold text-xl';
    heading.textContent = `Showing all of your available todos`;

    container.appendChild(heading)
  },
};