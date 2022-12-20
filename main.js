"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./src/components/add-project-modal.js":
/*!*********************************************!*\
  !*** ./src/components/add-project-modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectModal": () => (/* binding */ projectModal)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* beautify preserve:start */

/* beautify preserve:end */
const projectModal = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('addNewProject', projectModal.render);
  },
  render: () => {
    const container = document.querySelector('body');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', projectModal.closeModal);
    container.appendChild(modalOverlay);
    const form = document.createElement('form');
    form.classList = 'project-form modal-content centered-position md:w-[600px]';
    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-3xl';
    header.textContent = 'Add new project';
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'project-name';
    const labelContent = document.createElement('div');
    labelContent.classList = 'text-xl';
    labelContent.textContent = 'Project name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'project-name';
    nameInput.id = 'project-name';
    nameInput.classList = 'form-item';
    nameInput.addEventListener('input', projectModal.controlSubmit);
    nameLabel.appendChild(labelContent);
    nameLabel.appendChild(nameInput);
    const buttonDiv = document.createElement('div');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('pointerdown', projectModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Confirm';
    confirmButton.disabled = true;
    form.addEventListener('submit', projectModal.submitForm);
    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);
    form.appendChild(header);
    form.appendChild(nameLabel);
    form.appendChild(buttonDiv);
    container.appendChild(form);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('closeProjectForm', projectModal.closeModal);
  },
  closeModal: ev => {
    ev.preventDefault();
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
  controlSubmit: ev => {
    const button = document.querySelector('#submit');
    button.disabled = !ev.target.value.trim();
  },
  submitForm: ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const formProps = Object.fromEntries(formData);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('projectCreation', formProps);
    projectModal.closeModal(ev);
  }
};

/***/ }),

/***/ "./src/components/add-todo-modal.js":
/*!******************************************!*\
  !*** ./src/components/add-todo-modal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoModal": () => (/* binding */ todoModal)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* beautify preserve:start */

/* beautify preserve:end */
const todoModal = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('addNewTodo', todoModal.render);
  },
  render: projects => {
    const container = document.querySelector('body');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', todoModal.closeModal);
    container.appendChild(modalOverlay);
    const form = document.createElement('form');
    form.classList = 'todo-form modal-content centered-position md:w-[600px]';
    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-3xl';
    header.textContent = 'Add new todo';
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'todo-name';
    const nameLabelContent = document.createElement('div');
    nameLabelContent.classList = 'text-xl';
    nameLabelContent.textContent = 'Todo name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'todo-name';
    nameInput.id = 'todo-name';
    nameInput.classList = 'form-item';
    nameInput.addEventListener('input', todoModal.controlSubmit);
    nameLabel.appendChild(nameLabelContent);
    nameLabel.appendChild(nameInput);
    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'todo-desc';
    const descLabelContent = document.createElement('div');
    descLabelContent.classList = 'text-xl';
    descLabelContent.textContent = 'What are the details of the todo';
    const descInput = document.createElement('textarea');
    descInput.rows = 3;
    descInput.name = 'todo-desc';
    descInput.id = 'todo-desc';
    descInput.classList = 'form-item';
    descLabel.appendChild(descLabelContent);
    descLabel.appendChild(descInput);
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'todo-date';
    const dateLabelContent = document.createElement('div');
    dateLabelContent.classList = 'text-xl';
    dateLabelContent.textContent = 'When is the deadline';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'todo-date';
    dateInput.id = 'todo-date';
    dateInput.classList = 'form-item';
    dateInput.valueAsDate = new Date();
    dateLabel.appendChild(dateLabelContent);
    dateLabel.appendChild(dateInput);
    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'todo-project';
    const projectLabelContent = document.createElement('div');
    projectLabelContent.classList = 'text-xl';
    projectLabelContent.textContent = 'Add this todo to project:';
    const projectInput = document.createElement('select');
    projectInput.name = 'project-id';
    projectInput.id = 'project-id';
    projectInput.classList = 'form-item';
    const defaultOption = document.createElement('option');
    defaultOption.value = '0';
    defaultOption.textContent = 'Inbox';
    projectInput.appendChild(defaultOption);
    if (projects) {
      for (let index = 0; index < projects.length; index++) {
        const project = projects[index];
        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        projectInput.appendChild(option);
        const currentProjectHeader = document.querySelector('.project-title');
        if (currentProjectHeader) {
          const currentProjectId = currentProjectHeader.dataset.projectId;
          if (currentProjectId == project.id) projectInput.value = project.id;
        }
      }
    }
    projectLabel.appendChild(projectLabelContent);
    projectLabel.appendChild(projectInput);
    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'todo-priority';
    const priorityLabelContent = document.createElement('div');
    priorityLabelContent.classList = 'text-xl';
    priorityLabelContent.textContent = 'How urgent is it?';
    const priorityInput = document.createElement('select');
    priorityInput.name = 'todo-priority';
    priorityInput.id = 'todo-priority';
    priorityInput.classList = 'form-item';
    const highOption = document.createElement('option');
    highOption.value = 'high';
    highOption.textContent = 'High';
    const medOption = document.createElement('option');
    medOption.value = 'med';
    medOption.textContent = 'Medium';
    const lowOption = document.createElement('option');
    lowOption.value = 'low';
    lowOption.textContent = 'Low';
    priorityInput.appendChild(highOption);
    priorityInput.appendChild(medOption);
    priorityInput.appendChild(lowOption);
    priorityLabel.appendChild(priorityLabelContent);
    priorityLabel.appendChild(priorityInput);
    const buttonDiv = document.createElement('button');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('pointerdown', todoModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Confirm';
    confirmButton.disabled = true;
    form.addEventListener('submit', todoModal.submitForm);
    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);
    form.appendChild(header);
    form.appendChild(nameLabel);
    form.appendChild(descLabel);
    form.appendChild(dateLabel);
    form.appendChild(projectLabel);
    form.appendChild(priorityLabel);
    form.appendChild(buttonDiv);
    container.appendChild(form);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('closeTodoForm', todoModal.closeModal);
  },
  closeModal: ev => {
    ev.preventDefault();
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
  controlSubmit: ev => {
    const button = document.querySelector('#submit');
    button.disabled = !ev.target.value.trim();
  },
  submitForm: ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const formProps = Object.fromEntries(formData);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('todoCreation', formProps);
    todoModal.closeModal(ev);
  }
};

/***/ }),

/***/ "./src/components/delete-confirmation.js":
/*!***********************************************!*\
  !*** ./src/components/delete-confirmation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmDeletionModal": () => (/* binding */ confirmDeletionModal)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* beautify preserve:start */

/* beautify preserve:end */

const confirmDeletionModal = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('confirmDeleteData', confirmDeletionModal.render);
  },
  render: request => {
    const container = document.querySelector('body');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', confirmDeletionModal.closeModal);
    container.appendChild(modalOverlay);
    const form = document.createElement('form');
    form.classList = 'project-form modal-content centered-position md:w-[600px]';
    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-2xl';
    if (request.type == 'project-delete') {
      header.textContent = `Are you sure you want to delete ${request.name}? All todos associated with ${request.name} will get delete too.`;
    } else {
      header.textContent = `Are you sure you want to delete ${request.name}`;
    }
    const buttonDiv = document.createElement('div');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('pointerdown', confirmDeletionModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Delete';
    form.addEventListener('submit', ev => confirmDeletionModal.deleteData(ev, request));
    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);
    form.appendChild(header);
    form.appendChild(buttonDiv);
    container.appendChild(form);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('closeProjectForm', confirmDeletionModal.closeModal);
  },
  closeModal: ev => {
    ev.preventDefault();
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
  deleteData: (ev, request) => {
    ev.preventDefault();
    request.element.remove();
    confirmDeletionModal.closeModal(ev);
    if (request.type == 'project-delete') return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('projectDeletion', request.projectId);
    if (request.type == 'todo-delete') return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('todoDeletion', {
      type: 'todo',
      todoId: request.todoId
    });
  }
};

/***/ }),

/***/ "./src/components/inbox-header.js":
/*!****************************************!*\
  !*** ./src/components/inbox-header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inboxHeader": () => (/* binding */ inboxHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* beautify preserve:start */

/* beautify preserve:end */
const inboxHeader = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveInboxHeader', inboxHeader.render);
  },
  render: () => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const heading = document.createElement('h2');
    heading.classList = 'content-heading font-bold text-xl';
    heading.textContent = `Showing all of your available todos`;
    container.appendChild(heading);
  }
};

/***/ }),

/***/ "./src/components/modify-data.js":
/*!***************************************!*\
  !*** ./src/components/modify-data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modificationModal": () => (/* binding */ modificationModal)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* beautify preserve:start */

/* beautify preserve:end */

const modificationModal = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('modifyDataRequest', modificationModal.render);
  },
  render: request => {
    const container = document.querySelector('body');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', modificationModal.closeModal);
    container.appendChild(modalOverlay);
    const form = document.createElement('form');
    form.classList = 'project-form modal-content centered-position md:w-[600px]';
    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-2xl pb-8';
    header.textContent = `Edit ${request.name}`;
    const nameLabel = document.createElement('label');
    form.appendChild(header);
    if (request.type == 'project-edit') {
      nameLabel.htmlFor = 'project-name';
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'project-name';
      nameInput.id = 'project-name';
      nameInput.classList = 'form-item';
      nameInput.value = request.name;
      nameInput.addEventListener('input', modificationModal.controlSubmit);
      nameLabel.appendChild(nameInput);
      form.appendChild(nameLabel);
    } else {
      const todoName = request.element.querySelector('.title').textContent;
      const todoDesc = request.element.querySelector('.description').textContent;
      const todoDate = request.element.querySelector('.due-date').title;
      const todoProjectId = request.element.dataset.projectId;
      const classArray = request.element.className.split(' ');
      let priorityValue;
      classArray.forEach(name => {
        const words = name.split('-');
        if (words[0] == 'border' && words[1] == 'priority') return priorityValue = words[2];
      });
      const nameLabel = document.createElement('label');
      nameLabel.htmlFor = 'todo-name';
      const nameLabelContent = document.createElement('div');
      nameLabelContent.classList = 'text-xl';
      nameLabelContent.textContent = 'Todo name';
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'todo-name';
      nameInput.id = 'todo-name';
      nameInput.value = todoName;
      nameInput.classList = 'form-item';
      nameInput.addEventListener('input', modificationModal.controlSubmit);
      nameLabel.appendChild(nameLabelContent);
      nameLabel.appendChild(nameInput);
      const descLabel = document.createElement('label');
      descLabel.htmlFor = 'todo-desc';
      const descLabelContent = document.createElement('div');
      descLabelContent.classList = 'text-xl';
      descLabelContent.textContent = 'What are the details of the todo';
      const descInput = document.createElement('textarea');
      descInput.rows = 3;
      descInput.name = 'todo-desc';
      descInput.id = 'todo-desc';
      descInput.value = todoDesc;
      descInput.classList = 'form-item';
      descLabel.appendChild(descLabelContent);
      descLabel.appendChild(descInput);
      const dateLabel = document.createElement('label');
      dateLabel.htmlFor = 'todo-date';
      const dateLabelContent = document.createElement('div');
      dateLabelContent.classList = 'text-xl';
      dateLabelContent.textContent = 'When is the deadline';
      const dateInput = document.createElement('input');
      dateInput.type = 'date';
      dateInput.name = 'todo-date';
      dateInput.id = 'todo-date';
      dateInput.classList = 'form-item';
      dateInput.value = todoDate;
      dateLabel.appendChild(dateLabelContent);
      dateLabel.appendChild(dateInput);
      const projectLabel = document.createElement('label');
      projectLabel.htmlFor = 'todo-project';
      const projectLabelContent = document.createElement('div');
      projectLabelContent.classList = 'text-xl';
      projectLabelContent.textContent = 'Add this todo to project:';
      const projectInput = document.createElement('select');
      projectInput.name = 'project-id';
      projectInput.id = 'project-id';
      projectInput.classList = 'form-item';
      const defaultOption = document.createElement('option');
      defaultOption.value = '0';
      defaultOption.textContent = 'Inbox';
      projectInput.appendChild(defaultOption);
      if (request.projects) {
        for (let index = 0; index < request.projects.length; index++) {
          const project = request.projects[index];
          const option = document.createElement('option');
          option.value = project.id;
          option.textContent = project.name;
          projectInput.appendChild(option);
        }
      }
      projectInput.value = todoProjectId;
      projectLabel.appendChild(projectLabelContent);
      projectLabel.appendChild(projectInput);
      const priorityLabel = document.createElement('label');
      priorityLabel.htmlFor = 'todo-priority';
      const priorityLabelContent = document.createElement('div');
      priorityLabelContent.classList = 'text-xl';
      priorityLabelContent.textContent = 'How urgent is it?';
      const priorityInput = document.createElement('select');
      priorityInput.name = 'todo-priority';
      priorityInput.id = 'todo-priority';
      priorityInput.classList = 'form-item';
      const highOption = document.createElement('option');
      highOption.value = 'high';
      highOption.textContent = 'High';
      const medOption = document.createElement('option');
      medOption.value = 'med';
      medOption.textContent = 'Medium';
      const lowOption = document.createElement('option');
      lowOption.value = 'low';
      lowOption.textContent = 'Low';
      if (priorityValue == 'high') highOption.selected = 'selected';
      if (priorityValue == 'med') medOption.selected = 'selected';
      if (priorityValue == 'low') lowOption.selected = 'selected';
      priorityInput.appendChild(highOption);
      priorityInput.appendChild(medOption);
      priorityInput.appendChild(lowOption);
      priorityLabel.appendChild(priorityLabelContent);
      priorityLabel.appendChild(priorityInput);
      form.appendChild(nameLabel);
      form.appendChild(descLabel);
      form.appendChild(dateLabel);
      form.appendChild(projectLabel);
      form.appendChild(priorityLabel);
    }
    const buttonDiv = document.createElement('div');
    buttonDiv.classList = 'flex justify-end pt-10';
    const cancelButton = document.createElement('button');
    cancelButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('pointerdown', modificationModal.closeModal);
    const confirmButton = document.createElement('button');
    confirmButton.classList = 'text-2xl border-2 px-4 py-3 ml-6 font-bold bg-blue-600 text-white disabled:bg-blue-200';
    confirmButton.id = 'submit';
    confirmButton.textContent = 'Save';
    form.addEventListener('submit', ev => modificationModal.modifyData(ev, request));
    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(confirmButton);
    form.appendChild(buttonDiv);
    container.appendChild(form);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('closeProjectForm', modificationModal.closeModal);
  },
  closeModal: ev => {
    ev.preventDefault();
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  },
  modifyData: (ev, request) => {
    ev.preventDefault();
    modificationModal.closeModal(ev);
    if (request.type == 'project-edit') {
      const newProjectName = Object.fromEntries(new FormData(ev.target))['project-name'];
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('projectModification', {
        type: request.type,
        name: newProjectName,
        projectId: request.projectId,
        element: request.element
      });
    }
    if (request.type == 'todo-edit') {
      const formData = new FormData(ev.target);
      const formProps = Object.fromEntries(formData);
      request.form = formProps;
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('todoModification', request);
    }
  },
  controlSubmit: ev => {
    const button = document.querySelector('#submit');
    button.disabled = !ev.target.value.trim();
  }
};

/***/ }),

/***/ "./src/components/project-content.js":
/*!*******************************************!*\
  !*** ./src/components/project-content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectContent": () => (/* binding */ projectContent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_project_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/project-edit.png */ "./src/img/project-edit.png");
/* harmony import */ var _img_project_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/project-delete.png */ "./src/img/project-delete.png");
/* beautify preserve:start */



/* beautify preserve:end */
const projectContent = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveProjectBody', projectContent.render);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('projectUpdated', projectContent.render);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('projectModification', projectContent.modifyProject);
  },
  render: projects => {
    if (projects.length < 1) return;
    const container = document.querySelector('main');
    while (container.childNodes.length > 1) {
      container.removeChild(container.lastChild);
    }
    projects.forEach(project => {
      const projectContainer = document.createElement('div');
      projectContainer.classList = 'project-item hover:border-item-hover';
      projectContainer.dataset.projectId = project.id;
      projectContainer.addEventListener('pointerdown', projectContent.handleClick);
      const projectName = document.createElement('div');
      projectName.classList = 'text-lg';
      projectName.textContent = project.name;
      const editProject = document.createElement('button');
      const editImg = document.createElement('img');
      editImg.id = 'project-edit';
      editImg.classList = 'w-10 hover:bg-item-hover';
      editImg.src = _img_project_edit_png__WEBPACK_IMPORTED_MODULE_1__;
      editProject.appendChild(editImg);
      const delProject = document.createElement('button');
      const delImg = document.createElement('img');
      delImg.id = 'project-delete';
      delImg.classList = 'w-10 hover:bg-item-hover';
      delImg.src = _img_project_delete_png__WEBPACK_IMPORTED_MODULE_2__;
      delProject.appendChild(delImg);
      projectContainer.appendChild(projectName);
      projectContainer.appendChild(editProject);
      projectContainer.appendChild(delProject);
      container.appendChild(projectContainer);
    });
  },
  handleClick: ev => {
    const request = ev.target.id;
    if (request == 'project-edit') {
      const projectElement = ev.target.closest('.project-item');
      const query = ev.target.closest('.project-item').dataset.projectId;
      const projectName = ev.target.closest('div div').textContent;
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('modifyDataRequest', {
        type: request,
        name: projectName,
        projectId: query,
        element: projectElement
      });
    }
    ;
    if (request == 'project-delete') {
      const projectElement = ev.target.closest('.project-item');
      const projectId = projectElement.dataset.projectId;
      const projectName = ev.target.closest('div div').textContent;
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('confirmDeleteData', {
        type: request,
        name: projectName,
        projectId: projectId,
        element: projectElement
      });
    } else {
      const query = ev.target.closest('.project-item').dataset.projectId;
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('projectViewChange', ev);
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryProject', {
        type: 'single-project',
        projectId: query
      });
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveTodoFooter');
    }
  },
  modifyProject: request => {
    const name = request.element.querySelector('.text-lg');
    name.textContent = request.name;
  }
};

/***/ }),

/***/ "./src/components/project-header.js":
/*!******************************************!*\
  !*** ./src/components/project-header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectHeader": () => (/* binding */ projectHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_project_add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/project-add.png */ "./src/img/project-add.png");
/* beautify preserve:start */


/* beautify preserve:end */

const projectHeader = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveProjectHeader', projectHeader.render);
  },
  render: project => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const intro = document.createElement('div');
    intro.classList = 'flex flex-row items-center';
    const heading = document.createElement('h2');
    heading.classList = 'project-title';
    if (Array.isArray(project)) {
      heading.textContent = project[0].name;
      heading.dataset.projectId = project[0].id;
      intro.appendChild(heading);
    } else {
      heading.textContent = 'Welcome to the project page. Here you can view all of your current projects';
      intro.appendChild(heading);
      const addProjectContainer = document.createElement('span');
      addProjectContainer.classList = 'content-start flex flex-row gap-3 hover:text-blue-600 cursor-pointer';
      const addProjectIcon = document.createElement('img');
      addProjectIcon.classList = 'w-10';
      addProjectIcon.src = _img_project_add_png__WEBPACK_IMPORTED_MODULE_1__;
      const addProjectLabel = document.createElement('p');
      addProjectLabel.classList = 'self-center';
      addProjectLabel.textContent = 'Add a project';
      addProjectContainer.appendChild(addProjectIcon);
      addProjectContainer.appendChild(addProjectLabel);
      addProjectContainer.addEventListener('pointerdown', projectHeader.serveProjectForm);
      intro.appendChild(addProjectContainer);
    }
    container.appendChild(intro);
  },
  serveProjectForm: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('addNewProject');
  }
};

/***/ }),

/***/ "./src/components/side-nav-bar.js":
/*!****************************************!*\
  !*** ./src/components/side-nav-bar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navSideBar": () => (/* binding */ navSideBar)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_mail_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/mail.png */ "./src/img/mail.png");
/* harmony import */ var _img_calendar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/calendar.png */ "./src/img/calendar.png");
/* harmony import */ var _img_planner_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/planner.png */ "./src/img/planner.png");
/* beautify preserve:start */




/* beautify preserve:end */

const navSideBar = {
  render: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('toggleNavSideBar', navSideBar.toggleNavSideBar);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('buildProjectShortcut', navSideBar.renderProjectShortcut);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('projectUpdated', navSideBar.renderProjectShortcut);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('projectViewChange', navSideBar.controlBackground);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('todoUpdated', navSideBar.refreshCurrentPage);
    const container = document.querySelector('body');
    const contentDiv = document.querySelector('.content');
    const sideBar = document.createElement('nav');
    sideBar.classList = 'side-bar bg-nav-side-bar lg:visible';
    const mainFilterContainer = document.createElement('div');
    mainFilterContainer.classList = 'main-filter px-2 py-2';
    sideBar.appendChild(mainFilterContainer);
    contentDiv.appendChild(sideBar);
    const main = document.createElement('main');
    main.classList = 'lg:ml-72 ml-5';
    contentDiv.appendChild(main);
    const mainFilters = {
      Inbox: _img_mail_png__WEBPACK_IMPORTED_MODULE_1__,
      Today: _img_calendar_png__WEBPACK_IMPORTED_MODULE_2__,
      Upcoming: _img_planner_png__WEBPACK_IMPORTED_MODULE_3__
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
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryProject', {
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
    }
    ;
  },
  serveMainFilter: ev => {
    const name = ev.target.textContent;
    const id = ev.target.closest('.nav-item').dataset.projectId;
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit(`serve${name}Header`);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('preRenderTodosContainer');
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryTodo', {
      projectId: id
    });
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveTodoFooter');
  },
  serveProjectPage: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryProject', {
      type: 'page'
    });
  },
  renderProjectShortcut: projects => {
    const projectContainer = document.querySelector('.projects-filter');
    while (projectContainer.childNodes.length > 1) {
      projectContainer.removeChild(projectContainer.lastChild);
    }
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList = 'hover:bg-item-hover nav-item';
      projectDiv.textContent = project.name;
      projectDiv.dataset.projectId = project.id;
      projectDiv.addEventListener('pointerdown', navSideBar.serveSingleProjectPage);
      projectContainer.appendChild(projectDiv);
    });
  },
  serveSingleProjectPage: ev => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryProject', {
      type: 'single-project',
      projectId: ev.target.dataset.projectId
    });
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveTodoFooter');
  },
  controlBackground: ev => {
    const project = ev.target.closest('.nav-item') || ev.target.closest('.project-item');
    const filters = document.querySelector('.side-bar').querySelectorAll('.nav-item');
    filters.forEach(element => {
      element.classList.remove('bg-item-hover');
      if (element.dataset.projectId == project.dataset.projectId) element.classList.add('bg-item-hover');
    });
  },
  refreshCurrentPage: () => {
    const currentFilter = document.querySelector('.bg-item-hover');
    const event = new Event('pointerdown', {
      bubbles: true
    });
    currentFilter.dispatchEvent(event);
  }
};

/***/ }),

/***/ "./src/components/site-header.js":
/*!***************************************!*\
  !*** ./src/components/site-header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/menu.png */ "./src/img/menu.png");
/* beautify preserve:start */


/* beautify preserve:end */

const header = {
  render: container => {
    const headerDiv = document.createElement('header');
    headerDiv.classList = 'header text-4xl bg-top-bar grid-cols-menu-toggle';
    const sideBarButton = document.createElement('button');
    sideBarButton.classList = 'left-menu-toggle hover:border-white hover:border-2 m-2 relative';
    sideBarButton.addEventListener('pointerdown', header.toggleNavSideBar);
    const sideBarButtonImage = document.createElement('img');
    sideBarButtonImage.classList = 'h-8 absolute centered-position';
    sideBarButtonImage.src = _img_menu_png__WEBPACK_IMPORTED_MODULE_1__;
    sideBarButton.appendChild(sideBarButtonImage);
    const headerTitle = document.createElement('span');
    headerTitle.classList = 'place-self-center text-white';
    headerTitle.textContent = 'Todo';
    headerDiv.appendChild(sideBarButton);
    headerDiv.appendChild(headerTitle);
    const contentDiv = document.createElement('div');
    contentDiv.classList = 'content pt-14';
    container.appendChild(headerDiv);
    container.appendChild(contentDiv);
  },
  toggleNavSideBar: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('toggleNavSideBar');
  }
};

/***/ }),

/***/ "./src/components/today-header.js":
/*!****************************************!*\
  !*** ./src/components/today-header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todayHeader": () => (/* binding */ todayHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");

const todayHeader = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveTodayHeader', todayHeader.render);
  },
  render: () => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const heading = document.createElement('h2');
    heading.classList = 'content-heading font-bold text-xl';
    heading.textContent = `Here are the tasks that will be due today`;
    container.appendChild(heading);
  }
};

/***/ }),

/***/ "./src/components/todo-content.js":
/*!****************************************!*\
  !*** ./src/components/todo-content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoContent": () => (/* binding */ todoContent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_project_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/project-edit.png */ "./src/img/project-edit.png");
/* harmony import */ var _img_project_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/project-delete.png */ "./src/img/project-delete.png");
/* beautify preserve:start */



/* beautify preserve:end */

const todoContent = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveTodoBody', todoContent.render);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('preRenderTodosContainer', todoContent.renderTodosContainer);
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
    }
    ;
    todos.forEach(todo => {
      const todoContainer = document.createElement('div');
      todoContainer.classList = `todo-item  border-priority-${todo.priority} hover:border-item-hover`;
      todoContainer.dataset.projectId = todo.projectId;
      todoContainer.dataset.todoId = todo.todoId;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'todo-complete-toggle';
      checkbox.classList = `check-box border-priority-${todo.priority} hover:border-item-hover before:shadow-checkbox-${todo.priority} before:check-mark before:scale-0 before:checked:scale-100`;
      checkbox.checked = todo.complete;
      const title = document.createElement('div');
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
      editIcon.src = _img_project_edit_png__WEBPACK_IMPORTED_MODULE_1__;
      edit.appendChild(editIcon);
      const deleteTodoButton = document.createElement('button');
      deleteTodoButton.classList = 'todo-delete';
      const delIcon = document.createElement('img');
      delIcon.classList = 'w-10 hover:bg-item-hover';
      delIcon.id = 'todo-delete';
      delIcon.src = _img_project_delete_png__WEBPACK_IMPORTED_MODULE_2__;
      deleteTodoButton.appendChild(delIcon);
      todoContainer.addEventListener('pointerdown', todoContent.handleClick);
      todoContainer.appendChild(checkbox);
      todoContainer.appendChild(title);
      todoContainer.appendChild(deadline);
      todoContainer.appendChild(descContainer);
      todoContainer.appendChild(edit);
      todoContainer.appendChild(deleteTodoButton);
      container.appendChild(todoContainer);
    });
  },
  handleClick: ev => {
    const request = ev.target.id;
    if (request == 'todo-complete-toggle') {
      const query = ev.target.closest('.todo-item').dataset.todoId;
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('todoToggleCompletion', query);
    }
    ;
    if (request == 'todo-edit') {
      const todoElement = ev.target.closest('.todo-item');
      const todoName = todoElement.querySelector('.title').textContent;
      const projectId = todoElement.dataset.projectId;
      const currentTodoId = todoElement.dataset.todoId;
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryProject', {
        type: request,
        name: todoName,
        projectId: projectId,
        todoId: currentTodoId,
        element: todoElement
      });
    }
    ;
    if (request == 'todo-delete') {
      const todoElement = ev.target.closest('.todo-item');
      const todoName = todoElement.querySelector('.title').textContent;
      const todoId = todoElement.dataset.todoId;
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('confirmDeleteData', {
        type: request,
        name: todoName,
        todoId: todoId,
        element: todoElement
      });
    } else {
      // viewing a single todo
      const query = ev.target.closest('.todo-item').dataset.todoId;
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryTodo', {
        todoId: query
      });
    }
  }
};

/***/ }),

/***/ "./src/components/todo-detail.js":
/*!***************************************!*\
  !*** ./src/components/todo-detail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewTodoModal": () => (/* binding */ viewTodoModal)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* beautify preserve:start */

/* beautify preserve:end */
const viewTodoModal = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('getDetailsOfTodo', viewTodoModal.render);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('foundProjectOfViewedTodo', viewTodoModal.fillProjectField);
  },
  render: todo => {
    const container = document.querySelector('body');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList = 'modal-overlay';
    modalOverlay.addEventListener('pointerdown', viewTodoModal.closeModal);
    container.appendChild(modalOverlay);
    const form = document.createElement('form');
    form.classList = 'todo-form modal-content centered-position md:w-[600px]';
    const header = document.createElement('h2');
    header.classList = 'text-center font-bold text-3xl';
    header.textContent = todo.title;
    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'todo-desc';
    const descLabelContent = document.createElement('div');
    descLabelContent.classList = 'text-xl';
    descLabelContent.textContent = 'Description:';
    const descInput = document.createElement('p');
    descInput.name = 'todo-desc';
    descInput.id = 'todo-desc';
    descInput.textContent = todo.desc || 'No description provided';
    descInput.classList = 'form-item';
    descLabel.appendChild(descLabelContent);
    descLabel.appendChild(descInput);
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'todo-date';
    const dateLabelContent = document.createElement('div');
    dateLabelContent.classList = 'text-xl';
    dateLabelContent.textContent = 'Deadline:';
    const dateInput = document.createElement('p');
    dateInput.type = 'date';
    dateInput.name = 'todo-date';
    dateInput.id = 'todo-date';
    dateInput.classList = 'form-item';
    dateInput.textContent = todo.format();
    dateLabel.appendChild(dateLabelContent);
    dateLabel.appendChild(dateInput);
    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'todo-project';
    const projectLabelContent = document.createElement('div');
    projectLabelContent.classList = 'text-xl';
    projectLabelContent.textContent = 'Project:';
    const projectInput = document.createElement('p');
    projectInput.name = 'project-id';
    projectInput.id = 'project-id';
    projectInput.classList = 'form-item';
    projectLabel.appendChild(projectLabelContent);
    projectLabel.appendChild(projectInput);
    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'todo-priority';
    const priorityLabelContent = document.createElement('div');
    priorityLabelContent.classList = 'text-xl';
    priorityLabelContent.textContent = 'Priority:';
    const priorityInput = document.createElement('p');
    priorityInput.name = 'todo-priority';
    priorityInput.id = 'todo-priority';
    priorityInput.classList = 'form-item';
    const highOption = document.createElement('option');
    highOption.textContent = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
    priorityInput.appendChild(highOption);
    priorityLabel.appendChild(priorityLabelContent);
    priorityLabel.appendChild(priorityInput);
    form.appendChild(header);
    form.appendChild(descLabel);
    form.appendChild(dateLabel);
    form.appendChild(projectLabel);
    form.appendChild(priorityLabel);
    container.appendChild(form);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryProject', {
      projectId: todo.projectId
    });
  },
  fillProjectField: project => {
    const projectName = document.querySelector('#project-id');
    projectName.textContent = project?.name || 'Not belong to any project';
  },
  closeModal: () => {
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('form');
    overlay.remove();
    modal.remove();
  }
};

/***/ }),

/***/ "./src/components/todo-footer.js":
/*!***************************************!*\
  !*** ./src/components/todo-footer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFooter": () => (/* binding */ todoFooter)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_todo_add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/todo-add.png */ "./src/img/todo-add.png");
/* beautify preserve:start */


/* beautify preserve:end */

const todoFooter = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveTodoFooter', todoFooter.render);
  },
  render: () => {
    const container = document.querySelector('main');
    // create button to add todo
    const addTodoContainer = document.createElement('span');
    addTodoContainer.classList = 'content-start flex flex-row gap-3 hover:text-blue-600 cursor-pointer';
    addTodoContainer.id = 'add';
    const addTodoIcon = document.createElement('img');
    addTodoIcon.classList = 'w-10';
    addTodoIcon.src = _img_todo_add_png__WEBPACK_IMPORTED_MODULE_1__;
    const addTodoLabel = document.createElement('p');
    addTodoLabel.classList = 'self-center';
    addTodoLabel.textContent = 'Add todo';
    addTodoContainer.appendChild(addTodoIcon);
    addTodoContainer.appendChild(addTodoLabel);
    addTodoContainer.addEventListener('pointerdown', todoFooter.serveTodoForm);
    container.appendChild(addTodoContainer);
  },
  serveTodoForm: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryProject', {
      type: 'modal'
    });
  }
};

/***/ }),

/***/ "./src/components/todo-header.js":
/*!***************************************!*\
  !*** ./src/components/todo-header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoHeader": () => (/* binding */ todoHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");

const todoHeader = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveTodoHeader', todoHeader.render);
  },
  render: todo => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const heading = document.createElement('h2');
    heading.classList = 'content-heading font-bold text-xl';
    heading.textContent = todo.name;
    const todosBody = document.createElement('div');
    todosBody.classList = 'todos-container';
  }
};

/***/ }),

/***/ "./src/components/upcoming-header.js":
/*!*******************************************!*\
  !*** ./src/components/upcoming-header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upcomingHeader": () => (/* binding */ upcomingHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");

const upcomingHeader = {
  init: () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('serveUpcomingHeader', upcomingHeader.render);
  },
  render: () => {
    const container = document.querySelector('main');
    container.innerHTML = ''; //clear old contents if there are any

    const heading = document.createElement('h2');
    heading.classList = 'content-heading font-bold text-xl';
    heading.textContent = `Here are the tasks that will be due in a week time`;
    container.appendChild(heading);
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_be__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-be */ "./src/project-be.js");
/* harmony import */ var _todo_be__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-be */ "./src/todo-be.js");
/* harmony import */ var _components_site_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/site-header */ "./src/components/site-header.js");
/* harmony import */ var _components_side_nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/side-nav-bar */ "./src/components/side-nav-bar.js");
/* harmony import */ var _components_project_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-header */ "./src/components/project-header.js");
/* harmony import */ var _components_project_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project-content */ "./src/components/project-content.js");
/* harmony import */ var _components_todo_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo-header */ "./src/components/todo-header.js");
/* harmony import */ var _components_inbox_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inbox-header */ "./src/components/inbox-header.js");
/* harmony import */ var _components_today_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/today-header */ "./src/components/today-header.js");
/* harmony import */ var _components_upcoming_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/upcoming-header */ "./src/components/upcoming-header.js");
/* harmony import */ var _components_todo_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/todo-content */ "./src/components/todo-content.js");
/* harmony import */ var _components_todo_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/todo-footer */ "./src/components/todo-footer.js");
/* harmony import */ var _components_add_project_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-project-modal */ "./src/components/add-project-modal.js");
/* harmony import */ var _components_add_todo_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-todo-modal */ "./src/components/add-todo-modal.js");
/* harmony import */ var _components_delete_confirmation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/delete-confirmation */ "./src/components/delete-confirmation.js");
/* harmony import */ var _components_modify_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modify-data */ "./src/components/modify-data.js");
/* harmony import */ var _components_todo_detail__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/todo-detail */ "./src/components/todo-detail.js");
/* beautify preserve:start */


















/* beautify preserve:end */

window.addEventListener('DOMContentLoaded', renderHomePage);
function renderHomePage() {
  const body = document.querySelector('body');
  _project_be__WEBPACK_IMPORTED_MODULE_1__.projectModule.init();
  _todo_be__WEBPACK_IMPORTED_MODULE_2__.todoModule.init();
  _components_site_header__WEBPACK_IMPORTED_MODULE_3__.header.render(body);
  _components_side_nav_bar__WEBPACK_IMPORTED_MODULE_4__.navSideBar.render();
  _components_inbox_header__WEBPACK_IMPORTED_MODULE_8__.inboxHeader.init();
  _components_today_header__WEBPACK_IMPORTED_MODULE_9__.todayHeader.init();
  _components_upcoming_header__WEBPACK_IMPORTED_MODULE_10__.upcomingHeader.init();
  _components_project_header__WEBPACK_IMPORTED_MODULE_5__.projectHeader.init();
  _components_todo_header__WEBPACK_IMPORTED_MODULE_7__.todoHeader.init();
  _components_project_content__WEBPACK_IMPORTED_MODULE_6__.projectContent.init();
  _components_todo_content__WEBPACK_IMPORTED_MODULE_11__.todoContent.init();
  _components_todo_footer__WEBPACK_IMPORTED_MODULE_12__.todoFooter.init();
  _components_todo_detail__WEBPACK_IMPORTED_MODULE_17__.viewTodoModal.init();
  _components_add_project_modal__WEBPACK_IMPORTED_MODULE_13__.projectModal.init();
  _components_add_todo_modal__WEBPACK_IMPORTED_MODULE_14__.todoModal.init();
  _components_delete_confirmation__WEBPACK_IMPORTED_MODULE_15__.confirmDeletionModal.init();
  _components_modify_data__WEBPACK_IMPORTED_MODULE_16__.modificationModal.init();
  pubsub.emit('serveInboxHeader');
  pubsub.emit('preRenderTodosContainer');
  pubsub.emit('queryTodo', {
    projectId: 'inbox'
  });
  pubsub.emit('serveTodoFooter');
}
;
const pubsub = {
  events: [],
  add: function (event, method) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(method);
  },
  remove: function (event, method) {
    if (this.events[event]) this.events[event] = this.events[event].filter(fn => fn !== method);
  },
  emit: function (event, data) {
    this.events[event].forEach(method => {
      method(data);
    });
  }
};

/***/ }),

/***/ "./src/project-be.js":
/*!***************************!*\
  !*** ./src/project-be.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectModule": () => (/* binding */ projectModule)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* beautify preserve:start */

/* beautify preserve:end */

const Project = function (prop) {
  this.name = prop['project-name'];
  this.id = prop['project-id'];
};
function serialize(arr) {
  let serialized = [];
  arr.forEach(function (obj) {
    serialized.push({
      "project-name": obj.name,
      "project-id": obj.id
    });
  });
  localStorage.setItem('projects', JSON.stringify(serialized));
}
;
function deserialize() {
  let projects = localStorage.getObject('projects') || [];
  if (projects.length > 0) return projects.map(pojo => new Project(pojo));
  return [];
}
;
const projectModule = {
  projects: [],
  init: () => {
    projectModule.projects = deserialize();
    loadSampleProject(projectModule.projects);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('projectCreation', projectModule.createProject);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('projectDeletion', projectModule.deleteProject);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('projectModification', projectModule.editProject);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('queryProject', projectModule.getProject);
  },
  createProject: form => {
    const latestProject = projectModule.projects[projectModule.projects.length - 1];
    /* beautify preserve:start */
    form['project-id'] = latestProject?.id + 1 || 1;
    /* beautify preserve:end */
    const project = new Project(form);
    projectModule.projects.push(project);
    serialize(projectModule.projects);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('projectUpdated', projectModule.projects);
  },
  getProject: request => {
    let result = [];
    // viewing all projects
    if (request.type == 'page') {
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveProjectHeader');
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveProjectBody', projectModule.projects);
      return;
    }
    if (request.type == 'nav') {
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('buildProjectShortcut', projectModule.projects);
      return;
    }
    if (request.type == 'modal') {
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('addNewTodo', projectModule.projects);
      return;
    }
    if (request.type == 'todo-edit') {
      request.projects = projectModule.projects;
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('modifyDataRequest', request);
      return;
    }
    if (request.type == 'single-project') {
      // viewing a single project
      result = projectModule.projects.filter(project => project.id == request.projectId);
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveProjectHeader', result);
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('preRenderTodosContainer');
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('queryTodo', request);
    } else {
      // get project name when viewing a single todo
      result = projectModule.projects.filter(project => project.id == request.projectId);
      _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('foundProjectOfViewedTodo', result[0]);
    }
  },
  deleteProject: id => {
    for (let index = projectModule.projects.length - 1; index >= 0; index--) {
      const project = projectModule.projects[index];
      if (project.id == id) {
        projectModule.projects.splice(index, 1);
      }
    }
    ;
    serialize(projectModule.projects);
    // delete all todos that belong to the deleted project
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('todoDeletion', {
      type: 'project',
      projectId: id
    });
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('projectUpdated', projectModule.projects);
  },
  editProject: request => {
    const id = request.projectId;
    projectModule.projects.map(project => {
      if (project.id == id) {
        project.name = request.name;
        _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('projectUpdated', projectModule.projects);
      }
      ;
    });
    serialize(projectModule.projects);
  }
};
function ProjectProp(title, id) {
  this["project-name"] = title;
  this["project-id"] = id;
}
;
let sampleProjectProps = [new ProjectProp('Web development education', 10001), new ProjectProp('Healthy lifestyle driver', 10002)];
function loadSampleProject(arr) {
  const projects = sampleProjectProps.map(prop => new Project(prop));
  projects.forEach(obj => arr.push(obj));
}

/***/ }),

/***/ "./src/todo-be.js":
/*!************************!*\
  !*** ./src/todo-be.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoModule": () => (/* binding */ todoModule)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* beautify preserve:start */



/* beautify preserve:end */

const Todo = function (prop) {
  this.title = prop['todo-name'];
  this.desc = prop['todo-desc'];
  this.dueDate = prop['todo-date'];
  this.priority = prop['todo-priority'];
  this.complete = prop['complete'] || false;
  this.todoId = prop['todo-id'];
  this.projectId = prop['project-id'] || 0;
};
Todo.prototype.getRemainingTime = function () {
  if (this.dueDate == '') return `No deadline set`;
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(`${this.dueDate}T24:00:00`), new Date(), {
    addSuffix: true
  });
};
Todo.prototype.format = function () {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(this.dueDate), 'MMM dd, yyyy');
};
Todo.prototype.toggleComplete = function () {
  return this.complete = !this.complete;
};
Todo.prototype.isToday = function () {
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date().setHours(0, 0, 0, 0), new Date(`${this.dueDate}T00:00:00`)) == 0) return true;
  return false;
};
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
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(today, deadline) == -1 && (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(upcomingDate, deadline) != -1) return true;
  return false;
};
Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};
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
      "project-id": obj.projectId
    });
  });
  localStorage.setItem('todos', JSON.stringify(serialized));
}
;
function deserialize() {
  let todos = localStorage.getObject('todos') || [];
  if (todos.length > 0) return todos.map(pojo => new Todo(pojo));
  return [];
}
;
const todoModule = {
  todos: [],
  init: () => {
    todoModule.todos = deserialize();
    loadSampleTodo(todoModule.todos);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('queryTodo', todoModule.getTodo);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('todoCreation', todoModule.createTodo);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('todoDeletion', todoModule.deleteTodo);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('todoModification', todoModule.modifyTodo);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.add('todoToggleCompletion', todoModule.toggleStatus);
  },
  createTodo: form => {
    const latestTodo = todoModule.todos[todoModule.todos.length - 1];
    /* beautify preserve:start */
    form['todo-id'] = latestTodo?.todoId + 1 || 1;
    /* beautify preserve:end */
    const todo = new Todo(form);
    todoModule.todos.push(todo);
    serialize(todoModule.todos);
    _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('todoUpdated');
  },
  getTodo: request => {
    let result = [];
    // viewing todo from 3 main filters
    if (request.projectId == 'inbox') return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveTodoBody', todoModule.todos);
    if (request.projectId == 'today') {
      result = todoModule.todos.filter(todo => todo.isToday() == true);
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveTodoBody', result);
    }
    ;
    if (request.projectId == 'upcoming') {
      result = todoModule.todos.filter(todo => todo.isUpcoming() == true);
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveTodoBody', result);
    }
    ;
    // viewing a specific todo
    if (!request.projectId) {
      result = todoModule.todos.filter(todo => todo.todoId == request.todoId);
      return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('getDetailsOfTodo', result[0]);
    }
    // viewing all todos that belong to a project
    result = todoModule.todos.filter(todo => todo.projectId == request.projectId && todo.id == request.id);
    return _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('serveTodoBody', result);
  },
  deleteTodo: request => {
    if (request.type == 'project') {
      todoModule.todos = todoModule.todos.filter(todo => todo.projectId != request.projectId);
      return serialize(todoModule.todos);
    }
    ;
    if (request.type == 'todo') {
      todoModule.todos = todoModule.todos.filter(todo => todo.todoId != request.todoId);
      return serialize(todoModule.todos);
    }
    ;
    todoModule.todos = todoModule.todos.filter(todo => todo.projectId != request.projectId && todo.todoId != request.todoId);
    return serialize(todoModule.todos);
  },
  modifyTodo: query => {
    todoModule.todos.map(todo => {
      if (todo.todoId == query.todoId) {
        todo.title = query.form['todo-name'];
        todo.desc = query.form['todo-desc'];
        todo.dueDate = query.form['todo-date'];
        todo.priority = query.form['todo-priority'];
        todo.projectId = query.form['project-id'];
        _index__WEBPACK_IMPORTED_MODULE_0__.pubsub.emit('todoUpdated');
      }
      ;
    });
    serialize(todoModule.todos);
  },
  toggleStatus: id => {
    todoModule.todos.map(todo => {
      if (todo.todoId == id) todo.complete = !todo.complete;
    });
    serialize(todoModule.todos);
  }
};
function TodoProp(title, desc, dueDate, priority, complete, todoId, projectId) {
  this["todo-name"] = title;
  this["todo-desc"] = desc;
  this["todo-date"] = dueDate;
  this["todo-priority"] = priority;
  this["complete"] = complete;
  this["todo-id"] = todoId;
  this["project-id"] = projectId;
}
;
let sampleTodoProps = [new TodoProp('Go swimming with friends', '8 AM Sunday at local river', '2023-04-24', 'high', false, 10001, 0), new TodoProp('Learn React', '', '2023-02-24', 'med', true, 10002, 10001), new TodoProp('Learn Next.js', 'After knowing React, Next.js would be a nice knowledge to have in order to become a fullstack developer', '2023-06-01', 'med', false, 10003, 10001), new TodoProp('Work on my 6 packs', 'Developer need a healthy body too!', '2023-10-15', 'high', true, 10004, 10002), new TodoProp('Make some more friends!', 'Never know when you need em', '2033-04-24', 'low', false, 10005, 10002)];
function loadSampleTodo(arr) {
  const todos = sampleTodoProps.map(prop => new Todo(prop));
  todos.forEach(obj => arr.push(obj));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/FlightyRegular-vm7zA.ttf */ "./src/fonts/FlightyRegular-vm7zA.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\n\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nselect {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\n\n[multiple] {\n  background-image: none;\n  background-image: initial;\n  background-position: 0 0;\n  background-position: initial;\n  background-repeat: repeat;\n  background-repeat: initial;\n  background-size: auto auto;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: inherit;\n          print-color-adjust: inherit;\n}\n\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #2563eb;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n}\n\n[type='checkbox'] {\n  border-radius: 0px;\n}\n\n[type='radio'] {\n  border-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n[type='radio']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='file'] {\n  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll;\n  background: initial;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n[type='file']:focus {\n  outline: 1px solid ButtonText;\n  outline: 1px auto -webkit-focus-ring-color;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.header {\n    position: fixed;\n    width: 100%;\n    top: 0px;\n    z-index: 10;\n    display: grid;\n    grid-auto-flow: column;\n    height: 3.5rem;\n    font-family: 'Flighty Regular';\n  }\n.side-bar {\n    border-right-width: 2px;\n    width: 16rem;\n    height: 100vh;\n    position: fixed;\n    z-index: 10;\n    visibility: hidden;\n  }\n.projects-filter {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n.main-filter>*,\n  .projects-filter>* {\n    display: block;\n    margin-top: 1rem;\n    padding-left: 0.5rem;\n  }\n.main-filter>*:first-child {\n    margin-top: 1.3rem;\n  }\n.projects-filter>*:first-child {\n    margin-top: 0.5rem;\n  }\n.due-date,\n  .todo-edit,\n  .todo-delete {\n    align-self: center;\n    justify-self: end;\n  }\n.due-date {\n    cursor: none;\n  }\n.title,\n  .description,\n  .due-date {\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n.title {\n    grid-area: title;\n  }\n.description {\n    grid-area: desc;\n  }\n.due-date {\n    grid-area: deadline;\n  }\n.todo-edit {\n    grid-area: edit;\n  }\n.todo-delete {\n    grid-area: delete;\n  }\nmain {\n    display: grid;\n    grid-gap: 1.25rem;\n    gap: 1.25rem;\n    margin: 1.25rem;\n  }\n.content-heading {\n    flex-grow: 1;\n    font-weight: 700;\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n.project-title {\n    flex-grow: 1;\n    font-weight: 700;\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n.project-item {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) 40px 40px;\n    align-items: center;\n    grid-column-gap: 1rem;\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n    border-width: 2px;\n    border-radius: 0.5rem;\n    padding: 1.25rem;\n    cursor: pointer;\n  }\n.todo-item {\n    display: grid;\n    grid-template-columns: min-content minmax(9rem, 1fr) minmax(7rem, max-content) 40px 40px;\n    grid-template-rows: repeat(2, minmax(0, 24px));\n    grid-template-areas:\n      \"checkbox title deadline edit delete\"\n      \"checkbox desc  deadline edit delete\";\n    grid-column-gap: 1rem;\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n    border-width: 2px;\n    border-radius: 0.5rem;\n    padding: 1.25rem;\n    cursor: pointer;\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n.modal-overlay {\n    top: 0;\n    position: fixed;\n    z-index: 1000;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n.modal-content {\n    position: fixed;\n    z-index: 1010;\n    width: 100vw;\n    max-width: 100%;\n    height: -moz-max-content;\n    height: max-content;\n    max-height: 100%;\n    overflow: auto;\n    background-color: #ffffff;\n    padding: 2.5rem;\n    border-radius: 1.5rem;\n  }\n.form-item {\n    width: 100%;\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n    border-width: 0px;\n    border-radius: 0.375rem;\n    background-color: #f3f4f6;\n  }\n.form-item:focus {\n    border-width: 2px;\n    border-color: #000000;\n    box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    background-color: #ffffff;\n  }\n.modal-content>label>div {\n    padding-top: 1.75rem;\n  }\n.invisible {\n  visibility: hidden;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.left-80 {\n  left: 20rem;\n}\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n.m-2 {\n  margin: 0.5rem;\n}\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.ml-6 {\n  margin-left: 1.5rem;\n}\n.ml-5 {\n  margin-left: 1.25rem;\n}\n.block {\n  display: block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.h-11 {\n  height: 2.75rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-14 {\n  height: 3.5rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-11 {\n  width: 2.75rem;\n}\n.w-14 {\n  width: 3.5rem;\n}\n.grow {\n  flex-grow: 1;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-cols-menu-toggle {\n  grid-template-columns: 56px minmax(min-content, 1fr);\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.content-start {\n  align-content: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-5 {\n  gap: 1.25rem;\n}\n.place-self-center {\n  align-self: center;\n  justify-self: center;\n  place-self: center;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-center {\n  align-self: center;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border {\n  border-width: 1px;\n}\n.border-t-2 {\n  border-top-width: 2px;\n}\n.border-r-2 {\n  border-right-width: 2px;\n}\n.border-priority-high {\n  --tw-border-opacity: 1;\n  border-color: rgba(255, 0, 0, var(--tw-border-opacity));\n}\n.border-priority-med {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 255, var(--tw-border-opacity));\n}\n.border-priority-low {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 255, 0, var(--tw-border-opacity));\n}\n.border-priority-high\\/0 {\n  border-color: rgba(255, 0, 0, 0);\n}\n.border-priority-high\\/5 {\n  border-color: rgba(255, 0, 0, 0.05);\n}\n.border-priority-high\\/10 {\n  border-color: rgba(255, 0, 0, 0.1);\n}\n.border-priority-high\\/20 {\n  border-color: rgba(255, 0, 0, 0.2);\n}\n.border-priority-high\\/25 {\n  border-color: rgba(255, 0, 0, 0.25);\n}\n.border-priority-high\\/30 {\n  border-color: rgba(255, 0, 0, 0.3);\n}\n.border-priority-high\\/40 {\n  border-color: rgba(255, 0, 0, 0.4);\n}\n.border-priority-high\\/50 {\n  border-color: rgba(255, 0, 0, 0.5);\n}\n.border-priority-high\\/60 {\n  border-color: rgba(255, 0, 0, 0.6);\n}\n.border-priority-high\\/70 {\n  border-color: rgba(255, 0, 0, 0.7);\n}\n.border-priority-high\\/75 {\n  border-color: rgba(255, 0, 0, 0.75);\n}\n.border-priority-high\\/80 {\n  border-color: rgba(255, 0, 0, 0.8);\n}\n.border-priority-high\\/90 {\n  border-color: rgba(255, 0, 0, 0.9);\n}\n.border-priority-high\\/95 {\n  border-color: rgba(255, 0, 0, 0.95);\n}\n.border-priority-high\\/100 {\n  border-color: rgba(255, 0, 0, 1);\n}\n.border-priority-med\\/0 {\n  border-color: rgba(0, 0, 255, 0);\n}\n.border-priority-med\\/5 {\n  border-color: rgba(0, 0, 255, 0.05);\n}\n.border-priority-med\\/10 {\n  border-color: rgba(0, 0, 255, 0.1);\n}\n.border-priority-med\\/20 {\n  border-color: rgba(0, 0, 255, 0.2);\n}\n.border-priority-med\\/25 {\n  border-color: rgba(0, 0, 255, 0.25);\n}\n.border-priority-med\\/30 {\n  border-color: rgba(0, 0, 255, 0.3);\n}\n.border-priority-med\\/40 {\n  border-color: rgba(0, 0, 255, 0.4);\n}\n.border-priority-med\\/50 {\n  border-color: rgba(0, 0, 255, 0.5);\n}\n.border-priority-med\\/60 {\n  border-color: rgba(0, 0, 255, 0.6);\n}\n.border-priority-med\\/70 {\n  border-color: rgba(0, 0, 255, 0.7);\n}\n.border-priority-med\\/75 {\n  border-color: rgba(0, 0, 255, 0.75);\n}\n.border-priority-med\\/80 {\n  border-color: rgba(0, 0, 255, 0.8);\n}\n.border-priority-med\\/90 {\n  border-color: rgba(0, 0, 255, 0.9);\n}\n.border-priority-med\\/95 {\n  border-color: rgba(0, 0, 255, 0.95);\n}\n.border-priority-med\\/100 {\n  border-color: rgba(0, 0, 255, 1);\n}\n.border-priority-low\\/0 {\n  border-color: rgba(0, 255, 0, 0);\n}\n.border-priority-low\\/5 {\n  border-color: rgba(0, 255, 0, 0.05);\n}\n.border-priority-low\\/10 {\n  border-color: rgba(0, 255, 0, 0.1);\n}\n.border-priority-low\\/20 {\n  border-color: rgba(0, 255, 0, 0.2);\n}\n.border-priority-low\\/25 {\n  border-color: rgba(0, 255, 0, 0.25);\n}\n.border-priority-low\\/30 {\n  border-color: rgba(0, 255, 0, 0.3);\n}\n.border-priority-low\\/40 {\n  border-color: rgba(0, 255, 0, 0.4);\n}\n.border-priority-low\\/50 {\n  border-color: rgba(0, 255, 0, 0.5);\n}\n.border-priority-low\\/60 {\n  border-color: rgba(0, 255, 0, 0.6);\n}\n.border-priority-low\\/70 {\n  border-color: rgba(0, 255, 0, 0.7);\n}\n.border-priority-low\\/75 {\n  border-color: rgba(0, 255, 0, 0.75);\n}\n.border-priority-low\\/80 {\n  border-color: rgba(0, 255, 0, 0.8);\n}\n.border-priority-low\\/90 {\n  border-color: rgba(0, 255, 0, 0.9);\n}\n.border-priority-low\\/95 {\n  border-color: rgba(0, 255, 0, 0.95);\n}\n.border-priority-low\\/100 {\n  border-color: rgba(0, 255, 0, 1);\n}\n.border-\\[\\#3e4042\\] {\n  --tw-border-opacity: 1;\n  border-color: rgba(62, 64, 66, var(--tw-border-opacity));\n}\n.bg-priority-high {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 0, 0, var(--tw-bg-opacity));\n}\n.bg-priority-med {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 255, var(--tw-bg-opacity));\n}\n.bg-priority-low {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 255, 0, var(--tw-bg-opacity));\n}\n.bg-priority-high\\/0 {\n  background-color: rgba(255, 0, 0, 0);\n}\n.bg-priority-high\\/5 {\n  background-color: rgba(255, 0, 0, 0.05);\n}\n.bg-priority-high\\/10 {\n  background-color: rgba(255, 0, 0, 0.1);\n}\n.bg-priority-high\\/20 {\n  background-color: rgba(255, 0, 0, 0.2);\n}\n.bg-priority-high\\/25 {\n  background-color: rgba(255, 0, 0, 0.25);\n}\n.bg-priority-high\\/30 {\n  background-color: rgba(255, 0, 0, 0.3);\n}\n.bg-priority-high\\/40 {\n  background-color: rgba(255, 0, 0, 0.4);\n}\n.bg-priority-high\\/50 {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n.bg-priority-high\\/60 {\n  background-color: rgba(255, 0, 0, 0.6);\n}\n.bg-priority-high\\/70 {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n.bg-priority-high\\/75 {\n  background-color: rgba(255, 0, 0, 0.75);\n}\n.bg-priority-high\\/80 {\n  background-color: rgba(255, 0, 0, 0.8);\n}\n.bg-priority-high\\/90 {\n  background-color: rgba(255, 0, 0, 0.9);\n}\n.bg-priority-high\\/95 {\n  background-color: rgba(255, 0, 0, 0.95);\n}\n.bg-priority-high\\/100 {\n  background-color: rgba(255, 0, 0, 1);\n}\n.bg-priority-med\\/0 {\n  background-color: rgba(0, 0, 255, 0);\n}\n.bg-priority-med\\/5 {\n  background-color: rgba(0, 0, 255, 0.05);\n}\n.bg-priority-med\\/10 {\n  background-color: rgba(0, 0, 255, 0.1);\n}\n.bg-priority-med\\/20 {\n  background-color: rgba(0, 0, 255, 0.2);\n}\n.bg-priority-med\\/25 {\n  background-color: rgba(0, 0, 255, 0.25);\n}\n.bg-priority-med\\/30 {\n  background-color: rgba(0, 0, 255, 0.3);\n}\n.bg-priority-med\\/40 {\n  background-color: rgba(0, 0, 255, 0.4);\n}\n.bg-priority-med\\/50 {\n  background-color: rgba(0, 0, 255, 0.5);\n}\n.bg-priority-med\\/60 {\n  background-color: rgba(0, 0, 255, 0.6);\n}\n.bg-priority-med\\/70 {\n  background-color: rgba(0, 0, 255, 0.7);\n}\n.bg-priority-med\\/75 {\n  background-color: rgba(0, 0, 255, 0.75);\n}\n.bg-priority-med\\/80 {\n  background-color: rgba(0, 0, 255, 0.8);\n}\n.bg-priority-med\\/90 {\n  background-color: rgba(0, 0, 255, 0.9);\n}\n.bg-priority-med\\/95 {\n  background-color: rgba(0, 0, 255, 0.95);\n}\n.bg-priority-med\\/100 {\n  background-color: rgba(0, 0, 255, 1);\n}\n.bg-priority-low\\/0 {\n  background-color: rgba(0, 255, 0, 0);\n}\n.bg-priority-low\\/5 {\n  background-color: rgba(0, 255, 0, 0.05);\n}\n.bg-priority-low\\/10 {\n  background-color: rgba(0, 255, 0, 0.1);\n}\n.bg-priority-low\\/20 {\n  background-color: rgba(0, 255, 0, 0.2);\n}\n.bg-priority-low\\/25 {\n  background-color: rgba(0, 255, 0, 0.25);\n}\n.bg-priority-low\\/30 {\n  background-color: rgba(0, 255, 0, 0.3);\n}\n.bg-priority-low\\/40 {\n  background-color: rgba(0, 255, 0, 0.4);\n}\n.bg-priority-low\\/50 {\n  background-color: rgba(0, 255, 0, 0.5);\n}\n.bg-priority-low\\/60 {\n  background-color: rgba(0, 255, 0, 0.6);\n}\n.bg-priority-low\\/70 {\n  background-color: rgba(0, 255, 0, 0.7);\n}\n.bg-priority-low\\/75 {\n  background-color: rgba(0, 255, 0, 0.75);\n}\n.bg-priority-low\\/80 {\n  background-color: rgba(0, 255, 0, 0.8);\n}\n.bg-priority-low\\/90 {\n  background-color: rgba(0, 255, 0, 0.9);\n}\n.bg-priority-low\\/95 {\n  background-color: rgba(0, 255, 0, 0.95);\n}\n.bg-priority-low\\/100 {\n  background-color: rgba(0, 255, 0, 1);\n}\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n.bg-nav-side-bar {\n  --tw-bg-opacity: 1;\n  background-color: rgba(235, 248, 254, var(--tw-bg-opacity));\n}\n.bg-item-hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(180, 226, 247, var(--tw-bg-opacity));\n}\n.bg-top-bar {\n  --tw-bg-opacity: 1;\n  background-color: rgba(11, 34, 57, var(--tw-bg-opacity));\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n.pt-10 {\n  padding-top: 2.5rem;\n}\n.pb-8 {\n  padding-bottom: 2rem;\n}\n.pt-14 {\n  padding-top: 3.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-priority-high {\n  --tw-text-opacity: 1;\n  color: rgba(255, 0, 0, var(--tw-text-opacity));\n}\n.text-priority-med {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 255, var(--tw-text-opacity));\n}\n.text-priority-low {\n  --tw-text-opacity: 1;\n  color: rgba(0, 255, 0, var(--tw-text-opacity));\n}\n.text-priority-high\\/0 {\n  color: rgba(255, 0, 0, 0);\n}\n.text-priority-high\\/5 {\n  color: rgba(255, 0, 0, 0.05);\n}\n.text-priority-high\\/10 {\n  color: rgba(255, 0, 0, 0.1);\n}\n.text-priority-high\\/20 {\n  color: rgba(255, 0, 0, 0.2);\n}\n.text-priority-high\\/25 {\n  color: rgba(255, 0, 0, 0.25);\n}\n.text-priority-high\\/30 {\n  color: rgba(255, 0, 0, 0.3);\n}\n.text-priority-high\\/40 {\n  color: rgba(255, 0, 0, 0.4);\n}\n.text-priority-high\\/50 {\n  color: rgba(255, 0, 0, 0.5);\n}\n.text-priority-high\\/60 {\n  color: rgba(255, 0, 0, 0.6);\n}\n.text-priority-high\\/70 {\n  color: rgba(255, 0, 0, 0.7);\n}\n.text-priority-high\\/75 {\n  color: rgba(255, 0, 0, 0.75);\n}\n.text-priority-high\\/80 {\n  color: rgba(255, 0, 0, 0.8);\n}\n.text-priority-high\\/90 {\n  color: rgba(255, 0, 0, 0.9);\n}\n.text-priority-high\\/95 {\n  color: rgba(255, 0, 0, 0.95);\n}\n.text-priority-high\\/100 {\n  color: rgba(255, 0, 0, 1);\n}\n.text-priority-med\\/0 {\n  color: rgba(0, 0, 255, 0);\n}\n.text-priority-med\\/5 {\n  color: rgba(0, 0, 255, 0.05);\n}\n.text-priority-med\\/10 {\n  color: rgba(0, 0, 255, 0.1);\n}\n.text-priority-med\\/20 {\n  color: rgba(0, 0, 255, 0.2);\n}\n.text-priority-med\\/25 {\n  color: rgba(0, 0, 255, 0.25);\n}\n.text-priority-med\\/30 {\n  color: rgba(0, 0, 255, 0.3);\n}\n.text-priority-med\\/40 {\n  color: rgba(0, 0, 255, 0.4);\n}\n.text-priority-med\\/50 {\n  color: rgba(0, 0, 255, 0.5);\n}\n.text-priority-med\\/60 {\n  color: rgba(0, 0, 255, 0.6);\n}\n.text-priority-med\\/70 {\n  color: rgba(0, 0, 255, 0.7);\n}\n.text-priority-med\\/75 {\n  color: rgba(0, 0, 255, 0.75);\n}\n.text-priority-med\\/80 {\n  color: rgba(0, 0, 255, 0.8);\n}\n.text-priority-med\\/90 {\n  color: rgba(0, 0, 255, 0.9);\n}\n.text-priority-med\\/95 {\n  color: rgba(0, 0, 255, 0.95);\n}\n.text-priority-med\\/100 {\n  color: rgba(0, 0, 255, 1);\n}\n.text-priority-low\\/0 {\n  color: rgba(0, 255, 0, 0);\n}\n.text-priority-low\\/5 {\n  color: rgba(0, 255, 0, 0.05);\n}\n.text-priority-low\\/10 {\n  color: rgba(0, 255, 0, 0.1);\n}\n.text-priority-low\\/20 {\n  color: rgba(0, 255, 0, 0.2);\n}\n.text-priority-low\\/25 {\n  color: rgba(0, 255, 0, 0.25);\n}\n.text-priority-low\\/30 {\n  color: rgba(0, 255, 0, 0.3);\n}\n.text-priority-low\\/40 {\n  color: rgba(0, 255, 0, 0.4);\n}\n.text-priority-low\\/50 {\n  color: rgba(0, 255, 0, 0.5);\n}\n.text-priority-low\\/60 {\n  color: rgba(0, 255, 0, 0.6);\n}\n.text-priority-low\\/70 {\n  color: rgba(0, 255, 0, 0.7);\n}\n.text-priority-low\\/75 {\n  color: rgba(0, 255, 0, 0.75);\n}\n.text-priority-low\\/80 {\n  color: rgba(0, 255, 0, 0.8);\n}\n.text-priority-low\\/90 {\n  color: rgba(0, 255, 0, 0.9);\n}\n.text-priority-low\\/95 {\n  color: rgba(0, 255, 0, 0.95);\n}\n.text-priority-low\\/100 {\n  color: rgba(0, 255, 0, 1);\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.shadow-checkbox-high {\n  --tw-shadow: inset 1em 1em #FF0000;\n  --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-checkbox-med {\n  --tw-shadow: inset 1em 1em #0000FF;\n  --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-checkbox-low {\n  --tw-shadow: inset 1em 1em #00FF00;\n  --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.check-box {\n    grid-area: checkbox;\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    place-content: center;\n    grid-row: span 2 / span 2;\n    width: 1.75rem;\n    height: 1.75rem;\n    align-self: center;\n    justify-self: start;\n    border-radius: 50%;\n    border-width: 2px;\n    cursor: pointer;\n    color: white;\n  }\n.nav-item {\n    border-radius: 0.5rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    cursor: pointer;\n  }\n.centered-position {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n.todos-container {\n    display: grid;\n    grid-gap: 1.25rem;\n    gap: 1.25rem;\n  }\n\n/* Custom Variables */\n:root {\n  --primary-color: none;\n}\n\n/* Override default focus colors for tailwindcss-forms https://github.com/tailwindlabs/tailwindcss-forms */\n[type='text']:focus,\n[type='email']:focus,\n[type='url']:focus,\n[type='password']:focus,\n[type='number']:focus,\n[type='date']:focus,\n[type='datetime-local']:focus,\n[type='month']:focus,\n[type='search']:focus,\n[type='tel']:focus,\n[type='checkbox']:focus,\n[type='radio']:focus,\n[type='time']:focus,\n[type='week']:focus,\n[multiple]:focus,\ntextarea:focus,\nselect:focus {\n  --tw-ring-color: var(--primary-color);\n  border-color: none;\n  border-color: var(--primary-color);\n}\n\n@font-face {\n  font-family: 'Flighty Regular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('ttf');\n}\n\n.before\\:scale-0::before {\n  content: var(--tw-content);\n  --tw-scale-x: 0;\n  --tw-scale-y: 0;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.before\\:shadow-checkbox-high::before {\n  content: var(--tw-content);\n  --tw-shadow: inset 1em 1em #FF0000;\n  --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n.before\\:shadow-checkbox-med::before {\n  content: var(--tw-content);\n  --tw-shadow: inset 1em 1em #0000FF;\n  --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n.before\\:shadow-checkbox-low::before {\n  content: var(--tw-content);\n  --tw-shadow: inset 1em 1em #00FF00;\n  --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\n.before\\:check-mark::before {\n    content: var(--tw-content);\n    width: 1.25rem;\n    height: 1.25rem;\n    transform-origin: bottom left;\n    -webkit-clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n  }\n\n.before\\:checked\\:scale-100:checked::before {\n  content: var(--tw-content);\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:border-2:hover {\n  border-width: 2px;\n}\n\n.hover\\:border-item-hover:hover {\n  --tw-border-opacity: 1;\n  border-color: rgba(180, 226, 247, var(--tw-border-opacity));\n}\n\n.hover\\:border-white:hover {\n  --tw-border-opacity: 1;\n  border-color: rgba(255, 255, 255, var(--tw-border-opacity));\n}\n\n.hover\\:bg-item-hover:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(180, 226, 247, var(--tw-bg-opacity));\n}\n\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n\n.disabled\\:bg-blue-200:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgba(191, 219, 254, var(--tw-bg-opacity));\n}\n\n.group:hover .group-hover\\:visible {\n  visibility: visible;\n}\n\n@media (min-width: 768px) {\n\n  .md\\:w-\\[600px\\] {\n    width: 600px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:visible {\n    visibility: visible;\n  }\n\n  .lg\\:ml-72 {\n    margin-left: 18rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kCAAmB;EAAnB,yDAAmB;EAAnB,kEAAmB;EAAnB;AAAmB;AAAnB;EAAA,kCAAmB;EAAnB,yDAAmB;EAAnB,kEAAmB;EAAnB;AAAmB;AAAnB;EAAA,kCAAmB;EAAnB,yDAAmB;EAAnB,kEAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAmNjB;IACE,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IAArB,uBAAqB;IAArB,qBAAqB;IACrB,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,YAAY;EACd;AAEA;IACE,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;EACjB;AAEA;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;AAEA;IACE,aAAa;IACb,iBAAY;IAAZ,YAAY;EACd;;AArPF,qBAAqB;AACrB;EACE,qBAAqB;AACvB;;AAEA,0GAA0G;AAC1G;;;;;;;;;;;;;;;;;EAiBE,qCAAqC;EACrC,kBAAkC;EAAlC,kCAAkC;AACpC;;AAEA;EACE,8BAA8B;EAC9B,0DAAwD;AAC1D;;AAlCA;EAAA,2BCAA;EDAA,gBCAA;EDAA,gBCAA;EDAA;CCAA;;ADAA;EAAA,2BCAA;EDAA,mCCAA;EDAA,0DCAA;EDAA,mECAA;EDAA;CCAA;;ADAA;EAAA,2BCAA;EDAA,mCCAA;EDAA,0DCAA;EDAA,mECAA;EDAA;CCAA;;ADAA;EAAA,2BCAA;EDAA,mCCAA;EDAA,0DCAA;EDAA,mECAA;EDAA;CCAA;;AD8ME;IC9MF,2BAAA;ID+MI,cAAc;IACd,eAAe;IACf,6BAA6B;IAC7B,+EAAuE;YAAvE,uEAAuE;EACzE;;AAnNF;EAAA,2BCAA;EDAA,gBCAA;EDAA,gBCAA;EDAA;CCAA;;ADAA;EAAA;CCAA;;ADAA;EAAA,uBCAA;EDAA;CCAA;;ADAA;EAAA,uBCAA;EDAA;CCAA;;ADAA;EAAA,mBCAA;EDAA;CCAA;;ADAA;EAAA,qBCAA;EDAA;CCAA;;ADAA;EAAA,mBCAA;EDAA;CCAA;;ADAA;EAAA;CCAA;;ADAA;;EAAA;IAAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;CAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* Custom Variables */\n:root {\n  --primary-color: none;\n}\n\n/* Override default focus colors for tailwindcss-forms https://github.com/tailwindlabs/tailwindcss-forms */\n[type='text']:focus,\n[type='email']:focus,\n[type='url']:focus,\n[type='password']:focus,\n[type='number']:focus,\n[type='date']:focus,\n[type='datetime-local']:focus,\n[type='month']:focus,\n[type='search']:focus,\n[type='tel']:focus,\n[type='checkbox']:focus,\n[type='radio']:focus,\n[type='time']:focus,\n[type='week']:focus,\n[multiple]:focus,\ntextarea:focus,\nselect:focus {\n  --tw-ring-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n@font-face {\n  font-family: 'Flighty Regular';\n  src: url(./fonts/FlightyRegular-vm7zA.ttf) format('ttf');\n}\n\n@layer components {\n  .header {\n    position: fixed;\n    width: 100%;\n    top: 0px;\n    z-index: 10;\n    display: grid;\n    grid-auto-flow: column;\n    height: 3.5rem;\n    font-family: 'Flighty Regular';\n  }\n\n  .side-bar {\n    border-right-width: 2px;\n    width: 16rem;\n    height: 100vh;\n    position: fixed;\n    z-index: 10;\n    visibility: hidden;\n  }\n\n  .projects-filter {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .main-filter>*,\n  .projects-filter>* {\n    display: block;\n    margin-top: 1rem;\n    padding-left: 0.5rem;\n  }\n\n  .main-filter>*:first-child {\n    margin-top: 1.3rem;\n  }\n\n  .projects-filter>*:first-child {\n    margin-top: 0.5rem;\n  }\n\n  .due-date,\n  .todo-edit,\n  .todo-delete {\n    align-self: center;\n    justify-self: end;\n  }\n\n  .due-date {\n    cursor: none;\n  }\n\n  .title,\n  .description,\n  .due-date {\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  .title {\n    grid-area: title;\n  }\n\n  .description {\n    grid-area: desc;\n  }\n\n  .due-date {\n    grid-area: deadline;\n  }\n\n  .todo-edit {\n    grid-area: edit;\n  }\n\n  .todo-delete {\n    grid-area: delete;\n  }\n\n  main {\n    display: grid;\n    gap: 1.25rem;\n    margin: 1.25rem;\n  }\n\n  .content-heading {\n    flex-grow: 1;\n    font-weight: 700;\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .project-title {\n    flex-grow: 1;\n    font-weight: 700;\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .project-item {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) 40px 40px;\n    align-items: center;\n    column-gap: 1rem;\n    border-width: 2px;\n    border-radius: 0.5rem;\n    padding: 1.25rem;\n    cursor: pointer;\n  }\n\n  .todo-item {\n    display: grid;\n    grid-template-columns: min-content minmax(9rem, 1fr) minmax(7rem, max-content) 40px 40px;\n    grid-template-rows: repeat(2, minmax(0, 24px));\n    grid-template-areas:\n      \"checkbox title deadline edit delete\"\n      \"checkbox desc  deadline edit delete\";\n    column-gap: 1rem;\n    border-width: 2px;\n    border-radius: 0.5rem;\n    padding: 1.25rem;\n    cursor: pointer;\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n\n  .modal-overlay {\n    top: 0;\n    position: fixed;\n    z-index: 1000;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n\n  .modal-content {\n    position: fixed;\n    z-index: 1010;\n    width: 100vw;\n    max-width: 100%;\n    height: max-content;\n    max-height: 100%;\n    overflow: auto;\n    background-color: #ffffff;\n    padding: 2.5rem;\n    border-radius: 1.5rem;\n  }\n\n  .form-item {\n    width: 100%;\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n    border-width: 0px;\n    border-radius: 0.375rem;\n    background-color: #f3f4f6;\n  }\n\n  .form-item:focus {\n    border-width: 2px;\n    border-color: #000000;\n    box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    background-color: #ffffff;\n  }\n\n  .modal-content>label>div {\n    padding-top: 1.75rem;\n  }\n}\n\n@layer utilities {\n  .check-mark {\n    width: 1.25rem;\n    height: 1.25rem;\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n  }\n\n  .check-box {\n    grid-area: checkbox;\n    display: grid;\n    place-content: center;\n    grid-row: span 2 / span 2;\n    width: 1.75rem;\n    height: 1.75rem;\n    align-self: center;\n    justify-self: start;\n    border-radius: 50%;\n    border-width: 2px;\n    cursor: pointer;\n    color: white;\n  }\n\n  .nav-item {\n    border-radius: 0.5rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    cursor: pointer;\n  }\n\n  .centered-position {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .todos-container {\n    display: grid;\n    gap: 1.25rem;\n  }\n\n}",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e";

/***/ }),

/***/ "./src/fonts/FlightyRegular-vm7zA.ttf":
/*!********************************************!*\
  !*** ./src/fonts/FlightyRegular-vm7zA.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39b651c724298938dbd3.ttf";

/***/ }),

/***/ "./src/img/calendar.png":
/*!******************************!*\
  !*** ./src/img/calendar.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d09236d4add2e7d7883.png";

/***/ }),

/***/ "./src/img/mail.png":
/*!**************************!*\
  !*** ./src/img/mail.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b75dd4c993c035137ee.png";

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7c46cfdcaf0d6d567e3.png";

/***/ }),

/***/ "./src/img/planner.png":
/*!*****************************!*\
  !*** ./src/img/planner.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ed8ddc3bd7e3329b20.png";

/***/ }),

/***/ "./src/img/project-add.png":
/*!*********************************!*\
  !*** ./src/img/project-add.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a8a31d5670049ea7c27.png";

/***/ }),

/***/ "./src/img/project-delete.png":
/*!************************************!*\
  !*** ./src/img/project-delete.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d66d821abffc4ea1d12c.png";

/***/ }),

/***/ "./src/img/project-edit.png":
/*!**********************************!*\
  !*** ./src/img/project-edit.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a472de22ea4ba1d020cd.png";

/***/ }),

/***/ "./src/img/todo-add.png":
/*!******************************!*\
  !*** ./src/img/todo-add.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e92b7a39bde6941ef52.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyw2QkFBNkIsd0NBQXdDLEdBQUcsOEJBQThCLHFDQUFxQyxHQUFHLDRCQUE0QixxQ0FBcUMsR0FBRyw0QkFBNEIsd0NBQXdDLEdBQUcsNkJBQTZCLHVDQUF1QyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyw2QkFBNkIsd0NBQXdDLEdBQUcsNkJBQTZCLHVDQUF1QyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyw2QkFBNkIsdUNBQXVDLEdBQUcsNkJBQTZCLHVDQUF1QyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyw2QkFBNkIsd0NBQXdDLEdBQUcsNkJBQTZCLHVDQUF1QyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyw2QkFBNkIsd0NBQXdDLEdBQUcsOEJBQThCLHFDQUFxQyxHQUFHLDJCQUEyQiwyQkFBMkIsNkRBQTZELEdBQUcscUJBQXFCLHVCQUF1Qiw0REFBNEQsR0FBRyxvQkFBb0IsdUJBQXVCLDREQUE0RCxHQUFHLG9CQUFvQix1QkFBdUIsNERBQTRELEdBQUcseUJBQXlCLHlDQUF5QyxHQUFHLHlCQUF5Qiw0Q0FBNEMsR0FBRywwQkFBMEIsMkNBQTJDLEdBQUcsMEJBQTBCLDJDQUEyQyxHQUFHLDBCQUEwQiw0Q0FBNEMsR0FBRywwQkFBMEIsMkNBQTJDLEdBQUcsMEJBQTBCLDJDQUEyQyxHQUFHLDBCQUEwQiwyQ0FBMkMsR0FBRywwQkFBMEIsMkNBQTJDLEdBQUcsMEJBQTBCLDJDQUEyQyxHQUFHLDBCQUEwQiw0Q0FBNEMsR0FBRywwQkFBMEIsMkNBQTJDLEdBQUcsMEJBQTBCLDJDQUEyQyxHQUFHLDBCQUEwQiw0Q0FBNEMsR0FBRywyQkFBMkIseUNBQXlDLEdBQUcsd0JBQXdCLHlDQUF5QyxHQUFHLHdCQUF3Qiw0Q0FBNEMsR0FBRyx5QkFBeUIsMkNBQTJDLEdBQUcseUJBQXlCLDJDQUEyQyxHQUFHLHlCQUF5Qiw0Q0FBNEMsR0FBRyx5QkFBeUIsMkNBQTJDLEdBQUcseUJBQXlCLDJDQUEyQyxHQUFHLHlCQUF5QiwyQ0FBMkMsR0FBRyx5QkFBeUIsMkNBQTJDLEdBQUcseUJBQXlCLDJDQUEy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QXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxZQUFZLHNCQUFzQixhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hZGQtcHJvamVjdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hZGQtdG9kby1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGUtY29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2luYm94LWhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tb2RpZnktZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZS1uYXYtYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpdGUtaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZGF5LWhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90b2RvLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdG9kby1kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdG9kby1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdG9kby1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdXBjb21pbmctaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1iZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1iZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGJlYXV0aWZ5IHByZXNlcnZlOnN0YXJ0ICovXG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbi8qIGJlYXV0aWZ5IHByZXNlcnZlOmVuZCAqL1xuZXhwb3J0IGNvbnN0IHByb2plY3RNb2RhbCA9IHtcbiAgaW5pdDogKCkgPT4ge1xuICAgIHB1YnN1Yi5hZGQoJ2FkZE5ld1Byb2plY3QnLCBwcm9qZWN0TW9kYWwucmVuZGVyKTtcbiAgfSxcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdCA9ICdtb2RhbC1vdmVybGF5JztcbiAgICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBwcm9qZWN0TW9kYWwuY2xvc2VNb2RhbClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbE92ZXJsYXkpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWZvcm0gbW9kYWwtY29udGVudCBjZW50ZXJlZC1wb3NpdGlvbiBtZDp3LVs2MDBweF0nO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0ID0gJ3RleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCc7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCc7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5hbWVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3QtbmFtZSc7XG4gICAgY29uc3QgbGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICBsYWJlbENvbnRlbnQudGV4dENvbnRlbnQgPSAnUHJvamVjdCBuYW1lJztcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIG5hbWVJbnB1dC5uYW1lID0gJ3Byb2plY3QtbmFtZSc7XG4gICAgbmFtZUlucHV0LmlkID0gJ3Byb2plY3QtbmFtZSc7XG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdCA9ICdmb3JtLWl0ZW0nO1xuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHByb2plY3RNb2RhbC5jb250cm9sU3VibWl0KTtcbiAgICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxDb250ZW50KTtcbiAgICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QgPSAnZmxleCBqdXN0aWZ5LWVuZCBwdC0xMCc7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdCA9ICd0ZXh0LTJ4bCBib3JkZXItMiBweC00IHB5LTMgbWwtNiBmb250LWJvbGQnO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHByb2plY3RNb2RhbC5jbG9zZU1vZGFsKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QgPSAndGV4dC0yeGwgYm9yZGVyLTIgcHgtNCBweS0zIG1sLTYgZm9udC1ib2xkIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGlzYWJsZWQ6YmctYmx1ZS0yMDAnO1xuICAgIGNvbmZpcm1CdXR0b24uaWQgPSAnc3VibWl0JztcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJvamVjdE1vZGFsLnN1Ym1pdEZvcm0pO1xuXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcHVic3ViLmFkZCgnY2xvc2VQcm9qZWN0Rm9ybScsIHByb2plY3RNb2RhbC5jbG9zZU1vZGFsKTtcbiAgfSxcbiAgY2xvc2VNb2RhbDogKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIG1vZGFsLnJlbW92ZSgpO1xuICB9LFxuICBjb250cm9sU3VibWl0OiAoZXYpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gIWV2LnRhcmdldC52YWx1ZS50cmltKCk7XG4gIH0sXG4gIHN1Ym1pdEZvcm06IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXYudGFyZ2V0KTtcbiAgICBjb25zdCBmb3JtUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgIHB1YnN1Yi5lbWl0KCdwcm9qZWN0Q3JlYXRpb24nLCBmb3JtUHJvcHMpO1xuICAgIHByb2plY3RNb2RhbC5jbG9zZU1vZGFsKGV2KTtcbiAgfSxcbn07IiwiLyogYmVhdXRpZnkgcHJlc2VydmU6c3RhcnQgKi9cbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleFwiO1xuLyogYmVhdXRpZnkgcHJlc2VydmU6ZW5kICovXG5leHBvcnQgY29uc3QgdG9kb01vZGFsID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgnYWRkTmV3VG9kbycsIHRvZG9Nb2RhbC5yZW5kZXIpO1xuICB9LFxuICByZW5kZXI6IChwcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0ID0gJ21vZGFsLW92ZXJsYXknO1xuICAgIG1vZGFsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRvZG9Nb2RhbC5jbG9zZU1vZGFsKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsT3ZlcmxheSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0ID0gJ3RvZG8tZm9ybSBtb2RhbC1jb250ZW50IGNlbnRlcmVkLXBvc2l0aW9uIG1kOnctWzYwMHB4XSc7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtM3hsJztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIG5ldyB0b2RvJztcblxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmFtZUxhYmVsLmh0bWxGb3IgPSAndG9kby1uYW1lJztcbiAgICBjb25zdCBuYW1lTGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUxhYmVsQ29udGVudC5jbGFzc0xpc3QgPSAndGV4dC14bCc7XG4gICAgbmFtZUxhYmVsQ29udGVudC50ZXh0Q29udGVudCA9ICdUb2RvIG5hbWUnO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSAndG9kby1uYW1lJztcbiAgICBuYW1lSW5wdXQuaWQgPSAndG9kby1uYW1lJztcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0ID0gJ2Zvcm0taXRlbSc7XG4gICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdG9kb01vZGFsLmNvbnRyb2xTdWJtaXQpO1xuICAgIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lTGFiZWxDb250ZW50KTtcbiAgICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY0xhYmVsLmh0bWxGb3IgPSAndG9kby1kZXNjJztcbiAgICBjb25zdCBkZXNjTGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY0xhYmVsQ29udGVudC5jbGFzc0xpc3QgPSAndGV4dC14bCc7XG4gICAgZGVzY0xhYmVsQ29udGVudC50ZXh0Q29udGVudCA9ICdXaGF0IGFyZSB0aGUgZGV0YWlscyBvZiB0aGUgdG9kbyc7XG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjSW5wdXQucm93cyA9IDM7XG4gICAgZGVzY0lucHV0Lm5hbWUgPSAndG9kby1kZXNjJztcbiAgICBkZXNjSW5wdXQuaWQgPSAndG9kby1kZXNjJztcbiAgICBkZXNjSW5wdXQuY2xhc3NMaXN0ID0gJ2Zvcm0taXRlbSc7XG4gICAgZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NMYWJlbENvbnRlbnQpO1xuICAgIGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuaHRtbEZvciA9ICd0b2RvLWRhdGUnO1xuICAgIGNvbnN0IGRhdGVMYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlTGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICBkYXRlTGFiZWxDb250ZW50LnRleHRDb250ZW50ID0gJ1doZW4gaXMgdGhlIGRlYWRsaW5lJztcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gJ3RvZG8tZGF0ZSc7XG4gICAgZGF0ZUlucHV0LmlkID0gJ3RvZG8tZGF0ZSc7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdCA9ICdmb3JtLWl0ZW0nO1xuICAgIGRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVMYWJlbENvbnRlbnQpO1xuICAgIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuaHRtbEZvciA9ICd0b2RvLXByb2plY3QnO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICBwcm9qZWN0TGFiZWxDb250ZW50LnRleHRDb250ZW50ID0gJ0FkZCB0aGlzIHRvZG8gdG8gcHJvamVjdDonO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RJbnB1dC5uYW1lID0gJ3Byb2plY3QtaWQnO1xuICAgIHByb2plY3RJbnB1dC5pZCA9ICdwcm9qZWN0LWlkJztcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0ID0gJ2Zvcm0taXRlbSc7XG5cbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9ICcwJztcbiAgICBkZWZhdWx0T3B0aW9uLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZGVmYXVsdE9wdGlvbik7XG4gICAgaWYgKHByb2plY3RzKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0LmlkO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdEhlYWRlcikge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdEhlYWRlci5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgICBpZiAoY3VycmVudFByb2plY3RJZCA9PSBwcm9qZWN0LmlkKSBwcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0LmlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHByb2plY3RMYWJlbC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWxDb250ZW50KTtcbiAgICBwcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICd0b2RvLXByaW9yaXR5JztcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5TGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICBwcmlvcml0eUxhYmVsQ29udGVudC50ZXh0Q29udGVudCA9ICdIb3cgdXJnZW50IGlzIGl0Pyc7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5SW5wdXQubmFtZSA9ICd0b2RvLXByaW9yaXR5JztcbiAgICBwcmlvcml0eUlucHV0LmlkID0gJ3RvZG8tcHJpb3JpdHknO1xuICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0ID0gJ2Zvcm0taXRlbSc7XG4gICAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hPcHRpb24udmFsdWUgPSAnaGlnaCc7XG4gICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBjb25zdCBtZWRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWRPcHRpb24udmFsdWUgPSAnbWVkJztcbiAgICBtZWRPcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICBjb25zdCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsb3dPcHRpb24udmFsdWUgPSAnbG93JztcbiAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkT3B0aW9uKTtcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG4gICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsQ29udGVudCk7XG4gICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QgPSAnZmxleCBqdXN0aWZ5LWVuZCBwdC0xMCc7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdCA9ICd0ZXh0LTJ4bCBib3JkZXItMiBweC00IHB5LTMgbWwtNiBmb250LWJvbGQnO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRvZG9Nb2RhbC5jbG9zZU1vZGFsKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QgPSAndGV4dC0yeGwgYm9yZGVyLTIgcHgtNCBweS0zIG1sLTYgZm9udC1ib2xkIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGlzYWJsZWQ6YmctYmx1ZS0yMDAnO1xuICAgIGNvbmZpcm1CdXR0b24uaWQgPSAnc3VibWl0JztcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdG9kb01vZGFsLnN1Ym1pdEZvcm0pO1xuXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBwdWJzdWIuYWRkKCdjbG9zZVRvZG9Gb3JtJywgdG9kb01vZGFsLmNsb3NlTW9kYWwpO1xuICB9LFxuICBjbG9zZU1vZGFsOiAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gIH0sXG4gIGNvbnRyb2xTdWJtaXQ6IChldikgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbiAgICBidXR0b24uZGlzYWJsZWQgPSAhZXYudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgfSxcbiAgc3VibWl0Rm9ybTogKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldi50YXJnZXQpO1xuICAgIGNvbnN0IGZvcm1Qcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgcHVic3ViLmVtaXQoJ3RvZG9DcmVhdGlvbicsIGZvcm1Qcm9wcyk7XG4gICAgdG9kb01vZGFsLmNsb3NlTW9kYWwoZXYpO1xuICB9LFxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL2luZGV4XCI7XG4vKiBiZWF1dGlmeSBwcmVzZXJ2ZTplbmQgKi9cblxuZXhwb3J0IGNvbnN0IGNvbmZpcm1EZWxldGlvbk1vZGFsID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgnY29uZmlybURlbGV0ZURhdGEnLCBjb25maXJtRGVsZXRpb25Nb2RhbC5yZW5kZXIpO1xuICB9LFxuICByZW5kZXI6IChyZXF1ZXN0KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdCA9ICdtb2RhbC1vdmVybGF5JztcbiAgICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBjb25maXJtRGVsZXRpb25Nb2RhbC5jbG9zZU1vZGFsKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsT3ZlcmxheSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0ID0gJ3Byb2plY3QtZm9ybSBtb2RhbC1jb250ZW50IGNlbnRlcmVkLXBvc2l0aW9uIG1kOnctWzYwMHB4XSc7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtMnhsJztcbiAgICBpZiAocmVxdWVzdC50eXBlID09ICdwcm9qZWN0LWRlbGV0ZScpIHtcbiAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7cmVxdWVzdC5uYW1lfT8gQWxsIHRvZG9zIGFzc29jaWF0ZWQgd2l0aCAke3JlcXVlc3QubmFtZX0gd2lsbCBnZXQgZGVsZXRlIHRvby5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3JlcXVlc3QubmFtZX1gO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QgPSAnZmxleCBqdXN0aWZ5LWVuZCBwdC0xMCc7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdCA9ICd0ZXh0LTJ4bCBib3JkZXItMiBweC00IHB5LTMgbWwtNiBmb250LWJvbGQnO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGNvbmZpcm1EZWxldGlvbk1vZGFsLmNsb3NlTW9kYWwpO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdCA9ICd0ZXh0LTJ4bCBib3JkZXItMiBweC00IHB5LTMgbWwtNiBmb250LWJvbGQgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkaXNhYmxlZDpiZy1ibHVlLTIwMCc7XG4gICAgY29uZmlybUJ1dHRvbi5pZCA9ICdzdWJtaXQnO1xuICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldikgPT4gY29uZmlybURlbGV0aW9uTW9kYWwuZGVsZXRlRGF0YShldiwgcmVxdWVzdCkpO1xuXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBwdWJzdWIuYWRkKCdjbG9zZVByb2plY3RGb3JtJywgY29uZmlybURlbGV0aW9uTW9kYWwuY2xvc2VNb2RhbCk7XG4gIH0sXG4gIGNsb3NlTW9kYWw6IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgfSxcbiAgZGVsZXRlRGF0YTogKGV2LCByZXF1ZXN0KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICByZXF1ZXN0LmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgY29uZmlybURlbGV0aW9uTW9kYWwuY2xvc2VNb2RhbChldik7XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PSAncHJvamVjdC1kZWxldGUnKVxuICAgICAgcmV0dXJuIHB1YnN1Yi5lbWl0KCdwcm9qZWN0RGVsZXRpb24nLCByZXF1ZXN0LnByb2plY3RJZCk7XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PSAndG9kby1kZWxldGUnKVxuICAgICAgcmV0dXJuIHB1YnN1Yi5lbWl0KCd0b2RvRGVsZXRpb24nLCB7XG4gICAgICAgIHR5cGU6ICd0b2RvJyxcbiAgICAgICAgdG9kb0lkOiByZXF1ZXN0LnRvZG9JZCxcbiAgICAgIH0pO1xuICB9LFxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL2luZGV4XCI7XG4vKiBiZWF1dGlmeSBwcmVzZXJ2ZTplbmQgKi9cbmV4cG9ydCBjb25zdCBpbmJveEhlYWRlciA9IHtcbiAgaW5pdDogKCkgPT4ge1xuICAgIHB1YnN1Yi5hZGQoJ3NlcnZlSW5ib3hIZWFkZXInLCBpbmJveEhlYWRlci5yZW5kZXIpO1xuICB9LFxuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvL2NsZWFyIG9sZCBjb250ZW50cyBpZiB0aGVyZSBhcmUgYW55XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGhlYWRpbmcuY2xhc3NMaXN0ID0gJ2NvbnRlbnQtaGVhZGluZyBmb250LWJvbGQgdGV4dC14bCc7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGBTaG93aW5nIGFsbCBvZiB5b3VyIGF2YWlsYWJsZSB0b2Rvc2A7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgfSxcbn07IiwiLyogYmVhdXRpZnkgcHJlc2VydmU6c3RhcnQgKi9cbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleFwiO1xuLyogYmVhdXRpZnkgcHJlc2VydmU6ZW5kICovXG5cbmV4cG9ydCBjb25zdCBtb2RpZmljYXRpb25Nb2RhbCA9IHtcbiAgaW5pdDogKCkgPT4ge1xuICAgIHB1YnN1Yi5hZGQoJ21vZGlmeURhdGFSZXF1ZXN0JywgbW9kaWZpY2F0aW9uTW9kYWwucmVuZGVyKTtcbiAgfSxcbiAgcmVuZGVyOiAocmVxdWVzdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QgPSAnbW9kYWwtb3ZlcmxheSc7XG4gICAgbW9kYWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgbW9kaWZpY2F0aW9uTW9kYWwuY2xvc2VNb2RhbClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbE92ZXJsYXkpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWZvcm0gbW9kYWwtY29udGVudCBjZW50ZXJlZC1wb3NpdGlvbiBtZDp3LVs2MDBweF0nO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0ID0gJ3RleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTJ4bCBwYi04JztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgRWRpdCAke3JlcXVlc3QubmFtZX1gO1xuXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBpZiAocmVxdWVzdC50eXBlID09ICdwcm9qZWN0LWVkaXQnKSB7XG4gICAgICBuYW1lTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0LW5hbWUnO1xuICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgbmFtZUlucHV0Lm5hbWUgPSAncHJvamVjdC1uYW1lJztcbiAgICAgIG5hbWVJbnB1dC5pZCA9ICdwcm9qZWN0LW5hbWUnO1xuICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdCA9ICdmb3JtLWl0ZW0nO1xuICAgICAgbmFtZUlucHV0LnZhbHVlID0gcmVxdWVzdC5uYW1lO1xuICAgICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbW9kaWZpY2F0aW9uTW9kYWwuY29udHJvbFN1Ym1pdCk7XG4gICAgICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2RvTmFtZSA9IHJlcXVlc3QuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRvZG9EZXNjID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdG9kb0RhdGUgPSByZXF1ZXN0LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJykudGl0bGU7XG4gICAgICBjb25zdCB0b2RvUHJvamVjdElkID0gcmVxdWVzdC5lbGVtZW50LmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgY29uc3QgY2xhc3NBcnJheSA9IHJlcXVlc3QuZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgIGxldCBwcmlvcml0eVZhbHVlO1xuICAgICAgY2xhc3NBcnJheS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCB3b3JkcyA9IG5hbWUuc3BsaXQoJy0nKTtcbiAgICAgICAgaWYgKHdvcmRzWzBdID09ICdib3JkZXInICYmIHdvcmRzWzFdID09ICdwcmlvcml0eScpXG4gICAgICAgICAgcmV0dXJuIHByaW9yaXR5VmFsdWUgPSB3b3Jkc1syXTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgbmFtZUxhYmVsLmh0bWxGb3IgPSAndG9kby1uYW1lJztcbiAgICAgIGNvbnN0IG5hbWVMYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG5hbWVMYWJlbENvbnRlbnQuY2xhc3NMaXN0ID0gJ3RleHQteGwnO1xuICAgICAgbmFtZUxhYmVsQ29udGVudC50ZXh0Q29udGVudCA9ICdUb2RvIG5hbWUnO1xuICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgbmFtZUlucHV0Lm5hbWUgPSAndG9kby1uYW1lJztcbiAgICAgIG5hbWVJbnB1dC5pZCA9ICd0b2RvLW5hbWUnO1xuICAgICAgbmFtZUlucHV0LnZhbHVlID0gdG9kb05hbWU7XG4gICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0ID0gJ2Zvcm0taXRlbSc7XG4gICAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBtb2RpZmljYXRpb25Nb2RhbC5jb250cm9sU3VibWl0KTtcbiAgICAgIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lTGFiZWxDb250ZW50KTtcbiAgICAgIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgZGVzY0xhYmVsLmh0bWxGb3IgPSAndG9kby1kZXNjJztcbiAgICAgIGNvbnN0IGRlc2NMYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlc2NMYWJlbENvbnRlbnQuY2xhc3NMaXN0ID0gJ3RleHQteGwnO1xuICAgICAgZGVzY0xhYmVsQ29udGVudC50ZXh0Q29udGVudCA9ICdXaGF0IGFyZSB0aGUgZGV0YWlscyBvZiB0aGUgdG9kbyc7XG4gICAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgZGVzY0lucHV0LnJvd3MgPSAzO1xuICAgICAgZGVzY0lucHV0Lm5hbWUgPSAndG9kby1kZXNjJztcbiAgICAgIGRlc2NJbnB1dC5pZCA9ICd0b2RvLWRlc2MnO1xuICAgICAgZGVzY0lucHV0LnZhbHVlID0gdG9kb0Rlc2M7XG4gICAgICBkZXNjSW5wdXQuY2xhc3NMaXN0ID0gJ2Zvcm0taXRlbSc7XG4gICAgICBkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsQ29udGVudCk7XG4gICAgICBkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIGRhdGVMYWJlbC5odG1sRm9yID0gJ3RvZG8tZGF0ZSc7XG4gICAgICBjb25zdCBkYXRlTGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXRlTGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICAgIGRhdGVMYWJlbENvbnRlbnQudGV4dENvbnRlbnQgPSAnV2hlbiBpcyB0aGUgZGVhZGxpbmUnO1xuICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgZGF0ZUlucHV0Lm5hbWUgPSAndG9kby1kYXRlJztcbiAgICAgIGRhdGVJbnB1dC5pZCA9ICd0b2RvLWRhdGUnO1xuICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdCA9ICdmb3JtLWl0ZW0nO1xuICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdG9kb0RhdGU7XG4gICAgICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsQ29udGVudCk7XG4gICAgICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHByb2plY3RMYWJlbC5odG1sRm9yID0gJ3RvZG8tcHJvamVjdCc7XG4gICAgICBjb25zdCBwcm9qZWN0TGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0TGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICAgIHByb2plY3RMYWJlbENvbnRlbnQudGV4dENvbnRlbnQgPSAnQWRkIHRoaXMgdG9kbyB0byBwcm9qZWN0Oic7XG4gICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgIHByb2plY3RJbnB1dC5uYW1lID0gJ3Byb2plY3QtaWQnO1xuICAgICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3QtaWQnO1xuICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdCA9ICdmb3JtLWl0ZW0nO1xuXG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gJzAnO1xuICAgICAgZGVmYXVsdE9wdGlvbi50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZGVmYXVsdE9wdGlvbik7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnByb2plY3RzKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXF1ZXN0LnByb2plY3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IHByb2plY3QgPSByZXF1ZXN0LnByb2plY3RzW2luZGV4XTtcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gdG9kb1Byb2plY3RJZDtcbiAgICAgIHByb2plY3RMYWJlbC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWxDb250ZW50KTtcbiAgICAgIHByb2plY3RMYWJlbC5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICd0b2RvLXByaW9yaXR5JztcbiAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcmlvcml0eUxhYmVsQ29udGVudC5jbGFzc0xpc3QgPSAndGV4dC14bCc7XG4gICAgICBwcmlvcml0eUxhYmVsQ29udGVudC50ZXh0Q29udGVudCA9ICdIb3cgdXJnZW50IGlzIGl0Pyc7XG4gICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICBwcmlvcml0eUlucHV0Lm5hbWUgPSAndG9kby1wcmlvcml0eSc7XG4gICAgICBwcmlvcml0eUlucHV0LmlkID0gJ3RvZG8tcHJpb3JpdHknO1xuICAgICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QgPSAnZm9ybS1pdGVtJztcbiAgICAgIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIGhpZ2hPcHRpb24udmFsdWUgPSAnaGlnaCc7XG4gICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgY29uc3QgbWVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBtZWRPcHRpb24udmFsdWUgPSAnbWVkJztcbiAgICAgIG1lZE9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBsb3dPcHRpb24udmFsdWUgPSAnbG93JztcbiAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICBpZiAocHJpb3JpdHlWYWx1ZSA9PSAnaGlnaCcpIGhpZ2hPcHRpb24uc2VsZWN0ZWQgPSAnc2VsZWN0ZWQnO1xuICAgICAgaWYgKHByaW9yaXR5VmFsdWUgPT0gJ21lZCcpIG1lZE9wdGlvbi5zZWxlY3RlZCA9ICdzZWxlY3RlZCc7XG4gICAgICBpZiAocHJpb3JpdHlWYWx1ZSA9PSAnbG93JykgbG93T3B0aW9uLnNlbGVjdGVkID0gJ3NlbGVjdGVkJztcblxuICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTtcbiAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkT3B0aW9uKTtcbiAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcbiAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbENvbnRlbnQpO1xuICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QgPSAnZmxleCBqdXN0aWZ5LWVuZCBwdC0xMCc7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdCA9ICd0ZXh0LTJ4bCBib3JkZXItMiBweC00IHB5LTMgbWwtNiBmb250LWJvbGQnO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG1vZGlmaWNhdGlvbk1vZGFsLmNsb3NlTW9kYWwpO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdCA9ICd0ZXh0LTJ4bCBib3JkZXItMiBweC00IHB5LTMgbWwtNiBmb250LWJvbGQgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkaXNhYmxlZDpiZy1ibHVlLTIwMCc7XG4gICAgY29uZmlybUJ1dHRvbi5pZCA9ICdzdWJtaXQnO1xuICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXYpID0+IG1vZGlmaWNhdGlvbk1vZGFsLm1vZGlmeURhdGEoZXYsIHJlcXVlc3QpKTtcblxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBwdWJzdWIuYWRkKCdjbG9zZVByb2plY3RGb3JtJywgbW9kaWZpY2F0aW9uTW9kYWwuY2xvc2VNb2RhbCk7XG4gIH0sXG4gIGNsb3NlTW9kYWw6IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgfSxcbiAgbW9kaWZ5RGF0YTogKGV2LCByZXF1ZXN0KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBtb2RpZmljYXRpb25Nb2RhbC5jbG9zZU1vZGFsKGV2KTtcbiAgICBpZiAocmVxdWVzdC50eXBlID09ICdwcm9qZWN0LWVkaXQnKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZXYudGFyZ2V0KSlbJ3Byb2plY3QtbmFtZSddO1xuICAgICAgcmV0dXJuIHB1YnN1Yi5lbWl0KCdwcm9qZWN0TW9kaWZpY2F0aW9uJywge1xuICAgICAgICB0eXBlOiByZXF1ZXN0LnR5cGUsXG4gICAgICAgIG5hbWU6IG5ld1Byb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0SWQ6IHJlcXVlc3QucHJvamVjdElkLFxuICAgICAgICBlbGVtZW50OiByZXF1ZXN0LmVsZW1lbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PSAndG9kby1lZGl0Jykge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXYudGFyZ2V0KTtcbiAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgICByZXF1ZXN0LmZvcm0gPSBmb3JtUHJvcHM7XG4gICAgICByZXR1cm4gcHVic3ViLmVtaXQoJ3RvZG9Nb2RpZmljYXRpb24nLCByZXF1ZXN0KTtcbiAgICB9XG4gIH0sXG4gIGNvbnRyb2xTdWJtaXQ6IChldikgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbiAgICBidXR0b24uZGlzYWJsZWQgPSAhZXYudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgfSxcbn07IiwiLyogYmVhdXRpZnkgcHJlc2VydmU6c3RhcnQgKi9cbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4uL2ltZy9wcm9qZWN0LWVkaXQucG5nJ1xuaW1wb3J0IERlbEljb24gZnJvbSAnLi4vaW1nL3Byb2plY3QtZGVsZXRlLnBuZydcbi8qIGJlYXV0aWZ5IHByZXNlcnZlOmVuZCAqL1xuZXhwb3J0IGNvbnN0IHByb2plY3RDb250ZW50ID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgnc2VydmVQcm9qZWN0Qm9keScsIHByb2plY3RDb250ZW50LnJlbmRlcik7XG4gICAgcHVic3ViLmFkZCgncHJvamVjdFVwZGF0ZWQnLCBwcm9qZWN0Q29udGVudC5yZW5kZXIpO1xuICAgIHB1YnN1Yi5hZGQoJ3Byb2plY3RNb2RpZmljYXRpb24nLCBwcm9qZWN0Q29udGVudC5tb2RpZnlQcm9qZWN0KTtcbiAgfSxcbiAgcmVuZGVyOiBwcm9qZWN0cyA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA8IDEpIHJldHVybjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QgPSAncHJvamVjdC1pdGVtIGhvdmVyOmJvcmRlci1pdGVtLWhvdmVyJztcbiAgICAgIHByb2plY3RDb250YWluZXIuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHByb2plY3RDb250ZW50LmhhbmRsZUNsaWNrKTtcblxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdCA9ICd0ZXh0LWxnJztcbiAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgZWRpdEltZy5pZCA9ICdwcm9qZWN0LWVkaXQnO1xuICAgICAgZWRpdEltZy5jbGFzc0xpc3QgPSAndy0xMCBob3ZlcjpiZy1pdGVtLWhvdmVyJztcbiAgICAgIGVkaXRJbWcuc3JjID0gRWRpdEljb247XG4gICAgICBlZGl0UHJvamVjdC5hcHBlbmRDaGlsZChlZGl0SW1nKTtcblxuICAgICAgY29uc3QgZGVsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgZGVsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBkZWxJbWcuaWQgPSAncHJvamVjdC1kZWxldGUnO1xuICAgICAgZGVsSW1nLmNsYXNzTGlzdCA9ICd3LTEwIGhvdmVyOmJnLWl0ZW0taG92ZXInO1xuICAgICAgZGVsSW1nLnNyYyA9IERlbEljb247XG4gICAgICBkZWxQcm9qZWN0LmFwcGVuZENoaWxkKGRlbEltZyk7XG5cbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0UHJvamVjdCk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbFByb2plY3QpO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZUNsaWNrOiAoZXYpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gZXYudGFyZ2V0LmlkO1xuICAgIGlmIChyZXF1ZXN0ID09ICdwcm9qZWN0LWVkaXQnKSB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJyk7XG4gICAgICBjb25zdCBxdWVyeSA9IGV2LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJykuZGF0YXNldC5wcm9qZWN0SWRcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ2RpdiBkaXYnKS50ZXh0Q29udGVudDtcbiAgICAgIHJldHVybiBwdWJzdWIuZW1pdCgnbW9kaWZ5RGF0YVJlcXVlc3QnLCB7XG4gICAgICAgIHR5cGU6IHJlcXVlc3QsXG4gICAgICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0SWQ6IHF1ZXJ5LFxuICAgICAgICBlbGVtZW50OiBwcm9qZWN0RWxlbWVudFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAocmVxdWVzdCA9PSAncHJvamVjdC1kZWxldGUnKSB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJyk7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ2RpdiBkaXYnKS50ZXh0Q29udGVudDtcbiAgICAgIHJldHVybiBwdWJzdWIuZW1pdCgnY29uZmlybURlbGV0ZURhdGEnLCB7XG4gICAgICAgIHR5cGU6IHJlcXVlc3QsXG4gICAgICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3RJZCxcbiAgICAgICAgZWxlbWVudDogcHJvamVjdEVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBxdWVyeSA9IGV2LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJykuZGF0YXNldC5wcm9qZWN0SWRcbiAgICAgIHB1YnN1Yi5lbWl0KCdwcm9qZWN0Vmlld0NoYW5nZScsIGV2KVxuICAgICAgcHVic3ViLmVtaXQoJ3F1ZXJ5UHJvamVjdCcsIHtcbiAgICAgICAgdHlwZTogJ3NpbmdsZS1wcm9qZWN0JyxcbiAgICAgICAgcHJvamVjdElkOiBxdWVyeVxuICAgICAgfSk7XG4gICAgICBwdWJzdWIuZW1pdCgnc2VydmVUb2RvRm9vdGVyJyk7XG4gICAgfVxuICB9LFxuICBtb2RpZnlQcm9qZWN0OiAocmVxdWVzdCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSByZXF1ZXN0LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtbGcnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcmVxdWVzdC5uYW1lO1xuICB9LFxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi4vaW1nL3Byb2plY3QtYWRkLnBuZ1wiXG4vKiBiZWF1dGlmeSBwcmVzZXJ2ZTplbmQgKi9cblxuZXhwb3J0IGNvbnN0IHByb2plY3RIZWFkZXIgPSB7XG4gIGluaXQ6ICgpID0+IHtcbiAgICBwdWJzdWIuYWRkKCdzZXJ2ZVByb2plY3RIZWFkZXInLCBwcm9qZWN0SGVhZGVyLnJlbmRlcik7XG4gIH0sXG4gIHJlbmRlcjogKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvL2NsZWFyIG9sZCBjb250ZW50cyBpZiB0aGVyZSBhcmUgYW55XG5cbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW50cm8uY2xhc3NMaXN0ID0gJ2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyJztcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0ID0gJ3Byb2plY3QtdGl0bGUnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb2plY3QpKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdFswXS5uYW1lO1xuICAgICAgaGVhZGluZy5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3RbMF0uaWQ7XG4gICAgICBpbnRyby5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIHRoZSBwcm9qZWN0IHBhZ2UuIEhlcmUgeW91IGNhbiB2aWV3IGFsbCBvZiB5b3VyIGN1cnJlbnQgcHJvamVjdHMnO1xuICAgICAgaW50cm8uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250ZW50LXN0YXJ0IGZsZXggZmxleC1yb3cgZ2FwLTMgaG92ZXI6dGV4dC1ibHVlLTYwMCBjdXJzb3ItcG9pbnRlcic7XG4gICAgICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgYWRkUHJvamVjdEljb24uY2xhc3NMaXN0ID0gJ3ctMTAnO1xuICAgICAgYWRkUHJvamVjdEljb24uc3JjID0gQWRkSWNvbjtcbiAgICAgIGNvbnN0IGFkZFByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGFkZFByb2plY3RMYWJlbC5jbGFzc0xpc3QgPSAnc2VsZi1jZW50ZXInO1xuICAgICAgYWRkUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ0FkZCBhIHByb2plY3QnO1xuXG4gICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RJY29uKTtcbiAgICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdExhYmVsKTtcbiAgICAgIGFkZFByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBwcm9qZWN0SGVhZGVyLnNlcnZlUHJvamVjdEZvcm0pO1xuXG4gICAgICBpbnRyby5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICB9LFxuICBzZXJ2ZVByb2plY3RGb3JtOiAoKSA9PiB7XG4gICAgcHVic3ViLmVtaXQoJ2FkZE5ld1Byb2plY3QnKTtcbiAgfSxcbn07IiwiLyogYmVhdXRpZnkgcHJlc2VydmU6c3RhcnQgKi9cbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICcuLi9pbWcvbWFpbC5wbmcnO1xuaW1wb3J0IFRvZGF5SWNvbiBmcm9tICcuLi9pbWcvY2FsZW5kYXIucG5nJztcbmltcG9ydCBVcGNvbWluZ0ljb24gZnJvbSAnLi4vaW1nL3BsYW5uZXIucG5nJztcbi8qIGJlYXV0aWZ5IHByZXNlcnZlOmVuZCAqL1xuXG5leHBvcnQgY29uc3QgbmF2U2lkZUJhciA9IHtcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgndG9nZ2xlTmF2U2lkZUJhcicsIG5hdlNpZGVCYXIudG9nZ2xlTmF2U2lkZUJhcik7XG4gICAgcHVic3ViLmFkZCgnYnVpbGRQcm9qZWN0U2hvcnRjdXQnLCBuYXZTaWRlQmFyLnJlbmRlclByb2plY3RTaG9ydGN1dCk7XG4gICAgcHVic3ViLmFkZCgncHJvamVjdFVwZGF0ZWQnLCBuYXZTaWRlQmFyLnJlbmRlclByb2plY3RTaG9ydGN1dCk7XG4gICAgcHVic3ViLmFkZCgncHJvamVjdFZpZXdDaGFuZ2UnLCBuYXZTaWRlQmFyLmNvbnRyb2xCYWNrZ3JvdW5kKTtcbiAgICBwdWJzdWIuYWRkKCd0b2RvVXBkYXRlZCcsIG5hdlNpZGVCYXIucmVmcmVzaEN1cnJlbnRQYWdlKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0ID0gJ3NpZGUtYmFyIGJnLW5hdi1zaWRlLWJhciBsZzp2aXNpYmxlJztcblxuICAgIGNvbnN0IG1haW5GaWx0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5GaWx0ZXJDb250YWluZXIuY2xhc3NMaXN0ID0gJ21haW4tZmlsdGVyIHB4LTIgcHktMic7XG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChtYWluRmlsdGVyQ29udGFpbmVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdCA9ICdsZzptbC03MiBtbC01JztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgY29uc3QgbWFpbkZpbHRlcnMgPSB7XG4gICAgICBJbmJveDogSW5ib3hJY29uLFxuICAgICAgVG9kYXk6IFRvZGF5SWNvbixcbiAgICAgIFVwY29taW5nOiBVcGNvbWluZ0ljb25cbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBbZmlsdGVyLCBpbWFnZV0gb2YgT2JqZWN0LmVudHJpZXMobWFpbkZpbHRlcnMpKSB7XG4gICAgICBjb25zdCBtYWluRmlsdGVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWFpbkZpbHRlckl0ZW0uY2xhc3NMaXN0ID0gJ2hvdmVyOmJnLWl0ZW0taG92ZXIgbmF2LWl0ZW0nO1xuICAgICAgaWYgKGZpbHRlciA9PSAnSW5ib3gnKSBtYWluRmlsdGVySXRlbS5jbGFzc0xpc3QuYWRkKCdiZy1pdGVtLWhvdmVyJyk7XG5cbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjb25zdCBpY29uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGljb25JbWFnZS5jbGFzc0xpc3QgPSAnaC0xMSB3LTExIGlubGluZSc7XG4gICAgICBpY29uSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgICBpY29uLmFwcGVuZENoaWxkKGljb25JbWFnZSk7XG5cbiAgICAgIGNvbnN0IG1haW5GaWx0ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG1haW5GaWx0ZXJUaXRsZS50ZXh0Q29udGVudCA9IGZpbHRlcjtcblxuICAgICAgbWFpbkZpbHRlckl0ZW0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICBtYWluRmlsdGVySXRlbS5hcHBlbmRDaGlsZChtYWluRmlsdGVyVGl0bGUpO1xuICAgICAgbWFpbkZpbHRlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBuYXZTaWRlQmFyLnNlcnZlTWFpbkZpbHRlcik7XG4gICAgICBtYWluRmlsdGVySXRlbS5kYXRhc2V0LnByb2plY3RJZCA9IGZpbHRlci50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgbWFpbkZpbHRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRmlsdGVySXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gJ2dyb3VwIHByb2plY3RzLWZpbHRlciBib3JkZXItdC0yIGJvcmRlci1bIzNlNDA0Ml0nO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdCA9ICd0ZXh0LTJ4bCBmbGV4IGhvdmVyOmJnLWl0ZW0taG92ZXIgbmF2LWl0ZW0nO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIHByb2plY3RzJztcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBuYXZTaWRlQmFyLnNlcnZlUHJvamVjdFBhZ2UpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBwdWJzdWIuZW1pdCgncXVlcnlQcm9qZWN0Jywge1xuICAgICAgdHlwZTogJ25hdidcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICBjb25zdCBmaWx0ZXJzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3ZlclxcXFw6YmctaXRlbS1ob3ZlcicpO1xuICAgIGZpbHRlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBuYXZTaWRlQmFyLmNvbnRyb2xCYWNrZ3JvdW5kKTtcbiAgICB9KTtcbiAgfSxcbiAgdG9nZ2xlTmF2U2lkZUJhcjogKCkgPT4ge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGlmIChzaWRlQmFyLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgc2lkZUJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdsZzptbC03MicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlQmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdsZzptbC03MicpO1xuICAgIH07XG4gIH0sXG4gIHNlcnZlTWFpbkZpbHRlcjogKGV2KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGV2LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBpZCA9IGV2LnRhcmdldC5jbG9zZXN0KCcubmF2LWl0ZW0nKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICBwdWJzdWIuZW1pdChgc2VydmUke25hbWV9SGVhZGVyYCk7XG4gICAgcHVic3ViLmVtaXQoJ3ByZVJlbmRlclRvZG9zQ29udGFpbmVyJyk7XG4gICAgcHVic3ViLmVtaXQoJ3F1ZXJ5VG9kbycsIHtcbiAgICAgIHByb2plY3RJZDogaWQsXG4gICAgfSk7XG4gICAgcHVic3ViLmVtaXQoJ3NlcnZlVG9kb0Zvb3RlcicpO1xuICB9LFxuICBzZXJ2ZVByb2plY3RQYWdlOiAoKSA9PiB7XG4gICAgcHVic3ViLmVtaXQoJ3F1ZXJ5UHJvamVjdCcsIHtcbiAgICAgIHR5cGU6ICdwYWdlJyxcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyUHJvamVjdFNob3J0Y3V0OiAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWZpbHRlcicpO1xuICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdCA9ICdob3ZlcjpiZy1pdGVtLWhvdmVyIG5hdi1pdGVtJztcbiAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBwcm9qZWN0RGl2LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBuYXZTaWRlQmFyLnNlcnZlU2luZ2xlUHJvamVjdFBhZ2UpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9KTtcbiAgfSxcbiAgc2VydmVTaW5nbGVQcm9qZWN0UGFnZTogKGV2KSA9PiB7XG4gICAgcHVic3ViLmVtaXQoJ3F1ZXJ5UHJvamVjdCcsIHtcbiAgICAgIHR5cGU6ICdzaW5nbGUtcHJvamVjdCcsXG4gICAgICBwcm9qZWN0SWQ6IGV2LnRhcmdldC5kYXRhc2V0LnByb2plY3RJZCxcbiAgICB9KTtcbiAgICBwdWJzdWIuZW1pdCgnc2VydmVUb2RvRm9vdGVyJylcbiAgfSxcbiAgY29udHJvbEJhY2tncm91bmQ6IChldikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBldi50YXJnZXQuY2xvc2VzdCgnLm5hdi1pdGVtJykgfHwgZXYudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWl0ZW0nKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJykucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtJyk7XG4gICAgZmlsdGVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1pdGVtLWhvdmVyJyk7XG4gICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9PSBwcm9qZWN0LmRhdGFzZXQucHJvamVjdElkKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JnLWl0ZW0taG92ZXInKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVmcmVzaEN1cnJlbnRQYWdlOiAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctaXRlbS1ob3ZlcicpO1xuICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgncG9pbnRlcmRvd24nLCB7YnViYmxlczogdHJ1ZX0pO1xuICBjdXJyZW50RmlsdGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9LFxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgQnV0dG9uSWNvbiBmcm9tICcuLi9pbWcvbWVudS5wbmcnO1xuLyogYmVhdXRpZnkgcHJlc2VydmU6ZW5kICovXG5cbmV4cG9ydCBjb25zdCBoZWFkZXIgPSB7XG4gIHJlbmRlcjogY29udGFpbmVyID0+IHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlckRpdi5jbGFzc0xpc3QgPSAnaGVhZGVyIHRleHQtNHhsIGJnLXRvcC1iYXIgZ3JpZC1jb2xzLW1lbnUtdG9nZ2xlJztcblxuICBjb25zdCBzaWRlQmFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNpZGVCYXJCdXR0b24uY2xhc3NMaXN0ID0gJ2xlZnQtbWVudS10b2dnbGUgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci0yIG0tMiByZWxhdGl2ZSc7XG4gIHNpZGVCYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBoZWFkZXIudG9nZ2xlTmF2U2lkZUJhcilcbiAgY29uc3Qgc2lkZUJhckJ1dHRvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNpZGVCYXJCdXR0b25JbWFnZS5jbGFzc0xpc3QgPSAnaC04IGFic29sdXRlIGNlbnRlcmVkLXBvc2l0aW9uJztcbiAgc2lkZUJhckJ1dHRvbkltYWdlLnNyYyA9IEJ1dHRvbkljb247XG4gIHNpZGVCYXJCdXR0b24uYXBwZW5kQ2hpbGQoc2lkZUJhckJ1dHRvbkltYWdlKTtcblxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0ID0gJ3BsYWNlLXNlbGYtY2VudGVyIHRleHQtd2hpdGUnO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvJztcblxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoc2lkZUJhckJ1dHRvbik7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0ID0gJ2NvbnRlbnQgcHQtMTQnO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gIH0sXG4gIHRvZ2dsZU5hdlNpZGVCYXI6KCkgPT4ge1xuICAgIHB1YnN1Yi5lbWl0KCd0b2dnbGVOYXZTaWRlQmFyJyk7XG4gIH0sXG59OyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleFwiO1xuZXhwb3J0IGNvbnN0IHRvZGF5SGVhZGVyID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgnc2VydmVUb2RheUhlYWRlcicsIHRvZGF5SGVhZGVyLnJlbmRlcik7XG4gIH0sXG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vY2xlYXIgb2xkIGNvbnRlbnRzIGlmIHRoZXJlIGFyZSBhbnlcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaGVhZGluZy5jbGFzc0xpc3QgPSAnY29udGVudC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LXhsJztcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYEhlcmUgYXJlIHRoZSB0YXNrcyB0aGF0IHdpbGwgYmUgZHVlIHRvZGF5YDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICB9LFxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnLi4vaW1nL3Byb2plY3QtZWRpdC5wbmcnO1xuaW1wb3J0IERlbEljb24gZnJvbSAnLi4vaW1nL3Byb2plY3QtZGVsZXRlLnBuZyc7XG4vKiBiZWF1dGlmeSBwcmVzZXJ2ZTplbmQgKi9cblxuZXhwb3J0IGNvbnN0IHRvZG9Db250ZW50ID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgnc2VydmVUb2RvQm9keScsIHRvZG9Db250ZW50LnJlbmRlcik7XG4gICAgcHVic3ViLmFkZCgncHJlUmVuZGVyVG9kb3NDb250YWluZXInLCB0b2RvQ29udGVudC5yZW5kZXJUb2Rvc0NvbnRhaW5lcik7XG4gIH0sXG4gIHJlbmRlclRvZG9zQ29udGFpbmVyOiAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IHRvZG9zQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zQm9keS5jbGFzc0xpc3QgPSAndG9kb3MtY29udGFpbmVyJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NCb2R5KTtcbiAgfSxcbiAgcmVuZGVyOiB0b2RvcyA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy9jbGVhciBvbGQgY29udGVudHMgaWYgdGhlcmUgYXJlIGFueVxuICAgIGlmICh0b2Rvcy5sZW5ndGggPCAxKSB7XG4gICAgICBjb25zdCBub3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgbm90aWNlLnRleHRDb250ZW50ID0gYFRoZXJlIGlzIG5vIHRvZG8gYWRkZWQgeWV0LmA7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90aWNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0ID0gYHRvZG8taXRlbSAgYm9yZGVyLXByaW9yaXR5LSR7dG9kby5wcmlvcml0eX0gaG92ZXI6Ym9yZGVyLWl0ZW0taG92ZXJgO1xuICAgICAgdG9kb0NvbnRhaW5lci5kYXRhc2V0LnByb2plY3RJZCA9IHRvZG8ucHJvamVjdElkO1xuICAgICAgdG9kb0NvbnRhaW5lci5kYXRhc2V0LnRvZG9JZCA9IHRvZG8udG9kb0lkO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgY2hlY2tib3guaWQgPSAndG9kby1jb21wbGV0ZS10b2dnbGUnO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0ID0gYGNoZWNrLWJveCBib3JkZXItcHJpb3JpdHktJHt0b2RvLnByaW9yaXR5fSBob3Zlcjpib3JkZXItaXRlbS1ob3ZlciBiZWZvcmU6c2hhZG93LWNoZWNrYm94LSR7dG9kby5wcmlvcml0eX0gYmVmb3JlOmNoZWNrLW1hcmsgYmVmb3JlOnNjYWxlLTAgYmVmb3JlOmNoZWNrZWQ6c2NhbGUtMTAwYDtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aXRsZS5jbGFzc0xpc3QgPSAndGl0bGUnO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgICBjb25zdCBkZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVhZGxpbmUuY2xhc3NMaXN0ID0gJ2R1ZS1kYXRlJztcbiAgICAgIGRlYWRsaW5lLnRleHRDb250ZW50ID0gdG9kby5nZXRSZW1haW5pbmdUaW1lKCk7XG4gICAgICBkZWFkbGluZS50aXRsZSA9IHRvZG8uZHVlRGF0ZTtcblxuICAgICAgY29uc3QgZGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZGVzY0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdkZXNjcmlwdGlvbic7XG4gICAgICBkZXNjQ29udGVudC50ZXh0Q29udGVudCA9IHRvZG8uZGVzYztcbiAgICAgIGRlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0NvbnRlbnQpO1xuXG4gICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBlZGl0LmNsYXNzTGlzdCA9ICd0b2RvLWVkaXQnO1xuICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdCA9ICd3LTEwIGhvdmVyOmJnLWl0ZW0taG92ZXInO1xuICAgICAgZWRpdEljb24uaWQgPSAndG9kby1lZGl0JztcbiAgICAgIGVkaXRJY29uLnNyYyA9IEVkaXRJY29uO1xuICAgICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlbGV0ZVRvZG9CdXR0b24uY2xhc3NMaXN0ID0gJ3RvZG8tZGVsZXRlJztcbiAgICAgIGNvbnN0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGRlbEljb24uY2xhc3NMaXN0ID0gJ3ctMTAgaG92ZXI6YmctaXRlbS1ob3Zlcic7XG4gICAgICBkZWxJY29uLmlkID0gJ3RvZG8tZGVsZXRlJztcbiAgICAgIGRlbEljb24uc3JjID0gRGVsSWNvbjtcbiAgICAgIGRlbGV0ZVRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoZGVsSWNvbik7XG5cbiAgICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0b2RvQ29udGVudC5oYW5kbGVDbGljaylcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lKTtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0NvbnRhaW5lcik7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnV0dG9uKTtcblxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZUNsaWNrOiAoZXYpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gZXYudGFyZ2V0LmlkO1xuICAgIGlmIChyZXF1ZXN0ID09ICd0b2RvLWNvbXBsZXRlLXRvZ2dsZScpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKS5kYXRhc2V0LnRvZG9JZFxuICAgICAgcmV0dXJuIHB1YnN1Yi5lbWl0KCd0b2RvVG9nZ2xlQ29tcGxldGlvbicsIHF1ZXJ5KTtcbiAgICB9O1xuICAgIGlmIChyZXF1ZXN0ID09ICd0b2RvLWVkaXQnKSB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCcudG9kby1pdGVtJyk7XG4gICAgICBjb25zdCB0b2RvTmFtZSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgcHJvamVjdElkID0gdG9kb0VsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICBjb25zdCBjdXJyZW50VG9kb0lkID0gdG9kb0VsZW1lbnQuZGF0YXNldC50b2RvSWQ7XG4gICAgICByZXR1cm4gcHVic3ViLmVtaXQoJ3F1ZXJ5UHJvamVjdCcsIHtcbiAgICAgICAgdHlwZTogcmVxdWVzdCxcbiAgICAgICAgbmFtZTogdG9kb05hbWUsXG4gICAgICAgIHByb2plY3RJZDogcHJvamVjdElkLFxuICAgICAgICB0b2RvSWQ6IGN1cnJlbnRUb2RvSWQsXG4gICAgICAgIGVsZW1lbnQ6IHRvZG9FbGVtZW50LFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAocmVxdWVzdCA9PSAndG9kby1kZWxldGUnKSB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCcudG9kby1pdGVtJyk7XG4gICAgICBjb25zdCB0b2RvTmFtZSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdG9kb0lkID0gdG9kb0VsZW1lbnQuZGF0YXNldC50b2RvSWQ7XG4gICAgICByZXR1cm4gcHVic3ViLmVtaXQoJ2NvbmZpcm1EZWxldGVEYXRhJywge1xuICAgICAgICB0eXBlOiByZXF1ZXN0LFxuICAgICAgICBuYW1lOiB0b2RvTmFtZSxcbiAgICAgICAgdG9kb0lkOiB0b2RvSWQsXG4gICAgICAgIGVsZW1lbnQ6IHRvZG9FbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHZpZXdpbmcgYSBzaW5nbGUgdG9kb1xuICAgICAgY29uc3QgcXVlcnkgPSBldi50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpLmRhdGFzZXQudG9kb0lkXG4gICAgICBwdWJzdWIuZW1pdCgncXVlcnlUb2RvJywge1xuICAgICAgICB0b2RvSWQ6IHF1ZXJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59OyIsIi8qIGJlYXV0aWZ5IHByZXNlcnZlOnN0YXJ0ICovXG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbi8qIGJlYXV0aWZ5IHByZXNlcnZlOmVuZCAqL1xuZXhwb3J0IGNvbnN0IHZpZXdUb2RvTW9kYWwgPSB7XG4gIGluaXQ6ICgpID0+IHtcbiAgICBwdWJzdWIuYWRkKCdnZXREZXRhaWxzT2ZUb2RvJywgdmlld1RvZG9Nb2RhbC5yZW5kZXIpO1xuICAgIHB1YnN1Yi5hZGQoJ2ZvdW5kUHJvamVjdE9mVmlld2VkVG9kbycsIHZpZXdUb2RvTW9kYWwuZmlsbFByb2plY3RGaWVsZCk7XG4gIH0sXG4gIHJlbmRlcjogKHRvZG8pID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdCA9ICdtb2RhbC1vdmVybGF5JztcbiAgICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB2aWV3VG9kb01vZGFsLmNsb3NlTW9kYWwpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxPdmVybGF5KTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QgPSAndG9kby1mb3JtIG1vZGFsLWNvbnRlbnQgY2VudGVyZWQtcG9zaXRpb24gbWQ6dy1bNjAwcHhdJztcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdCA9ICd0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwnO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC5odG1sRm9yID0gJ3RvZG8tZGVzYyc7XG4gICAgY29uc3QgZGVzY0xhYmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NMYWJlbENvbnRlbnQuY2xhc3NMaXN0ID0gJ3RleHQteGwnO1xuICAgIGRlc2NMYWJlbENvbnRlbnQudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY0lucHV0Lm5hbWUgPSAndG9kby1kZXNjJztcbiAgICBkZXNjSW5wdXQuaWQgPSAndG9kby1kZXNjJztcbiAgICBkZXNjSW5wdXQudGV4dENvbnRlbnQgPSB0b2RvLmRlc2MgfHwgJ05vIGRlc2NyaXB0aW9uIHByb3ZpZGVkJztcbiAgICBkZXNjSW5wdXQuY2xhc3NMaXN0ID0gJ2Zvcm0taXRlbSc7XG4gICAgZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NMYWJlbENvbnRlbnQpO1xuICAgIGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuaHRtbEZvciA9ICd0b2RvLWRhdGUnO1xuICAgIGNvbnN0IGRhdGVMYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlTGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICBkYXRlTGFiZWxDb250ZW50LnRleHRDb250ZW50ID0gJ0RlYWRsaW5lOic7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gJ3RvZG8tZGF0ZSc7XG4gICAgZGF0ZUlucHV0LmlkID0gJ3RvZG8tZGF0ZSc7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdCA9ICdmb3JtLWl0ZW0nO1xuICAgIGRhdGVJbnB1dC50ZXh0Q29udGVudCA9IHRvZG8uZm9ybWF0KCk7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVMYWJlbENvbnRlbnQpO1xuICAgIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuaHRtbEZvciA9ICd0b2RvLXByb2plY3QnO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICBwcm9qZWN0TGFiZWxDb250ZW50LnRleHRDb250ZW50ID0gJ1Byb2plY3Q6JztcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdElucHV0Lm5hbWUgPSAncHJvamVjdC1pZCc7XG4gICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3QtaWQnO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QgPSAnZm9ybS1pdGVtJztcblxuICAgIHByb2plY3RMYWJlbC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWxDb250ZW50KTtcbiAgICBwcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICd0b2RvLXByaW9yaXR5JztcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5TGFiZWxDb250ZW50LmNsYXNzTGlzdCA9ICd0ZXh0LXhsJztcbiAgICBwcmlvcml0eUxhYmVsQ29udGVudC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHlJbnB1dC5uYW1lID0gJ3RvZG8tcHJpb3JpdHknO1xuICAgIHByaW9yaXR5SW5wdXQuaWQgPSAndG9kby1wcmlvcml0eSc7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QgPSAnZm9ybS1pdGVtJztcbiAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0b2RvLnByaW9yaXR5LnNsaWNlKDEpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7XG4gICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsQ29udGVudCk7XG4gICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBwdWJzdWIuZW1pdCgncXVlcnlQcm9qZWN0Jywge3Byb2plY3RJZDogdG9kby5wcm9qZWN0SWR9KVxuICB9LFxuICBmaWxsUHJvamVjdEZpZWxkOiAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlkJyk7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdD8ubmFtZSB8fCAnTm90IGJlbG9uZyB0byBhbnkgcHJvamVjdCc7XG4gIH0sXG4gIGNsb3NlTW9kYWw6ICgpID0+IHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIG1vZGFsLnJlbW92ZSgpO1xuICB9LFxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi4vaW1nL3RvZG8tYWRkLnBuZ1wiO1xuLyogYmVhdXRpZnkgcHJlc2VydmU6ZW5kICovXG5cbmV4cG9ydCBjb25zdCB0b2RvRm9vdGVyID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgnc2VydmVUb2RvRm9vdGVyJywgdG9kb0Zvb3Rlci5yZW5kZXIpO1xuICB9LFxuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgLy8gY3JlYXRlIGJ1dHRvbiB0byBhZGQgdG9kb1xuICAgIGNvbnN0IGFkZFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkVG9kb0NvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGVudC1zdGFydCBmbGV4IGZsZXgtcm93IGdhcC0zIGhvdmVyOnRleHQtYmx1ZS02MDAgY3Vyc29yLXBvaW50ZXInO1xuICAgIGFkZFRvZG9Db250YWluZXIuaWQgPSAnYWRkJztcbiAgICBjb25zdCBhZGRUb2RvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFkZFRvZG9JY29uLmNsYXNzTGlzdCA9ICd3LTEwJztcbiAgICBhZGRUb2RvSWNvbi5zcmMgPSBhZGRJY29uO1xuICAgIGNvbnN0IGFkZFRvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRUb2RvTGFiZWwuY2xhc3NMaXN0ID0gJ3NlbGYtY2VudGVyJztcbiAgICBhZGRUb2RvTGFiZWwudGV4dENvbnRlbnQgPSAnQWRkIHRvZG8nO1xuXG4gICAgYWRkVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvSWNvbik7XG4gICAgYWRkVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvTGFiZWwpO1xuICAgIGFkZFRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0b2RvRm9vdGVyLnNlcnZlVG9kb0Zvcm0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9Db250YWluZXIpO1xuICB9LFxuICBzZXJ2ZVRvZG9Gb3JtOiAoKSA9PiB7XG4gICAgcHVic3ViLmVtaXQoJ3F1ZXJ5UHJvamVjdCcsIHtcbiAgICAgIHR5cGU6ICdtb2RhbCcsXG4gICAgfSk7XG4gIH0sXG59OyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleFwiO1xuZXhwb3J0IGNvbnN0IHRvZG9IZWFkZXIgPSB7XG4gIGluaXQ6ICgpID0+IHtcbiAgICBwdWJzdWIuYWRkKCdzZXJ2ZVRvZG9IZWFkZXInLCB0b2RvSGVhZGVyLnJlbmRlcik7XG4gIH0sXG4gIHJlbmRlcjogKHRvZG8pID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvL2NsZWFyIG9sZCBjb250ZW50cyBpZiB0aGVyZSBhcmUgYW55XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGhlYWRpbmcuY2xhc3NMaXN0ID0gJ2NvbnRlbnQtaGVhZGluZyBmb250LWJvbGQgdGV4dC14bCc7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgICBcbiAgICBjb25zdCB0b2Rvc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvc0JvZHkuY2xhc3NMaXN0ID0gJ3RvZG9zLWNvbnRhaW5lcic7XG4gIH0sXG59OyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleFwiO1xuZXhwb3J0IGNvbnN0IHVwY29taW5nSGVhZGVyID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgcHVic3ViLmFkZCgnc2VydmVVcGNvbWluZ0hlYWRlcicsIHVwY29taW5nSGVhZGVyLnJlbmRlcik7XG4gIH0sXG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vY2xlYXIgb2xkIGNvbnRlbnRzIGlmIHRoZXJlIGFyZSBhbnlcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaGVhZGluZy5jbGFzc0xpc3QgPSAnY29udGVudC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LXhsJztcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYEhlcmUgYXJlIHRoZSB0YXNrcyB0aGF0IHdpbGwgYmUgZHVlIGluIGEgd2VlayB0aW1lYDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICB9LFxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0TW9kdWxlIH0gZnJvbSAnLi9wcm9qZWN0LWJlJztcbmltcG9ydCB7IHRvZG9Nb2R1bGUgfSBmcm9tICcuL3RvZG8tYmUnO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3NpdGUtaGVhZGVyJztcbmltcG9ydCB7IG5hdlNpZGVCYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZS1uYXYtYmFyJztcbmltcG9ydCB7IHByb2plY3RIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1oZWFkZXInO1xuaW1wb3J0IHsgcHJvamVjdENvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1jb250ZW50JztcbmltcG9ydCB7IHRvZG9IZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9kby1oZWFkZXInO1xuaW1wb3J0IHsgaW5ib3hIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5ib3gtaGVhZGVyJztcbmltcG9ydCB7IHRvZGF5SGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvZGF5LWhlYWRlcic7XG5pbXBvcnQgeyB1cGNvbWluZ0hlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy91cGNvbWluZy1oZWFkZXInO1xuaW1wb3J0IHsgdG9kb0NvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9kby1jb250ZW50JztcbmltcG9ydCB7IHRvZG9Gb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9kby1mb290ZXInO1xuaW1wb3J0IHsgcHJvamVjdE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC1wcm9qZWN0LW1vZGFsJztcbmltcG9ydCB7IHRvZG9Nb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG9kby1tb2RhbCc7XG5pbXBvcnQgeyBjb25maXJtRGVsZXRpb25Nb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxldGUtY29uZmlybWF0aW9uJztcbmltcG9ydCB7IG1vZGlmaWNhdGlvbk1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGlmeS1kYXRhJztcbmltcG9ydCB7IHZpZXdUb2RvTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9kby1kZXRhaWwnO1xuLyogYmVhdXRpZnkgcHJlc2VydmU6ZW5kICovXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVySG9tZVBhZ2UpO1xuXG5mdW5jdGlvbiByZW5kZXJIb21lUGFnZSgpIHtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBwcm9qZWN0TW9kdWxlLmluaXQoKTtcbiAgdG9kb01vZHVsZS5pbml0KCk7XG5cbiAgaGVhZGVyLnJlbmRlcihib2R5KTtcbiAgbmF2U2lkZUJhci5yZW5kZXIoKTtcbiAgaW5ib3hIZWFkZXIuaW5pdCgpO1xuICB0b2RheUhlYWRlci5pbml0KCk7XG4gIHVwY29taW5nSGVhZGVyLmluaXQoKTtcbiAgcHJvamVjdEhlYWRlci5pbml0KCk7XG4gIHRvZG9IZWFkZXIuaW5pdCgpO1xuXG4gIHByb2plY3RDb250ZW50LmluaXQoKTtcbiAgdG9kb0NvbnRlbnQuaW5pdCgpO1xuXG4gIHRvZG9Gb290ZXIuaW5pdCgpO1xuXG4gIHZpZXdUb2RvTW9kYWwuaW5pdCgpO1xuICBwcm9qZWN0TW9kYWwuaW5pdCgpO1xuICB0b2RvTW9kYWwuaW5pdCgpO1xuICBjb25maXJtRGVsZXRpb25Nb2RhbC5pbml0KCk7XG4gIG1vZGlmaWNhdGlvbk1vZGFsLmluaXQoKTtcblxuICBwdWJzdWIuZW1pdCgnc2VydmVJbmJveEhlYWRlcicpO1xuICBwdWJzdWIuZW1pdCgncHJlUmVuZGVyVG9kb3NDb250YWluZXInKTtcbiAgcHVic3ViLmVtaXQoJ3F1ZXJ5VG9kbycsIHtcbiAgICBwcm9qZWN0SWQ6ICdpbmJveCdcbiAgfSlcbiAgcHVic3ViLmVtaXQoJ3NlcnZlVG9kb0Zvb3RlcicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiBbXSxcbiAgYWRkOiBmdW5jdGlvbiAoZXZlbnQsIG1ldGhvZCkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXVxuICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKG1ldGhvZClcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiAoZXZlbnQsIG1ldGhvZCkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XS5maWx0ZXIoZm4gPT4gZm4gIT09IG1ldGhvZClcbiAgfSxcbiAgZW1pdDogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnRdLmZvckVhY2gobWV0aG9kID0+IHtcbiAgICAgIG1ldGhvZChkYXRhKTtcbiAgICB9KTtcbiAgfVxufTsiLCIvKiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCAqL1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vaW5kZXhcIlxuLyogYmVhdXRpZnkgcHJlc2VydmU6ZW5kICovXG5cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbiAocHJvcCkge1xuICB0aGlzLm5hbWUgPSBwcm9wWydwcm9qZWN0LW5hbWUnXTtcbiAgdGhpcy5pZCA9IHByb3BbJ3Byb2plY3QtaWQnXTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKGFycikge1xuICBsZXQgc2VyaWFsaXplZCA9IFtdO1xuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgc2VyaWFsaXplZC5wdXNoKHtcbiAgICAgIFwicHJvamVjdC1uYW1lXCI6IG9iai5uYW1lLFxuICAgICAgXCJwcm9qZWN0LWlkXCI6IG9iai5pZCxcbiAgICB9KTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6ZWQpKTtcbn07XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplKCkge1xuICBsZXQgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqZWN0KCdwcm9qZWN0cycpIHx8IFtdO1xuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMClcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKHBvam8gPT4gbmV3IFByb2plY3QocG9qbykpO1xuICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdE1vZHVsZSA9IHtcbiAgcHJvamVjdHM6IFtdLFxuICBpbml0OiAoKSA9PiB7XG4gICAgcHJvamVjdE1vZHVsZS5wcm9qZWN0cyA9IGRlc2VyaWFsaXplKCk7XG4gICAgbG9hZFNhbXBsZVByb2plY3QocHJvamVjdE1vZHVsZS5wcm9qZWN0cyk7XG4gICAgcHVic3ViLmFkZCgncHJvamVjdENyZWF0aW9uJywgcHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KTtcbiAgICBwdWJzdWIuYWRkKCdwcm9qZWN0RGVsZXRpb24nLCBwcm9qZWN0TW9kdWxlLmRlbGV0ZVByb2plY3QpO1xuICAgIHB1YnN1Yi5hZGQoJ3Byb2plY3RNb2RpZmljYXRpb24nLCBwcm9qZWN0TW9kdWxlLmVkaXRQcm9qZWN0KTtcbiAgICBwdWJzdWIuYWRkKCdxdWVyeVByb2plY3QnLCBwcm9qZWN0TW9kdWxlLmdldFByb2plY3QpO1xuICB9LFxuICBjcmVhdGVQcm9qZWN0OiAoZm9ybSkgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFByb2plY3QgPSBwcm9qZWN0TW9kdWxlLnByb2plY3RzW3Byb2plY3RNb2R1bGUucHJvamVjdHMubGVuZ3RoIC0gMV07XG4gICAgLyogYmVhdXRpZnkgcHJlc2VydmU6c3RhcnQgKi9cbiAgICBmb3JtWydwcm9qZWN0LWlkJ10gPSBsYXRlc3RQcm9qZWN0Py5pZCArIDEgfHwgMTtcbiAgICAvKiBiZWF1dGlmeSBwcmVzZXJ2ZTplbmQgKi9cbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZm9ybSk7XG4gICAgcHJvamVjdE1vZHVsZS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHNlcmlhbGl6ZShwcm9qZWN0TW9kdWxlLnByb2plY3RzKTtcbiAgICBwdWJzdWIuZW1pdCgncHJvamVjdFVwZGF0ZWQnLCBwcm9qZWN0TW9kdWxlLnByb2plY3RzKTtcbiAgfSxcbiAgZ2V0UHJvamVjdDogKHJlcXVlc3QpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgLy8gdmlld2luZyBhbGwgcHJvamVjdHNcbiAgICBpZiAocmVxdWVzdC50eXBlID09ICdwYWdlJykge1xuICAgICAgcHVic3ViLmVtaXQoJ3NlcnZlUHJvamVjdEhlYWRlcicpO1xuICAgICAgcHVic3ViLmVtaXQoJ3NlcnZlUHJvamVjdEJvZHknLCBwcm9qZWN0TW9kdWxlLnByb2plY3RzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PSAnbmF2Jykge1xuICAgICAgcHVic3ViLmVtaXQoJ2J1aWxkUHJvamVjdFNob3J0Y3V0JywgcHJvamVjdE1vZHVsZS5wcm9qZWN0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXF1ZXN0LnR5cGUgPT0gJ21vZGFsJykge1xuICAgICAgcHVic3ViLmVtaXQoJ2FkZE5ld1RvZG8nLCBwcm9qZWN0TW9kdWxlLnByb2plY3RzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PSAndG9kby1lZGl0Jykge1xuICAgICAgcmVxdWVzdC5wcm9qZWN0cyA9IHByb2plY3RNb2R1bGUucHJvamVjdHM7XG4gICAgICBwdWJzdWIuZW1pdCgnbW9kaWZ5RGF0YVJlcXVlc3QnLCByZXF1ZXN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PSAnc2luZ2xlLXByb2plY3QnKSB7XG4gICAgICAvLyB2aWV3aW5nIGEgc2luZ2xlIHByb2plY3RcbiAgICAgIHJlc3VsdCA9IHByb2plY3RNb2R1bGUucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSByZXF1ZXN0LnByb2plY3RJZCk7XG4gICAgICBwdWJzdWIuZW1pdCgnc2VydmVQcm9qZWN0SGVhZGVyJywgcmVzdWx0KTtcbiAgICAgIHB1YnN1Yi5lbWl0KCdwcmVSZW5kZXJUb2Rvc0NvbnRhaW5lcicpO1xuICAgICAgcHVic3ViLmVtaXQoJ3F1ZXJ5VG9kbycsIHJlcXVlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZXQgcHJvamVjdCBuYW1lIHdoZW4gdmlld2luZyBhIHNpbmdsZSB0b2RvXG4gICAgICByZXN1bHQgPSBwcm9qZWN0TW9kdWxlLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gcmVxdWVzdC5wcm9qZWN0SWQpO1xuICAgICAgcHVic3ViLmVtaXQoJ2ZvdW5kUHJvamVjdE9mVmlld2VkVG9kbycsIHJlc3VsdFswXSk7XG4gICAgfVxuICB9LFxuICBkZWxldGVQcm9qZWN0OiAoaWQpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCA9IHByb2plY3RNb2R1bGUucHJvamVjdHMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNb2R1bGUucHJvamVjdHNbaW5kZXhdO1xuICAgICAgaWYgKHByb2plY3QuaWQgPT0gaWQpIHtcbiAgICAgICAgcHJvamVjdE1vZHVsZS5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH07XG4gICAgc2VyaWFsaXplKHByb2plY3RNb2R1bGUucHJvamVjdHMpO1xuICAgIC8vIGRlbGV0ZSBhbGwgdG9kb3MgdGhhdCBiZWxvbmcgdG8gdGhlIGRlbGV0ZWQgcHJvamVjdFxuICAgIHB1YnN1Yi5lbWl0KCd0b2RvRGVsZXRpb24nLCB7XG4gICAgICB0eXBlOiAncHJvamVjdCcsXG4gICAgICBwcm9qZWN0SWQ6IGlkXG4gICAgfSk7XG4gICAgcHVic3ViLmVtaXQoJ3Byb2plY3RVcGRhdGVkJywgcHJvamVjdE1vZHVsZS5wcm9qZWN0cyk7XG4gIH0sXG4gIGVkaXRQcm9qZWN0OiAocmVxdWVzdCkgPT4ge1xuICAgIGNvbnN0IGlkID0gcmVxdWVzdC5wcm9qZWN0SWQ7XG4gICAgcHJvamVjdE1vZHVsZS5wcm9qZWN0cy5tYXAocHJvamVjdCA9PiB7XG4gICAgICBpZiAocHJvamVjdC5pZCA9PSBpZCkge1xuICAgICAgICBwcm9qZWN0Lm5hbWUgPSByZXF1ZXN0Lm5hbWU7XG4gICAgICAgIHB1YnN1Yi5lbWl0KCdwcm9qZWN0VXBkYXRlZCcsIHByb2plY3RNb2R1bGUucHJvamVjdHMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZXJpYWxpemUocHJvamVjdE1vZHVsZS5wcm9qZWN0cyk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBQcm9qZWN0UHJvcCh0aXRsZSwgaWQpIHtcbiAgdGhpc1tcInByb2plY3QtbmFtZVwiXSA9IHRpdGxlO1xuICB0aGlzW1wicHJvamVjdC1pZFwiXSA9IGlkO1xufTtcblxubGV0IHNhbXBsZVByb2plY3RQcm9wcyA9IFtcbiAgbmV3IFByb2plY3RQcm9wKCdXZWIgZGV2ZWxvcG1lbnQgZWR1Y2F0aW9uJywgMTAwMDEpLFxuICBuZXcgUHJvamVjdFByb3AoJ0hlYWx0aHkgbGlmZXN0eWxlIGRyaXZlcicsIDEwMDAyKSxcbl07XG5cbmZ1bmN0aW9uIGxvYWRTYW1wbGVQcm9qZWN0KGFycikge1xuICBjb25zdCBwcm9qZWN0cyA9IHNhbXBsZVByb2plY3RQcm9wcy5tYXAocHJvcCA9PiBuZXcgUHJvamVjdChwcm9wKSk7XG4gIHByb2plY3RzLmZvckVhY2gob2JqID0+IGFyci5wdXNoKG9iaikpO1xufSIsIi8qIGJlYXV0aWZ5IHByZXNlcnZlOnN0YXJ0ICovXG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2UgfSBmcm9tICdkYXRlLWZucydcbi8qIGJlYXV0aWZ5IHByZXNlcnZlOmVuZCAqL1xuXG5jb25zdCBUb2RvID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgdGhpcy50aXRsZSA9IHByb3BbJ3RvZG8tbmFtZSddO1xuICB0aGlzLmRlc2MgPSBwcm9wWyd0b2RvLWRlc2MnXTtcbiAgdGhpcy5kdWVEYXRlID0gcHJvcFsndG9kby1kYXRlJ107XG4gIHRoaXMucHJpb3JpdHkgPSBwcm9wWyd0b2RvLXByaW9yaXR5J107XG4gIHRoaXMuY29tcGxldGUgPSBwcm9wWydjb21wbGV0ZSddIHx8IGZhbHNlO1xuICB0aGlzLnRvZG9JZCA9IHByb3BbJ3RvZG8taWQnXTtcbiAgdGhpcy5wcm9qZWN0SWQgPSBwcm9wWydwcm9qZWN0LWlkJ10gfHwgMDtcbn1cblxuVG9kby5wcm90b3R5cGUuZ2V0UmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZHVlRGF0ZSA9PSAnJykgcmV0dXJuIGBObyBkZWFkbGluZSBzZXRgO1xuICByZXR1cm4gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoYCR7dGhpcy5kdWVEYXRlfVQyNDowMDowMGApLCBuZXcgRGF0ZSgpLCB7XG4gICAgYWRkU3VmZml4OiB0cnVlXG4gIH0pO1xufVxuXG5Ub2RvLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb3JtYXQobmV3IERhdGUodGhpcy5kdWVEYXRlKSwgJ01NTSBkZCwgeXl5eScpO1xufVxuXG5Ub2RvLnByb3RvdHlwZS50b2dnbGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbn1cblxuVG9kby5wcm90b3R5cGUuaXNUb2RheSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGNvbXBhcmVBc2MobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSwgbmV3IERhdGUoYCR7dGhpcy5kdWVEYXRlfVQwMDowMDowMGApKSA9PSAwKVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cblRvZG8ucHJvdG90eXBlLmlzVXBjb21pbmcgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGdldCB0b2RheSBkYXRlIGFuZCBzZXQgaG91ciB0byBtaWRuaWdodCBiZWZvcmVcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gIC8vIGNvbnZlcnRpbmcgdG9kYXkgZGF0ZSB0byBhIGRhdGUgdGhhdCBpcyA3IGRheXMgbGF0ZXJcbiAgY29uc3QgdGVtcERhdGUgPSBuZXcgRGF0ZSgpO1xuICB0ZW1wRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdGVtcERhdGUuc2V0RGF0ZSh0ZW1wRGF0ZS5nZXREYXRlKCkgKyA3KTtcbiAgY29uc3QgdXBjb21pbmdEYXRlID0gdGVtcERhdGU7XG5cbiAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZShgJHt0aGlzLmR1ZURhdGV9VDI0OjAwOjAwYCk7XG4gIC8vIGNoZWNrIGlmIGRlYWRsaW5lIGlzIHdpdGhpbiBhIHBlcmlvZCBvZiA3IGRheXMgaW4gdGhlIGZ1dHVyZSBkYXRlXG4gIGlmIChjb21wYXJlQXNjKHRvZGF5LCBkZWFkbGluZSkgPT0gLTEgJiZcbiAgICBjb21wYXJlQXNjKHVwY29taW5nRGF0ZSwgZGVhZGxpbmUpICE9IC0xKVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cblN0b3JhZ2UucHJvdG90eXBlLmdldE9iamVjdCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XG4gIHJldHVybiB2YWx1ZSAmJiBKU09OLnBhcnNlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKGFycikge1xuICBsZXQgc2VyaWFsaXplZCA9IFtdO1xuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgc2VyaWFsaXplZC5wdXNoKHtcbiAgICAgIFwidG9kby1uYW1lXCI6IG9iai50aXRsZSxcbiAgICAgIFwidG9kby1kZXNjXCI6IG9iai5kZXNjLFxuICAgICAgXCJ0b2RvLWRhdGVcIjogb2JqLmR1ZURhdGUsXG4gICAgICBcInRvZG8tcHJpb3JpdHlcIjogb2JqLnByaW9yaXR5LFxuICAgICAgXCJjb21wbGV0ZVwiOiBvYmouY29tcGxldGUsXG4gICAgICBcInRvZG8taWRcIjogb2JqLnRvZG9JZCxcbiAgICAgIFwicHJvamVjdC1pZFwiOiBvYmoucHJvamVjdElkLFxuICAgIH0pO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplZCkpO1xufTtcblxuZnVuY3Rpb24gZGVzZXJpYWxpemUoKSB7XG4gIGxldCB0b2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRPYmplY3QoJ3RvZG9zJykgfHwgW107XG4gIGlmICh0b2Rvcy5sZW5ndGggPiAwKVxuICAgIHJldHVybiB0b2Rvcy5tYXAocG9qbyA9PiBuZXcgVG9kbyhwb2pvKSk7XG4gIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b2RvTW9kdWxlID0ge1xuICB0b2RvczogW10sXG4gIGluaXQ6ICgpID0+IHtcbiAgICB0b2RvTW9kdWxlLnRvZG9zID0gZGVzZXJpYWxpemUoKTtcbiAgICBsb2FkU2FtcGxlVG9kbyh0b2RvTW9kdWxlLnRvZG9zKTtcbiAgICBwdWJzdWIuYWRkKCdxdWVyeVRvZG8nLCB0b2RvTW9kdWxlLmdldFRvZG8pO1xuICAgIHB1YnN1Yi5hZGQoJ3RvZG9DcmVhdGlvbicsIHRvZG9Nb2R1bGUuY3JlYXRlVG9kbyk7XG4gICAgcHVic3ViLmFkZCgndG9kb0RlbGV0aW9uJywgdG9kb01vZHVsZS5kZWxldGVUb2RvKTtcbiAgICBwdWJzdWIuYWRkKCd0b2RvTW9kaWZpY2F0aW9uJywgdG9kb01vZHVsZS5tb2RpZnlUb2RvKTtcbiAgICBwdWJzdWIuYWRkKCd0b2RvVG9nZ2xlQ29tcGxldGlvbicsIHRvZG9Nb2R1bGUudG9nZ2xlU3RhdHVzKTtcbiAgfSxcbiAgY3JlYXRlVG9kbzogKGZvcm0pID0+IHtcbiAgICBjb25zdCBsYXRlc3RUb2RvID0gdG9kb01vZHVsZS50b2Rvc1t0b2RvTW9kdWxlLnRvZG9zLmxlbmd0aCAtIDFdO1xuICAgIC8qIGJlYXV0aWZ5IHByZXNlcnZlOnN0YXJ0ICovXG4gICAgZm9ybVsndG9kby1pZCddID0gbGF0ZXN0VG9kbz8udG9kb0lkICsgMSB8fCAxO1xuICAgIC8qIGJlYXV0aWZ5IHByZXNlcnZlOmVuZCAqL1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhmb3JtKTtcbiAgICB0b2RvTW9kdWxlLnRvZG9zLnB1c2godG9kbyk7XG4gICAgc2VyaWFsaXplKHRvZG9Nb2R1bGUudG9kb3MpO1xuICAgIHB1YnN1Yi5lbWl0KCd0b2RvVXBkYXRlZCcpO1xuICB9LFxuICBnZXRUb2RvOiAocmVxdWVzdCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAvLyB2aWV3aW5nIHRvZG8gZnJvbSAzIG1haW4gZmlsdGVyc1xuICAgIGlmIChyZXF1ZXN0LnByb2plY3RJZCA9PSAnaW5ib3gnKVxuICAgICAgcmV0dXJuIHB1YnN1Yi5lbWl0KCdzZXJ2ZVRvZG9Cb2R5JywgdG9kb01vZHVsZS50b2Rvcyk7XG4gICAgaWYgKHJlcXVlc3QucHJvamVjdElkID09ICd0b2RheScpIHtcbiAgICAgIHJlc3VsdCA9IHRvZG9Nb2R1bGUudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pc1RvZGF5KCkgPT0gdHJ1ZSk7XG4gICAgICByZXR1cm4gcHVic3ViLmVtaXQoJ3NlcnZlVG9kb0JvZHknLCByZXN1bHQpO1xuICAgIH07XG4gICAgaWYgKHJlcXVlc3QucHJvamVjdElkID09ICd1cGNvbWluZycpIHtcbiAgICAgIHJlc3VsdCA9IHRvZG9Nb2R1bGUudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pc1VwY29taW5nKCkgPT0gdHJ1ZSk7XG4gICAgICByZXR1cm4gcHVic3ViLmVtaXQoJ3NlcnZlVG9kb0JvZHknLCByZXN1bHQpO1xuICAgIH07XG4gICAgLy8gdmlld2luZyBhIHNwZWNpZmljIHRvZG9cbiAgICBpZiAoIXJlcXVlc3QucHJvamVjdElkKSB7XG4gICAgICByZXN1bHQgPSB0b2RvTW9kdWxlLnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8udG9kb0lkID09IHJlcXVlc3QudG9kb0lkKTtcbiAgICAgIHJldHVybiBwdWJzdWIuZW1pdCgnZ2V0RGV0YWlsc09mVG9kbycsIHJlc3VsdFswXSk7XG4gICAgfVxuICAgIC8vIHZpZXdpbmcgYWxsIHRvZG9zIHRoYXQgYmVsb25nIHRvIGEgcHJvamVjdFxuICAgIHJlc3VsdCA9IHRvZG9Nb2R1bGUudG9kb3MuZmlsdGVyKHRvZG8gPT5cbiAgICAgIHRvZG8ucHJvamVjdElkID09IHJlcXVlc3QucHJvamVjdElkICYmXG4gICAgICB0b2RvLmlkID09IHJlcXVlc3QuaWQpO1xuICAgIHJldHVybiBwdWJzdWIuZW1pdCgnc2VydmVUb2RvQm9keScsIHJlc3VsdCk7XG4gIH0sXG4gIGRlbGV0ZVRvZG86IChyZXF1ZXN0KSA9PiB7XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PSAncHJvamVjdCcpIHtcbiAgICAgIHRvZG9Nb2R1bGUudG9kb3MgPSB0b2RvTW9kdWxlLnRvZG9zLmZpbHRlcih0b2RvID0+XG4gICAgICAgIHRvZG8ucHJvamVjdElkICE9IHJlcXVlc3QucHJvamVjdElkXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZSh0b2RvTW9kdWxlLnRvZG9zKTtcbiAgICB9O1xuICAgIGlmIChyZXF1ZXN0LnR5cGUgPT0gJ3RvZG8nKSB7XG4gICAgICB0b2RvTW9kdWxlLnRvZG9zID0gdG9kb01vZHVsZS50b2Rvcy5maWx0ZXIodG9kbyA9PlxuICAgICAgICB0b2RvLnRvZG9JZCAhPSByZXF1ZXN0LnRvZG9JZCk7XG4gICAgICByZXR1cm4gc2VyaWFsaXplKHRvZG9Nb2R1bGUudG9kb3MpO1xuICAgIH07XG4gICAgdG9kb01vZHVsZS50b2RvcyA9IHRvZG9Nb2R1bGUudG9kb3MuZmlsdGVyKHRvZG8gPT5cbiAgICAgIHRvZG8ucHJvamVjdElkICE9IHJlcXVlc3QucHJvamVjdElkICYmXG4gICAgICB0b2RvLnRvZG9JZCAhPSByZXF1ZXN0LnRvZG9JZCk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZSh0b2RvTW9kdWxlLnRvZG9zKTtcbiAgfSxcbiAgbW9kaWZ5VG9kbzogKHF1ZXJ5KSA9PiB7XG4gICAgdG9kb01vZHVsZS50b2Rvcy5tYXAodG9kbyA9PiB7XG4gICAgICBpZiAodG9kby50b2RvSWQgPT0gcXVlcnkudG9kb0lkKSB7XG4gICAgICAgIHRvZG8udGl0bGUgPSBxdWVyeS5mb3JtWyd0b2RvLW5hbWUnXTtcbiAgICAgICAgdG9kby5kZXNjID0gcXVlcnkuZm9ybVsndG9kby1kZXNjJ107XG4gICAgICAgIHRvZG8uZHVlRGF0ZSA9IHF1ZXJ5LmZvcm1bJ3RvZG8tZGF0ZSddO1xuICAgICAgICB0b2RvLnByaW9yaXR5ID0gcXVlcnkuZm9ybVsndG9kby1wcmlvcml0eSddO1xuICAgICAgICB0b2RvLnByb2plY3RJZCA9IHF1ZXJ5LmZvcm1bJ3Byb2plY3QtaWQnXTtcbiAgICAgICAgcHVic3ViLmVtaXQoJ3RvZG9VcGRhdGVkJyk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHNlcmlhbGl6ZSh0b2RvTW9kdWxlLnRvZG9zKTtcbiAgfSxcbiAgdG9nZ2xlU3RhdHVzOiAoaWQpID0+IHtcbiAgICB0b2RvTW9kdWxlLnRvZG9zLm1hcCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLnRvZG9JZCA9PSBpZCkgdG9kby5jb21wbGV0ZSA9ICF0b2RvLmNvbXBsZXRlO1xuICAgIH0pO1xuICAgIHNlcmlhbGl6ZSh0b2RvTW9kdWxlLnRvZG9zKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIFRvZG9Qcm9wKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUsIHRvZG9JZCwgcHJvamVjdElkKSB7XG4gIHRoaXNbXCJ0b2RvLW5hbWVcIl0gPSB0aXRsZTtcbiAgdGhpc1tcInRvZG8tZGVzY1wiXSA9IGRlc2M7XG4gIHRoaXNbXCJ0b2RvLWRhdGVcIl0gPSBkdWVEYXRlO1xuICB0aGlzW1widG9kby1wcmlvcml0eVwiXSA9IHByaW9yaXR5O1xuICB0aGlzW1wiY29tcGxldGVcIl0gPSBjb21wbGV0ZTtcbiAgdGhpc1tcInRvZG8taWRcIl0gPSB0b2RvSWQ7XG4gIHRoaXNbXCJwcm9qZWN0LWlkXCJdID0gcHJvamVjdElkO1xufTtcblxubGV0IHNhbXBsZVRvZG9Qcm9wcyA9IFtcbiAgbmV3IFRvZG9Qcm9wKCdHbyBzd2ltbWluZyB3aXRoIGZyaWVuZHMnLCAnOCBBTSBTdW5kYXkgYXQgbG9jYWwgcml2ZXInLCAnMjAyMy0wNC0yNCcsICdoaWdoJywgZmFsc2UsIDEwMDAxLCAwKSxcbiAgbmV3IFRvZG9Qcm9wKCdMZWFybiBSZWFjdCcsICcnLCAnMjAyMy0wMi0yNCcsICdtZWQnLCB0cnVlLCAxMDAwMiwgMTAwMDEpLFxuICBuZXcgVG9kb1Byb3AoJ0xlYXJuIE5leHQuanMnLCAnQWZ0ZXIga25vd2luZyBSZWFjdCwgTmV4dC5qcyB3b3VsZCBiZSBhIG5pY2Uga25vd2xlZGdlIHRvIGhhdmUgaW4gb3JkZXIgdG8gYmVjb21lIGEgZnVsbHN0YWNrIGRldmVsb3BlcicsICcyMDIzLTA2LTAxJywgJ21lZCcsIGZhbHNlLCAxMDAwMywgMTAwMDEpLFxuICBuZXcgVG9kb1Byb3AoJ1dvcmsgb24gbXkgNiBwYWNrcycsICdEZXZlbG9wZXIgbmVlZCBhIGhlYWx0aHkgYm9keSB0b28hJywgJzIwMjMtMTAtMTUnLCAnaGlnaCcsIHRydWUsIDEwMDA0LCAxMDAwMiksXG4gIG5ldyBUb2RvUHJvcCgnTWFrZSBzb21lIG1vcmUgZnJpZW5kcyEnLCAnTmV2ZXIga25vdyB3aGVuIHlvdSBuZWVkIGVtJywgJzIwMzMtMDQtMjQnLCAnbG93JywgZmFsc2UsIDEwMDA1LCAxMDAwMiksXG5dO1xuXG5mdW5jdGlvbiBsb2FkU2FtcGxlVG9kbyhhcnIpIHtcbiAgY29uc3QgdG9kb3MgPSBzYW1wbGVUb2RvUHJvcHMubWFwKHByb3AgPT4gbmV3IFRvZG8ocHJvcCkpO1xuICB0b2Rvcy5mb3JFYWNoKG9iaiA9PiBhcnIucHVzaChvYmopKTtcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMjAgMjAlMjclM2UlM2NwYXRoIHN0cm9rZT0lMjclMjM2YjcyODAlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3IHN0cm9rZS13aWR0aD0lMjcxLjUlMjcgZD0lMjdNNiA4bDQgNCA0LTQlMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjcgZmlsbD0lMjd3aGl0ZSUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyUzZSUzY3BhdGggZD0lMjdNMTIuMjA3IDQuNzkzYTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDAxLTEuNDE0IDBsLTItMmExIDEgMCAwMTEuNDE0LTEuNDE0TDYuNSA5LjA4Nmw0LjI5My00LjI5M2ExIDEgMCAwMTEuNDE0IDB6JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JTI3MCAwIDE2IDE2JTI3IGZpbGw9JTI3d2hpdGUlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjclM2UlM2NjaXJjbGUgY3g9JTI3OCUyNyBjeT0lMjc4JTI3IHI9JTI3MyUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIHN0cm9rZT0lMjd3aGl0ZSUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgZD0lMjdNNCA4aDglMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vZm9udHMvRmxpZ2h0eVJlZ3VsYXItdm03ekEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4yLjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQgY3VycmVudENvbG9yO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQgY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblt0eXBlPSd0ZXh0J10sW3R5cGU9J2VtYWlsJ10sW3R5cGU9J3VybCddLFt0eXBlPSdwYXNzd29yZCddLFt0eXBlPSdudW1iZXInXSxbdHlwZT0nZGF0ZSddLFt0eXBlPSdkYXRldGltZS1sb2NhbCddLFt0eXBlPSdtb250aCddLFt0eXBlPSdzZWFyY2gnXSxbdHlwZT0ndGVsJ10sW3R5cGU9J3RpbWUnXSxbdHlwZT0nd2VlayddLFttdWx0aXBsZV0sdGV4dGFyZWEsc2VsZWN0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM2YjcyODA7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxufVxcblxcblt0eXBlPSd0ZXh0J106Zm9jdXMsIFt0eXBlPSdlbWFpbCddOmZvY3VzLCBbdHlwZT0ndXJsJ106Zm9jdXMsIFt0eXBlPSdwYXNzd29yZCddOmZvY3VzLCBbdHlwZT0nbnVtYmVyJ106Zm9jdXMsIFt0eXBlPSdkYXRlJ106Zm9jdXMsIFt0eXBlPSdkYXRldGltZS1sb2NhbCddOmZvY3VzLCBbdHlwZT0nbW9udGgnXTpmb2N1cywgW3R5cGU9J3NlYXJjaCddOmZvY3VzLCBbdHlwZT0ndGVsJ106Zm9jdXMsIFt0eXBlPSd0aW1lJ106Zm9jdXMsIFt0eXBlPSd3ZWVrJ106Zm9jdXMsIFttdWx0aXBsZV06Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG4gIC0tdHctcmluZy1pbnNldDogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogIzI1NjNlYjtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2YjcyODA7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZmllbGRzLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOjotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWUge1xcbiAgbWluLWhlaWdodDogMS41ZW07XFxufVxcblxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWhvdXItZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWludXRlLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXNlY29uZC1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1taWxsaXNlY29uZC1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tZXJpZGllbS1maWVsZCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuNXJlbSBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVlbSAxLjVlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG4gIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgICAgICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG59XFxuXFxuW211bHRpcGxlXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGluaXRpYWw7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IGluaXRpYWw7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gYXV0bztcXG4gIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogaW5oZXJpdDtcXG4gICAgICAgICAgcHJpbnQtY29sb3ItYWRqdXN0OiBpbmhlcml0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxbdHlwZT0ncmFkaW8nXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICAgICAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGNvbG9yOiAjMjU2M2ViO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzZiNzI4MDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSB7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcblxcblt0eXBlPSdyYWRpbyddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmZvY3VzLFt0eXBlPSdyYWRpbyddOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDJweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6ICMyNTYzZWI7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMnB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCxbdHlwZT0ncmFkaW8nXTpjaGVja2VkIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuW3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOmhvdmVyLFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6Zm9jdXMsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZDpob3ZlcixbdHlwZT0ncmFkaW8nXTpjaGVja2VkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGU6aG92ZXIsW3R5cGU9J2NoZWNrYm94J106aW5kZXRlcm1pbmF0ZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG5bdHlwZT0nZmlsZSddIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgcmVwZWF0IDAgMCAvIGF1dG8gYXV0byBwYWRkaW5nLWJveCBib3JkZXItYm94IHNjcm9sbDtcXG4gIGJhY2tncm91bmQ6IGluaXRpYWw7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG5bdHlwZT0nZmlsZSddOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBCdXR0b25UZXh0O1xcbiAgb3V0bGluZTogMXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIH1cXG59XFxuLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRmxpZ2h0eSBSZWd1bGFyJztcXG4gIH1cXG4uc2lkZS1iYXIge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXG4gICAgd2lkdGg6IDE2cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuLnByb2plY3RzLWZpbHRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICB9XFxuLm1haW4tZmlsdGVyPiosXFxuICAucHJvamVjdHMtZmlsdGVyPioge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuLm1haW4tZmlsdGVyPio6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjNyZW07XFxuICB9XFxuLnByb2plY3RzLWZpbHRlcj4qOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgfVxcbi5kdWUtZGF0ZSxcXG4gIC50b2RvLWVkaXQsXFxuICAudG9kby1kZWxldGUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcbi5kdWUtZGF0ZSB7XFxuICAgIGN1cnNvcjogbm9uZTtcXG4gIH1cXG4udGl0bGUsXFxuICAuZGVzY3JpcHRpb24sXFxuICAuZHVlLWRhdGUge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgfVxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVzYztcXG4gIH1cXG4uZHVlLWRhdGUge1xcbiAgICBncmlkLWFyZWE6IGRlYWRsaW5lO1xcbiAgfVxcbi50b2RvLWVkaXQge1xcbiAgICBncmlkLWFyZWE6IGVkaXQ7XFxuICB9XFxuLnRvZG8tZGVsZXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICB9XFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxLjI1cmVtO1xcbiAgICBnYXA6IDEuMjVyZW07XFxuICAgIG1hcmdpbjogMS4yNXJlbTtcXG4gIH1cXG4uY29udGVudC1oZWFkaW5nIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbiAgfVxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbiAgfVxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKSA0MHB4IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG4gICAgLW1vei1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4udG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW5tYXgoOXJlbSwgMWZyKSBtaW5tYXgoN3JlbSwgbWF4LWNvbnRlbnQpIDQwcHggNDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDAsIDI0cHgpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwiY2hlY2tib3ggdGl0bGUgZGVhZGxpbmUgZWRpdCBkZWxldGVcXFwiXFxuICAgICAgXFxcImNoZWNrYm94IGRlc2MgIGRlYWRsaW5lIGVkaXQgZGVsZXRlXFxcIjtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICAtbW96LWNvbHVtbi1nYXA6IDFyZW07XFxuICAgICAgICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMS4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIH1cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICAgIHRvcDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIH1cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAxMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogLW1vei1tYXgtY29udGVudDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgfVxcbi5mb3JtLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcbiAgfVxcbi5mb3JtLWl0ZW06Zm9jdXMge1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDBweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuLm1vZGFsLWNvbnRlbnQ+bGFiZWw+ZGl2IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNzVyZW07XFxuICB9XFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5yZWxhdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sZWZ0LTgwIHtcXG4gIGxlZnQ6IDIwcmVtO1xcbn1cXG4ucm93LXNwYW4tMiB7XFxuICBncmlkLXJvdzogc3BhbiAyIC8gc3BhbiAyO1xcbn1cXG4ubS0yIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG4ubXgtNSB7XFxuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcXG59XFxuLm15LTUge1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcbi5tbC02IHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcbi5tbC01IHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5pbmxpbmUge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uY29udGVudHMge1xcbiAgZGlzcGxheTogY29udGVudHM7XFxufVxcbi5oLTExIHtcXG4gIGhlaWdodDogMi43NXJlbTtcXG59XFxuLmgtOCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5oLTE0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4udy0xMCB7XFxuICB3aWR0aDogMi41cmVtO1xcbn1cXG4udy0xMSB7XFxuICB3aWR0aDogMi43NXJlbTtcXG59XFxuLnctMTQge1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLmdyb3cge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZC1mbG93LWNvbCB7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG4uZ3JpZC1jb2xzLW1lbnUtdG9nZ2xlIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTZweCBtaW5tYXgobWluLWNvbnRlbnQsIDFmcik7XFxufVxcbi5ncmlkLWNvbHMtMiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtMiB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbnRlbnQtc3RhcnQge1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmdhcC0zIHtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuLmdhcC01IHtcXG4gIGdhcDogMS4yNXJlbTtcXG59XFxuLnBsYWNlLXNlbGYtY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG4uc2VsZi1zdGFydCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4uc2VsZi1jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1zZWxmLWVuZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLm92ZXJmbG93LWhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udGV4dC1lbGxpcHNpcyB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4uYm9yZGVyLTIge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItdC0yIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1yLTIge1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktaGlnaCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1tZWQge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbG93IHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjU1LCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWhpZ2hcXFxcLzAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktaGlnaFxcXFwvNSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA1KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1oaWdoXFxcXC8xMCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWhpZ2hcXFxcLzIwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktaGlnaFxcXFwvMjUge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktaGlnaFxcXFwvMzAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1oaWdoXFxcXC80MCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWhpZ2hcXFxcLzUwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktaGlnaFxcXFwvNjAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1oaWdoXFxcXC83MCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjcpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWhpZ2hcXFxcLzc1IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWhpZ2hcXFxcLzgwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktaGlnaFxcXFwvOTAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1oaWdoXFxcXC85NSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjk1KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1oaWdoXFxcXC8xMDAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbWVkXFxcXC8wIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDApO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LW1lZFxcXFwvNSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1tZWRcXFxcLzEwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbWVkXFxcXC8yMCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LW1lZFxcXFwvMjUge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yNSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbWVkXFxcXC8zMCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LW1lZFxcXFwvNDAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC40KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1tZWRcXFxcLzUwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbWVkXFxcXC82MCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LW1lZFxcXFwvNzAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC43KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1tZWRcXFxcLzc1IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNzUpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LW1lZFxcXFwvODAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC44KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1tZWRcXFxcLzkwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuOSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbWVkXFxcXC85NSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjk1KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1tZWRcXFxcLzEwMCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAxKTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1sb3dcXFxcLzAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMCk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbG93XFxcXC81IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMDUpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWxvd1xcXFwvMTAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1sb3dcXFxcLzIwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMik7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbG93XFxcXC8yNSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1sb3dcXFxcLzMwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbG93XFxcXC80MCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWxvd1xcXFwvNTAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1sb3dcXFxcLzYwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNik7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbG93XFxcXC83MCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjcpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWxvd1xcXFwvNzUge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC43NSk7XFxufVxcbi5ib3JkZXItcHJpb3JpdHktbG93XFxcXC84MCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjgpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWxvd1xcXFwvOTAge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC45KTtcXG59XFxuLmJvcmRlci1wcmlvcml0eS1sb3dcXFxcLzk1IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuOTUpO1xcbn1cXG4uYm9yZGVyLXByaW9yaXR5LWxvd1xcXFwvMTAwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDEpO1xcbn1cXG4uYm9yZGVyLVxcXFxbXFxcXCMzZTQwNDJcXFxcXSB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDYyLCA2NCwgNjYsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy1wcmlvcml0eS1oaWdoIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1wcmlvcml0eS1tZWQge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXByaW9yaXR5LWxvdyB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctcHJpb3JpdHktaGlnaFxcXFwvMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxufVxcbi5iZy1wcmlvcml0eS1oaWdoXFxcXC81IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA1KTtcXG59XFxuLmJnLXByaW9yaXR5LWhpZ2hcXFxcLzEwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xcbn1cXG4uYmctcHJpb3JpdHktaGlnaFxcXFwvMjAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxufVxcbi5iZy1wcmlvcml0eS1oaWdoXFxcXC8yNSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XFxufVxcbi5iZy1wcmlvcml0eS1oaWdoXFxcXC8zMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcXG59XFxuLmJnLXByaW9yaXR5LWhpZ2hcXFxcLzQwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xcbn1cXG4uYmctcHJpb3JpdHktaGlnaFxcXFwvNTAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcbi5iZy1wcmlvcml0eS1oaWdoXFxcXC82MCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG59XFxuLmJnLXByaW9yaXR5LWhpZ2hcXFxcLzcwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjcpO1xcbn1cXG4uYmctcHJpb3JpdHktaGlnaFxcXFwvNzUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbn1cXG4uYmctcHJpb3JpdHktaGlnaFxcXFwvODAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XFxufVxcbi5iZy1wcmlvcml0eS1oaWdoXFxcXC85MCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45KTtcXG59XFxuLmJnLXByaW9yaXR5LWhpZ2hcXFxcLzk1IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjk1KTtcXG59XFxuLmJnLXByaW9yaXR5LWhpZ2hcXFxcLzEwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcbi5iZy1wcmlvcml0eS1tZWRcXFxcLzAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDApO1xcbn1cXG4uYmctcHJpb3JpdHktbWVkXFxcXC81IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG59XFxuLmJnLXByaW9yaXR5LW1lZFxcXFwvMTAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxufVxcbi5iZy1wcmlvcml0eS1tZWRcXFxcLzIwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xcbn1cXG4uYmctcHJpb3JpdHktbWVkXFxcXC8yNSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yNSk7XFxufVxcbi5iZy1wcmlvcml0eS1tZWRcXFxcLzMwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcbn1cXG4uYmctcHJpb3JpdHktbWVkXFxcXC80MCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC40KTtcXG59XFxuLmJnLXByaW9yaXR5LW1lZFxcXFwvNTAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XFxufVxcbi5iZy1wcmlvcml0eS1tZWRcXFxcLzYwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xcbn1cXG4uYmctcHJpb3JpdHktbWVkXFxcXC83MCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC43KTtcXG59XFxuLmJnLXByaW9yaXR5LW1lZFxcXFwvNzUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNzUpO1xcbn1cXG4uYmctcHJpb3JpdHktbWVkXFxcXC84MCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC44KTtcXG59XFxuLmJnLXByaW9yaXR5LW1lZFxcXFwvOTAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuOSk7XFxufVxcbi5iZy1wcmlvcml0eS1tZWRcXFxcLzk1IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjk1KTtcXG59XFxuLmJnLXByaW9yaXR5LW1lZFxcXFwvMTAwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAxKTtcXG59XFxuLmJnLXByaW9yaXR5LWxvd1xcXFwvMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMCk7XFxufVxcbi5iZy1wcmlvcml0eS1sb3dcXFxcLzUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMDUpO1xcbn1cXG4uYmctcHJpb3JpdHktbG93XFxcXC8xMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcXG59XFxuLmJnLXByaW9yaXR5LWxvd1xcXFwvMjAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMik7XFxufVxcbi5iZy1wcmlvcml0eS1sb3dcXFxcLzI1IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcXG59XFxuLmJnLXByaW9yaXR5LWxvd1xcXFwvMzAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxufVxcbi5iZy1wcmlvcml0eS1sb3dcXFxcLzQwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG4uYmctcHJpb3JpdHktbG93XFxcXC81MCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcXG59XFxuLmJnLXByaW9yaXR5LWxvd1xcXFwvNjAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNik7XFxufVxcbi5iZy1wcmlvcml0eS1sb3dcXFxcLzcwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjcpO1xcbn1cXG4uYmctcHJpb3JpdHktbG93XFxcXC83NSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC43NSk7XFxufVxcbi5iZy1wcmlvcml0eS1sb3dcXFxcLzgwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjgpO1xcbn1cXG4uYmctcHJpb3JpdHktbG93XFxcXC85MCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC45KTtcXG59XFxuLmJnLXByaW9yaXR5LWxvd1xcXFwvOTUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuOTUpO1xcbn1cXG4uYmctcHJpb3JpdHktbG93XFxcXC8xMDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDEpO1xcbn1cXG4uYmctYmx1ZS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgOTksIDIzNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctbmF2LXNpZGUtYmFyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LCAyNDgsIDI1NCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctaXRlbS1ob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMjI2LCAyNDcsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRvcC1iYXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMzQsIDU3LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5weS0zIHtcXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxufVxcbi5weC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4ucHktMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnB4LTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcXG59XFxuLnB5LTUge1xcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLnB0LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxufVxcbi5wYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG4ucHQtMTQge1xcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4udGV4dC1sZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi50ZXh0LXByaW9yaXR5LWhpZ2gge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1tZWQge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1sb3cge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1oaWdoXFxcXC8wIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxufVxcbi50ZXh0LXByaW9yaXR5LWhpZ2hcXFxcLzUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA1KTtcXG59XFxuLnRleHQtcHJpb3JpdHktaGlnaFxcXFwvMTAge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1oaWdoXFxcXC8yMCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxufVxcbi50ZXh0LXByaW9yaXR5LWhpZ2hcXFxcLzI1IHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LWhpZ2hcXFxcLzMwIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcXG59XFxuLnRleHQtcHJpb3JpdHktaGlnaFxcXFwvNDAge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1oaWdoXFxcXC81MCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LWhpZ2hcXFxcLzYwIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG59XFxuLnRleHQtcHJpb3JpdHktaGlnaFxcXFwvNzAge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjcpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1oaWdoXFxcXC83NSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1oaWdoXFxcXC84MCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XFxufVxcbi50ZXh0LXByaW9yaXR5LWhpZ2hcXFxcLzkwIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45KTtcXG59XFxuLnRleHQtcHJpb3JpdHktaGlnaFxcXFwvOTUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjk1KTtcXG59XFxuLnRleHQtcHJpb3JpdHktaGlnaFxcXFwvMTAwIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LW1lZFxcXFwvMCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDApO1xcbn1cXG4udGV4dC1wcmlvcml0eS1tZWRcXFxcLzUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbWVkXFxcXC8xMCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LW1lZFxcXFwvMjAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1tZWRcXFxcLzI1IHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yNSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LW1lZFxcXFwvMzAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1tZWRcXFxcLzQwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC40KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbWVkXFxcXC81MCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LW1lZFxcXFwvNjAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1tZWRcXFxcLzcwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC43KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbWVkXFxcXC83NSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNzUpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1tZWRcXFxcLzgwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC44KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbWVkXFxcXC85MCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuOSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LW1lZFxcXFwvOTUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjk1KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbWVkXFxcXC8xMDAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAxKTtcXG59XFxuLnRleHQtcHJpb3JpdHktbG93XFxcXC8wIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMCk7XFxufVxcbi50ZXh0LXByaW9yaXR5LWxvd1xcXFwvNSB7XFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMDUpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1sb3dcXFxcLzEwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcXG59XFxuLnRleHQtcHJpb3JpdHktbG93XFxcXC8yMCB7XFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMik7XFxufVxcbi50ZXh0LXByaW9yaXR5LWxvd1xcXFwvMjUge1xcbiAgY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbG93XFxcXC8zMCB7XFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxufVxcbi50ZXh0LXByaW9yaXR5LWxvd1xcXFwvNDAge1xcbiAgY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1sb3dcXFxcLzUwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbG93XFxcXC82MCB7XFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNik7XFxufVxcbi50ZXh0LXByaW9yaXR5LWxvd1xcXFwvNzAge1xcbiAgY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjcpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1sb3dcXFxcLzc1IHtcXG4gIGNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC43NSk7XFxufVxcbi50ZXh0LXByaW9yaXR5LWxvd1xcXFwvODAge1xcbiAgY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjgpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1sb3dcXFxcLzkwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC45KTtcXG59XFxuLnRleHQtcHJpb3JpdHktbG93XFxcXC85NSB7XFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuOTUpO1xcbn1cXG4udGV4dC1wcmlvcml0eS1sb3dcXFxcLzEwMCB7XFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDAsIDEpO1xcbn1cXG4udGV4dC13aGl0ZSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uc2hhZG93LWNoZWNrYm94LWhpZ2gge1xcbiAgLS10dy1zaGFkb3c6IGluc2V0IDFlbSAxZW0gI0ZGMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IGluc2V0IDFlbSAxZW0gdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LWNoZWNrYm94LW1lZCB7XFxuICAtLXR3LXNoYWRvdzogaW5zZXQgMWVtIDFlbSAjMDAwMEZGO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogaW5zZXQgMWVtIDFlbSB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctY2hlY2tib3gtbG93IHtcXG4gIC0tdHctc2hhZG93OiBpbnNldCAxZW0gMWVtICMwMEZGMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiBpbnNldCAxZW0gMWVtIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLmZpbHRlciB7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcbi5jaGVjay1ib3gge1xcbiAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiBzcGFuIDIgLyBzcGFuIDI7XFxuICAgIHdpZHRoOiAxLjc1cmVtO1xcbiAgICBoZWlnaHQ6IDEuNzVyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuLm5hdi1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbi5jZW50ZXJlZC1wb3NpdGlvbiB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcbi50b2Rvcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMS4yNXJlbTtcXG4gICAgZ2FwOiAxLjI1cmVtO1xcbiAgfVxcblxcbi8qIEN1c3RvbSBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6IG5vbmU7XFxufVxcblxcbi8qIE92ZXJyaWRlIGRlZmF1bHQgZm9jdXMgY29sb3JzIGZvciB0YWlsd2luZGNzcy1mb3JtcyBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzLWZvcm1zICovXFxuW3R5cGU9J3RleHQnXTpmb2N1cyxcXG5bdHlwZT0nZW1haWwnXTpmb2N1cyxcXG5bdHlwZT0ndXJsJ106Zm9jdXMsXFxuW3R5cGU9J3Bhc3N3b3JkJ106Zm9jdXMsXFxuW3R5cGU9J251bWJlciddOmZvY3VzLFxcblt0eXBlPSdkYXRlJ106Zm9jdXMsXFxuW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ106Zm9jdXMsXFxuW3R5cGU9J21vbnRoJ106Zm9jdXMsXFxuW3R5cGU9J3NlYXJjaCddOmZvY3VzLFxcblt0eXBlPSd0ZWwnXTpmb2N1cyxcXG5bdHlwZT0nY2hlY2tib3gnXTpmb2N1cyxcXG5bdHlwZT0ncmFkaW8nXTpmb2N1cyxcXG5bdHlwZT0ndGltZSddOmZvY3VzLFxcblt0eXBlPSd3ZWVrJ106Zm9jdXMsXFxuW211bHRpcGxlXTpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgLS10dy1yaW5nLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdGbGlnaHR5IFJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbi5iZWZvcmVcXFxcOnNjYWxlLTA6OmJlZm9yZSB7XFxuICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcXG4gIC0tdHctc2NhbGUteDogMDtcXG4gIC0tdHctc2NhbGUteTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXG5cXG4uYmVmb3JlXFxcXDpzaGFkb3ctY2hlY2tib3gtaGlnaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IHZhcigtLXR3LWNvbnRlbnQpO1xcbiAgLS10dy1zaGFkb3c6IGluc2V0IDFlbSAxZW0gI0ZGMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IGluc2V0IDFlbSAxZW0gdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG4uYmVmb3JlXFxcXDpzaGFkb3ctY2hlY2tib3gtbWVkOjpiZWZvcmUge1xcbiAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XFxuICAtLXR3LXNoYWRvdzogaW5zZXQgMWVtIDFlbSAjMDAwMEZGO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogaW5zZXQgMWVtIDFlbSB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbi5iZWZvcmVcXFxcOnNoYWRvdy1jaGVja2JveC1sb3c6OmJlZm9yZSB7XFxuICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcXG4gIC0tdHctc2hhZG93OiBpbnNldCAxZW0gMWVtICMwMEZGMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiBpbnNldCAxZW0gMWVtIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuLmJlZm9yZVxcXFw6Y2hlY2stbWFyazo6YmVmb3JlIHtcXG4gICAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XFxuICAgIHdpZHRoOiAxLjI1cmVtO1xcbiAgICBoZWlnaHQ6IDEuMjVyZW07XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbiAgfVxcblxcbi5iZWZvcmVcXFxcOmNoZWNrZWRcXFxcOnNjYWxlLTEwMDpjaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpib3JkZXItMjpob3ZlciB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLmhvdmVyXFxcXDpib3JkZXItaXRlbS1ob3Zlcjpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE4MCwgMjI2LCAyNDcsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6Ym9yZGVyLXdoaXRlOmhvdmVyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1pdGVtLWhvdmVyOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAyMjYsIDI0NywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOnRleHQtYmx1ZS02MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgzNywgOTksIDIzNSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5kaXNhYmxlZFxcXFw6YmctYmx1ZS0yMDA6ZGlzYWJsZWQge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTEsIDIxOSwgMjU0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAubWRcXFxcOnctXFxcXFs2MDBweFxcXFxdIHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAubGdcXFxcOnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgLmxnXFxcXDptbC03MiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxOHJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCx3UkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYztFQUFkLHNEQUFjO1VBQWQsOENBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7O0NBQWM7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztFQUFkLFlBQWM7QUFBQTs7QUFBZCx3RUFBYztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkO0VBQUEsd0JBQWM7S0FBZCxxQkFBYztVQUFkLGdCQUFjO0VBQWQsc0JBQWM7RUFBZCxxQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxtQkFBYztFQUFkLHNCQUFjO0VBQWQsc0JBQWM7RUFBZCxxQkFBYztFQUFkLGVBQWM7RUFBZCxtQkFBYztFQUFkLDhCQUFjO0FBQUE7O0FBQWQ7RUFBQSw4QkFBYztFQUFkLG1CQUFjO0VBQWQsNENBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsd0JBQWM7RUFBZCwyR0FBYztFQUFkLHlHQUFjO0VBQWQsaUZB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bUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0NBQW1CO0VBQW5CLHlEQUFtQjtFQUFuQixrRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQ0FBbUI7RUFBbkIseURBQW1CO0VBQW5CLGtFQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtDQUFtQjtFQUFuQix5REFBbUI7RUFBbkIsa0VBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFtTmpCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7SUFBckIsdUJBQXFCO0lBQXJCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQztBQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFZO0lBQVosWUFBWTtFQUNkOztBQXJQRixxQkFBcUI7QUFDckI7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsMEdBQTBHO0FBQzFHOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRSxxQ0FBcUM7RUFDckMsa0JBQWtDO0VBQWxDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwwREFBd0Q7QUFDMUQ7O0FBbENBO0VBQUEsMkJDQUE7RURBQSxnQkNBQTtFREFBLGdCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLDJCQ0FBO0VEQUEsbUNDQUE7RURBQSwwRENBQTtFREFBLG1FQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLDJCQ0FBO0VEQUEsbUNDQUE7RURBQSwwRENBQTtFREFBLG1FQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLDJCQ0FBO0VEQUEsbUNDQUE7RURBQSwwRENBQTtFREFBLG1FQ0FBO0VEQUE7Q0NBQTs7QUQ4TUU7SUM5TUYsMkJBQUE7SUQrTUksY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsK0VBQXVFO1lBQXZFLHVFQUF1RTtFQUN6RTs7QUFuTkY7RUFBQSwyQkNBQTtFREFBLGdCQ0FBO0VEQUEsZ0JDQUE7RURBQTtDQ0FBOztBREFBO0VBQUE7Q0NBQTs7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBO0NDQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBO0NBQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuLyogQ3VzdG9tIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogbm9uZTtcXG59XFxuXFxuLyogT3ZlcnJpZGUgZGVmYXVsdCBmb2N1cyBjb2xvcnMgZm9yIHRhaWx3aW5kY3NzLWZvcm1zIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MtZm9ybXMgKi9cXG5bdHlwZT0ndGV4dCddOmZvY3VzLFxcblt0eXBlPSdlbWFpbCddOmZvY3VzLFxcblt0eXBlPSd1cmwnXTpmb2N1cyxcXG5bdHlwZT0ncGFzc3dvcmQnXTpmb2N1cyxcXG5bdHlwZT0nbnVtYmVyJ106Zm9jdXMsXFxuW3R5cGU9J2RhdGUnXTpmb2N1cyxcXG5bdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXTpmb2N1cyxcXG5bdHlwZT0nbW9udGgnXTpmb2N1cyxcXG5bdHlwZT0nc2VhcmNoJ106Zm9jdXMsXFxuW3R5cGU9J3RlbCddOmZvY3VzLFxcblt0eXBlPSdjaGVja2JveCddOmZvY3VzLFxcblt0eXBlPSdyYWRpbyddOmZvY3VzLFxcblt0eXBlPSd0aW1lJ106Zm9jdXMsXFxuW3R5cGU9J3dlZWsnXTpmb2N1cyxcXG5bbXVsdGlwbGVdOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICAtLXR3LXJpbmctY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ZsaWdodHkgUmVndWxhcic7XFxuICBzcmM6IHVybCguL2ZvbnRzL0ZsaWdodHlSZWd1bGFyLXZtN3pBLnR0ZikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuQGxheWVyIGNvbXBvbmVudHMge1xcbiAgLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRmxpZ2h0eSBSZWd1bGFyJztcXG4gIH1cXG5cXG4gIC5zaWRlLWJhciB7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xcbiAgICB3aWR0aDogMTZyZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1maWx0ZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgfVxcblxcbiAgLm1haW4tZmlsdGVyPiosXFxuICAucHJvamVjdHMtZmlsdGVyPioge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAubWFpbi1maWx0ZXI+KjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDEuM3JlbTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1maWx0ZXI+KjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5kdWUtZGF0ZSxcXG4gIC50b2RvLWVkaXQsXFxuICAudG9kby1kZWxldGUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcblxcbiAgLmR1ZS1kYXRlIHtcXG4gICAgY3Vyc29yOiBub25lO1xcbiAgfVxcblxcbiAgLnRpdGxlLFxcbiAgLmRlc2NyaXB0aW9uLFxcbiAgLmR1ZS1kYXRlIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgfVxcblxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgfVxcblxcbiAgLmR1ZS1kYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZTtcXG4gIH1cXG5cXG4gIC50b2RvLWVkaXQge1xcbiAgICBncmlkLWFyZWE6IGVkaXQ7XFxuICB9XFxuXFxuICAudG9kby1kZWxldGUge1xcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEuMjVyZW07XFxuICAgIG1hcmdpbjogMS4yNXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50LWhlYWRpbmcge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICB9XFxuXFxuICAucHJvamVjdC10aXRsZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKSA0MHB4IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbm1heCg5cmVtLCAxZnIpIG1pbm1heCg3cmVtLCBtYXgtY29udGVudCkgNDBweCA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMjRweCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJjaGVja2JveCB0aXRsZSBkZWFkbGluZSBlZGl0IGRlbGV0ZVxcXCJcXG4gICAgICBcXFwiY2hlY2tib3ggZGVzYyAgZGVhZGxpbmUgZWRpdCBkZWxldGVcXFwiO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgfVxcblxcbiAgLm1vZGFsLW92ZXJsYXkge1xcbiAgICB0b3A6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAxMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5mb3JtLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcbiAgfVxcblxcbiAgLmZvcm0taXRlbTpmb2N1cyB7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jb250ZW50PmxhYmVsPmRpdiB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjc1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbGF5ZXIgdXRpbGl0aWVzIHtcXG4gIC5jaGVjay1tYXJrIHtcXG4gICAgd2lkdGg6IDEuMjVyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbiAgfVxcblxcbiAgLmNoZWNrLWJveCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMiAvIHNwYW4gMjtcXG4gICAgd2lkdGg6IDEuNzVyZW07XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5uYXYtaXRlbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jZW50ZXJlZC1wb3NpdGlvbiB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcblxcbiAgLnRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS4yNXJlbTtcXG4gIH1cXG5cXG59XCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpO1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXG59O1xudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICB2YXIgcmVzdWx0OyAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG5cbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBkYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247IC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgYXNzaWduIGZyb20gXCIuLi9fbGliL2Fzc2lnbi9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGU7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGFzc2lnbihjbG9uZU9iamVjdChvcHRpb25zKSwge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSxcbiAgICBjb21wYXJpc29uOiBjb21wYXJpc29uXG4gIH0pO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gZW5kT2ZEYXkoZGF0ZSkuZ2V0VGltZSgpID09PSBlbmRPZk1vbnRoKGRhdGUpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbInB1YnN1YiIsInByb2plY3RNb2RhbCIsImluaXQiLCJhZGQiLCJyZW5kZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RhbE92ZXJsYXkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlTW9kYWwiLCJhcHBlbmRDaGlsZCIsImZvcm0iLCJoZWFkZXIiLCJ0ZXh0Q29udGVudCIsIm5hbWVMYWJlbCIsImh0bWxGb3IiLCJsYWJlbENvbnRlbnQiLCJuYW1lSW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiY29udHJvbFN1Ym1pdCIsImJ1dHRvbkRpdiIsImNhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInN1Ym1pdEZvcm0iLCJldiIsInByZXZlbnREZWZhdWx0Iiwib3ZlcmxheSIsIm1vZGFsIiwicmVtb3ZlIiwiYnV0dG9uIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvcm1Qcm9wcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW1pdCIsInRvZG9Nb2RhbCIsInByb2plY3RzIiwibmFtZUxhYmVsQ29udGVudCIsImRlc2NMYWJlbCIsImRlc2NMYWJlbENvbnRlbnQiLCJkZXNjSW5wdXQiLCJyb3dzIiwiZGF0ZUxhYmVsIiwiZGF0ZUxhYmVsQ29udGVudCIsImRhdGVJbnB1dCIsInZhbHVlQXNEYXRlIiwiRGF0ZSIsInByb2plY3RMYWJlbCIsInByb2plY3RMYWJlbENvbnRlbnQiLCJwcm9qZWN0SW5wdXQiLCJkZWZhdWx0T3B0aW9uIiwiaW5kZXgiLCJsZW5ndGgiLCJwcm9qZWN0Iiwib3B0aW9uIiwiY3VycmVudFByb2plY3RIZWFkZXIiLCJjdXJyZW50UHJvamVjdElkIiwiZGF0YXNldCIsInByb2plY3RJZCIsInByaW9yaXR5TGFiZWwiLCJwcmlvcml0eUxhYmVsQ29udGVudCIsInByaW9yaXR5SW5wdXQiLCJoaWdoT3B0aW9uIiwibWVkT3B0aW9uIiwibG93T3B0aW9uIiwiY29uZmlybURlbGV0aW9uTW9kYWwiLCJyZXF1ZXN0IiwiZGVsZXRlRGF0YSIsImVsZW1lbnQiLCJ0b2RvSWQiLCJpbmJveEhlYWRlciIsImlubmVySFRNTCIsImhlYWRpbmciLCJtb2RpZmljYXRpb25Nb2RhbCIsInRvZG9OYW1lIiwidG9kb0Rlc2MiLCJ0b2RvRGF0ZSIsInRpdGxlIiwidG9kb1Byb2plY3RJZCIsImNsYXNzQXJyYXkiLCJjbGFzc05hbWUiLCJzcGxpdCIsInByaW9yaXR5VmFsdWUiLCJmb3JFYWNoIiwid29yZHMiLCJzZWxlY3RlZCIsIm1vZGlmeURhdGEiLCJuZXdQcm9qZWN0TmFtZSIsIkVkaXRJY29uIiwiRGVsSWNvbiIsInByb2plY3RDb250ZW50IiwibW9kaWZ5UHJvamVjdCIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInByb2plY3RDb250YWluZXIiLCJoYW5kbGVDbGljayIsInByb2plY3ROYW1lIiwiZWRpdFByb2plY3QiLCJlZGl0SW1nIiwic3JjIiwiZGVsUHJvamVjdCIsImRlbEltZyIsInByb2plY3RFbGVtZW50IiwiY2xvc2VzdCIsInF1ZXJ5IiwiQWRkSWNvbiIsInByb2plY3RIZWFkZXIiLCJpbnRybyIsIkFycmF5IiwiaXNBcnJheSIsImFkZFByb2plY3RDb250YWluZXIiLCJhZGRQcm9qZWN0SWNvbiIsImFkZFByb2plY3RMYWJlbCIsInNlcnZlUHJvamVjdEZvcm0iLCJJbmJveEljb24iLCJUb2RheUljb24iLCJVcGNvbWluZ0ljb24iLCJuYXZTaWRlQmFyIiwidG9nZ2xlTmF2U2lkZUJhciIsInJlbmRlclByb2plY3RTaG9ydGN1dCIsImNvbnRyb2xCYWNrZ3JvdW5kIiwicmVmcmVzaEN1cnJlbnRQYWdlIiwiY29udGVudERpdiIsInNpZGVCYXIiLCJtYWluRmlsdGVyQ29udGFpbmVyIiwibWFpbiIsIm1haW5GaWx0ZXJzIiwiSW5ib3giLCJUb2RheSIsIlVwY29taW5nIiwiZmlsdGVyIiwiaW1hZ2UiLCJlbnRyaWVzIiwibWFpbkZpbHRlckl0ZW0iLCJpY29uIiwiaWNvbkltYWdlIiwibWFpbkZpbHRlclRpdGxlIiwic2VydmVNYWluRmlsdGVyIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJzZXJ2ZVByb2plY3RQYWdlIiwiZmlsdGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImRpc3BsYXkiLCJwcm9qZWN0RGl2Iiwic2VydmVTaW5nbGVQcm9qZWN0UGFnZSIsImN1cnJlbnRGaWx0ZXIiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJCdXR0b25JY29uIiwiaGVhZGVyRGl2Iiwic2lkZUJhckJ1dHRvbiIsInNpZGVCYXJCdXR0b25JbWFnZSIsImhlYWRlclRpdGxlIiwidG9kYXlIZWFkZXIiLCJ0b2RvQ29udGVudCIsInJlbmRlclRvZG9zQ29udGFpbmVyIiwidG9kb3NCb2R5IiwidG9kb3MiLCJub3RpY2UiLCJ0b2RvIiwidG9kb0NvbnRhaW5lciIsInByaW9yaXR5IiwiY2hlY2tib3giLCJjaGVja2VkIiwiY29tcGxldGUiLCJkZWFkbGluZSIsImdldFJlbWFpbmluZ1RpbWUiLCJkdWVEYXRlIiwiZGVzY0NvbnRhaW5lciIsImRlc2NDb250ZW50IiwiZGVzYyIsImVkaXQiLCJlZGl0SWNvbiIsImRlbGV0ZVRvZG9CdXR0b24iLCJkZWxJY29uIiwidG9kb0VsZW1lbnQiLCJjdXJyZW50VG9kb0lkIiwidmlld1RvZG9Nb2RhbCIsImZpbGxQcm9qZWN0RmllbGQiLCJmb3JtYXQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYWRkSWNvbiIsInRvZG9Gb290ZXIiLCJhZGRUb2RvQ29udGFpbmVyIiwiYWRkVG9kb0ljb24iLCJhZGRUb2RvTGFiZWwiLCJzZXJ2ZVRvZG9Gb3JtIiwidG9kb0hlYWRlciIsInVwY29taW5nSGVhZGVyIiwicHJvamVjdE1vZHVsZSIsInRvZG9Nb2R1bGUiLCJ3aW5kb3ciLCJyZW5kZXJIb21lUGFnZSIsImJvZHkiLCJldmVudHMiLCJtZXRob2QiLCJwdXNoIiwiZm4iLCJkYXRhIiwiUHJvamVjdCIsInByb3AiLCJzZXJpYWxpemUiLCJhcnIiLCJzZXJpYWxpemVkIiwib2JqIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZXNlcmlhbGl6ZSIsImdldE9iamVjdCIsIm1hcCIsInBvam8iLCJsb2FkU2FtcGxlUHJvamVjdCIsImNyZWF0ZVByb2plY3QiLCJkZWxldGVQcm9qZWN0IiwiZ2V0UHJvamVjdCIsImxhdGVzdFByb2plY3QiLCJyZXN1bHQiLCJzcGxpY2UiLCJQcm9qZWN0UHJvcCIsInNhbXBsZVByb2plY3RQcm9wcyIsImNvbXBhcmVBc2MiLCJmb3JtYXREaXN0YW5jZSIsIlRvZG8iLCJwcm90b3R5cGUiLCJhZGRTdWZmaXgiLCJ0b2dnbGVDb21wbGV0ZSIsImlzVG9kYXkiLCJzZXRIb3VycyIsImlzVXBjb21pbmciLCJ0b2RheSIsInRlbXBEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJ1cGNvbWluZ0RhdGUiLCJTdG9yYWdlIiwia2V5IiwiZ2V0SXRlbSIsInBhcnNlIiwibG9hZFNhbXBsZVRvZG8iLCJnZXRUb2RvIiwiY3JlYXRlVG9kbyIsImRlbGV0ZVRvZG8iLCJtb2RpZnlUb2RvIiwidG9nZ2xlU3RhdHVzIiwibGF0ZXN0VG9kbyIsIlRvZG9Qcm9wIiwic2FtcGxlVG9kb1Byb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==