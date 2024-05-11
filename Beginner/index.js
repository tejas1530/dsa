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
