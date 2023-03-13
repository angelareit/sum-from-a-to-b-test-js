
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let currSum = + fromN;

  //base case (or exit condition)
  if (fromN === toN) {
    return currSum;
  }
  //recursive casegit add 
  else {
    return fromN + sum(++fromN, toN);
  }


}

module.exports = sum;
