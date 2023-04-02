function division(number){
    let outputNum = 0;
    if(number % 10 === 0){
        outputNum = 10;
    } else if(number % 7 === 0){
        outputNum = 7;
    }else if(number % 6 === 0){
        outputNum = 6;
    } else if(number % 3 ===0){
        outputNum = 3;
    } else if(number % 2 ===0){
        outputNum =2;
    } else{
        console.log('Not divisible');
    }
    if(outputNum !== 0)
    console.log(`The number is divisible by ${outputNum}`);

}
division(30)