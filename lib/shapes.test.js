const generateSVG = require("./shape.js");

// This checks the circle for functionality
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

// This test checks that the triangle class works
describe("generateSVG", () => {
  describe("generateSVG", () => {
    it("Should return a SVG triangle with blue fill and white font of 'ABC'", () => {
      const test = {
        logo: "ABC",
        fontcolor: "white",
        shape: "triangle",
        shapecolor: "blue",
      };
      expect(generateSVG(test)).toEqual(
        `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    
      <polygon points="60,10 270,110 60,190" style="fill:blue"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>

  </svg>`
      );
    });
  });
});

// This test checks that the square can be written
describe("generateSVG", () => {
  describe("generateSVG", () => {
    it("Should return a SVG square with blue fill and white font of 'ABC'", () => {
      const test = {
        logo: "ABC",
        fontcolor: "white",
        shape: "square",
        shapecolor: "blue",
      };
      expect(generateSVG(test)).toEqual(
        `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    
      <rect x="75" y="25" width="150" height="150" fill="blue"/>

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
