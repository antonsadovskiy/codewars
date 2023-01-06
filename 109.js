function findShort(s){
    let newArray = s.split(" ")
    
    let min = newArray[0].length;

    for (const item of newArray){
      if (item.length < min){
        min = item.length
      }
    }  
    return min
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))