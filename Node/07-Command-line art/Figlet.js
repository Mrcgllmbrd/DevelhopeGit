var figlet = require("figlet");

figlet.text("Questo è uno script Figlet", {
font: "4Max",
width:"40",
}, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
