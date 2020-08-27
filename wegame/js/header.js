var righta = document.getElementById("wg-right-a1");
var mask = document.getElementById("wg-mask");
var close = document.getElementById("wg-login-close");


// 隐藏显示
righta.onclick = function () {
	
	mask.style.display = 'block';
	
	close.onclick = function () {
		mask.style.display = 'none';
	}
}



// 登录选项卡获取元素
var nav =document.getElementById('wight-nav');
var oNav=nav.getElementsByTagName('li');
var cont=document.getElementById('cont');
var oDiv=cont.getElementsByClassName('tab');
// QQ微信选项卡
for (var i = 0 ; i < oNav.length; i++) {
	oNav[i].index = i;
		for(var i=0;i<oNav.length;i++) {
			oNav[i].index = i;
			oNav[i].onclick = function () {
				for (var i = 0 ; i < oNav.length ; i++) {
					oNav[i].className = '';
					oDiv[i].style.display = "none";
				}
				this.className = 'cur';
				oDiv[this.index].style.display = "block"
			}
			
			for (var a = 1 ; a < oNav.length ; a++) {
				// oNav[i].className = "";
				// oDiv[i].style.display = 'none';
			}
		}
}




// 账号登录于清空
var text = document.getElementById('text');
var icon = document.getElementById('wight-bd-icon');
var btn = document.getElementById('section3-btn');
var pass = document.getElementById('section3-pass');
var inputicon = document.getElementById('input-icon-1');
var bdicon = document.getElementById('bd-icon');
var bdtext = document.getElementById('bd-text');
var mask = document.getElementById('wg-mask')

// 清空账号里的值
text.onclick = function(){
	icon.style.display = 'block';
	icon.onclick = function () {
		text.value = '';
	}
}
mask.onclick =function(){
	icon.style.display = 'none';
}






// 判断账号密码是否为空
btn.onclick = function () {
	if (text.value === ''){
		bdtext.innerText = '账号不能为空!'
		inputicon.style.display = 'block';
		setTimeout(function () {
			inputicon.style.display = 'none';
		},2000)
		return;
	}
	if (pass.value === ''){
		bdtext.innerText = '密码不能为空!';
		inputicon.style.display = 'block';
		setTimeout(function () {
			inputicon.style.display = 'none';
		},2000)
		return;
	}
}



var tabinput = document.getElementById('tab-input-ba');
var tabnone = document.getElementById('tab-none')
var tabtightnone = document.getElementById('wight-nav-three')
var nav1 = document.getElementById("nav-one")
var nav2 = document.getElementById("nav-two")

tabinput.onclick = function () {
	tabnone.style.display = 'none';
}

tabtightnone.onclick = function () {
	tabnone.style.display = 'block';
}

