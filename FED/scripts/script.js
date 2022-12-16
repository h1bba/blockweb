// JavaScript Document
console.log("hi");


// huiswerk toegepast voor de menu JS oefening 2 (https://codepen.io/shooft/pen/bGvxPmP)
var deButton = document.querySelector("nav a");
deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  var deNav = document.querySelector("nav ul")
  deNav.classList.toggle("toonMenu");
}

// mario image change
var marioImg = document.getElementById("mario");
var marioToggle = document.getElementById("marioToggle");
marioToggle.addEventListener("click", MarioChange);

function MarioChange() {
  marioImg.classList.toggle("opened");
  document.getElementById('mario').src = 'images/characters/marioopen.png';
}

// luigi image change
var luigiImg = document.getElementById("luigi");
var luigiToggle = document.getElementById("luigiToggle");
luigiToggle.addEventListener("click", LuigiChange);

function LuigiChange() {
  luigiImg.classList.toggle("opened");
  document.getElementById('luigi').src = 'images/characters/luigiopen.png';
}



// bowser image change
var bowserImg = document.getElementById("bowser");
var bowserToggle = document.getElementById("bowserToggle");
bowserToggle.addEventListener("click", BowserChange);

function BowserChange() {
  bowserImg.classList.toggle("opened");
  document.getElementById('bowser').src = 'images/characters/bowseropen.png';
}

// princes image change
var princesImg = document.getElementById("princes");
var princesToggle = document.getElementById("princesToggle");
princesToggle.addEventListener("click", PrincesChange);

function PrincesChange() {
  princesImg.classList.toggle("opened");
  document.getElementById('princes').src = 'images/characters/princesopen.png';
}

// Yoshi image change
var yoshiImg = document.getElementById("yoshi");
var yoshiToggle = document.getElementById("yoshiToggle");
yoshiToggle.addEventListener("click", YoshiChange);

function YoshiChange() {
  yoshiImg.classList.toggle("opened");
  document.getElementById('yoshi').src = 'images/characters/yoshiopen.png';
}

// Toad image change
var toadImg = document.getElementById("toad");
var toadToggle = document.getElementById("toadToggle");
toadToggle.addEventListener("click", ToadChange);

function ToadChange() {
  toadImg.classList.toggle("opened");
  document.getElementById('toad').src = 'images/characters/toadopen.png';
}

// Daisy image change
var daisyImg = document.getElementById("daisy");
var daisyToggle = document.getElementById("daisyToggle");
daisyToggle.addEventListener("click", DaisyChange);

function DaisyChange() {
  daisyImg.classList.toggle("opened");
  document.getElementById('daisy').src = 'images/characters/daisyopen.png';
}

// Wario image change
var warioImg = document.getElementById("wario");
var warioToggle = document.getElementById("warioToggle");
warioToggle.addEventListener("click", WarioChange);

function WarioChange() {
  warioImg.classList.toggle("opened");
  document.getElementById('wario').src = 'images/characters/warioopen.png';
}

// Waluigi image change
var waluigiImg = document.getElementById("waluigi");
var waluigiToggle = document.getElementById("waluigiToggle");
waluigiToggle.addEventListener("click", WaluigiChange);

function WaluigiChange() {
  waluigiImg.classList.toggle("opened");
  document.getElementById('waluigi').src = 'images/characters/waluigiopen.png';
}

