function emojiDetector(input) {
    //input
    let text = input.shift()

    let emojiCount = 0;
    let collEmoji = [];

    //get all digit and calculate threshold
    let threshold = 1;
    let digits = text.match(/\d/g);
    for (const digit of digits) {
        let number = Number(digit[0]);
        threshold *= digit
    }
    console.log(`Cool threshold: ${threshold}`);

    //get all emojis
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})+\1/g);
    

    for (const emojieMatch of emojiMatches) {
        let emoji = emojieMatch[0] //::Smiley::
        emojiCount++;
        let emojiName = emojieMatch.groups.name //Smiley




        //calculate emaji coolness
        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);

        }
        if (emojiCoolnes >= threshold) {
            collEmoji.push(emoji);

        }

    }
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const el of collEmoji) {
        console.log(el);

    }

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])