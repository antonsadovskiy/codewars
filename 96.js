function fixTheMeerkat(arr) {
    let end = arr.pop(arr)
    let start = arr.shift(arr)
    arr.unshift(end)
    arr.push(start)
    return arr
  }