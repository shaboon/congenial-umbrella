function defineShape(data) {
  const shape = data.shape;
  console.log(`Line 15: ${shape}`);
  console.log(shape);
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

function generateSVG(data) {
  console.log("generateSVG Started");
  console.log(`Line 42: ${data.logo}`);
  console.log(`Line 43: ${data.fontcolor}`);
  console.log(`Line 44: ${data.shape}`);
  console.log(`Line 45: ${data.shapecolor}`);
  return `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${defineShape(data)}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      data.fontcolor
    }">${data.logo}</text>

  </svg>`;
}

module.exports = generateSVG;
