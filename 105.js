function giveMeFive(obj){
    let array = []
    
    for (let key in obj){
      if (key.length === 5){
        array.push(key)
      }
      if (obj[key].length === 5){
        array.push(obj[key])
      }
    }
    return array  
  }