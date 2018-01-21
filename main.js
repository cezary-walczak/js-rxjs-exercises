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