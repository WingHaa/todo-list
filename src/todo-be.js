/* beautify preserve:start */
import { pubsub } from "./index";
import { compareAsc } from 'date-fns';
import { format, formatDistance } from 'date-fns'
/* beautify preserve:end */

const Todo = function (prop) {
  this.title = prop['todo-name'];
  this.desc = prop['todo-desc'];
  this.dueDate = prop['todo-date'];
  this.priority = prop['todo-priority'];
  this.complete = false;
  this.todoId = 0;
  this.projectId = prop['project-id'] || 0;
}

Todo.prototype.getRemainingTime = function () {
  if (this.dueDate == '') return `No deadline set`;
  return formatDistance(new Date(`${this.dueDate}T24:00:00`), new Date(), {
    addSuffix: true
  });
}

Todo.prototype.format = function () {
  return format(new Date(this.dueDate), 'MMM dd, yyyy');
}

Todo.prototype.toggleComplete = function () {
  return this.complete = !this.complete;
}

Todo.prototype.isToday = function () {
  if (compareAsc(new Date().setHours(0, 0, 0, 0), new Date(`${this.dueDate}T00:00:00`)) == 0)
    return true;
  return false;
}

Todo.prototype.isUpcoming = function () {
  // get today date and set hour to midnight before
  const today = new Date().setHours(0, 0, 0, 0);

  // converting today date to a date that is 7 days later
  const tempDate = new Date();
  tempDate.setHours(0, 0, 0, 0);
  tempDate.setDate(tempDate.getDate() + 7);
  const upcomingDate = tempDate;

  const deadline = new Date(`${this.dueDate}T24:00:00`);
  // check if deadline is within a period of 7 days in the future date
  if (compareAsc(today, deadline) == -1 &&
    compareAsc(upcomingDate, deadline) != -1)
    return true;
  return false;
}

export const todoModule = {
  todos: [],
  init: () => {
    pubsub.add('queryTodo', todoModule.getTodo);
    pubsub.add('todoCreation', todoModule.createTodo);
    pubsub.add('todoDeletion', todoModule.deleteTodo);
    pubsub.add('todoModification', todoModule.modifyTodo);
    pubsub.add('todoToggleCompletion', todoModule.toggleStatus);
  },
  createTodo: (form) => {
    const todo = new Todo(form);
    const latestTodo = todoModule.todos[todoModule.todos.length - 1];
    /* beautify preserve:start */
    todo.todoId = latestTodo?.todoId + 1 || 1;
    /* beautify preserve:end */
    todoModule.todos.push(todo);
    pubsub.emit('todoUpdated');
  },
  getTodo: (request) => {
    let result = [];
    // viewing todo from 3 main filters
    if (request.projectId == 'inbox')
      return pubsub.emit('serveTodoBody', todoModule.todos);
    if (request.projectId == 'today') {
      result = todoModule.todos.filter(todo => todo.isToday() == true);
      return pubsub.emit('serveTodoBody', result);
    };
    if (request.projectId == 'upcoming') {
      result = todoModule.todos.filter(todo => todo.isUpcoming() == true);
      return pubsub.emit('serveTodoBody', result);
    };
    // viewing a specific todo
    if (!request.projectId) {
      console.log('i run')
      result = todoModule.todos.filter(todo => todo.id = request.todoId);
      return pubsub.emit('getDetailsOfTodo', result[0]);
    }
    // viewing all todos that belong to a project
    result = todoModule.todos.filter(todo =>
      todo.projectId == request.projectId &&
      todo.id == request.id);
    return pubsub.emit('serveTodoBody', result);
  },
  deleteTodo: (request) => {
    if (request.type == 'project') {
      return todoModule.todos = todoModule.todos.filter(todo =>
        todo.projectId != request.projectId);
    };
    if (request.type == 'todo') {
      return todoModule.todos = todoModule.todos.filter(todo =>
        todo.todoId != request.todoId);
    };
    return todoModule.todos = todoModule.todos.filter(todo =>
      todo.projectId != request.projectId &&
      todo.todoId != request.todoId);
  },
  modifyTodo: (query) => {
    todoModule.todos.map(todo => {
      if (todo.todoId == query.todoId) {
        todo.title = query.form['todo-name'];
        todo.desc = query.form['todo-desc'];
        todo.dueDate = query.form['todo-date'];
        todo.priority = query.form['todo-priority'];
        todo.projectId = query.form['project-id'];
        pubsub.emit('todoUpdated');
      };
    });
  },
  toggleStatus: (id) => {
    todoModule.todos.map(todo => {
      if (todo.todoId == id) todo.complete = !todo.complete;
    });
  },
}