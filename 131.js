function digitize(n) {
    let str = n.toString().split('').reverse()
    
    let array = []
    for (let i = 0; i < str.length; i++){
      array.push(parseInt(str[i]))
    }
    
    return array
  }

