function wordsTracker(wordsArray){
    const words = wordsArray.shift().split(' ') // ['this', 'sentence']

    let result = {};

    for (const word of words) { // this 0, sentence 0
        result[word] = 0;
    }

    for (const word of wordsArray) { // this 3, sentence 2
            if(result.hasOwnProperty(word)){
                result[word]++;
            }
    }

    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]); 

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
   
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )