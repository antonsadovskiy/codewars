function invert(array) {
    let arr = []
    for (let i = 0; i < array.length; i++){
      let a = array[i] * (-1)
      arr.push(a);
    }
    return arr;
  }