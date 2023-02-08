function sortAnArrayByTwoCriteria(arr){
    let sortedArray = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    //принтира на нов ред
    sortedArray.forEach(element =>{
        console.log(element);
    })
}
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])