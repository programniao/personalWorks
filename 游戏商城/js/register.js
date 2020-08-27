var user = [];
if(!localStorage.user){
	user = [
		{
			name: "xdbb",
			password: "cc232526",
			eMail: "1426764540@qq.com",
			nicheng: "xdbb",
			txImg: "images/user.png"
		},
		{
			name: "qq1426764540",
			password: "110110110",
			eMail: "15151515@qq.com",
			nicheng: "qq1426764540",
			txImg: "images/usercc.png"
		}
	];
}

localStorage.user = JSON.stringify(user);


var timer = null;
var Yemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function User(name, password, email) {
	this.name = name;
	this.password = password;
	this.eMail = email;
	this.txImg = "../images/usercc.png";
	this.nicheng = name;
}


window.onload = function () {
	var inp = $('input');
	// 聚焦
	var St = ["支持中文，字母，数字，'-'，'_'的多种组合",
		"建议使用字母、数字和符号两种以上的组合",
		"请确认两次密码输入一致",
		"你可以使用该邮箱登陆和找回密码"
	]
	
	$.each(inp, function (i, v) {
		
		$(v).blur(function () {
			if ($(this).val().length == 0) {
				$(this).next('div').text("").css('color', '#929394');
				return;
			}
			var text1 = "";
			switch (v) {
				case inp[0]:
					if ($(this).val().length >= 4 && !isNaN($(this).val())) {
						$(this).next("div").text("用户名不能为纯数字").css("color", 'red');
					} else if ($(v).val().length != 0) {
						for (var i = 0 ; i < user.length ; i++) {
							if ($(v).val() == user[i].name) {
								$(this).next("div").text("此账号已被注册！").css("color", 'red');
								return;
							}
						}
					}
					text1 = "长度只能在4-20个字符之间";
					break;
				case inp[1]:
					if($(v).val().length != 0){
						if($(v).val() == inp.eq(2).val()){
							inp.eq(2).next("div").text("").css("color", 'red');
							return;
						}
					}
					text1 = "密码长度只能在6-20个字符之间";
					break;
				case inp[2]:
					if (inp.eq(1).val() != inp.eq(2).val()) {
						$(v).next("div").text("两次密码不匹配").css("color", 'red');
						return;
					}
					text1 = "";
					break;
				case inp[3]:
					if(!Yemail.test($(v).val())){
						$(this).next("div").text("邮箱格式不正确").css("color", 'red');
						return;
					}else if ($(v).val().length != 0) {
						for (var i = 0 ; i < user.length ; i++) {
							if ($(v).val() == user[i].eMail) {
								$(this).next("div").text("此邮箱已被注册！").css("color", 'red');
								return;
							}
						}
					}
					break;
			}
			if ($(this).val().length > 0 && $(this).val().length < 4) {
				$(this).next('div').text(text1).css('color', 'red');
			} else {
				$(this).next("div").text("");
			}
		});
		$(v).focus(function () {
			if ($(this).val().length == 0) {
				$(this).next('div').text(St[i]);
			}
		});
	})
	
	$(".login-btn").click(function (e) {
		for (var i = 0 ; i < user.length ; i++) {
			if (inp.eq(0).val() == user[i].name) {
				inp.eq(0).next(".tips").text("此用户名已被注册！").css("color", "red");
				return false;
			}
		}
		for (var j = 0 ; j < 4 ; j++) {
			if (inp.eq(j).val().length == 0) {
				inp.eq(j).focus().next(".tips").text("此处不能为空").css("color", 'red');
				e.preventDefault();
				return;
			}
		}
		if ($('#ck')[0].checked) {
			user.push(new User(
				inp.eq(0).val(),
				inp.eq(1).val(),
				inp.eq(3).val()
			));
			localStorage.user = JSON.stringify(user);
			$('.goLogin').css('display', 'block');
			var num = 3;
			$('.log').html('注册成功');
			timer = setInterval(function () {
				num--;
				$('.log').html('正在跳转&nbsp;' + num + 's');
				if (num == 0) {
					clearInterval(timer);
					$('.goLogin').css('display', 'none');
					window.open('login.html',"_self");
				}
			}, 1000)
		} else {
			$('#ck').next().next('div').text('请您勾选协议').css("color", 'red');
			//  组织浏览器默认选项  -》 禁止提交表单
			e.preventDefault();
			return;
		}
	});
}