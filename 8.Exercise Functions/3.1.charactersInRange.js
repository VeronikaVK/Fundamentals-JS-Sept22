function charactersInRange(firsChar, secondChar) {
    //let rangeStart = firsChar.charCodeAt();//изкарва номера на ASCII символа
    //let rangeEnd = secondChar.charCodeAt();//така написано предполага че пърият символ е винаги по малък–идва преди втория

    //покриваме с мин/макс вариантите когато вторият символ е по-малък
    let rangeStart = Math.min(firsChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(firsChar.charCodeAt(), secondChar.charCodeAt())

    let resulString = '';

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar) //превръща числата които имаме в ASCII символи
        if (currentChar + 1 === rangeEnd) {
            resulString += `${singleChar}`;
        } else {
            resulString += `${singleChar} `;
        }

    }
    console.log(resulString);

}
charactersInRange('#',
    ':'
)