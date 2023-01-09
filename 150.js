function sayHello( name, city, state ) {
    let helloString = 'Hello, '
    for (let i = 0; i < name.length - 1; i++){
      helloString += name[i] + ' ';
    }
    helloString += name[name.length - 1]
    return `${helloString}! Welcome to ${city}, ${state}!`
}