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
  console.log('hoist 7 - Identifier a has already been declared');
}
hoist_7();

{
  var a = 1;
  //Here the statement a = 10; is no longer changing the value of the global a which remains to be 1, but rather it is changing the local a from a function to an integer value of 10. Since we are logging the global a, the output is 1.
  function hoist_8() {
    a = 10;
    return;
    function a() {}
  }
  hoist_8();
  console.log('hoist 8 - ', a);
}

{
  function hoist_9() {
    function a() {
      return 1;
    }
    return a();
    function a() {
      return 2;
    }
  }
  console.log('hoist 9 - ', hoist_9());
}

{
  function hoist_10() {
    //Now, in such a case of multiple declarations(variable and function in the same scope) with the same identifier, the hoisting of variables is simply IGNORED. The the interpreter comes across the function declaration and hoists it.
    var a = "I'm a variable";
    function a() {
      return "I'm a function";
    }
    return a();
  }
  console.log('hoist 10 - ', ' hoist_10() - Error: a is not a function');
}

{
  function hoist_11() {
    // let a = "I'm a variable";
    //Here we know that if in same scope we define same name variable of let and function then it say Identifier 'a' has already been declared.
    function a() {
      return "I'm a function";
    }
    return a();
  }
  console.log(
    'hoist 11 - ',
    ' hoist_11() - Error: Identifier a has already been declared'
  );
}

function hoist_12() {
  var a = function () {
    return 3;
  };
  return a();
  var a = function () {
    return 8;
  };
}
console.log('hoist 12 -', hoist_12());

{
  var a = 10;
  (function () {
    console.log('hoist 13 - 1 -', 'Original value was: ' + a);
    var a = 20;
    console.log('hoist 13 - 2 -', 'New value is: ' + a);
  })();
}
