function worldTour(input) {
 
    let stops = input.shift();
    let command = input.shift();
 
    while (command !== "Travel") {
        let tokens = command.split(':');
        let instruction = tokens[0];
 
        switch (instruction) {
            case 'Add Stop':
                stops = addDestination(tokens[1], tokens[2], stops);
                console.log(stops);
                break;
            case 'Remove Stop':
                stops = removeDestination(Number(tokens[1]), Number(tokens[2]), stops);
                console.log(stops);
                break;
            case 'Switch':
                let pattern = new RegExp(tokens[1], 'gi');
                stops = stops.replace(pattern, tokens[2]);
                console.log(stops);
                break;
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
 
    function addDestination(index, destination, destinations) {
        let tempString = '';
 
        if (destinations[index]) {
            tempString = destinations.slice(0, index) + destination + destinations.slice(index);
        }
 
        return tempString;
    }
 
    function removeDestination(startId, endId, destinations) {
        let tempString = destinations;
        let temp = '';
 
        if (destinations[startId] && destinations[endId]) {
            temp = destinations.slice(startId, endId + 1);
        }
 
        tempString = tempString.replace(temp, '');
 
        return tempString;
    }
}