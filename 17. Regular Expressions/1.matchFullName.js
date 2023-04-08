function matchFullName(text){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g; //\b word boundary - за да е само думи като Ivan Ivanov иначе хваща и Ivan IvAnov
    
    let names = text.match(pattern);
    console.log(names.join(' '));
}
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov')