

function playSound(sound) {
	console.log("Sound: "+sound.slice(-2));
	new Audio("scale/"+sound+".mp3").play();
}