//Въпрос при JUnior как воже да се копира обект!!!!!!!!!!!

function objectDemo() {
    let person = {
        name: 'Ivo',
        age: 29,
        isMale: true,
    };

    //copy and create new object
    let personTwo = JSON.parse(JSON.stringify(person));

    person['email'] = 'testmail@test.bg';

    console.log(person);
    console.log(personTwo);

}
objectDemo()
