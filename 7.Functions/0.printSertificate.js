function printSertificate(grade, names){
    ///print header
    //print full name
    //
    //print formated grade

}
printSertificate(5.25, [])

function formatGrade(grade) {
    let gradeWord = '';
    if (grade < 3) {
        gradeWord = 'Fail';
    } else if (grade < 3.5) {
        gradeWord = 'Poor';
    } else if (grade < 4.5) {
        gradeWord = 'Good';
    } else if (grade < 5.5) {
        gradeWord = 'Very good';
    } else {
        gradeWord = 'Excellent'
    }
    if (gradeWord === 'Fail') {
        console.log(`Fail (2)`);
    } else {
        console.log(`${gradeWord} (${grade.toFixed(2)})`);
    }


}
formatGrade(2.50)


