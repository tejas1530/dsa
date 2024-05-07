const uniqString = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toLowerCase());
    if (
      newArr.indexOf(arr[i].toLowerCase()) !==
      newArr.lastIndexOf(arr[i].toLowerCase())
    ) {
      return false;
    }
  }
};

console.log(uniqString("Helo"));
