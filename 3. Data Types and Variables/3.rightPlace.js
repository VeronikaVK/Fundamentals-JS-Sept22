function rightPlace(str, char, result) {
    let res = str.replace("_", char);
    let final = res === result;
    if (final) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'o', 'Strong')