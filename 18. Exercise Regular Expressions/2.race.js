function race(raceDataArray) {
    let racersArray = raceDataArray.shift().split(', ');
    let raceObject = [];
    const patternName = /[A-Za-z]+/g;
    const patternDistance = /[0-9]+/g;

    let command = raceDataArray.shift();

    while (command !== 'end of race') {
        //match връща васив от всички съвпадения които отговарят на regex-a patternName
        const currentName = command.match(patternName).join('');
        const currentDistance = command.match(patternDistance).join('');


        if (racersArray.includes(currentName)) {
            let distance = 0;
            for (const digit of currentDistance) {
                distance += Number(digit);
            }
            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = distance;
            } else {
                raceObject[currentName] += distance;
            }
        }
        command = raceDataArray.shift();
    }
    let sortedRacerc = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);
    const firstPlace = sortedRacerc[0][0]; //George 
    const seconfPlase = sortedRacerc[1][0];
    const thirdPlace = sortedRacerc[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${seconfPlase}`);
    console.log(`3rd place: ${thirdPlace}`);

}
race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']
)