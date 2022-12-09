function countPositivesSumNegatives(input) {
    let arr = []
    let sum_neg = 0
    let count_pos = 0
    let count = 0
    
    if (input == null){
      return arr
    }
    
    for (let i = 0; i < input.length; i++){
      if (input[i] < 0){
        sum_neg += input[i]
        count++
      }
      else if (input[i] > 0){
        count_pos++
        count++
      }
    }
    if (count == 0){
      return arr
    }
    arr.push(count_pos)
    arr.push(sum_neg)
    return arr
  }