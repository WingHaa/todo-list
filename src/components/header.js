import { pubsub } from "../pubsub";

export const header = {
  render: container => {
  const header = document.createElement('header');
  header.classList = 'header bg-top-bar grid-cols-menu-toggle';

  const sideBarButton = document.createElement('button');
  sideBarButton.classList = 'left-menu-toggle hover:border-white hover:border-2 m-2 relative';
  const sideBarButtonImage = document.createElement('img');
  sideBarButtonImage.classList = 'h-8 absolute centered-position';
  sideBarButtonImage.src = '/img/menu.png';
  sideBarButton.appendChild(sideBarButtonImage);

  const headerTitle = document.createElement('span');
  headerTitle.classList = 'place-self-center text-white';
  headerTitle.textContent = 'Todo';

  header.appendChild(sideBarButton);
  header.appendChild(headerTitle);

  sideBarButton.addEventListener('pointerdown', header.toggleNavSideBar)

  const main = document.createElement('div');
  main.classList = 'main pt-14';

  container.appendChild(header);
  container.appendChild(main);
  },
  toggleNavSideBar: function() {
    pubsub.emit('toggleNavSideBar');
  }
};

function renderHeader() {
  const header = document.createElement('header');
  header.classList = 'header bg-top-bar grid-cols-menu-toggle';

  const sideBarButton = document.createElement('button');
  sideBarButton.classList = 'left-menu-toggle hover:border-white hover:border-2 m-2 relative';
  const sideBarButtonImage = document.createElement('img');
  sideBarButtonImage.classList = 'h-8 absolute centered-position';
  sideBarButtonImage.src = '/img/menu.png';
  sideBarButton.appendChild(sideBarButtonImage);

  const headerTitle = document.createElement('span');
  headerTitle.classList = 'place-self-center text-white';
  headerTitle.textContent = 'Todo';

  header.appendChild(sideBarButton);
  header.appendChild(headerTitle);

  const main = document.createElement('div');
  main.classList = 'main pt-14';

  body.appendChild(header);
  body.appendChild(main);
};