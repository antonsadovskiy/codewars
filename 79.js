function defineSuit(card) {
    if (card[1] == '♠'){
      return 'spades'
    }
    else if (card[1] == '♦'){
      return 'diamonds'
    }
    else if (card[1] == '♥'){
      return 'hearts'
    }
    else if (card[1] == '♣'){
      return 'clubs'
    }
    else if (card[2] == '♠'){
      return 'spades'
    }
    else if (card[2] == '♦'){
      return 'diamonds'
    }
    else if (card[2] == '♥'){
      return 'hearts'
    }
    else if (card[2] == '♣'){
      return 'clubs'
    }
  }