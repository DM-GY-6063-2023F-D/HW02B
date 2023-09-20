let paintingWidth = 400;
let paintingHeight = 520;

let kazWhite = "#eae9e7";
let kazRed = "#962c29";
let kazRedLite = "#a83715";
let kazBlack = "#121212";
let kazGreen = "#2d8245";
let kazGreenDark = "#212e2e";
let kazYellow = "#edd300";
let kazYellowDark = "#efa917";
let kazBlue = "#19347d";
let kazBlueLite = "#1460a4";
let kazBrown = "#864634";


// yellow_dark: "#efa917",


function setup() {
  createCanvas(paintingWidth + 2 * 20, paintingHeight * 3 + 4 * 20);
}

function draw() {
  background(255);

  // painting 1
  translate(20, 20);

  stroke(0);
  fill(kazWhite);
  rect(0, 0, paintingWidth, paintingHeight);
  noStroke();

  fill(kazGreen);
  quad(
    11.5 / 20 * paintingWidth, 4.2 / 20 * paintingHeight,
    paintingWidth - 4 / 20 * paintingWidth, 7 / 20 * paintingHeight,
    paintingWidth - 6 / 20 * paintingWidth, 9 / 20 * paintingHeight,
    10 / 20 * paintingWidth, 6 / 20 * paintingHeight
  );

  fill(kazBlack);
  quad(
    2/10 * paintingWidth, 2 / 20 * paintingHeight,
    paintingWidth - 2 / 20 * paintingWidth, 11 / 20 * paintingHeight,
    paintingWidth - 4 / 20 * paintingWidth, 13 / 20 * paintingHeight,
    1 / 20 * paintingWidth, 6 / 20 * paintingHeight
  );

  fill(kazYellow);
  quad(
    5 / 20 * paintingWidth, 7.9 / 20 * paintingHeight,
    paintingWidth - 3 / 20 * paintingWidth, 13.5 / 20 * paintingHeight,
    paintingWidth - 3.2 / 20 * paintingWidth, 13.8 / 20 * paintingHeight,
    4.4 / 20 * paintingWidth, 8.6 / 20 * paintingHeight
  );

  fill(kazBlueLite);
  quad(
    6 / 20 * paintingWidth, 9.2 / 20 * paintingHeight,
    paintingWidth - 4 / 20 * paintingWidth, 13.5 / 20 * paintingHeight,
    paintingWidth - 4.2 / 20 * paintingWidth, 13.7 / 20 * paintingHeight,
    5.8 / 20 * paintingWidth, 9.4 / 20 * paintingHeight
  );

  fill(kazBlue);
  quad(
    9 / 20 * paintingWidth, 10.7 / 20 * paintingHeight,
    paintingWidth - 6 / 20 * paintingWidth, 12.9 / 20 * paintingHeight,
    paintingWidth - 7 / 20 * paintingWidth, 14.2 / 20 * paintingHeight,
    8 / 20 * paintingWidth, 12.1 / 20 * paintingHeight
  );

  // painting 2
  translate(0, paintingHeight + 20);

  stroke(0);
  fill(kazWhite);
  rect(0, 0, paintingWidth, paintingHeight);
  noStroke();

  fill(kazGreenDark);
  quad(
    0.7 / 20 * paintingWidth, 3.5 / 20 * paintingHeight,
    4.3 / 20 * paintingWidth, 1.5 / 20 * paintingHeight,
    5.2 / 20 * paintingWidth, 2.3 / 20 * paintingHeight,
    1.4 / 20 * paintingWidth, 4.4 / 20 * paintingHeight
  );

  fill(kazBlueLite);
  quad(
    3 / 20 * paintingWidth, 3.5 / 20 * paintingHeight,
    6.5 / 20 * paintingWidth, 1.6 / 20 * paintingHeight,
    11 / 20 * paintingWidth, 5 / 20 * paintingHeight,
    5 / 20 * paintingWidth, 8.1 / 20 * paintingHeight
  );

  fill(kazGreenDark);
  rect(5 / 20 * paintingWidth, 12 / 20 * paintingHeight, 9 / 20 * paintingWidth, 9 / 20 * paintingWidth);

  fill(kazYellowDark);
  rect(14.5 / 20 * paintingWidth, 6.5 / 20 * paintingHeight, 4 / 20 * paintingWidth, 5 / 20 * paintingHeight);

  fill(kazBrown);
  rect(13 / 20 * paintingWidth, 4.5 / 20 * paintingHeight, 2 / 20 * paintingHeight, 2 / 20 * paintingHeight);

  fill(kazBrown);
  ellipse(12 / 20 * paintingWidth, 8 / 20 * paintingHeight, 2.3 / 20 * paintingHeight, 2.3 / 20 * paintingHeight);

  fill(kazWhite);
  ellipse(12 / 20 * paintingWidth, 8 / 20 * paintingHeight, 1.5 / 20 * paintingHeight, 1.5 / 20 * paintingHeight);

  // painting 3
  translate(0, paintingHeight + 20);

  stroke(0);
  fill(kazWhite);
  rect(0, 0, paintingWidth, paintingHeight);
  noStroke();

  fill(kazYellowDark);
  rect(10 / 20 * paintingWidth, 12 / 20 * paintingHeight, 6 / 20 * paintingWidth, 6 / 20 * paintingWidth);

  rotate(-PI / 5);

  fill(kazYellowDark);
  rect(0, 7 / 20 * paintingHeight, 3 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);

  fill(kazGreenDark);
  rect(-3.5 / 20 * paintingWidth, 9 / 20 * paintingHeight, 7 / 20 * paintingWidth, 0.7 / 20 * paintingHeight);

  fill(kazBlack);
  rect(-2 / 20 * paintingWidth, 10 / 20 * paintingHeight, 3 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);

  fill(kazRedLite);
  rect(-3.5 / 20 * paintingWidth, 12 / 20 * paintingHeight, 7 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);

  fill(kazBlack);
  rect(1 / 20 * paintingWidth, 13.5 / 20 * paintingHeight, 4 / 20 * paintingWidth, 1.5 / 20 * paintingHeight);
}
