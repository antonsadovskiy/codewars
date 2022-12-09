function rentalCarCost(d) {
    let sum = d * 40
    let total = 0
    if (d >= 7){
      total = sum - 50
    }
    else if(d >= 3){
      total = sum - 20
    }
    else {
      total = sum
    }
    return total
  }