/* beautify preserve:start */
import { pubsub } from "../index";
import AddIcon from "../img/project-add.png"
/* beautify preserve:end */

export const projectHeader = {
  init: () => {
    pubsub.add('serveProjectHeader', projectHeader.render);
  },
  render: (project) => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const intro = document.createElement('div')
    intro.classList = 'flex flex-row items-center';

    const heading = document.createElement('h2');
    heading.classList = 'project-title';
    if (Array.isArray(project)) {
      heading.textContent = project[0].name;
      heading.dataset.projectId = project[0].id;
      intro.appendChild(heading);
    } else {
      heading.textContent = 'Welcome to the project page. Here you can view all of your current projects';
      intro.appendChild(heading);

      const addProjectContainer = document.createElement('span');
      addProjectContainer.classList = 'content-start flex flex-row gap-3 hover:text-blue-600 cursor-pointer';
      const addProjectIcon = document.createElement('img');
      addProjectIcon.classList = 'w-10';
      addProjectIcon.src = AddIcon;
      const addProjectLabel = document.createElement('p');
      addProjectLabel.classList = 'self-center';
      addProjectLabel.textContent = 'Add a project';

      addProjectContainer.appendChild(addProjectIcon);
      addProjectContainer.appendChild(addProjectLabel);
      addProjectContainer.addEventListener('pointerdown', projectHeader.serveProjectForm);

      intro.appendChild(addProjectContainer);
    }

    container.appendChild(intro);
  },
  serveProjectForm: () => {
    pubsub.emit('addNewProject');
  },
};