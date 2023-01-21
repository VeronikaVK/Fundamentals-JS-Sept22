function echoType(value){
    console.log(typeof value); // typeof - принтира типа на променливата
    if(typeof value == 'string' || typeof value == 'number'){
        
        console.log(value);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}
echoType(null)