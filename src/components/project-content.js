/* beautify preserve:start */
import { pubsub } from "../index";
import EditIcon from '../img/project-edit.png'
import DelIcon from '../img/project-delete.png'
/* beautify preserve:end */
export const projectContent = {
  init: () => {
    pubsub.add('serveProjectBody', projectContent.render);
    pubsub.add('projectUpdated', projectContent.render);
    pubsub.add('projectModification', projectContent.modifyProject);
  },
  render: projects => {
    if (projects.length < 1) return;
    const container = document.querySelector('main');
    while (container.childNodes.length > 1) {
      container.removeChild(container.lastChild);
    }

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
    const request = ev.target.id;
    if (request == 'project-edit') {
      const projectElement = ev.target.closest('.project-item');
      const query = ev.target.closest('.project-item').dataset.projectId
      const projectName = ev.target.closest('div div').textContent;
      return pubsub.emit('modifyDataRequest', {
        type: request,
        name: projectName,
        projectId: query,
        element: projectElement
      });
    };
    if (request == 'project-delete') {
      const projectElement = ev.target.closest('.project-item');
      const projectId = projectElement.dataset.projectId;
      const projectName = ev.target.closest('div div').textContent;
      return pubsub.emit('confirmDeleteData', {
        type: request,
        name: projectName,
        projectId: projectId,
        element: projectElement
      });
    } else {
      const query = ev.target.closest('.project-item').dataset.projectId
      pubsub.emit('projectViewChange', ev)
      pubsub.emit('queryProject', {
        type: 'single',
        projectId: query
      });
      pubsub.emit('serveTodoFooter');
    }
  },
  modifyProject: (request) => {
    const name = request.element.querySelector('.text-lg');
    name.textContent = request.name;
  },
};