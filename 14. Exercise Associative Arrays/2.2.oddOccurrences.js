function oddOccurrences(words){
    let resultObject = {};
    let allWords = words
        .split(' ')
        .map(w => w.toLowerCase()); //['java', 'c#', 'php', 'php', 'java', 'php', '3', 'c#', '3', '1', '5', 'c#']

  for (const word of allWords) {
    if(resultObject[word] == undefined){
        resultObject[word] = 1;
    }else{
        resultObject[word]++;
    }
   
  }
  let result = '';

    for (const word of allWords) {
        if(resultObject[word] % 2 == 1){
            result += `${word} `;
            delete resultObject[word];
        }
        
    }
    console.log(result);


}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')