function employees(input) {


    for (const key of input) {
        let personalNum = key.length;
        let person = key;
        console.log(`Name: ${person} -- Personal Number: ${personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)