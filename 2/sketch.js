let paintingWidth = 400;
let paintingHeight = 520;

let kazWhite = "#eae9e7";
let kazGreen = "#212e2e";
let kazYellow = "#efa917";
let kazBlue = "#1460a4";
let kazBrown = "#864634";

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

  fill(kazGreen);
  quad(
    0.7 / 20 * paintingWidth, 3.5 / 20 * paintingHeight,
    4.3 / 20 * paintingWidth, 1.5 / 20 * paintingHeight,
    5.2 / 20 * paintingWidth, 2.3 / 20 * paintingHeight,
    1.4 / 20 * paintingWidth, 4.4 / 20 * paintingHeight
  );

  fill(kazBlue);
  quad(
    3 / 20 * paintingWidth, 3.5 / 20 * paintingHeight,
    6.5 / 20 * paintingWidth, 1.6 / 20 * paintingHeight,
    11 / 20 * paintingWidth, 5 / 20 * paintingHeight,
    5 / 20 * paintingWidth, 8.1 / 20 * paintingHeight
  );

  fill(kazGreen);
  rect(5 / 20 * paintingWidth, 12 / 20 * paintingHeight, 9 / 20 * paintingWidth, 9 / 20 * paintingWidth);

  fill(kazYellow);
  rect(14.5 / 20 * paintingWidth, 6.5 / 20 * paintingHeight, 4 / 20 * paintingWidth, 5 / 20 * paintingHeight);

  fill(kazBrown);
  rect(13 / 20 * paintingWidth, 4.5 / 20 * paintingHeight, 2 / 20 * paintingHeight, 2 / 20 * paintingHeight);

  fill(kazBrown);
  ellipse(12 / 20 * paintingWidth, 8 / 20 * paintingHeight, 2.3 / 20 * paintingHeight, 2.3 / 20 * paintingHeight);

  fill(kazWhite);
  ellipse(12 / 20 * paintingWidth, 8 / 20 * paintingHeight, 1.5 / 20 * paintingHeight, 1.5 / 20 * paintingHeight);
}
