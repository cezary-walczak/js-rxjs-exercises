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
  // ninja.chop(5);

  var cities = ['London', 'Paris', 'Berlin'];
  for(let city in cities) {
    console.log(cities[city]); //iterating over keys
  }
  for(let city of cities) {
    console.log(city); //iterating over values
  }

  var ninja = ['Shaun', 'black', 29, 'male'];
  var [name, belt='black', ...elements] = ninja;
  console.log(name);
  console.log(belt);
  console.log(...elements);

  var ninjas = {
    name: 'Shaun',
    belt: 'black',
    age: 30
  };
  var {name: nm, belt: bl, age: ag} = ninjas; //: sth - we have to uses aliases when defined
  console.log(nm);
  console.log(bl);
  console.log(ag);

  class Ninja { //classes are function that are not hoisted and can store only methods
    constructor(name) {
      this.name = name;
      console.log(name + ' ninja constructor');
    }
    static staticMethod() {
      console.log(name + ' ninja static method');
    }
    prototypeMethod() {
      console.log(name + ' ninja prototype method');
    }
    getID() {
      return 10;
    }
  }
  let netninja = new Ninja('Shaun');
  Ninja.staticMethod('Shaun');
  netninja.prototypeMethod('Shaun');

  class Developer extends Ninja {
    constructor(name) {
      super(name); // call parent constructor before subclass constructor
      console.log(name + ' developer constructor');
    }
    getID() {
      // return 50;
      return super.getID();
    }
  }
  let developer = new Developer('Ryu');
  console.log(developer.getID());
/*
  // export default
  let name = 'Shaun';
  export default name;
  // export named module
  let name = 'Shaun';
  let belt = 'black';
  let ninja = {
    name: 'Shaun',
    belt: 'black'
  }
  export {name, belt, ninja} // exported modules are hoisted
  // export functions and classes
  export function greet(message) {
    console.log(message);
  };
  export class greetMessage{
    constructor() {
      console.log('constructor');
    }
    greet() {
      console.log('greet function');
    }
  };
  // import modules
  import ninjaName from './module1.js' // any valid name
  import {name as nm, belt as bl, ninja} from './module2.js'
  import {greet, greetMessage} from './module3.js'
  console.log(`${nm} have ${bl} belt`);
  // nm = 'Ryu'; // variables are read-only
  ninja.name = 'Ryu'; // propreties of object can be changed
  console.log(ninja.name);
  greet('Hello World');
  let greetings = new greetMessage();
  greetings.greet();
*/
  let ninja1 = {}
  let ninja2 = {}
  let names = new Set(['Shaun', 'Ryu', 'Yoshi', 'Ryu']).add('Yoshi').add(ninja1);
  names.add('Shaun').add(ninja2);
  names.delete('Yoshi'); //return boolean
  // names.clear();
  console.log(names.has('Ryu'));
  console.log(names);
  console.log(names.size);
  var ninjas = ['Shaun', 'Ryu', 'Yoshi', 'Ryu', 'Yoshi', ninja1, ninja2];
  var refinedNinjas = new Set(ninjas);
  ninjas = [...refinedNinjas];
  console.log(ninjas);

  let ninjaMap = new Map();
  ninjaMap.set('name', 'Shaun');
  ninjaMap.set('belt', 'black');
  ninjaMap.set('age', 30);
  console.log(ninjaMap.get('name'));
  let ninja3 = {};
  ninjaMap.set(ninja3, 10);
  console.log(ninjaMap.get(ninja3));
  ninjaMap.delete(ninja3);
  // ninjaMap.clear();
  console.log(ninjaMap.has(ninja3));
  console.log(ninjaMap.size);
  for(let key of ninjaMap.keys()) {
    console.log(key);
  }
  for(let value of ninjaMap.values()) {
    console.log(value);
  }
  for(let entry of ninjaMap.entries()) {
    console.log(entry);
  }
  for(let [key, value] of ninjaMap.entries()) {
    console.log(`${key} -> ${value}`);
  }
}