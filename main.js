var btn = document.querySelector('button');

// btn.addEventListener('click', (event) => {console.log(event)});
Rx.Observable.fromEvent(btn, 'click')
  .throttleTime(1000)
  .map((data) => {return data.clientY})
  .subscribe(
    (coordinate) => console.log(coordinate)
  );