function runPage4() {
      document.querySelector("#canvas-container").style.display = "block";
  document.querySelector("#observations").style.display = "none";
  if (!page4) {
    return;
  }
  // console.log("Running Page 4");
  // background(255);
  // image(bg, 0, 0);

  textFont("'Nunito', sans-serif");
  textSize(14.5);
  stroke("black");
  strokeWeight(0.5);
  text("Motor on a Foundation  as 2DOF System ", 130, 30);
  text("Free Vibration with rotating unbalance", 140, 50);

  textFont("'Nunito', sans-serif");
  textSize(14.5);
  stroke("black");
  text("CONTROLS", 655, 417);
  text("VARIABLES", 655, 107);
  pop();

  textFont("'Nunito', sans-serif");
  textSize(13.5);
  stroke("black");
  text("Frequency Response Curves", 50, 90);

  magFac1.initialise();
  stroke(128, 0, 128); // Purple color
  magFac1.draw();

  // Draw the second graph with red color
  magFac2.initialise();
  stroke(255, 0, 0); // Red color
  magFac2.draw();

  stroke("red");
  textSize(15);
  strokeWeight(3); 
  line(340, 185, 370, 185);

  stroke("black");
  strokeWeight(0.4); 
  text("Frequency response curve ", 380, 180 + 10);
  text(" with respect to  amplitude of", 380, 195 + 20);
  text(" X\u2081 and w\u2081", 380, 205 + 30);

  stroke("purple");
  textSize(15);
  strokeWeight(3);
  line(340, 274, 370, 274);

  stroke("black");
  strokeWeight(0.4); 
  text("Frequency response curve ", 380, 230 + 50);
  text(" with respect to  amplitude of ", 380, 240 + 60);
  text("X\u2082 and w\u2082", 380, 250 + 70);

  // x1 = $("#fSpinner").spinner("value");
  // x2 = $("#omegaSpinner").spinner("value");
  // k1 = $("#k1Spinner").spinner("value");
  // m1 = $("#m1Spinner").spinner("value");
  // k2 = $("#k2Spinner").spinner("value");
  // m2 = $("#m2Spinner").spinner("value");

  let add = 330;
  let dy = 250;
  text("ω\u2082", 55 + add, 100 + dy);
  
  text("ω\u2081", 55 + add, 120 + dy);
  
  stroke("red");
  strokeWeight(5);
  point(35 + add, 100 + dy);
  strokeWeight(1);
  
 
  stroke("blue");
  strokeWeight(5);
  point(35 + add, 120 + dy);
  strokeWeight(1);
  

  stroke("blue");
  strokeWeight(10);
  point(70 + spring1.w1 * 8, 430);

  stroke("red");
  strokeWeight(10);
  point(130 + spring1.w2 * 30, 430);

  strokeWeight(1);
  //    button7.draw()
  strokeWeight(1);
  spring1.initialise(x1, x2, k1, m1, k2, m2);
  spring1.update(t, factor);

  x1 = $("#fSpinner").spinner("value");
  x2 = $("#omegaSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");

  //    x1.draw();
  //    x2.draw();
  //    k1.draw();
  //    m1.draw();
  //    k2.draw();
  //    m2.draw();
  t = t + dt;
}
