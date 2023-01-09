function doubleChar(str) {
  let string = ''
  for (let i = 0; i < str.length; i++){
    string += str[i] + str[i]
  }
  return string
}
