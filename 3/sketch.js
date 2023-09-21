let paintingWidth = 400;
let paintingHeight = 520;

let kazWhite = "#eae9e7";
let kazRed = "#a83715";
let kazBlack = "#121212";
let kazGreen = "#212e2e";
let kazYellow = "#efa917";

function setup() {
  createCanvas(paintingWidth + 2 * 20, paintingHeight + 2 * 20);
}

function draw() {
  background(255);

  translate(20, 20);
  stroke(0);
  fill(kazWhite);
  rect(0, 0, paintingWidth, paintingHeight);
  noStroke();

  fill(kazYellow);
  rect(10 / 20 * paintingWidth, 12 / 20 * paintingHeight, 6 / 20 * paintingWidth, 6 / 20 * paintingWidth);

  rotate(-PI / 5);

  fill(kazYellow);
  rect(0, 7 / 20 * paintingHeight, 3 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);

  fill(kazGreen);
  rect(-3.5 / 20 * paintingWidth, 9 / 20 * paintingHeight, 7 / 20 * paintingWidth, 0.7 / 20 * paintingHeight);

  fill(kazBlack);
  rect(-2 / 20 * paintingWidth, 10 / 20 * paintingHeight, 3 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);

  fill(kazRed);
  rect(-3.5 / 20 * paintingWidth, 12 / 20 * paintingHeight, 7 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);

  fill(kazBlack);
  rect(1 / 20 * paintingWidth, 13.5 / 20 * paintingHeight, 4 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);
}
