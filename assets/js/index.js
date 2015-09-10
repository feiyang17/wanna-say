/**
 * @author monkindey
 * @date 2015.9.10
 * @description 录音
 *
 *  control.record 与 webview 交互
 *  1: 开始录音
 *  0: 结束录音
 *  2. 保存
 *  3. 播放
 *  4. 分享
 */
(function($) {
	var $record = $('#record');
	var $stop = $('#stop');
	var $save = $('#save');
	var $album = $('#album');
	var $arm = $('#arm-2');

	var seconds = 0;

	var startRecord = false;

	var initPage = function() {

	};

	// 修改时间表现形式
	function switchTime() {
		var minutes = parseInt(seconds / 60);
		var _seconds = seconds % 60;

		if (_seconds < 10) {
			_seconds = '0' + _seconds;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return minutes + ':' + _seconds;
	}

	// 开始计时
	function startTimer() {
		setTimeout(function start() {
			if (!startRecord) {
				return;
			}
			++seconds;
			$('#timing').html(switchTime());
			setTimeout(start, 1000);
		}, 1000);
	}

	function endTimer() {}

	var initEvent = function() {
		// 开始
		$record.on('click', function() {
			startRecord = true;
			$stop.addClass('active');
			$arm.addClass('start');
			// 开始计时
			$arm.on('webkitAnimationEnd', function() {
				// 光碟开始旋转
				$album.addClass('start');
				$arm.off('webkitAnimationEnd');
				startTimer();
				try {
					control.record(1);
				} catch (e) {}
			});
			console.log(1);
		});

		// 停止
		$stop.on('click', function() {
			if ($stop.hasClass('active')) {
				$save.addClass('active');
				// 光碟停止旋转
				$album.removeClass('start');
				$arm.addClass('stop').removeClass('start');
				startRecord = false;
				console.log(0);
				try {
					control.record(0);
				} catch (e) {

				}
			}
		});

		// 保存
		$save.on('click', function() {
			if ($stop.hasClass('active')) {
				window.location.href = './generate.html';
				try {
					control.record(2);
				} catch (e) {
					console.log(2);
				}
			}
		});
	};

	var init = function() {
		initPage();
		initEvent();
	};

	init();

})(Zepto)