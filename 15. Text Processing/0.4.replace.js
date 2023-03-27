let text = 'Lorem, ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

//replace firs occurance
let replaceDolor = text.replace('dolor', 'uniqum');
console.log(replaceDolor);

//replace all
let replaceAllDolor = text;
while (replaceAllDolor.indexOf('dolor') >= 0) {
    replaceAllDolor = replaceAllDolor.replace('dolor', 'uniqum')
}
console.log(replaceAllDolor);