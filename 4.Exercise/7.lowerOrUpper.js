function lowerOrUpper(char){
    let result = char === char.toUpperCase() //toUpperCase главни букви //НЯМА ;
    ? console.log('upper-case'): //като if-else ако е вярно изкарва това ако не долното //ИМА :
    console.log('lower-case');
}
lowerOrUpper('R')