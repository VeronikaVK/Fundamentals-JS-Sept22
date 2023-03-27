let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

//split
let sentence = text.split('. ');
console.log(sentence);

//includes
let hasDolor = text.includes('dolor')
console.log(hasDolor);