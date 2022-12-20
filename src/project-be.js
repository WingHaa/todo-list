/* beautify preserve:start */
import { pubsub } from "./index"
/* beautify preserve:end */

const Project = function (prop) {
  this.name = prop['project-name'];
  this.id = prop['project-id'];
}

function serialize(arr) {
  let serialized = [];
  arr.forEach(function (obj) {
    serialized.push({
      "project-name": obj.name,
      "project-id": obj.id,
    });
  });
  localStorage.setItem('projects', JSON.stringify(serialized));
};

function deserialize() {
  let projects = localStorage.getObject('projects') || [];
  if (projects.length > 0)
    return projects.map(pojo => new Project(pojo));
  return [];
};

export const projectModule = {
  projects: [],
  init: () => {
    projectModule.projects = deserialize();
    loadSampleProject(projectModule.projects);
    pubsub.add('projectCreation', projectModule.createProject);
    pubsub.add('projectDeletion', projectModule.deleteProject);
    pubsub.add('projectModification', projectModule.editProject);
    pubsub.add('queryProject', projectModule.getProject);
  },
  createProject: (form) => {
    const latestProject = projectModule.projects[projectModule.projects.length - 1];
    /* beautify preserve:start */
    form['project-id'] = latestProject?.id + 1 || 1;
    /* beautify preserve:end */
    const project = new Project(form);
    projectModule.projects.push(project);
    serialize(projectModule.projects);
    pubsub.emit('projectUpdated', projectModule.projects);
  },
  getProject: (request) => {
    let result = [];
    // viewing all projects
    if (request.type == 'page') {
      pubsub.emit('serveProjectHeader');
      pubsub.emit('serveProjectBody', projectModule.projects);
      return;
    }
    if (request.type == 'nav') {
      pubsub.emit('buildProjectShortcut', projectModule.projects);
      return;
    }
    if (request.type == 'modal') {
      pubsub.emit('addNewTodo', projectModule.projects);
      return;
    }
    if (request.type == 'todo-edit') {
      request.projects = projectModule.projects;
      pubsub.emit('modifyDataRequest', request);
      return;
    }
    if (request.type == 'single-project') {
      // viewing a single project
      result = projectModule.projects.filter(project => project.id == request.projectId);
      pubsub.emit('serveProjectHeader', result);
      pubsub.emit('preRenderTodosContainer');
      pubsub.emit('queryTodo', request);
    } else {
      // get project name when viewing a single todo
      result = projectModule.projects.filter(project => project.id == request.projectId);
      pubsub.emit('foundProjectOfViewedTodo', result[0]);
    }
  },
  deleteProject: (id) => {
    for (let index = projectModule.projects.length - 1; index >= 0; index--) {
      const project = projectModule.projects[index];
      if (project.id == id) {
        projectModule.projects.splice(index, 1);
      }
    };
    serialize(projectModule.projects);
    // delete all todos that belong to the deleted project
    pubsub.emit('todoDeletion', {
      type: 'project',
      projectId: id
    });
    pubsub.emit('projectUpdated', projectModule.projects);
  },
  editProject: (request) => {
    const id = request.projectId;
    projectModule.projects.map(project => {
      if (project.id == id) {
        project.name = request.name;
        pubsub.emit('projectUpdated', projectModule.projects);
      };
    });
    serialize(projectModule.projects);
  },
};

function ProjectProp(title, id) {
  this["project-name"] = title;
  this["project-id"] = id;
};

let sampleProjectProps = [
  new ProjectProp('Web development education', 10001),
  new ProjectProp('Healthy lifestyle driver', 10002),
];

function loadSampleProject(arr) {
  const projects = sampleProjectProps.map(prop => new Project(prop));
  projects.forEach(obj => arr.push(obj));
}