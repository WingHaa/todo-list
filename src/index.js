/* beautify preserve:start */
import './style.css';
import { projectModule } from './project-be';
import { todoModule } from './todo-be';
import { header } from './components/site-header';
import { navSideBar } from './components/side-nav-bar';
import { projectHeader } from './components/project-header';
import { projectContent } from './components/project-content';
import { todoHeader } from './components/todo-header';
import { inboxHeader } from './components/inbox-header';
import { todayHeader } from './components/today-header';
import { upcomingHeader } from './components/upcoming-header';
import { todoContent } from './components/todo-content';
import { todoFooter } from './components/todo-footer';
import { projectModal } from './components/add-project-modal';
import { todoModal } from './components/add-todo-modal';
import { confirmDeletionModal } from './components/delete-confirmation';
/* beautify preserve:end */

window.addEventListener('DOMContentLoaded', renderHomePage);
function renderHomePage() {
  const body = document.querySelector('body');
  header.render(body);
  navSideBar.render();
  projectModule.init();
  todoModule.init();
  inboxHeader.init();
  todayHeader.init();
  upcomingHeader.init();
  projectHeader.init();
  todoHeader.init();

  projectContent.init();
  todoContent.init();

  todoFooter.init();

  projectModal.init();
  todoModal.init();
  confirmDeletionModal.init();

  pubsub.emit('serveInboxHeader')
  pubsub.emit('queryTodo', {projectId: 'inbox'})
  pubsub.emit('serveTodoFooter');
};

export const pubsub = {
  events: [],
  add: function (event, method) {
    this.events[event] = this.events[event] || []
    this.events[event].push(method)
  },
  remove: function (event, method) {
    if (this.events[event]) this.events[event] = this.events[event].filter(fn => fn !== method)
  },
  emit: function (event, data) {
    this.events[event].forEach(method => {
      method(data);
    });
  }
};