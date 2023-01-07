function highAndLow(numbers){
    let arrayNums = []
    let arrayStr = numbers.split(" ")

    for (let i = 0; i < arrayStr.length; i++){
        arrayNums.push(parseInt(arrayStr[i]))
    }

    let MIN = arrayNums[0]
    let MAX = arrayNums[0]
    for (let i = 0; i < arrayNums.length; i++){

        if (arrayNums[i] < MIN) {
            MIN = arrayNums[i]
        }
        if (arrayNums[i] > MAX) {
            MAX = arrayNums[i]
        }
    }
    return `${MAX} ${MIN}`
}
