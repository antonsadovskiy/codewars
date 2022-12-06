function checkAlive (health) {
    if (health <= 0) {
      return false
    } else if(health >= 1) {
      return true
    }
  }