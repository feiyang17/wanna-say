(function($) {
	// window.AudioContext = window.AudioContext || window.webkitAudioContext;
	// var audio_context = new AudioContext;
	// var input = audio_context.createMediaStreamSource();
	// var recoder = new Recorder(input);
	// console.log(recoder);
	

	var $record = $('#record');
	var $stop = $('#stop');

	// 播放
	$record.on('click', function() {
		try{
			control.record(1);
		}catch(e) {

		}
	});

	// 停止
	$stop.on('click', function() {
		try{
			control.record(0);
		}catch(e) {

		}
	});

})(Zepto)