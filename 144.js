function calculateAge(birthYear, dieYear){
    if (birthYear < dieYear){
      return (dieYear - birthYear > 1)? `You are ${dieYear - birthYear} years old.` :
      `You are 1 year old.`
    }
    else if(birthYear > dieYear){
      return (birthYear - dieYear > 1)? `You will be born in ${birthYear - dieYear} years.` :
      `You will be born in 1 year.`
    }
    else {
      return `You were born this very year!`
    }
  }