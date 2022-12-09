function sumEvenNumbers(input) {
    let sum_evens = 0
    for (let i = 0; i < input.length; i++){
      if (input[i] % 2 == 0){
        sum_evens += input[i]
      }
    }
    return sum_evens
  }  