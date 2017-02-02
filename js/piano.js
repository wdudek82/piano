// var c1 = document.getElementById("c1");
// var d1 = document.getElementById("c1");
// var e1 = document.getElementById("c1");
// var f1 = document.getElementById("c1");
// var g1 = document.getElementById("c1");
// var a1 = document.getElementById("c1");
// var h1 = document.getElementById("c1");
// var c2 = document.getElementById("c1");

// c1.addEventListener('mouseover', playSound("piano_c1"));
// d1.addEventListener('click', playSound("piano_d1"));
// e1.addEventListener('click', playSound("piano_e1"));
// f1.addEventListener('click', playSound("piano_f1"));
// g1.addEventListener('click', playSound("piano_g1"));
// a1.addEventListener('click', playSound("piano_a1"));
// h1.addEventListener('click', playSound("piano_h1"));
// c2.addEventListener('click', playSound("piano_c2"));

function playSound(sound) {
	console.log("Sound: "+sound.slice(-2));
	new Audio("scale/"+sound+".mp3").play();
}
window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 65) {
	   playSound('piano_c1')
   }
      if (key == 83) {
	   playSound('piano_d1')
   }
      if (key == 68) {
	   playSound('piano_e1')
   }
      if (key == 70) {
	   playSound('piano_f1')
   }
      if (key == 74) {
	   playSound('piano_g1')
   }
      if (key == 75) {
	   playSound('piano_a1')
   }
      if (key == 76) {
	   playSound('piano_b1')
   }
      if (key == 59) {
	   playSound('piano_c2')
   }
   
}