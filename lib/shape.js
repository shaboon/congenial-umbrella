// The switch method takes the shape from the object and passed the correct element for the SVG file
function defineShape(data) {
  const shape = data.shape;
  // console.log(`Line 4: ${shape}`);
  // console.log(shape);
  switch (shape) {
    case "circle":
      console.log("Circle Started");
      return `
      <circle cx="150" cy="100" r="90"  fill="${data.shapecolor}"/>`;
    case "triangle":
      console.log("Triangle Started");
      return `
      <polygon points="60,10 270,110 60,190" style="fill:${data.shapecolor}"/>`;
    case "square":
      console.log("Square Started");
      return `
      <rect x="75" y="25" width="150" height="150" fill="${data.shapecolor}"/>`;
    default:
      return "";
  }
}

//This function takes the object data and inserts the given data into the attributes required to achieve the users desired outcome
function generateSVG(data) {
  console.log("generateSVG Started");
  // console.log(`Line 27: ${data.logo}`);
  // console.log(`Line 28: ${data.fontcolor}`);
  // console.log(`Line 29: ${data.shape}`);
  // console.log(`Line 30: ${data.shapecolor}`);
  return `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${defineShape(data)}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      data.fontcolor
    }">${data.logo}</text>

  </svg>`;
}

// This makes the code available to be called outside the folder
module.exports = generateSVG;
