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