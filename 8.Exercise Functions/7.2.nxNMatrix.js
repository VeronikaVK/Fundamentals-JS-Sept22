function nxNMatrix(number){
    let rowGenerator = () =>{
        let sungleRow = '';
        for(let k = 1; k <= number; k++){
            sungleRow += `${number} `;
        }
        return sungleRow;
    }

    for(let i = 1; i <= number; i++){
        console.log(rowGenerator());          
    }
}
nxNMatrix(3)