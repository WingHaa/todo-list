/* beautify preserve:start */
import { pubsub } from "./index"
/* beautify preserve:end */

const Project = function (prop) {
  this.name = prop['project-name'];
}

export const projectModule = {
  projects: [{
      name: 'Project A',
      id: '1'
    },
    {
      name: 'Project B',
      id: '2'
    },
    {
      name: 'Project C',
      id: '3'
    },
    {
      name: 'Project D',
      id: '4'
    },
  ],
  init: () => {
    pubsub.add('projectCreation', projectModule.createProject);
    pubsub.add('projectDeletion', projectModule.deleteProject);
    pubsub.add('queryProject', projectModule.getProject);
  },
  createProject: (form) => {
    const project = new Project(form);
    const latestProject = projectModule.projects[projectModule.projects.length - 1];
    /* beautify preserve:start */
    project.id = latestProject?.id + 1 || 1;
    /* beautify preserve:end */
    projectModule.projects.push(project);
    pubsub.emit('projectCreated', [project]);
  },
  getProject: (request) => {
    let result = [];
    // viewing all projects
    if (request.type == 'nav') {
      result = projectModule.projects;
      pubsub.emit('serveProjectHeader');
      pubsub.emit('serveProjectBody', result);
      return;
    }
    if (request.type == 'modal') {
      result = projectModule.projects;
      pubsub.emit('addNewTodo', result);
      return;
    } else {
      // viewing a single project
      result = projectModule.projects.filter(project => project.id == request.projectId);
      pubsub.emit('serveProjectHeader', result);
      pubsub.emit('queryTodo', request);
    }
  },
  deleteProject: (id) => {
    for (let index = projectModule.projects.length - 1; index >= 0; index--) {
      const project = projectModule.projects[index];
      if (project.id == id) {
        projectModule.projects.splice(index, 1);
      }
    };
    pubsub.emit('todoDeletion', {
      // sending type so todo be know it is project related deletion
      type: 'project',
      projectId: id
    })
  },
};