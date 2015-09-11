(function($) {
	// 加载完页面执行
	Zepto(function($) {
		var $playBtn = $('#play');
		var $shareBtn = $('#share');
		var $arm = $('#arm-2');
		var $album = $('#album');
		var voice = document.getElementById('voice');
		voice.src = audioSrc;

		$playBtn.on('click', function() {

			$arm.addClass('start');
			$arm.on('webkitAnimationEnd', function() {
				// 光碟开始旋转
				$album.addClass('start');
				voice.play();
				$arm.off('webkitAnimationEnd');

				try {
					control.record(3);
				} catch (e) {}
			});
		});

		$shareBtn.on('click', function() {
			try {
				control.record(4);
			} catch (e) {
				console.log('----------share----------');
			}
		});
	})
})(Zepto)