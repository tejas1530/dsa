const str = "welcome to this javascript guide";

const reverseString = (string, separator) => {
  return string.split(separator).reverse().join(separator);
};

const a = reverseString(str, "");

const b = reverseString(a, " ");

const arr = [1, 2, 4, 2];

let emp = [];
for (let i = 0; i < arr.length; i++) {
  if (emp.indexOf(arr[i]) === -1) {
    emp.push(arr[i]);
  }
}

const mul = (a) => {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
};

const mul2 = mul(2)(3)(4);

for (let i = 0; i <= 100; i++) {
  let fizz = i % 3 == 0;
  let buzz = i % 5 == 0;

  console.log(fizz ? (buzz ? "fizbuzz" : "fizz") : buzz ? "buzz" : i);
}

function counter() {
  var _counter = 0;

  return function () {
    return _counter++;
  };
}

var c = counter();
console.log(c());

const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);

let counters = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
console.log(counters);
console.log("==========", i);

const object1 = {
  a: 10,
  b: 20,
  c: function () {
    console.log(this.a + this.b);
  },
};

// In this JavaScript code, you're defining an object object1 with properties a, b, and c. Property c is a function that logs the sum of a and b.

// Then, you're assigning the method c of object1 to a variable func, and calling func().

// However, when you call func(), it's executed in the global context, not the context of object1. Therefore, this.a and this.b inside func will refer to the global object (or undefined if you're in strict mode), rather than the properties of object1.

// As a result, you'll likely encounter an error when trying to access this.a and this.b since they are undefined in this context.

// If you want to ensure that this refers to object1 even when calling func() separately, you can use bind() to explicitly bind the this context:

const func = object1.c.bind(object1);
func();
