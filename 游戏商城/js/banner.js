$(function () {
	//轮播进度条
	var bannerBar = $('#banner_bar');
	// 进度条的运动
	function yund() {
		if (bannerBar.width() == $(window).width()) bannerBar.width('0');
		bannerBar.animate({
			'width': '100%'
		}, 5000, function () {
			yund();
		})
	}
	yund();
	
	$('.left, .right').click(function () {
		bannerBar.width('0').stop(false, true);
		yund();
	});
	
	// 清除 bootstrap 轮播鼠标悬停事件
	$('#carousel-example-generic').carousel({
		pause: 'none'
	});
})