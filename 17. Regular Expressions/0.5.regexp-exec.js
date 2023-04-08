let pattern = /(?<funcName>\w+)\(\)/g; //?<funcName> име на група

//ALT+Z word wrap - за да не са на един ред а да се вижда целият текст на екрана
let text = 'When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. If the match fails, the exec() method returns null (which coerces to false).';

let match = pattern.exec(text);


while (match) {
    console.log(match.groups.funcName); //взимаме групата вместо да пишем match[1]

    // match[1] защото взимаме първата нъмбър група, което е думата без () ако беше match[0] щеше да хване всичко дума+()
    console.log(`Found ${match[1]} on index ${match.index}`);
    match = pattern.exec(text);
}