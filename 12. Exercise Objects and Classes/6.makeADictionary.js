function makeADictionary(input) {
    let dictionary = {};

    input.forEach(element => {
        const fromJ = JSON.parse(element);
        let term = Object.keys(fromJ)[0];
        let definition = Object.values(fromJ)[0];

        dictionary[term] = definition


    });
    let sorted = Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
    sorted.forEach(a => console.log(`Term: ${a[0]} => Definition: ${a[1]}`));

    

}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]

)