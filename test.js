function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a number";
  } else {
    const num = number ** 3;
    return num;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter both strings as input.";
  } else {
    const doesExist = string1.toLowerCase().includes(string2.toLowerCase());
    return doesExist;
  }
}

function sortMaker(arr) {
  if (0 < arr[(0, 1)] && arr[0] != arr[1]) {
    return arr.sort(function (a, b) {
      return b - a;
    });
  } else if (arr[0] == arr[1]) {
    return "equal";
  } else {
    return "Invalid input";
  }
}

function findAddress(obj) {
  const properties = ["street", "House", "society"];
  const formattedObj = properties.map((key) => (obj[key] ? obj[key] : "__"));
  return formattedObj.join(",");
}

function canPay(changeArray, totalDue) {
  if (!changeArray.length) {
    console.log("Please come with money");
  } else {
    total = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const taka = changeArray[i];
      total = total + taka;
    }
    if (total >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
