function countBy(x, n) {
    let array = []
    let count = 0
    let num = x
    do {
      array.push(num)
      num += x
      count++
    } while (count != n)
    return array
  }