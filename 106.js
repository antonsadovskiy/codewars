function multiTable(number) {
    let string = ''
    
    for (let i = 1; i <= 9; i++){
      let result = i * number 
      string += `${i} * ${number} = ${result}` + "\n"
    }
    let result2 = 10 * number;
    string += `${10} * ${number} = ${result2}`
    return string
  }