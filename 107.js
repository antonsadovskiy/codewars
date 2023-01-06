function powersOfTwo(n){
    let array = []
    let result;
      
    for (let i = 0; i <= n; i++){
      result = Math.pow(2, i)
      array.push(result)
    }
    
    return array
  }