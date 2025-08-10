
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import  {writeFile} from 'node:fs';


inquirer
  .prompt([
    {
        message: " Please, enter your URL:",
        name : "URL"
    }
  ])
  .then((answers) => {
        var qr_png = qr.image(answers.URL,{type: "png"});
        qr_png.pipe(fs.createWriteStream("URL.png"));

        writeFile('message.txt', answers.URL, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 

    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
