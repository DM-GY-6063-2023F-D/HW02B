let paintingWidth = 400;
let paintingHeight = 520;

let kazWhite = "#eae9e7";
let kazBlack = "#121212";
let kazGreen = "#2d8245";
let kazYellow = "#edd300";
let kazBlue = "#19347d";
let kazBlueLite = "#1460a4";

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
}
