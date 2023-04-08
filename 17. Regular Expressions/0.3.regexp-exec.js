let pattern = /\w+\(\)/gi; //взима всички думи, които завършват на ()

//ALT+Z word wrap - за да не са на един ред а да се вижда целият текст на екрана
let text = 'When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. If the match fails, the exec() method returns null (which coerces to false).';

let match = pattern.exec(text);
// console.log(match[0]);

// match = pattern.exec(text);
// console.log(match[0]);

//понеже принтира само първият резултат, затова трябва да повторим операцията, докато не свършат възможните съвпадения
while (match) {
    console.log(match[0]);
    match = pattern.exec(text);
}