
const fs = require('fs');

fs.readFile('./Files/exampleText.txt' , 'utf-8', (err, data1)=>{
    console.log(data1);
    fs.readFile(`./Files/${data1}.txt` , 'utf-8', (err,data2)=>{
        console.log(err);
        fs.writeFile('./Files/generatedText.txt' , `${data1}\n\n${data2}\n\n ${new Date()}`, ()=>{
            console.log ("The file has been written");
        })
    })
})

console.log('Reading... the files');
