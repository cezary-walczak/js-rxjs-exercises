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
  var nums = [3, 5, 7];
  function addNums(a, b, c) {
    console.log(a + b + c);
  }
  addNums(...nums);

  var temp = `Hello
              ES6`;
  console.log(temp);
  function logNinja(name, age) {
    console.log(`name: ${name}, 
age: ${7+20}`);
  }
  logNinja("Shaun", 28);

  var str = 'hello ';
  console.log(str.repeat(5));
  console.log(str.startsWith('el', 1)); //return booleans
  console.log(str.endsWith('lo', str.length - 1)); //return booleans
  console.log(str.includes('hell')); //return booleans

  var greeting = name => console.log(`Hello ${name}`);
  greeting('Shaun');

  var name = "Shaun";
  var belt = "black";
  var ninja = {
    name, 
    belt,
    chop(x) {
      window.setInterval(() => {
        if(x > 0) {
          console.log(this.name + ' chopped the enemy');
          x--
        }
      }, 1000);
    }
  };
  ninja.chop(5);

  var cities = ['London', 'Paris', 'Berlin'];
  for(let city in cities) {
    console.log(cities[city]); //iterating over keys
  }
  for(let city of cities) {
    console.log(city); //iterating over values
  }
}

