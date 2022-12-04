function squareDigits(num){
    let final = [];
    let numsArr = Array.from(String(num), Number);
    for (let i = 0; i < numsArr.length; i++){
        let count = parseInt(numsArr[i]);
        final.push += Math.pow(count)
    }
    return final;
  }

console.log(squareDigits(938247));