function extractFile(path){
    const dirs = path.split('\\');
    const file = dirs.pop();

    const lastDot = file.lastIndexOf('.');
    const fileName = file.substring(0, lastDot);
    const extension = file.substring(lastDot + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')