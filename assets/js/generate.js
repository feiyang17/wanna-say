(function($) {
	// 加载完页面执行
	Zepto(function($){
		$('.album').addClass('album-drift');
		$('.box').addClass('box-drift');
		$('#redo').on('click', function() {
			window.location.href = './index.html';
		});
	}) 
})(Zepto)