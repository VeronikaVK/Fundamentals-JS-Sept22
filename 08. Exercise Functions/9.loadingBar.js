function loadingBar(number){

    let percentCount = '%'.repeat(number/10); //колко пъти % ще се повтаря
    let dotsCount = '.'.repeat(10 - (number/10)) //броят на точките
    //let dotsCount = '.'.repeat(10 - percentCount.length) - вариант 2

    if(number === 100){
        console.log('100% Complete!');
    }else if(number < 100){
        console.log(`${number}% [${percentCount}${dotsCount}]`);
        console.log('Still loading...');
    }
}
loadingBar(30)