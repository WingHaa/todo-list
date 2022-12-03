import { pubsub } from "../index";
import ButtonIcon from '../img/menu.png';

export const header = {
  render: container => {
  const headerDiv = document.createElement('header');
  headerDiv.classList = 'header bg-top-bar grid-cols-menu-toggle';

  const sideBarButton = document.createElement('button');
  sideBarButton.classList = 'left-menu-toggle hover:border-white hover:border-2 m-2 relative';
  const sideBarButtonImage = document.createElement('img');
  sideBarButtonImage.classList = 'h-8 absolute centered-position';
  sideBarButtonImage.src = ButtonIcon;
  sideBarButton.appendChild(sideBarButtonImage);

  const headerTitle = document.createElement('span');
  headerTitle.classList = 'place-self-center text-white';
  headerTitle.textContent = 'Todo';

  headerDiv.appendChild(sideBarButton);
  headerDiv.appendChild(headerTitle);


  const main = document.createElement('div');
  main.classList = 'main pt-14';

  container.appendChild(headerDiv);
  container.appendChild(main);
  sideBarButton.addEventListener('pointerdown', header.toggleNavSideBar)
  },
  toggleNavSideBar:() => {
    pubsub.emit('toggleNavSideBar');
  },
};