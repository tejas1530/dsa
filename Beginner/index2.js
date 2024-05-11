var twoSum = function (num, target) {
  for (var i = 0; i < num.length; i++) {
    for (var j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
