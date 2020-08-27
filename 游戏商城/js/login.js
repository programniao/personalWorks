var data = []
if(localStorage.user){
	data = JSON.parse(localStorage.user);
}else{
	data = [
		{
			name: "xdbb",
			password: "cc232526",
			eMail: "1426764540@qq.com",
			nicheng: "xdbb",
			txImg: "images/usercc.png"
		},
		{
			name: "qq1426764540",
			password: "110110110",
			eMail: "15151515@qq.com",
			nicheng: "qq1426764540",
			txImg: "images/usercc.png"
		}
	];
	localStorage.user = JSON.stringify(data);
}

window.onload = function () {
	$('.login-btn').click(function () {
		var num = 0;
		var pas = false;
		for (var i = 0 ; i < data.length ; i++) {
			if ($('input').eq(0).val() == '' && $('input').eq(1).val() == '') {
				$('.tck').css('opacity', '1');
				$('.tck').children('span').html('输入内容不能为空!')
				setTimeout(function () {
					$('.tck').css('opacity', '0')
				}, 3000)
			} else if ($('input').eq(0).val() == data[i].email || $('input').eq(0).val() == data[i].name) {
				if ($('input').eq(1).val() == data[i].password) {
					$('.tck').css('opacity', '1').children('span').html('登陆成功!');
					localStorage.Duser = JSON.stringify(data[i].name);
					localStorage.nc = JSON.stringify(data[i].nicheng);
					setTimeout(function () {
						$('.tck').css('opacity', '0')
						window.open('index.html',"_self");
					}, 3000)
				} else {
					pas = true;
				}
			} else {
				num++;
			}
		}
		if (num == data.length) {
			$('.tck').css('opacity', '1')
			$('.tck').children('span').html('账号不存在!')
			setTimeout(function () {
				$('.tck').css('opacity', '0')
			}, 3000)
			return;
		}
		if (pas) {
			$('.tck').css('opacity', '1')
			$('.tck').children('span').html('密码错误!')
			setTimeout(function () {
				$('.tck').css('opacity', '0')
			}, 3000)
		}
	})
	$(".dl").keydown(function (e) {
		var k = e.keyCode;
		if(k == 13){
			$('.login-btn').click();
		}
	})
}