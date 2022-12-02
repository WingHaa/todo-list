import {header} from './components/header';
import {navSideBar} from './components/side-nav-bar';


window.addEventListener('DOMContentLoaded', renderHomePage);
function renderHomePage() {
  // renderHeader();
  // renderNavSideBar();

  // // create a container for project or todo viewing
  // const content = document.createElement('main');
  // content.classList = 'content lg:ml-72 ml-5';
  // body.appendChild(content);

  // renderProjectPage();
  // renderTodoPage(); // for testing remove this later
  // renderModalOverlay();
  // renderProjectModal();
  // renderTodoModal();
  const body = document.querySelector('body');
  header.render(body);
  navSideBar.render(body);
  console.log('i run')
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
}