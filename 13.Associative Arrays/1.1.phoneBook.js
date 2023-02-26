function phoneBook(input){
    let phoneBookList = {};

    for(const entry of input){
        let entryArr = entry.split(' '); // ['Tim',  '0834212554']
        let name = entryArr[0];
        let phone = entryArr[1];

        phoneBookList[name] = phone
    }
    for(let name in phoneBookList){
        console.log(`${name} -> ${phoneBookList[name]}`);
    }
    

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)