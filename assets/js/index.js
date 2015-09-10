(function($) {
	// window.AudioContext = window.AudioContext || window.webkitAudioContext;
	// var audio_context = new AudioContext;
	// var input = audio_context.createMediaStreamSource();
	// var recoder = new Recorder(input);
	// console.log(recoder);


	var $record = $('#record');
	var $stop = $('#stop');
	var $save = $('#save');

	// 开始
	$record.on('click', function() {
		try {
			control.record(1);
		} catch (e) {
			console.log(1);
		}
	});

	// 停止
	$stop.on('click', function() {
		try {
			control.record(0);
		} catch (e) {
			console.log(0);
		}
	});

	// 保存
	$save.on('click', function() {
		try {
			control.record(2);
		} catch (e) {
			console.log(2);
		}
	});

})(Zepto)