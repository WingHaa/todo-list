/* beautify preserve:start */
import { pubsub } from "../index";
import InboxIcon from '../img/mail.png';
import TodayIcon from '../img/calendar.png';
import UpcomingIcon from '../img/planner.png';
/* beautify preserve:end */

export const navSideBar = {
  render: () => {
    pubsub.add('toggleNavSideBar', navSideBar.toggleNavSideBar);
    pubsub.add('buildProjectShortcut', navSideBar.renderProjectShortcut);
    pubsub.add('projectViewChange', navSideBar.controlBackground);
    pubsub.add('todoCreated', navSideBar.refreshCurrentPage);

    const container = document.querySelector('body')
    const contentDiv = document.querySelector('.content')
    const sideBar = document.createElement('nav');
    sideBar.classList = 'side-bar bg-nav-side-bar lg:visible';

    const mainFilterContainer = document.createElement('div')
    mainFilterContainer.classList = 'main-filter px-2 py-2';
    sideBar.appendChild(mainFilterContainer);
    contentDiv.appendChild(sideBar);

    const main = document.createElement('main');
    main.classList = 'lg:ml-72 ml-5';
    contentDiv.appendChild(main);

    const mainFilters = {
      Inbox: InboxIcon,
      Today: TodayIcon,
      Upcoming: UpcomingIcon
    };

    for (const [filter, image] of Object.entries(mainFilters)) {
      const mainFilterItem = document.createElement('div');
      mainFilterItem.classList = 'hover:bg-item-hover nav-item';
      if (filter == 'Inbox') mainFilterItem.classList.add('bg-item-hover');

      const icon = document.createElement('span');
      const iconImage = document.createElement('img');
      iconImage.classList = 'h-11 w-11 inline';
      iconImage.src = image;
      icon.appendChild(iconImage);

      const mainFilterTitle = document.createElement('span');
      mainFilterTitle.textContent = filter;

      mainFilterItem.appendChild(icon);
      mainFilterItem.appendChild(mainFilterTitle);
      mainFilterItem.addEventListener('pointerdown', navSideBar.serveMainFilter);
      mainFilterItem.dataset.projectId = filter.toLocaleLowerCase();
      mainFilterContainer.appendChild(mainFilterItem);
    }

    const projectContainer = document.createElement('div');
    projectContainer.classList = 'group projects-filter border-t-2 border-[#3e4042]';

    const header = document.createElement('div');
    header.classList = 'text-2xl flex hover:bg-item-hover nav-item';
    header.textContent = 'Your projects';
    header.addEventListener('pointerdown', navSideBar.serveProjectPage);

    projectContainer.appendChild(header);
    sideBar.appendChild(projectContainer);

    pubsub.emit('queryProject', {
      type: 'nav'
    });

    container.appendChild(contentDiv);
    const filters = container.querySelectorAll('.hover\\:bg-item-hover');
    filters.forEach(element => {
      element.addEventListener('pointerdown', navSideBar.controlBackground);
    });
  },
  toggleNavSideBar: () => {
    const sideBar = document.querySelector('.side-bar');
    const main = document.querySelector('main');
    if (sideBar.style.display !== 'none') {
      sideBar.style.display = 'none';
      main.classList.remove('lg:ml-72');
    } else {
      sideBar.style.display = 'block';
      main.classList.add('lg:ml-72');
    };
  },
  serveMainFilter: (ev) => {
    const name = ev.target.textContent;
    const id = ev.target.dataset.projectId;
    pubsub.emit(`serve${name}Header`);
    pubsub.emit('preRenderTodosContainer');
    pubsub.emit('queryTodo', {
      projectId: id,
    });
    pubsub.emit('serveTodoFooter');
  },
  serveProjectPage: () => {
    pubsub.emit('queryProject', {
      type: 'page',
    });
  },
  renderProjectShortcut: (projects) => {
    const projectContainer = document.querySelector('.projects-filter');
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList = 'hover:bg-item-hover nav-item';
      projectDiv.textContent = project.name;
      projectDiv.dataset.projectId = project.id;
      projectDiv.addEventListener('pointerdown', navSideBar.serveSingleProjectPage);
      projectContainer.appendChild(projectDiv);
    });
  },
  serveSingleProjectPage: (ev) => {
    pubsub.emit('queryProject', {
      projectId: ev.target.dataset.projectId,
    });
    pubsub.emit('serveTodoFooter')
  },
  controlBackground: (ev) => {
    const project = ev.target.closest('.nav-item') || ev.target.closest('.project-item');
    const filters = document.querySelector('.side-bar').querySelectorAll('.nav-item');
    filters.forEach(element => {
      element.classList.remove('bg-item-hover');
      if (element.dataset.projectId == project.dataset.projectId)
        element.classList.add('bg-item-hover');
    });
  },
  refreshCurrentPage: () => {
  const currentFilter = document.querySelector('.bg-item-hover');
  const event = new Event('pointerdown', {bubbles: true});
  currentFilter.dispatchEvent(event);
  },
};