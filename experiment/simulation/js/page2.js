function runPage2() {
  if (!page2 || page3 || page4) {
    return;
  }
  background(255);

  stroke(0);
  fill(0);

  strokeWeight(0.5);
  push();

  // Set up the font
  textFont("'Nunito', sans-serif");
  textSize(17.5);
  stroke("black");
  text("Detailed Results", 240, 55);

  textSize(14.5);
  strokeWeight(0.7);

  // Define the color for the dynamic values
  let dynamicColor = color("#089b93");

  // First natural frequency
  let text1 = "The first natural frequency of the system (ω\u2081) : ";
  let value1 = spring1.w1.toFixed(4) + " rad/s";
  fill(0);
  text(text1, 30, 100);
  fill(dynamicColor);
  text(value1, 30 + textWidth(text1), 100);

  // Second natural frequency
  let text2 = "The second natural frequency of the system (ω\u2082) : ";
  let value2 = spring1.w2.toFixed(4) + " rad/s";
  fill(0);
  text(text2, 30, 150);
  fill(dynamicColor);
  text(value2, 30 + textWidth(text2), 150);

  // First mode shape ratio
  let text3 = "The first mode shape ratio [(X\u2081/X\u2082) at ω\u2081] : ";
  let value3 = spring1.ar1.toFixed(4);
  fill(0);
  text(text3, 30, 200);
  fill(dynamicColor);
  text(value3, 30 + textWidth(text3), 200);

  // Second mode shape ratio
  let text4 = "The second mode shape ratio [(X\u2081/X\u2082) at ω\u2082] : ";
  let value4 = spring1.ar2.toFixed(4);
  fill(0);
  text(text4, 30, 250);
  fill(dynamicColor);
  text(value4, 30 + textWidth(text4), 250);

  // Equation of motion conditions
  if (spring1.x1 == spring1.x2) {
    let text5 = "The Equation of motion of M\u2081 : ";
    let value5 = spring1.ar1.toFixed(4) * spring1.x2.toFixed(4) + " cos(" + spring1.w1.toFixed(4) + "t)";
    let text6 = "The Equation of motion of M\u2082 : ";
    let value6 = spring1.x2.toFixed(2) + " cos(" + spring1.w2.toFixed(4) + "t)";
    fill(0);
    text(text5, 30, 300);
    fill(dynamicColor);
    text(value5, 30 + textWidth(text5), 300);
    fill(0);
    text(text6, 30, 350);
    fill(dynamicColor);
    text(value6, 30 + textWidth(text6), 350);
  } else if (spring1.x1 == -spring1.x2) {
    let text7 = "The Equation of motion of M\u2081: ";
    let value7 = spring1.ar2.toFixed(4) * spring1.x2.toFixed(4) + " cos(" + spring1.w1.toFixed(4) + "t)";
    let text8 = "The Equation of motion of M\u2082: ";
    let value8 = spring1.x2.toFixed(2) + " cos(" + spring1.w2.toFixed(4) + "t)";
    fill(0);
    text(text7, 30, 300);
    fill(dynamicColor);
    text(value7, 30 + textWidth(text7), 300);
    fill(0);
    text(text8, 30, 350);
    fill(dynamicColor);
    text(value8, 30 + textWidth(text8), 350);
  } else {
    let text9 = "The Equation of motion of M\u2081: ";
    let value9 = spring1.x1d.toFixed(4) + " cos(" + spring1.w1.toFixed(4) + "t) + (" + spring1.x1dd.toFixed(4) + ") cos(" + spring1.w2.toFixed(4) + "t)";
    let text10 = "The Equation of motion of M\u2082: ";
    let value10 = spring1.x2d.toFixed(4) + " cos(" + spring1.w1.toFixed(4) + "t) + (" + spring1.x2dd.toFixed(4) + ") cos(" + spring1.w2.toFixed(4) + "t)";
    fill(0);
    text(text9, 30, 300);
    fill(dynamicColor);
    text(value9, 30 + textWidth(text9), 300);
    fill(0);
    text(text10, 30, 350);
    fill(dynamicColor);
    text(value10, 30 + textWidth(text10), 350);
  }

  // Update spring1
  x1 = $("#fSpinner").spinner("value");
  x2 = $("#omegaSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");

  strokeWeight(1);
  spring1.initialise(x1, x2, k1, m1, k2, m2);
  spring1.update(t, factor);
  t = t + dt;

  pop();
}
