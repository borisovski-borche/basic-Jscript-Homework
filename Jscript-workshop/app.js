console.log("working");

//map numbers with dash

const arrayMap = [0, 2, 5, 4, 6, 8, 10, 12, 3, 4, 4, 3, 4, 4];

function mapNumbers(arr) {
  let resultString = "";
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
      resultString += `-${arr[i]}`;
    } else {
      resultString += arr[i];
    }
  }
  return resultString;
}

console.log(mapNumbers(arrayMap));

//divine with 3 and 7

function divide(num) {
  const numArray = [];
  const resultArr = [];
  //generating an array of n size
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }
  //pushing only the required numbers
  for (let el of numArray) {
    if (el % 3 === 0 && el % 7 === 0) {
      resultArr.push(el);
    }
  }
  return resultArr;
}

divide(100);
console.log(divide(150));

//atm machine

function change(num) {
  const resultArr = [];
  const coins = [50, 20, 10, 5, 1];
  for (let coin of coins)
    if (num % coin === 0) {
      for (let i = 0; i < num / coin; i++) {
        resultArr.push(coin);
      }
      break;
    } else {
      for (let j = 0; j < (num - (num % coin)) / coin; j++) {
        resultArr.push(coin);
      }
      num = num % coin;
    }

  return resultArr;
}
//works with n number
console.log(change(120));

//trying to make the bonus work
function changeBonus(num) {
  const coins = [50, 20, 10, 5, 1];
  const coinLimits = [4, 8, 10, 20, 30];
  const resultArr = [];
  for (let coin of coins)
    if (num % coin === 0) {
      for (let i = 0; i < num / coin; i++) {
        resultArr.push(coin);
      }
      break;
    } else {
      for (let j = 0; j < (num - (num % coin)) / coin; j++) {
        resultArr.push(coin);
      }
      num = num % coin;
    }

  return resultArr;
}
