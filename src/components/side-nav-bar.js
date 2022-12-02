import { container } from "webpack";
import { pubsub } from "../pubsub";

export const navSideBar = {
  render: container => {
    const main = document.querySelector('.main')
    const sideBar = document.createElement('nav');
    sideBar.classList = 'side-bar bg-nav-side-bar lg:visible';

    const mainFilterContainer = document.createElement('div')
    mainFilterContainer.classList = 'main-filter px-2 py-2';
    sideBar.appendChild(mainFilterContainer);
    main.appendChild(sideBar);

    const mainFilters = {
      Inbox: '/img/mail.png',
      Today: '/img/calendar.png',
      Upcoming: '/img/planner.png'
    };

    for (const [filter, imgPath] of Object.entries(mainFilters)) {
      const mainFilterItem = document.createElement('div');
      mainFilterItem.classList = 'hover:bg-item-hover nav-item';

      const icon = document.createElement('span');
      const iconImage = document.createElement('img');
      iconImage.classList = 'h-11 w-11 inline';
      iconImage.src = imgPath;
      icon.appendChild(iconImage);

      const mainFilterTitle = document.createElement('span');
      mainFilterTitle.textContent = filter;

      mainFilterItem.appendChild(icon);
      mainFilterItem.appendChild(mainFilterTitle);
      mainFilterContainer.appendChild(mainFilterItem);
    }

    const projectContainer = document.createElement('div');
    projectContainer.classList = 'group projects-filter border-t-2 border-[#3e4042]';

    const header = document.createElement('div');
    header.classList = 'text-2xl flex hover:bg-item-hover nav-item';
    header.textContent = 'Your projects';

    projectContainer.appendChild(header);
    sideBar.appendChild(projectContainer);

    const projectDiv = document.createElement('div');
    projectDiv.classList = 'hover:bg-item-hover nav-item';
    projectDiv.textContent = 'Dumb project name with really longggggggggggggggggggggggggg word';
    projectContainer.appendChild(projectDiv);

    container.appendChild(main);

    pubsub.add('toggleNavSideBar', navSideBar.toggleNavSideBar);
  },
  toggleNavSideBar: function() {
    const sideBar = document.querySelector('.side-bar');
    sideBar.style.display = !sideBar.style.display;
  }
}

function renderNavSideBar() {
  const main = document.querySelector('.main')
  const sideBar = document.createElement('nav');
  sideBar.classList = 'side-bar bg-nav-side-bar lg:visible';

  const mainFilter = document.createElement('div')
  mainFilter.classList = 'main-filter px-2 py-2';
  sideBar.appendChild(mainFilter);
  body.appendChild(sideBar);
  sideBar.appendChild(mainFilter);
  main.appendChild(sideBar);

  renderMainFilterItems();
  renderProjectFilter();
};

function renderMainFilterItems() {
  const mainFilter = document.querySelector('.main-filter');
  const mainFilters = {
    Inbox: '/img/mail.png',
    Today: '/img/calendar.png',
    Upcoming: '/img/planner.png'
  };
  for (const [filter, imgPath] of Object.entries(mainFilters)) {
    const mainFilterItem = document.createElement('div');
    mainFilterItem.classList = 'hover:bg-item-hover nav-item';

    const icon = document.createElement('span');
    const iconImage = document.createElement('img');
    iconImage.classList = 'h-11 w-11 inline';
    iconImage.src = imgPath;
    icon.appendChild(iconImage);

    const mainFilterTitle = document.createElement('span');
    mainFilterTitle.textContent = filter;

    mainFilterItem.appendChild(icon);
    mainFilterItem.appendChild(mainFilterTitle);
    mainFilter.appendChild(mainFilterItem);
  }
};

function renderProjectFilter() {
  const sideBar = document.querySelector('.side-bar');
  const projectContainer = document.createElement('div');
  projectContainer.classList = 'group projects-filter border-t-2 border-[#3e4042]';

  const header = document.createElement('div');
  header.classList = 'text-2xl flex hover:bg-item-hover nav-item';
  header.textContent = 'Your projects';

  projectContainer.appendChild(header);
  sideBar.appendChild(projectContainer);

  //this need update with project query module

  // if (projects !== undefined)
  //   projects.forEach(project => {
  //     const projectDiv = document.createElement('div');
  //     projectDiv.classList = 'hover:bg-item-hover nav-item';
  //     projectDiv.textContent = project.name;
  //     projectContainer.appendChild(projectDiv);
  //   });
  // else return;

  //sample placeholder project

  const projectDiv = document.createElement('div');
  projectDiv.classList = 'hover:bg-item-hover nav-item';
  projectDiv.textContent = 'Dumb project name with really longggggggggggggggggggggggggg word';
  projectContainer.appendChild(projectDiv);
};