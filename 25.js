function removeChar(str){
    let str1 = str.substring(0, 0) + str.substring(1, str.length)
    let str2 = str1.substring(0,str1.length - 1) + str1.substring(str1.length, str1.length)
    return str2
    };