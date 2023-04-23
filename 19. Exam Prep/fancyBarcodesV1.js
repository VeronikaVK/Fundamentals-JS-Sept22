function fancyBarcodes(input) {
    let numberOfBarcodes = Number(input.shift());
    let barcodes = input;
    if (numberOfBarcodes < 1) {
        return
    }

    let pattern = /@#+[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1}@#+/g

    for (let i = 0; i < numberOfBarcodes; i++) {
        let code = barcodes[i];
        let isItAMatch = code.match(pattern);
        

        if (isItAMatch !== null && String(isItAMatch) === code) {
            let splitted = String(isItAMatch).split('');

            let group = '';
            for (const char of splitted) {

                if (char == Number(char)) {
                    group += char;
                }
            }

            if (group) {
                console.log(`Product group: ${group}`);
            } else {
                group = '00';
                console.log(`Product group: ${group}`);
            }

        } else {
            console.log("Invalid barcode");
        }

    }

}
fancyBarcodes((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]))