function multipleOfIndex(array) {
    let mas = []
    for (let i = 0; i < array.length; i++){
      if (array[i] % i == 0){
        mas.push(array[i])
      }
    }
    return mas
  }