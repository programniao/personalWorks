var user_data = JSON.parse(localStorage.user);
for (var ix = 0 ; ix < user_data.length ; ix++) {
	if(user_data[ix].name == JSON.parse(localStorage.Duser)){
		user_data = user_data[ix];
	}
}
localStorage.nc = JSON.stringify(user_data.nicheng);

$(function () {
	$('.tximg').css("backgroundImage","url('" + user_data.txImg + "')");
	
	$('.f5jh').click(function () {
		window.open("f5.html",'_blank');
	})
	
	//选项卡
	$('.lie-box').on("click","a",function () {
		$(this).addClass("activef").siblings().removeClass("activef");
		$('.nr-item').eq($(this).index()).addClass("itactive").siblings().removeClass("itactive");
	})
	$('.xgxx').click(function () {
		$('.lie-box>a').eq(1).click();
	})
	
	$('.txImg').attr('src',user_data.txImg);
	$('.us-name').html(user_data.nicheng)
	//更换头像
	$('.ghtx').click(function () {
		$("#tx").click();
	})
	var txSrc = user_data.txImg;
	$("#tx").change(function () {
		var data = document.querySelector("#tx").files[0];
		txSrc = URL.createObjectURL(data);
		$('.tximg').css({
			backgroundImage: "url('" + txSrc + "')"
		});
		
	})
	$('.nic').val(user_data.nicheng);
	$(".yhm").html(user_data.name);
	// 更改个人信息
	$('.bc').click(function () {
		$(".home .loginh").css("backgroundImage","url('" + txSrc + "')");
		user_data.txImg = (txSrc);
		user_data.nicheng = $('.nic').val();
		
		var dataAll = JSON.parse(localStorage.user);
		for (var i = 0 ; i < dataAll.length ; i++) {
			if(dataAll[i].name == user_data.name){
				dataAll.splice(i,1,user_data);
				break;
			}
		}
		localStorage.user = JSON.stringify(dataAll);
		$.tooltip("保存成功！",2000,true);
		$('.lie-box>a').eq(0).click();
		$('.txImg').attr('src',user_data.txImg);
		$('.us-name').html(user_data.nicheng)
		localStorage.nc = JSON.stringify(user_data.nicheng);
	})
	
	var data = []
	if(localStorage.fb){
		data.data = JSON.parse(localStorage.fb);
		var Ndata = {data:[]}
		for (var i = 0 ; i < data.data.length ; i++) {
			if (data.data[i].user == JSON.parse(localStorage.Duser)) {
				Ndata.data.push(data.data[i]);
			}
		}
		var string = template('tem', Ndata);
		$('.fayan').html(string);
	}else{
		$('.fayan').html("未获取到发言");
	}
	var ym = localStorage.ym;
	switch (ym){
		case "我的钱包":
			$('.lie-box a').eq(2).click();
			break;
		case "我的游戏":
			$('.lie-box a').eq(4).click();
			break;
	}
	localStorage.ym = "个人中心";
	
})