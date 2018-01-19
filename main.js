window.onload = function() {

  const pi = 3.142;
  function calcArea(r) {
    const pi = 10; //inside function can be redeclare
    console.log(pi*r*r);
  }
  calcArea(5);

  var x = 10;
  if(x > 5) {
    let x = 5; //aplly in block scope only
    console.log("inside: " + x);
  }
  console.log("outside: " + x);

  var items = document.getElementsByTagName('li');
  for(let y = 0; y < items.length; y++) {
    items[y].onclick = function() {
      console.log(y);
    };
  }
}