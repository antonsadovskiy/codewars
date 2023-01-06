function arrayPlusArray(arr1, arr2) {
    let sumArr1 = 0
    let sumArr2 = 0
    
    for (let i = 0; i < arr1.length; i++){
      sumArr1 += arr1[i]
    }
    
    for (let i = 0; i < arr2.length; i++){
      sumArr2 += arr2[i]
    }
    
    return sumArr1 + sumArr2
  }