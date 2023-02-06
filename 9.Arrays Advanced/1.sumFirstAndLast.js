function sumFirstAndLast(numbers){
    let firsElement = Number(numbers[0]);
    //let firsElement = numbers.shift()
    let lastElement = Number(numbers.pop());
    let sum = firsElement + lastElement;
    console.log(sum);

}
sumFirstAndLast(['20', '30', '40'])