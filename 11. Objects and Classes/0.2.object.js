function dogSleep() {
    console.log('zzzzzz.......');
}

let dog = {
    name: 'Balkan',
    bark: function () {
        console.log('Wof wof');
    },
    eat: () => console.log('Yum yum'),
    sleep: dogSleep,

    //object method notation
    play() {
        console.log('Play with dog');
    }
}
console.log(dog.name);
dog.bark()
dog.sleep()
dog.bark()