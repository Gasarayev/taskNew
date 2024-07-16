// function createCounter() {
//     var count = 0;

//     return function() {
//         count++;
//         console.log(count);
//         return count;
//     };
// }

// const counter = createCounter();

// counter();
// counter();
// counter();

// function useState(value) {
//   var newValue = value;

//   function state() {
//     return value;
//   }

//   function setState(newValue) {
//     value = newValue;
//   }

//   return [state, setState];
// }

// var [someVar, setSomeVar] = useState(0);

// setSomeVar();
// console.log(someVar());

// setSomeVar(1);
// console.log(someVar());

// setSomeVar(6);
// console.log(someVar());

// setSomeVar(8);
// console.log(someVar());

// setSomeVar(9);
// console.log(someVar());

// ---------------------------

let basket = [];

function addToBasket(item) {
  basket.push(item);
  console.log(basket);
}

addToBasket('gasar');
addToBasket('emil');
