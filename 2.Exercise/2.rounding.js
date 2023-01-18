function rounding(number, precision){
    if(precision > 15){
        precision = 15;
    }
    //console.log(number.toFixed(precision)); не работи защото 1,500 нулите ги брой, а тук не ги искаме

    let finalNum = number.toFixed(precision);
    console.log(parseFloat(finalNum)); // чрез parseFloat() махаме допълнителните нули от които нямаме нужда

}
rounding(10.5,3)