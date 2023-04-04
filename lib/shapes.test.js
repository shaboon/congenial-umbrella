const generateSVG = require("./shape.js");

describe("generateSVG", () => {
  describe("generateSVG", () => {
    it("Should return a SVG circle with blue fill and white font of 'ABC'", () => {
      const test = {
        logo: "ABC",
        fontcolor: "white",
        shape: "circle",
        shapecolor: "blue",
      };
      expect(generateSVG(test)).toEqual(
        `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
      <circle cx="150" cy="100" r="90"  fill="blue"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>

  </svg>`
      );
    });
  });
});

// describe("Logo", () => {
//   describe("generateSVG", () => {
//     const test = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
//     const shape = new Logo();
//     expect(shape.defineShape(test)).toEqual(test);
//   });
// });
