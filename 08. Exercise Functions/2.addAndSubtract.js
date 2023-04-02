function addAndSubtract(firstNumber, secondNumber, lastNumber){

    function add(firstNumr, secondNum){ //имената може да се различават защото живеят само във вътрешната функция
        let sumOfTwoNumbers = firstNumr + secondNum;
        return sumOfTwoNumbers;
    }

    let sum = add(firstNumber, secondNumber) //тук трябва да извикаме с имената на първата функция, защото искаме да ползваме нейните параметри
    // let secondSum = add(firstNumber, lastNumber) може да вземем първото и третото число от гламната функция и пак ще работи

    function subtract(sumOfTwo,lastNum ){
        return sumOfTwo - lastNum;
    }
    let result = subtract(sum, lastNumber)
    console.log(result);

}
addAndSubtract(23,
    6,
    10
    )