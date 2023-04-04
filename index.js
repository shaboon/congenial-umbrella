// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("./lib/shape");

// An array of questions for user input
const questions = [
  "What Shape Would You Like Your Logo to Be?",
  "What Color is the Logo Shape?",
  "Logo Content? (Max of 3 Characters)",
  "What Color is the Logo Font? (Use a color or hexcode)",
];

const [shape, shapeColor, logoContent, fontColor] = questions;

// Initializes the app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: logoContent,
        name: "logo",
        validate: function (logo) {
          if (logo.length <= 3 && logo.length != 0) {
            return true;
          } else {
            console.log(
              ` !! Invalid: Logo must be 1-3 Characters! You Put: "${logo}"`
            );
          }
        },
      },
      {
        type: "input",
        message: fontColor,
        name: "fontcolor",
      },
      {
        type: "list",
        message: shape,
        name: "shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        message: shapeColor,
        name: "shapecolor",
      },
    ])
    .then((data) => {
      const fileName = `logo.svg`;
      // console.log(`Line 44: ${data}`);

      writeSVG(fileName, generateSVG(data));
    });
}

function writeSVG(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

init();
