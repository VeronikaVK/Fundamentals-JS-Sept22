function charactersInRange(firsChar, secondChar) {
    let rangeStart = Math.min(firsChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(firsChar.charCodeAt(), secondChar.charCodeAt())

    let resulString = [];

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar)
        resulString.push(singleChar);

    }
    console.log(resulString.join(' '));

}
charactersInRange('#',
    ':'
)