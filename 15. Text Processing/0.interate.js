let text = 'hello world';
for (const char of text) {
    console.log(char);
}

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    console.log(text.charAt(i));
}