function filter_list(l) {
    let mas = [];
    for (let i = 0; i < l.length; i++){
      if (Number.isInteger(l[i])){
        mas.push(l[i])
      }
    }
    return mas
  }