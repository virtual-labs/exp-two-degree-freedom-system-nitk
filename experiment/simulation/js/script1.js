let F0, w, k1, m1, k2, m2;
// let width, height;
function startsim() {
  console.log(1);

  // simTimeId = setInterval("time=time+0.1; varupdate(); ", "100");
}
let simTimeId;
// switches state of simulation between 0:Playing & 1:Paused
function simstate() {
  let imgfilename = document.getElementById("playpausebutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );

  if (imgfilename === "bluepausedull") {
    document.getElementById("playpausebutton").src =
      "./images/blueplaydull.svg";
    clearInterval(simTimeId);
    simstatus = 0;
    pauseTime = setInterval("varupdate();", "100");
    document.querySelector(".playPause").textContent = "Play";
  }

  if (imgfilename === "blueplaydull") {
    document.getElementById("playpausebutton").src =
      "./images/bluepausedull.svg";
    simstatus = 1;
    clearInterval(pauseTime);
    time = 0;
    simTimeId = setInterval("varupdate();time+=.01;", 10);
    document.querySelector(".playPause").textContent = "Pause";
  }
}

// switches state of rotation between 1:CounterClockWise & -1:Clockwise
// function rotstate() {
//   var imgfilename = document.getElementById("rotationbutton").src;
//   imgfilename = imgfilename.substring(
//     imgfilename.lastIndexOf("/") + 1,
//     imgfilename.lastIndexOf(".")
//   );
//   if (imgfilename == "bluecwdull") {
//     document.getElementById("rotationbutton").src = "images/blueccwdull.svg";
//     rotstatus = -1;
//   }
//   if (imgfilename == "blueccwdull") {
//     document.getElementById("rotationbutton").src = "images/bluecwdull.svg";
//     rotstatus = 1;
//   }
// }

function varinit() {
  varchange();

  // Add event listeners to the spinner inputs for validation
  $("#fSpinner").on("input", function () {
    validatePositiveInput("#fSpinner");
  });

  $("#omegaSpinner").on("input", function () {
    validatePositiveInput("#omegaSpinner");
  });

  $("#k1Spinner").on("input", function () {
    validatePositiveInput("#k1Spinner");
  });

  $("#m1Spinner").on("input", function () {
    validatePositiveInput("#m1Spinner");
  });

  $("#k2Spinner").on("input", function () {
    validatePositiveInput("#k2Spinner");
  });

  $("#m2Spinner").on("input", function () {
    validatePositiveInput("#m2Spinner");
  });

  // Set initial values for sliders and spinners
  $("#fSlider").slider("value", 5);
  $("#fSpinner").spinner("value", 5);

  $("#omegaSlider").slider("value", -5);
  $("#omegaSpinner").spinner("value", -5);

  $("#k1Slider").slider("value", 5);
  $("#k1Spinner").spinner("value", 5);

  $("#m1Slider").slider("value", 10);
  $("#m1Spinner").spinner("value", 10);

  $("#k2Slider").slider("value", 5);
  $("#k2Spinner").spinner("value", 5);

  $("#m2Slider").slider("value", 10);
  $("#m2Spinner").spinner("value", 10);

  varupdate();
}

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange() {
  //Link AB
  // slider initialisation : jQuery widget
  $("#fSlider").slider({ max: 30, min: -30, step: 0.5 });

  // number initialisation : jQuery widget
  $("#fSpinner").spinner({ max: 30, min: -30, step: 0.5 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#fSlider").on("slide", function (c, ui) {
    $("#fSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("spin", function (c, ui) {
    $("#fSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("change", function () {
    varchange();
  });

  $("#omegaSlider").slider({ max: 30, min: -30, step: 0.5 });

  // number initialisation : jQuery widget
  $("#omegaSpinner").spinner({ max: 30, min: -30, step: 0.5 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#omegaSlider").on("slide", function (c, ui) {
    $("#omegaSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("spin", function (c, ui) {
    $("#omegaSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("change", function () {
    varchange();
  });

  $("#k1Slider").slider({ max: 19, min: 5, step: 2 });
  // number initialisation : jQuery widget
  $("#k1Spinner").spinner({ max: 19, min: 5, step: 2 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k1Slider").on("slide", function (c, ui) {
    $("#k1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("spin", function (c, ui) {
    $("#k1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("change", function () {
    varchange();
  });

  $("#m1Slider").slider({ max: 50, min: 10, step: 1 });
  // number initialisation : jQuery widget
  $("#m1Spinner").spinner({ max: 50, min: 10, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#m1Slider").on("slide", function (c, ui) {
    $("#m1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("spin", function (c, ui) {
    $("#m1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("change", function () {
    varchange();
  });

  $("#k2Slider").slider({ max: 19, min: 5, step: 2 });
  // number initialisation : jQuery widget
  $("#k2Spinner").spinner({ max: 19, min: 5, step: 2 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k2Slider").on("slide", function (c, ui) {
    $("#k2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("spin", function (c, ui) {
    $("#k2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("change", function () {
    varchange();
  });

  $("#m2Slider").slider({ max: 50, min: 10, step: 1 });
  // number initialisation : jQuery widget
  $("#m2Spinner").spinner({ max: 50, min: 10, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#m2Slider").on("slide", function (c, ui) {
    $("#m2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("spin", function (c, ui) {
    $("#m2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("change", function () {
    varchange();
  });

  varupdate();
}

function validatePositiveInput(inputId) {
  const value = $(inputId).spinner("value");
  if (value <= 0 || isNaN(value)) {
    // If value is zero, negative, or NaN, set the value to a default value
    $(inputId).spinner("value", 1); // You can change 1 to any default value you prefer
  }
}

function varupdate() {
  $("#fSlider").slider("value", $("#fSpinner").spinner("value"));
  $("#omegaSlider").slider("value", $("#omegaSpinner").spinner("value"));
  $("#k1Slider").slider("value", $("#k1Spinner").spinner("value"));
  $("#m1Slider").slider("value", $("#m1Spinner").spinner("value"));
  $("#k2Slider").slider("value", $("#k2Spinner").spinner("value"));
  $("#m2Slider").slider("value", $("#m2Spinner").spinner("value"));
  F0 = $("#fSpinner").spinner("value");
  ω = $("#omegaSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");
}

function movetoTop() {

  const firstDiv = document.querySelector("#simulation");
  if (firstDiv) {
      firstDiv.scrollIntoView({ behavior: "smooth" });
  }
}