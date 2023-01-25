// JavaScript Document
console.log("1337");


// huiswerk toegepast voor de menu JS oefening 2 (https://codepen.io/shooft/pen/bGvxPmP)
var deButton = document.querySelector("nav a");
if(deButton){
  deButton.addEventListener("click", toggleMenu);
}


function toggleMenu() {
  var deNav = document.querySelector("nav ul")
  deNav.classList.toggle("toonMenu");
}

var easterEgg = document.getElementById('easter');
if(easterEgg) {
  easterEgg.addEventListener("click", EasterEgg);
}

function EasterEgg() {
  var vuurbal = document.getElementById('vuurbal');
  vuurbal.classList.toggle("schietvuurbal");
}


// NEW METHOD // eerst kijken of de var bestaat, dit doen we om de error te voorkomen.
var marioImg = document.getElementById("mario");
var marioToggle = document.getElementById("marioToggle");
if(marioToggle) {
marioToggle.addEventListener("click", MarioChange);
}

// // Oude code, hierdoor kregen we de error
// var marioImg = document.getElementById("mario");
// var marioToggle = document.getElementById("marioToggle");
// marioToggle.addEventListener("click", MarioChange);


function MarioChange() {
  marioImg.classList.toggle("opened");
  document.getElementById('mario').src = 'images/characters/marioopen.png';
}

// luigi image change
var luigiImg = document.getElementById("luigi");
var luigiToggle = document.getElementById("luigiToggle");
if(luigiToggle){
  luigiToggle.addEventListener("click", LuigiChange);
}

function LuigiChange() {
  luigiImg.classList.toggle("opened");
  document.getElementById('luigi').src = 'images/characters/luigiopen.png';
}



// bowser image change
var bowserImg = document.getElementById("bowser");
var bowserToggle = document.getElementById("bowserToggle");
if(bowserToggle) { 
  bowserToggle.addEventListener("click", BowserChange);
}

function BowserChange() {
  bowserImg.classList.toggle("opened");
  document.getElementById('bowser').src = 'images/characters/bowseropen.png';
}

// princes image change
var princesImg = document.getElementById("princes");
var princesToggle = document.getElementById("princesToggle");
if(princesToggle){
  princesToggle.addEventListener("click", PrincesChange);
}

function PrincesChange() {
  princesImg.classList.toggle("opened");
  document.getElementById('princes').src = 'images/characters/princesopen.png';
}

// Yoshi image change
var yoshiImg = document.getElementById("yoshi");
var yoshiToggle = document.getElementById("yoshiToggle");
if(yoshiToggle){
  yoshiToggle.addEventListener("click", YoshiChange);
}

function YoshiChange() {
  yoshiImg.classList.toggle("opened");
  document.getElementById('yoshi').src = 'images/characters/yoshiopen.png';
}

// Toad image change
var toadImg = document.getElementById("toad");
var toadToggle = document.getElementById("toadToggle");
if(toadToggle){
  toadToggle.addEventListener("click", ToadChange);
}

function ToadChange() {
  toadImg.classList.toggle("opened");
  document.getElementById('toad').src = 'images/characters/toadopen.png';
}

// Daisy image change
var daisyImg = document.getElementById("daisy");
var daisyToggle = document.getElementById("daisyToggle");
if(daisyToggle){
  daisyToggle.addEventListener("click", DaisyChange);
}

function DaisyChange() {
  daisyImg.classList.toggle("opened");
  document.getElementById('daisy').src = 'images/characters/daisyopen.png';
}

// Wario image change
var warioImg = document.getElementById("wario");
var warioToggle = document.getElementById("warioToggle");
if(warioToggle){
  warioToggle.addEventListener("click", WarioChange);
}

function WarioChange() {
  warioImg.classList.toggle("opened");
  document.getElementById('wario').src = 'images/characters/warioopen.png';
}

// Waluigi image change
var waluigiImg = document.getElementById("waluigi");
var waluigiToggle = document.getElementById("waluigiToggle");
if(waluigiToggle){
waluigiToggle.addEventListener("click", WaluigiChange);
}

function WaluigiChange() {
  waluigiImg.classList.toggle("opened");
  document.getElementById('waluigi').src = 'images/characters/waluigiopen.png';
}

