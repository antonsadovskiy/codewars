function preFizz(n) {
    let array = []
    let num = n
    do {
      array.unshift(num)
      num--
    } while (num != 0)
    return array
  }