let pattern = /(\w+)\(\)/g;

//ALT+Z word wrap - за да не са на един ред а да се вижда целият текст на екрана
let text = 'When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. If the match fails, the exec() method returns null (which coerces to false).';

let matches = text.match(pattern);
console.log(matches); //масив с всички съвпадения без подробната информация - индекс, групи

for (const match of matches) {
    console.log(match);
}