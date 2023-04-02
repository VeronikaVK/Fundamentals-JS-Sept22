function firstAndLastKNumbers(input){
    let count = input.shift();
    let firstElements = input.slice(0, count) //започва от 0 индекс до 2ри индекс
    let lastElement = input.slice(input.length - count);
    //let lastHackedElement = input.slice(-count);

    console.log(firstElements.join(' '));
    console.log(lastElement.join(' '));
    //console.log(lastHackedElement);
}
firstAndLastKNumbers([2, 7, 8, 9])