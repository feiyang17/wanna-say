(function($) {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var audio_context = new AudioContext;
	var input = audio_context.createMediaStreamSource();
	var recoder = new Recorder(input);
	console.log(recoder);
})(Zepto)