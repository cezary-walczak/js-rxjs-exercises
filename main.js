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

  function log(name='Shaun', belt='black', age=28) {
    console.log(name, belt, age);
  }
  log();

  var cities = ['London', 'Paris', 'Berlin'];
  console.log(...cities);
  var nums1 = [1, 2, 3];
  var nums2 = [...nums1, 4, 5, 6];
  console.log(nums2);
  var nums = [3, 5, 7]
  function addNums(a, b, c) {
    console.log(a + b + c);
  }
  addNums(...nums);
}