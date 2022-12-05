function betterThanAverage(classPoints, yourPoints) {
    let aver
    let sum = 0
    for(let i = 0; i < classPoints.length; i++){
      sum+= classPoints[i]
    }
    aver = sum / classPoints.length
    if (yourPoints > aver){
      return true
    }
    else{
      return false
    }
  }
  