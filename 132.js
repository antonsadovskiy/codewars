function squareDigits(num){
    let string = num.toString().split("");
    let string2 = ""
    let nums
    for (let i = 0; i < string.length; i++){
        string2 += Math.pow(parseInt(string[i]), 2)
    }
    nums = parseInt(string2)
    return nums
}
