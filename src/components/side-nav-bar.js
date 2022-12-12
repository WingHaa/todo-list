/* beautify preserve:start */
import { pubsub } from "../index";
import InboxIcon from '../img/mail.png';
import TodayIcon from '../img/calendar.png';
import UpcomingIcon from '../img/planner.png';
/* beautify preserve:end */

export const navSideBar = {
  render: () => {
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
      mainFilterContainer.appendChild(mainFilterItem);
    }

    const projectContainer = document.createElement('div');
    projectContainer.classList = 'group projects-filter border-t-2 border-[#3e4042]';

    const header = document.createElement('div');
    header.classList = 'text-2xl flex hover:bg-item-hover nav-item';
    header.textContent = 'Your projects';
    header.addEventListener('pointerdown', navSideBar.serveProject);

    projectContainer.appendChild(header);
    sideBar.appendChild(projectContainer);

    const projectDiv = document.createElement('div');
    projectDiv.classList = 'hover:bg-item-hover nav-item';
    projectDiv.textContent = 'Dumb project name with really longggggggggggggggggggggggggg word';
    projectContainer.appendChild(projectDiv);

    container.appendChild(contentDiv);

    pubsub.add('toggleNavSideBar', navSideBar.toggleNavSideBar);
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
    pubsub.emit(`serve${name}Header`);
    pubsub.emit('queryTodo', {
      type: 'filter',
      projectId: name.toLowerCase(),
    });
    pubsub.emit('serveTodoFooter');
  },
  serveProject: () => {
    pubsub.emit('queryProject', {
      type: 'nav',
    });
  },
};