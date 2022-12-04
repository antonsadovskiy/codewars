function isPythagoreanTriple(integers) {
    let final = true;
    if (Math.pow(integers[0], 2) == Math.pow(integers[1], 2) + Math.pow(integers[2], 2)){
      return final;
    }
    else if (Math.pow(integers[1], 2) == Math.pow(integers[0], 2) + Math.pow(integers[2], 2)){
      return final;
    }
    else if (Math.pow(integers[2], 2) == Math.pow(integers[0], 2) + Math.pow(integers[1], 2)){
      return final;
    }
    else {
      final = false;
      return final;
    }    
}