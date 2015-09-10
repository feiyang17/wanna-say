(function($) {
	// 加载完页面执行
	Zepto(function($) {
		var $shareBtn = $('#share');

		$('.album').addClass('album-drift');
		$('.box').addClass('box-drift');
		$('#redo').on('click', function() {
			window.location.href = './index.html';
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