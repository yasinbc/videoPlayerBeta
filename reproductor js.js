function botonReproducir(){
	const botonReproducir = document.getElementById("botonReproducir");
	botonReproducir.addEventListener("click", funcionReproducir);
}

function funcionReproducir(){
	const video = document.getElementById("video");
	video.play();
}

window.addEventListener("load", botonReproducir);


function botonPausar(){
	const botonPausar = document.getElementById("botonPausar");
	botonPausar.addEventListener("click", funcionPausar);
}

function funcionPausar(){
	video.pause();
}

window.addEventListener("load", botonPausar);