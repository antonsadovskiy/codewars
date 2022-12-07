function getGrade (s1, s2, s3) {
    let aver = (s1 + s2 + s3) / 3
    if (aver >= 90 && aver <= 100){
      return 'A'
    }
    else if(aver >= 80 && aver < 90){
      return 'B'
    }
    else if(aver >= 70 && aver < 80){
      return 'C'
    }
    else if(aver >= 60 && aver < 70){
      return 'D'
    } 
    else if (aver < 60){
      return 'F'
    }
  }