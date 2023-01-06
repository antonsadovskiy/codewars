var humanYearsCatYearsDogYears = function(humanYears) {
    let human = 0;
    let CatYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++){
      if (i === 1){
        CatYears += 15;
        dogYears += 15;
      }
      else if (i === 2){
        human = humanYears;
        CatYears += 9;
        dogYears += 9;
      }
      else {
        CatYears += 4;
        dogYears += 5;
      }
    }
    
    
    
    return [humanYears, CatYears, dogYears];
  }
  