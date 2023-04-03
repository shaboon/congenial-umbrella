// function validateData(data) {
//   console.log(`Line 2: ${data}`);
//   if (data.logo.length > 3) {
//     console.log("The Logo Text is too short! Maximum of 3 Characters.");
//     return;
//   }
//   if (data.logo.length === 0) {
//     console.log("Hey! You didn't enter anything... ;^;");
//     return;
//   }
//   generateSVG(data);
// }

function defineShape(data) {
  const shape = data.shape;
  console.log(`Line 15: ${shape}`);
  console.log(shape);
  switch (shape) {
    case "circle":
      console.log("Circle Started");
      return `
      <circle cx="25" cy="75" r="20" stroke="red" fill="${data.shapeColor}" stroke-width="5"/>`;
    case "triangle":
      console.log("Triangle Started");
      return `
      <polygon points="180,10 270,190 90,190" style="fill:${data.shapeColor};stroke:purple;stroke-width:1" />`;
    case "square":
      console.log("Square Started");
      return `
      <rect x="10" y="10" width="30" height="30" stroke="black" fill="${data.shapeColor}" stroke-width="5"/>`;
    default:
      return "";
  }
}

function generateSVG(data) {
  console.log(`Line 36: ${data.logo}`);
  console.log(`Line 37: ${data.fontcolor}`);
  console.log(`Line 38: ${data.shape}`);
  console.log(`Line 39: ${data.shapecolor}`);
  return `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${defineShape(data)}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      data.fontColor
    }">${data.logo}</text>

          </svg>
        `;
}

module.exports = generateSVG;
