/* beautify preserve:start */
import { pubsub } from "../index";
import EditIcon from '../img/project-edit.png';
import DelIcon from '../img/project-delete.png';
/* beautify preserve:end */

export const todoContent = {
  init: () => {
    pubsub.add('serveTodoBody', todoContent.render);
    pubsub.add('preRenderTodosContainer', todoContent.renderTodosContainer);
  },
  renderTodosContainer: () => {
    const container = document.querySelector('main');
    const todosBody = document.createElement('div');
    todosBody.classList = 'todos-container';
    container.appendChild(todosBody);
  },
  render: todos => {
    const container = document.querySelector('.todos-container');
    container.innerHTML = ''; //clear old contents if there are any
    if (todos.length < 1) {
      const notice = document.createElement('h2');
      notice.textContent = `There is no todo added yet.`;
      container.appendChild(notice);
      return;
    };

    todos.forEach(todo => {
      const todoContainer = document.createElement('div');
      todoContainer.classList = `todo-item  border-priority-${todo.priority} hover:border-item-hover`;
      todoContainer.dataset.projectId = todo.projectId;
      todoContainer.dataset.todoId = todo.todoId;

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox';
      checkbox.id = 'todo-complete-toggle';
      checkbox.classList = `check-box border-priority-${todo.priority} hover:border-item-hover before:shadow-checkbox-${todo.priority} before:check-mark before:scale-0 before:checked:scale-100`;
      checkbox.checked = todo.complete;

      const title = document.createElement('div')
      title.classList = 'title';
      title.textContent = todo.title;

      const deadline = document.createElement('div');
      deadline.classList = 'due-date';
      deadline.textContent = todo.getRemainingTime();
      deadline.title = todo.dueDate;

      const descContainer = document.createElement('div');
      const descContent = document.createElement('p');
      descContainer.classList = 'description';
      descContent.textContent = todo.desc;
      descContainer.appendChild(descContent);

      const edit = document.createElement('button');
      edit.classList = 'todo-edit';
      const editIcon = document.createElement('img');
      editIcon.classList = 'w-10 hover:bg-item-hover';
      editIcon.id = 'todo-edit';
      editIcon.src = EditIcon;
      edit.appendChild(editIcon);

      const deleteTodoButton = document.createElement('button');
      deleteTodoButton.classList = 'todo-delete';
      const delIcon = document.createElement('img');
      delIcon.classList = 'w-10 hover:bg-item-hover';
      delIcon.id = 'todo-delete';
      delIcon.src = DelIcon;
      deleteTodoButton.appendChild(delIcon);

      todoContainer.addEventListener('pointerdown', todoContent.handleClick)
      todoContainer.appendChild(checkbox);
      todoContainer.appendChild(title);
      todoContainer.appendChild(deadline);
      todoContainer.appendChild(descContainer);
      todoContainer.appendChild(edit);
      todoContainer.appendChild(deleteTodoButton);


      container.appendChild(todoContainer);
    });
  },
  handleClick: (ev) => {
    const request = ev.target.id;
    if (request == 'todo-complete-toggle') {
      const query = ev.target.closest('.todo-item').dataset.todoId
      return pubsub.emit('todoToggleCompletion', query);
    };
    if (request == 'todo-edit') {
      const todoElement = ev.target.closest('.todo-item');
      const todoName = todoElement.querySelector('.title').textContent;
      const projectId = todoElement.dataset.projectId;
      const currentTodoId = todoElement.dataset.todoId;
      return pubsub.emit('queryProject', {
        type: request,
        name: todoName,
        projectId: projectId,
        todoId: currentTodoId,
        element: todoElement,
      });
    };
    if (request == 'todo-delete') {
      const todoElement = ev.target.closest('.todo-item');
      const todoName = todoElement.querySelector('.title').textContent;
      const todoId = todoElement.dataset.todoId;
      return pubsub.emit('confirmDeleteData', {
        type: request,
        name: todoName,
        todoId: todoId,
        element: todoElement,
      });
    } else {
      const query = ev.target.closest('.project-item').dataset.projectId
      pubsub.emit('queryProject', {
        type: 'single',
        projectId: query
      });
      pubsub.emit('serveTodoFooter');
    }
  },
};