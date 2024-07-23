// canvas
// let width = document.querySelector("#canvas-container").width;
// let height = document.querySelector("#canvas-container").height;

let width = 800;
let height = 600;

// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;

//polar moment of inertia

let J;

// graphs
let position_graph1;
let position_graph2;
let magFac;

let magFac1;
let magFac2;
//let force_graph;
//let magFac;
//let phaseAng;

// inputs
//let slider_force;
//let slider_ang_freq;
// let k1;
// let k2;
// let m1;
// let m2;
// let w;
// let F0;

// factor
let factor = 1;

// Images
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let spr;

// pages
let page1 = true;
let page2 = false;
let page3 = false;

let page4 = false;

let graphStep = 0;

// animation
let animation = true;
let touch = false;

// Buttons
let clear;

function preload() {
  //   play = loadImage("images/blueplaydull.png");
  //   pause = loadImage("images/bluepausedull.png");
  //   graph = loadImage("images/graphbutton.png");
  //   back = loadImage("images/bluebkdulls.png");
  //   bg = loadImage("images/frame_copper_ver02.png");
  spr = loadImage("Images/spring.png");
}

function setup() {
  //   textFont("Comic Sans MS");
  //   console.log(document.querySelector("#canvas-container").offsetWidth);
  //   let canvas = createCanvas(
  //     document.querySelector("#canvas-container").offsetWidth,
  //     document.querySelector("#canvas-container").offsetHeight
  //   );
  var sketchCanvas = createCanvas(600, 450);
  sketchCanvas.parent("canvas-container");
    
  spring1 = new System(450, 365, 90, 25);

  position_graph1 = new Graph(50, 295, 100, 220, "x\u2081", "t");

  position_graph2 = new Graph(50, 210, 100, 220, "x\u2082", "t");

  magFac1 = new DynamicGraph(
    70,
    430,
    320,
    300,
    "X/Xst",
    "ω/ωn",
    0,
    7,
    0,
    10,
    System.mag_func1,
    [255, 0, 0]
  );
  magFac2 = new DynamicGraph(
    70,
    430,
    320,
    300,
    "X/Xst",
    "ω/ωn",
    0,
    7,
    0,
    10,
    System.mag_func2,
    [255, 23, 253] 
  );

  //magFac = new DynamicGraph(125, 325, 230, 290, "Magnification Factor", "n", 0, 2.5, 0, 7.5, System.mag_func);
  //phaseAng = new DynamicGraph(125, 495, 150, 290, "Phase Angle", "n", 0, 2.5, 0, 180, System.phase_func);

  //   F0 = new NumberInput(620, 140, "F0(N)", 500, 1000, 750, 50, 1, true);
  //   w = new NumberInput(620, 190, "ω(rad/sec)", 0, 16, 2.8, 0.01, 0.01, true);
  //   k1 = new NumberInput(620, 240, "K1 (N/m)", 2000, 5000, 2500, 50, 1, true);
  //   m1 = new NumberInput(620, 290, "M1(kg)", 200, 500, 250, 10, 1, true);
  //   k2 = new NumberInput(620, 340, "K2 (N/m)", 200, 1000, 500, 50, 1, true);
  //   m2 = new NumberInput(620, 380, "M2(kg)", 10, 100, 50, 1, 0.1, true);
  // x1 = new NumberInput(620, 140, "Xo1(m)",-30, 30,5 ,0.5,1, true); //(x, y, label, min, max, iniVal, change,fine_change, ifSlider)
  // x2= new NumberInput(620, 190, "Xo2(m)", -30, 30, -5, 0.5,1, true);
  // k1 = new NumberInput(620, 240, "k1 (N/m)",5, 20, 5, 2,1, true);
  // m1 = new NumberInput(620, 290, "m1(kg)", 10, 50, 10, 1,1, true);
  // k2 = new NumberInput(620, 340, "k2 (N/m)", 5, 20 ,5, 2,1, true);
  // m2 = new NumberInput(620, 380, "m2(kg)", 10, 50, 10, 1,1, true);

  varinit();
  x1 = $("#fSpinner").spinner("value");
  x2 = $("#omegaSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");

  // button1 = new Button(645, 430, pause)
  // button2 = new Button(706, 430, graph)
  // button3 = new Button(645,460,back)
  // button4 = new Button(705, 460, graph)
  // button5 = new Button(645,470,back)
  // button6 = new Button(706,470 , graph) ;
  // button7 = new Button(706,500  , back) ;
  //   button1 = new Button(645, 430, pause);
  //   button2 = new Button(706, 430, graph);
  //   button3 = new Button(645, 460, back);
  //   button4 = new Button(705, 460, graph);
  //   button5 = new Button(645, 470, back);
}

function draw() {
  background(255);
  if (page1) {
    runPage1();
  }

  if (page2) {
    runPage2();
  }

  if (page3) {
    runPage3();
  }
  if (page4) {
    // console.log("i am  page")
    runPage4();
  }
}

// function mousePressed() {
//   console.log(mouseX, mouseY)
//   handleEvents();
// }


function simstate() {
  var imgfilename = document.getElementById("playpausebutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );
  var nextButton = document.getElementById("graphbutton");
  var forwardButton = document.getElementById("screenchangesforward");
  var previuousButton =document.getElementById("screenchangesbackward");


  if (animation) {
    noLoop();
    animation = false;
    document.getElementById("playpausebutton").src = "Images/blueplaydull.svg";
    document.querySelector(".playPause").textContent = "Play";
    nextButton.onclick = null; // Disable the next button
    // nextButton.style.cursor = "not-allowed"; // Update the cursor to indicate it's not clickable
    nextButton.classList.add('disabled'); // Add any disabled styles if needed
    forwardButton.onclick = null;
    // forwardButton.style.cursor = "not-allowed"; // Update the cursor to indicate it's not clickable
    forwardButton.classList.add('disabled'); // Add any disabled styles if needed
    previuousButton.onclick = null;
    // previuousButton.style.cursor = "not-allowed"; // Update the cursor to indicate it's not clickable
    previuousButton.classList.add('disabled'); // Add any disabled styles if needed
    
    
  } else {
    loop();
    animation = true;
    document.getElementById("playpausebutton").src = "Images/bluepausedull.svg";
    document.querySelector(".playPause").textContent = "Pause";
  

    nextButton.onclick = graphPlot; // Enable the next button
    nextButton.style.cursor = "pointer"; // Update the cursor to indicate it's clickable
    nextButton.classList.remove('disabled'); // Remove any disabled styles if present
    forwardButton.onclick = screenchangeMag;
    forwardButton.style.cursor = "pointer"; // Update the cursor to indicate it's clickable
    forwardButton.classList.remove('disabled'); // Remove any disabled styles if present
    previuousButton.onclick = screenChangePrevious;
    previuousButton.style.cursor = "pointer"; // Update the cursor to indicate it's clickable
    previuousButton.classList.remove('disabled'); // Remove any disabled styles if present
    

  }
}

function graphPlot() {
  graphStep = 1;
  document.querySelector(".graph-one").classList.remove("display-hide");
  document.querySelector(".graph-two").classList.remove("display-hide");

  document.querySelector(".graph-div span").textContent = "Prev/Next";
  document.querySelector(".graph-button").style.display = "none";
  var newBtn =document.getElementById("playpausebutton");
  
  newBtn.onclick=simstate;
  // newBtn.style.cursor="not-allowed";
  newBtn.classList.add("disabled");

  // document.querySelector("#titleincanvas").style.display = "none";

  screenchangePhase();
}

function screenchangePhase() {
  phaseAngleGraph();
  // page1 = false;
  // page2 = false;
  // page3 = false;
  // page4 = true;
  // runPage4();
}

let clickCount = 0;

function screenchangeMag() {
  clickCount += 1;

  if (clickCount === 1) {
    // console.log("clickCount:", clickCount);
    magnitudeGraph();
    // Ensure mutually exclusive pages
    page1 = false;
    page2 = false;
    page3 = true;
    page4 = false;
    runPage3();
    graphStep = 1;
    document.querySelector(".graph-one").classList.remove("display-hide");
    document.querySelector(".graph-two").classList.remove("display-hide");

    document.querySelector(".graph-div span").textContent = "Prev/Next";
  } else if (clickCount === 2) {
    // console.log("clickCount:", clickCount);
    // When clickCount reaches 2
    page1 = false;
    page2 = false;
    page3 = false;
    page4 = true;

    hidePageContent();

    runPage4();
    // console.log("Changing to page 4");
    screenchangeMag1(); // Call screenchangeMag1() to handle page 4
    clickCount = 0; // Reset clickCount
  }
}

function hidePageContent() {
  // console.log("Hiding content of all pages");

  // Hide all elements initially
  document.querySelector(".graph-one").classList.add("display-hide");
  document.querySelector(".graph-two").classList.add("display-hide");
  document.querySelector(".graph-three").classList.add("display-hide");

  // Additional clearing logic if necessary
}

function screenchangeMag1() {
  // console.log("page4");
  page1 = false;
  page2 = false;
  page3 = false;
  page4 = true;
  runPage4();
  graphStep = 2;
  // console.log("screenmag1");

  document.querySelector(".graph-one").classList.remove("display-hide");
  document.querySelector(".graph-two").classList.add("display-hide");
  document.querySelector(".graph-three").classList.add("display-hide");

  document.querySelector(".graph-div span").textContent = "Prev";
}

function screenChangePrevious() {
  graphStep -= 1;
  if (graphStep > 0) {
    phaseAngleGraph();
    // console.log("prev1");
    document.querySelector(".graph-two").classList.remove("display-hide");
    page1 = false;
    page2 = false;
    page3 = true;
    page4 = false;

    document.querySelector(".graph-div span").textContent = "Prev/Next";
  } else if (graphStep == 0) {
    // console.log("prev2")
    document.querySelector(".graph-two").classList.remove("display-hide");
    page1 = false;
    page2 = true;
    page3 = false;
    page4 = false;
    

    document.querySelector(".graph-div span").textContent = "Prev/Next";
  } else {
    // console.log("prev-last");
    document.querySelector(".graph-div span").textContent = "";
    document.querySelector(".graph-button").style.display = "flex";
    document.querySelector(".graph-one").classList.add("display-hide");
    document.querySelector(".graph-two").classList.add("display-hide");
    page1 = true;
    page2 = false;
    page3 = false;
    page4 = false;

    document.querySelector(".graph-zero").classList.remove("display-hide");
    document.querySelector(".graph-button span").textContent = "Next";
    //  document.querySelector(".graph-button").classList.remove("display-hide");
    document.querySelector(".graph-div").classList.add("display-hide");

    // if (page1 === true) {
    //   document.getElementById("playpausebutton").classList.remove("disabled");
    //   document.getElementById("playpausebutton").style.cursor = "pointer";
    //   document.getElementById("playpausebutton").onclick = simstate;
    // }
    if(page1 === true){
       document.getElementById("playpausebutton").classList.remove("disabled");
      // document.getElementById("playpause").onclick=simstate;
      // document.getElementById("playpause").style.cursor="pointer";
     
    }
    // document.querySelector("#titleincanvas").style.display = "block";
  }
}

function phaseAngleGraph() {
  // resetGraphs();
  page1 = false;
  page2 = true;
  page3 = false;
  page4 = false;
  magFac1.initialise();
  // phaseAng.initialise();
}

function magnitudeGraph() {
  // resetGraphs();
  page1 = false;
  page2 = false;
  page3 = true;
  page4 = false;
  // console.log("SECOND")
  magFac2.initialise();
  // phaseAng.initialise();
}

// // function mousePressed() {
// //   console.log(mouseX, mouseY);
// //   handleEvents();
// // }
