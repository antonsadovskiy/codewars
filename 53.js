function monkeyCount(n) {
    let monkeys = []
    let num = n
    if (n == 0){
      return []
    }
    do {
      monkeys.unshift(num)
      num--
    }while(num >= 1)
    return monkeys
  }