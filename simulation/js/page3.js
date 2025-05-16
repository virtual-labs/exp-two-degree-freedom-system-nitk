function runPage3() {
      document.querySelector("#canvas-container").style.display = "block";
  document.querySelector("#observations").style.display = "none";
  if (!page3 || page4) {
    return;
  }

  // console.log("Running Page 3");
  background(255);
  // image(bg, 0, 0);

  stroke(0);
  fill(0);

  push();

  // textSize(36);
  // textFont("Times");
  // text("TWO DEGREE OF FREEDOM SYSTEM", 100, 40);

  // textSize(16);
  // text("CONTROLS", 655, 417);
  // text("VARIABLES", 655, 107);
  pop();
  textSize(18);
  text("X\u2081", 20, 200);
  text("X\u2082", 20, 300);
  strokeWeight(0.5);
  //left side, left top, length, right bottom
  line(45, 200, 590, 200);
  line(45, 300, 590, 300);

  // spring1.initialise(x1,x2,k1,m1,k2,m2);
  // spring1.update(t, factor);
  // spring1.show(0, 1, 0);

  // position_graph1.update(spring1.y1);
  // position_graph1.draw(255, 0, 0);

  // position_graph2.update(spring1.y2);
  // position_graph2.draw(255, 0, 0);
  stroke(0);
  fill(0);
  document.getElementById("wd").textContent = spring1.w2.toFixed(4);
  document.getElementById("wn").textContent = spring1.w1.toFixed(4);
  // document.getElementById("mode1").textContent=spring1.ar1.toFixed(4);
  // document.getElementById("ww1").textContent=(spring1.w / spring1.w1).toFixed(4)
  // document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
  // document.getElementById("x1").textContent= abs(spring1.x2).toFixed(4);
  // document.getElementById("x2").textContent= abs(spring1.x1).toFixed(4);
  // document.getElementById("xst").textContent= (spring1.F0 / spring1.k1).toFixed(4),
  // document.getElementById("x1st").textContent= abs(spring1.x2 / (spring1.F0 / spring1.k1)).toFixed(4),
  // document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

  x1 = $("#fSpinner").spinner("value");
  x2 = $("#omegaSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");
  push();

  // magFac2.initialise();
  // magFac2.draw();

  // t = t + dt;
  console.log(spring1.x1);
  console.log(spring1.x2);


  if (spring1.x1 == spring1.x2) {

    textFont("'Nunito', sans-serif");
    textSize(14);
    text("MODE SHAPE", 250, 30); // Adjusted from (250, 110)
    textFont("'Nunito', sans-serif");
    textSize(13);
    strokeWeight(0.3);
    text(
      "When the initial excitation is given same to both masses in same direction, it",
      30,
      80
    ); // Adjusted from (30, 150)
    text("gives only the first mode shape of the system", 150, 95);
    strokeWeight(2);
    stroke(0);
    line(300, 100, 300, 400); // Moved up by 100 units
    stroke(0, 0, 255);
    line(300, 200, 300 + (spring1.ar2 * spring1.x2 * 2), 200); // Moved up by 100 units
    line(300, 300, 300 + (spring1.x2 * 2), 300); // Moved up by 100 units
    stroke(255, 0, 0);
    line(300, 100, 300 + (spring1.ar2 * spring1.x2 * 2), 200); // Moved up by 100 units
    line(300 + (spring1.ar2 * spring1.x2 * 2), 200, 300 + (spring1.x2 * 2), 300); // Moved up by 100 units
    line(300 + (spring1.x2 * 2), 300, 300, 400); // Moved up by 100 units
  } else if (spring1.x1 == (-spring1.x2)) {
    
    textFont("'Nunito', sans-serif;");
    textSize(14);
    text("MODE SHAPE", 250, 50);
    textFont("'Nunito', sans-serif");
  textSize(13);

  strokeWeight(0.3);
    text(
      "When the initial excitation is given same to both masses in different direction, it",
      30,
      80
    );
    text("gives only the second mode shape of the system", 150, 95);
    strokeWeight(2);
    stroke(0);
    // Moving the image up by 100 units
    line(300, 100, 300, 400); // Adjusted from (300, 200, 300, 500)
    stroke(0, 0, 255);
    line(300, 200, 300 + spring1.ar2 * spring1.x2 * 2, 200); // Adjusted from (300, 300, 300 + (spring1.ar2 * spring1.x2 * 2), 300)
    line(300, 300, 300 + spring1.x2 * 2, 300); // Adjusted from (300, 400, 300 + (spring1.x2 * 2), 400)
    stroke(255, 0, 0);
    line(300, 100, 300 + spring1.ar2 * spring1.x2 * 2, 200); // Adjusted from (300, 200, 300 + (spring1.ar2 * spring1.x2 * 2), 300)
    line(300 + spring1.ar2 * spring1.x2 * 2, 200, 300 + spring1.x2 * 2, 300); // Adjusted from (300 + (spring1.ar2 * spring1.x2 * 2), 300, 300 + (spring1.x2 * 2), 400)
    line(300 + spring1.x2 * 2, 300, 300, 400); // Adjusted from (300 + (spring1.x2 * 2), 400, 300, 500)
  } else {
    textFont("'Nunito', sans-serif;");  
    textSize(16);
    text("MODE SHAPES", 215, 55);
    textSize(14);
    text("FIRST MODE SHAPE", 90, 90);
    text("SECOND MODE SHAPE", 370, 90);

    // First set of lines moved up by 100 units
    strokeWeight(3);
    stroke(0);
    line(120, 100, 120, 400); // Adjusted from (120, 200, 120, 500)
    stroke(0, 0, 255);
    line(120, 200, 120 + spring1.x1d * 2, 200); // Adjusted from (120, 300, 120 + (spring1.x1d * 2), 300)
    line(120, 300, 120 + spring1.x2d * 2, 300); // Adjusted from (120, 400, 120 + (spring1.x2d * 2), 400)
    stroke(255, 0, 0);
    line(120, 100, 120 + spring1.x1d * 2, 200); // Adjusted from (120, 200, 120 + (spring1.x1d * 2), 300)
    line(120 + spring1.x1d * 2, 200, 120 + spring1.x2d * 2, 300); // Adjusted from (120 + (spring1.x1d * 2), 300, 120 + (spring1.x2d * 2), 400)
    line(120 + spring1.x2d * 2, 300, 120, 400); // Adjusted from (120 + (spring1.x2d * 2), 400, 120, 500)

    // Second set of lines moved up by 100 units
    strokeWeight(3);
    stroke(0);
    line(400, 100, 400, 400); // Adjusted from (400, 200, 400, 500)
    stroke(0, 0, 255);
    line(400, 200, 400 + spring1.x1dd * 2, 200); // Adjusted from (400, 300, 400 + (spring1.x1dd * 2), 300)
    line(400, 300, 400 + spring1.x2dd * 2, 300); // Adjusted from (400, 400, 400 + (spring1.x2dd * 2), 400)
    stroke(255, 0, 0);
    line(400, 100, 400 + spring1.x1dd * 2, 200); // Adjusted from (400, 200, 400 + (spring1.x1dd * 2), 300)
    line(400 + spring1.x1dd * 2, 200, 400 + spring1.x2dd * 2, 300); // Adjusted from (400 + (spring1.x1dd * 2), 300, 400 + (spring1.x2dd * 2), 400)
    line(400 + spring1.x2dd * 2, 300, 400, 400); // Adjusted from (400 + (spring1.x2dd * 2), 400, 400, 500)

    if(spring1.x1d.toFixed(4) <-60 || spring1.x2d.toFixed(4) < -60){
      textFont("nunito");
    textSize(11);
    stroke(0);
    strokeWeight(0.5);
    text("Warning:The system is reaching resonance, so the MODE SHAPE will get enlarged beyond slide.", 60, 440);

    }
    if(spring1.x1dd.toFixed(4) < -100 || spring1.x2dd.toFixed(4) < -100){
      textFont("nunito");
    textSize(11);
    stroke(0);
    strokeWeight(0.5);
    text("Warning:The system is reaching resonance, so the MODE SHAPE will get enlarged beyond slide.", 60, 440);

    }
  }


  strokeWeight(1);
  spring1.initialise(x1, x2, k1, m1, k2, m2);
  spring1.update(t, factor);
  // button5.draw()
  // button6.draw();
  // x1.draw();
  // x2.draw();
  // k1.draw();
  // m1.draw();
  // k2.draw();
  // m2.draw();
  t = t + dt;
  //clear.mousePressed(clearMe);
}
