var btn = document.querySelector('button');

// btn.addEventListener('click', (event) => {console.log(event)});
var observer = {
  next: function(value) {
    console.log(value);
  },
  error: function(error) {
    console.log(error);
  },
  complete: function() {
    console.log('complete');
  }
}

// Rx.Observable.fromEvent(btn, 'click')
var subscription = Rx.Observable.create(function(obs) {
  // obs.next('a value');
  // setTimeout(function() {
  //   obs.complete();
  // }, 1000);
  // obs.next('a next value');
  btn.onclick = function(event) {
    obs.next(event);
  }
})
  .subscribe(observer);

setTimeout(function() {
  subscription.unsubscribe();
}, 5000);


var observableInterval = Rx.Observable.interval(1000);
var observerInterval = {
  next: function(value) {
    console.log(value);
  }
}
observableInterval
  .map(function(value) {
    return value*2;
  })
  .throttleTime(2000)
  .subscribe(observer);


var subject = new Rx.Subject();

subject.subscribe({
  next: function(value) {
    console.log(value);
  },
  error: function(error) {
    console.log(error);
  },
  complete: function() {
    console.log('complete');
  }
})

subject.subscribe({
  next: function(value) {
    console.log(value);
  }
})

subject.next('new data piece');
subject.complete();


var observableFilter = Rx.Observable.interval(1000);

observableFilter
.filter(function(value) {
  return value % 2 == 0;
})
.subscribe({
  next: function(value) {
    console.log(value);
  },
  error: function() {
    console.log('Error: ', error);
  }
});


var input = document.querySelector('input');
var observableDebounce = Rx.Observable.fromEvent(input, 'input');

observableDebounce
.map(function(event) {
  return event.target.value;
})
.debounceTime(500) // emit event after two second of inaction
.distinctUntilChanged() // value of emision is not equal to input value
.subscribe({
  next: function(value) {
    console.log(value);
  }
})


var observableReduceScan = Rx.Observable.of(1, 2, 3, 4, 5);

observableReduceScan
// .reduce(function(total, currentValue) {
//   return total + currentValue; // print end value
// }, 0) // starting point
.scan(function(total, currentValue) {
  return total + currentValue; // print new value on each step
}, 0) // starting point
.subscribe({
  next: function(value) {
    console.log(value);
  }
})