/* beautify preserve:start */
import { pubsub } from "../index";
import EditIcon from '../img/project-edit.png'
import DelIcon from '../img/project-delete.png'
/* beautify preserve:end */
export const projectContent = {
  init: () => {
    pubsub.add('serveProjectBody', projectContent.render);
    pubsub.add('projectCreated', projectContent.render);
  },
  render: projects => {
    if (projects.length < 1) return;
    const container = document.querySelector('main');

    projects.forEach(project => {
      const projectContainer = document.createElement('div');
      projectContainer.classList = 'project-item hover:border-item-hover';
      projectContainer.dataset.projectId = project.id;
      projectContainer.addEventListener('pointerdown', projectContent.handleClick);

      const projectName = document.createElement('div');
      projectName.classList = 'text-lg';
      projectName.textContent = project.name;

      const editProject = document.createElement('button');
      const editImg = document.createElement('img');
      editImg.id = 'project-edit';
      editImg.classList = 'w-10 hover:bg-item-hover';
      editImg.src = EditIcon;
      editProject.appendChild(editImg);
      // editProject.addEventListener('pointerdown', projectContent.editProject)

      const delProject = document.createElement('button');
      const delImg = document.createElement('img');
      delImg.id = 'project-delete';
      delImg.classList = 'w-10 hover:bg-item-hover';
      delImg.src = DelIcon;
      delProject.appendChild(delImg);
      // delProject.addEventListener('pointerdown', projectContent.deleteProject);

      projectContainer.appendChild(projectName);
      projectContainer.appendChild(editProject);
      projectContainer.appendChild(delProject);

      container.appendChild(projectContainer);
    });
  },
  handleClick: (ev) => {
    if (ev.target.id == 'project-edit') {
      const query = ev.target.closest('.project-item').dataset.projectId
      return console.log(query)
    };
    if (ev.target.id == 'project-delete') {
      const projectElement = ev.target.closest('.project-item');
      const projectId = projectElement.dataset.projectId;
      const projectName = ev.target.closest('div div').textContent;
      return pubsub.emit('confirmDeleteData', {
        type: 'project',
        name: projectName,
        projectId: projectId,
        element: projectElement
      });
    } else {
      const query = ev.target.closest('.project-item').dataset.projectId
      pubsub.emit('queryProject', {
        type: 'single',
        projectId: query
      });
      pubsub.emit('serveTodoFooter');
    }
  },
};