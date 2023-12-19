import * as fs from "node:fs";

const content = "questo è un contenuto"

fs.writeFile("file-1",
  content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('file scritto correttamente');
    }
  });
