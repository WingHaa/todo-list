export const pubsub = {
  events: [],
  add: function (event, method) {
    this.events[event] = this.events[event] || []
    this.events[event].push(method)
  },
  remove: function (event, method) {
    if (this.events[event]) this.events[event] = this.events[event].filter(element => element !== method)
  },
  emit: function (event, data) {
    this.events[event].forEach(method => {
      method(data);
    });
  }
}