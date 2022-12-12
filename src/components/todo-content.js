/* beautify preserve:start */
import { pubsub } from "../index";
import EditIcon from '../img/project-edit.png';
import DelIcon from '../img/project-delete.png';
/* beautify preserve:end */

export const todoContent = {
  init: () => {
    pubsub.add('serveTodoBody', todoContent.render);
    pubsub.add('todoCreated', todoContent.render);
  },
  render: todos => {
    if (todos.length < 1) return;
    const container = document.querySelector('main');

    todos.forEach(todo => {
      const todoContainer = document.createElement('div');
      todoContainer.classList = `todo-item  border-priority-${todo.priority} hover:border-item-hover`;
      todoContainer.dataset.projectId = todo.projectId;
      todoContainer.dataset.todoId = todo.todoId;

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox';
      checkbox.classList = `check-box border-priority-${todo.priority} hover:border-item-hover before:shadow-checkbox-${todo.priority} before:check-mark before:scale-0 before:checked:scale-100`;
      checkbox.checked = todo.complete;

      const title = document.createElement('div')
      title.classList = 'title';
      title.textContent = todo.title;

      const deadline = document.createElement('div');
      deadline.classList = 'due-date';
      deadline.textContent = todo.getRemainingTime();

      const descContainer = document.createElement('div');
      const descContent = document.createElement('p');
      descContainer.classList = 'description';
      descContent.textContent = todo.desc;
      descContainer.appendChild(descContent);

      const edit = document.createElement('button');
      edit.classList = 'todo-edit';
      const editIcon = document.createElement('img');
      editIcon.classList = 'w-10 hover:bg-item-hover';
      editIcon.src = EditIcon;
      edit.appendChild(editIcon);

      const deleteTodoButton = document.createElement('button');
      deleteTodoButton.classList = 'todo-delete';
      const delIcon = document.createElement('img');
      delIcon.classList = 'w-10 hover:bg-item-hover';
      delIcon.src = DelIcon;
      deleteTodoButton.appendChild(delIcon);
      deleteTodoButton.addEventListener('pointerdown', todoContent.deleteTodo)

      todoContainer.appendChild(checkbox);
      todoContainer.appendChild(title);
      todoContainer.appendChild(deadline);
      todoContainer.appendChild(descContainer);
      todoContainer.appendChild(edit);
      todoContainer.appendChild(deleteTodoButton);

      container.appendChild(todoContainer);
    });
  },
  deleteTodo: (ev) => {
    const projectId = ev.target.closest('.todo-item').getAttribute('projectId');
    const todoId = ev.target.closest('.todo-item').getAttribute('todoId');
    pubsub.emit('todoDeletion', {
      projectId: projectId,
      todoId: todoId,
    })
  }
};