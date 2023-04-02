function studentInformation(name, age, grade){
    let studentInfo = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
    console.log(studentInfo);
}
studentInformation('John', 15, 5.54678)