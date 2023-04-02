function integerAndFloat(firstNum, secondNum, thirdNum){
    let sum = firstNum + secondNum + thirdNum;
    // тернарен оператор(3 операнда): 1-условие ? след въпроса ако е вярно се изпълва първото, 
    //в случая Integer, ако е грешно след : втория Float
    let type = Number.isInteger(sum) ? 'Integer' : 'Float'; 
    // let type = '';
    // if(Number.isInteger(sum)){
    //     type = 'Integer';
    // } else{
    //     type = 'Float';
    // }
     console.log(`${sum} - ${type}`);

}
integerAndFloat(100, 200, 303)