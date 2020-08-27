$(function () {
	var dimg = $('.loginh').css("backgroundImage");
	$('.user-box').css("bottom", parseInt($('.user-box')[0].height))
	var txSrc = 'images/usercc.png';
	var data = [];
	if (localStorage.Duser) {
		data = JSON.parse(localStorage.user);
		for (var i = 0 ; i < data.length ; i++) {
			if (data[i].name == JSON.parse(localStorage.Duser)) {
				var immm = new Image();
				immm.src = data[i].txImg;
				txSrc = immm.src;
			}
		}
	}
	
	$(".home .loginh").css("backgroundImage", "url('" + txSrc + "')");
	$('.loginh').mouseover(function () {
		if (localStorage.Duser == undefined) {
			$('.dl-true').css("display", "none");
			$('.dl-no').css("display", "block");
			$('.user-box').css("bottom", "-160px");
		} else {
			$('.dl-no').css("display", "none");
			$('.dl-true').css("display", "block");
			$('.user-box').css("bottom", "-170px");
			$('.user-name').html(JSON.parse(localStorage.nc));
		}
		
		
		$('.user-box').fadeIn();
	});
	$('.loginh').mouseleave(function () {
		$('.user-box').fadeOut();
	})
	
	
	
	//退出按钮
	$('.dl-exit').click(function () {
		localStorage.clear();
		$('.dl-true').css("display", "none");
		$('.dl-no').css('display', "block");
		$('.loginh').css({
			'backgroundImage': dimg,
			"backgroundSize": "cover"
		})
		$.tooltip("您已成功注销！", 2000, true);
	});
	$('.dl-true ul').on("click", "li", function () {
		var target = $(this);
		
		if (target.text() == '个人中心') {
			
			// 个人中心
			localStorage.ym = "个人中心";
			window.open('myCenter.html', "_blank");
		} else if (target.text() == '我的钱包') {
			// 我的钱包
			localStorage.ym = "我的钱包";
			window.open("myCenter.html", '_blank');
		} else if (target.text() == '我的游戏') {
			// 订单中心
			localStorage.ym = "我的游戏";
			window.open("myCenter.html", '_blank');
		} else if (target.text() == "退出登陆") {
			return false;
		}
		
	});
	
})
