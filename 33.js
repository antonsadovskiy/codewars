function positiveSum(arr) {
    let pos = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > 0){
        pos += arr[i]
      }
    }
    return pos
  }