var number = function(busStops){
    let In = 0
    let Out = 0
    
    for (let i = 0; i < busStops.length; i++){
      In+= busStops[i][0]
      Out+= busStops[i][1]
    }
    
    return In - Out
  }