function fancyBarCode(input) {
 
    let numberBarCodes = input.shift()
    let patternProducts = /([@][#]+)(?<product>[A-Z][A-Za-z\d]{4,}[A-Z])([@][#]+)/g
    let patternNumbers = /\d/g
 
 
 
    for (let i = 0; i < numberBarCodes; i++) {
        let line = input[i]
        let match = patternProducts.exec(line)
  
        if (match) {
            let productName = match.groups.product
            let numberMatch = productName.match(patternNumbers)
            
            if (numberMatch == null) {
                numberMatch = ["00"]
                console.log(`Product group: ${numberMatch}`)
            } else {
                console.log(`Product group: ${numberMatch.join("")}`)
            }
        } else {
            console.log("Invalid barcode")
        }
 
        match = patternProducts.exec(line)
 
    }
 
}