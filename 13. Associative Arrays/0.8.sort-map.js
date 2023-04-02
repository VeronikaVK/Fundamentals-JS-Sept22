let phoneBookMap = new Map();

phoneBookMap.set('pesho', '45665656654');
phoneBookMap.set('gosho', '1233232321');
phoneBookMap.set('mariyka', '7899898987');
phoneBookMap.set('ivaylo', '3211212123');

let phoneBookEntry = Array.from(phoneBookMap.entries())

phoneBookEntry.sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]))
console.log(phoneBookEntry);