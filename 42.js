function enough(cap, on, wait) {
    let count = on + wait;
    if (count <= cap){
      return 0
    }
    else {
      return Math.abs(cap - (on + wait))    
    }
  }