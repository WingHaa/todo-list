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
  this.complete = prop['complete'] || false;
  this.todoId = prop['todo-id'];
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

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}

function serialize(arr) {
  let serialized = [];
  arr.forEach(function (obj) {
    serialized.push({
      "todo-name": obj.title,
      "todo-desc": obj.desc,
      "todo-date": obj.dueDate,
      "todo-priority": obj.priority,
      "complete": obj.complete,
      "todo-id": obj.todoId,
      "project-id": obj.projectId,
    });
  });
  localStorage.setItem('todos', JSON.stringify(serialized));
};

function deserialize() {
  let todos = localStorage.getObject('todos') || [];
  if (todos.length > 0)
    return todos.map(pojo => new Todo(pojo));
  return [];
};

export const todoModule = {
  todos: [],
  init: () => {
    todoModule.todos = deserialize();
    loadSampleTodo(todoModule.todos);
    pubsub.add('queryTodo', todoModule.getTodo);
    pubsub.add('todoCreation', todoModule.createTodo);
    pubsub.add('todoDeletion', todoModule.deleteTodo);
    pubsub.add('todoModification', todoModule.modifyTodo);
    pubsub.add('todoToggleCompletion', todoModule.toggleStatus);
  },
  createTodo: (form) => {
    const latestTodo = todoModule.todos[todoModule.todos.length - 1];
    /* beautify preserve:start */
    form['todo-id'] = latestTodo?.todoId + 1 || 1;
    /* beautify preserve:end */
    const todo = new Todo(form);
    todoModule.todos.push(todo);
    serialize(todoModule.todos);
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
      result = todoModule.todos.filter(todo => todo.todoId == request.todoId);
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
      todoModule.todos = todoModule.todos.filter(todo =>
        todo.projectId != request.projectId
      );
      return serialize(todoModule.todos);
    };
    if (request.type == 'todo') {
      todoModule.todos = todoModule.todos.filter(todo =>
        todo.todoId != request.todoId);
      return serialize(todoModule.todos);
    };
    todoModule.todos = todoModule.todos.filter(todo =>
      todo.projectId != request.projectId &&
      todo.todoId != request.todoId);
    return serialize(todoModule.todos);
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
    serialize(todoModule.todos);
  },
  toggleStatus: (id) => {
    todoModule.todos.map(todo => {
      if (todo.todoId == id) todo.complete = !todo.complete;
    });
    serialize(todoModule.todos);
  },
};

function TodoProp(title, desc, dueDate, priority, complete, todoId, projectId) {
  this["todo-name"] = title;
  this["todo-desc"] = desc;
  this["todo-date"] = dueDate;
  this["todo-priority"] = priority;
  this["complete"] = complete;
  this["todo-id"] = todoId;
  this["project-id"] = projectId;
};

let sampleTodoProps = [
  new TodoProp('Go swimming with friends', '8 AM Sunday at local river', '2023-04-24', 'high', false, 10001, 0),
  new TodoProp('Learn React', '', '2023-02-24', 'med', true, 10002, 10001),
  new TodoProp('Learn Next.js', 'After knowing React, Next.js would be a nice knowledge to have in order to become a fullstack developer', '2023-06-01', 'med', false, 10003, 10001),
  new TodoProp('Work on my 6 packs', 'Developer need a healthy body too!', '2023-10-15', 'high', true, 10004, 10002),
  new TodoProp('Make some more friends!', 'Never know when you need em', '2033-04-24', 'low', false, 10005, 10002),
];

function loadSampleTodo(arr) {
  const todos = sampleTodoProps.map(prop => new Todo(prop));
  todos.forEach(obj => arr.push(obj));
}