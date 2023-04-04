// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const validateData = require("./lib/shape");

// TODO: Create an array of questions for user input
const questions = [
  "What Shape Would You Like Your Logo to Be?",
  "What Color is the Logo Shape?",
  "Logo Content? (Max of 3 Characters)",
  "What Color is the Logo Font? (Use a color or hexcode)",
];

const [shape, shapeColor, logoContent, fontColor] = questions;

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: logoContent,
        name: "logo",
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
      console.log(`Line 44: ${data}`);

      //   fs.validateData(data);

      writeSVG(fileName, validateData(data));
    });
}

function writeSVG(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
// // TODO: Create a function to write the SVG file
// function generateSVG(fileName, data) {
//   console.log(`Line 980: ${data}`);
//   const license = data.license;
//   console.log(license);
//   return `
//         <svg>

//         </svg>
//       `;
// }

init();
