function Subject() {
  this.observers = []; //array of observers
}

Subject.prototype = {
  suscribe: function (fn) {
    this.observers.push(fn);
  },
  unsuscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => fn != fnToRemove);
  },
  fire: function () {
    this.observers.forEach((fn) => fn.call());
  },
};

const subject = new Subject();

function Observer1() {
  console.log('Observer 1 firing');
}

function Observer2() {
  console.log('Observer 2 firing');
}

subject.suscribe(Observer1);
subject.suscribe(Observer2);
subject.unsuscribe(Observer2);
subject.fire();
