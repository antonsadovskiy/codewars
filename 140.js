function generateRange(min, max, step){
    let array = []
    do {
      array.push(min)
      min += step
    } while (min <= max)
    
    return array
  }