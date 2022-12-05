function findAverage(array) {
    let aver;
    let sum = 0;
    
    if (array == ""){
      return 0
    }
    for (let i = 0; i < array.length; i++){
      sum += array[i]
    }
    aver = sum / array.length
    return aver
    
  }