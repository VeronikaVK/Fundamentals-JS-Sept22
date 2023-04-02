function convertToJSON(firstName, lastName, color){
    let info = {
        name: firstName,
        lastName: lastName,
        hairColor: color
    }
    let toJson = JSON.stringify(info);
    console.log(toJson);

}
convertToJSON('George', 'Jones', 'Brown')