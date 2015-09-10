(function($) {
	// 加载完页面执行
	Zepto(function($) {
		var $shareBtn = $('#share');
		var $playBtn = $('#play');

		var voice = document.getElementById('voice');
		voice.src = audioSrc;

		// alert(audioSrc);

		// console.log(audioSrc + '....' + voice);

		$('.album').addClass('album-drift');
		$('.box').addClass('box-drift').on('webkitAnimationEnd', function() {
			$('#recording').hide();
			$('#maked').show();
		});

		// 播放
		$playBtn.on('click', function() {
			voice.play();
			try {
				control.record(3);
			} catch (e) {
				console.log('----------play----------');
			}
		});

		// 重做
		$('#redo').on('click', function() {
			window.location.href = './index.html';
		});

		// 分享
		$shareBtn.on('click', function() {
			try {
				control.record(4);
			} catch (e) {
				console.log('----------share----------');
			}
		});
	})
})(Zepto)