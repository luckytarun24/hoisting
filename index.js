// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Hoisting</h1>`;

function hoist_1() {
  //Here a have global scope with in function it will find a before decleration. So it exist in scope with undefined value;
  console.log('hoist 1 -', a);
  {
    var a = 10;
  }
}
hoist_1();

function hoist_2() {
  //Here let is block scope so if we try to access before delcare it give not found.
  console.log('hoist 2 - a - ReferenceError: shape is not defined');
  {
    let a = 10;
  }
}
hoist_2();

function hoist_3() {
  a = 10;
  console.log('hoist 3 -', a);
  return;
  function a() {}
}
hoist_3();

function hoist_4() {
  var a = 10;
  {
    //Here we know that let are local scope so it exist in this block only. and not rewrite global var a.
    let a = '20';
    console.log('hoist 4 - 1 -', a);
  }
  console.log('hoist 4 - 2 -', a);
}
hoist_4();

function hoist_5() {
  let a = 10;
  {
    //Here we know that let are local scope so it exist in this block only. and not rewrite global let a.
    let a = '20';
    console.log('hoist 5 - 1 -', a);
  }
  console.log('hoist 5 - 2 -', a);
}
hoist_5();

function hoist_6() {
  var a = 10;
  {
    //Here we know that var are global scope so it exist in this global only. and  rewrite global var a.
    var a = '20';
    console.log('hoist 6 - 1 -', a);
  }
  console.log('hoist 6 - 2 -', a);
}
hoist_6();

function hoist_7() {
  //Here we know that if in same scope we define same name variable with let and var then it say Identifier 'a' has already been declared.
  let a = 10;
  // var a = '20'; Identifier 'a' has already been declared
  console.log('Identifier a has already been declared');
}
hoist_7();
