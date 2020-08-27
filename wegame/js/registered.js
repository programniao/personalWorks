// 自动播放
window.onload = function () {
	var img = document.getElementById('img');
	// 数组
	var arr = ["img/01-1.jpg","img/01-3.jpg","img/01-4.jpg"];
	// 索引
	var i = 1;
	
	setInterval(function () {
		img.src = arr[i];
		i++;
		if (i>arr.length){
			i = 0;
			img.src = arr[i];
			i++;
		}
	},2000)
}

// 语言隐藏显示
var toptwo = document.getElementById('top-two');
var twoimg = document.getElementById('top-two-img');
var twoul = document.getElementById('two-ul')

toptwo.onmouseenter = function () {
	twoimg.src = "img/wg-up.png";
	twoul.style.display = 'block';
}
toptwo.onmouseleave = function () {
	twoimg.src = "img/wg-down.png";
	twoul.style.display = 'none';
}

// QQ靓号隐藏显示
var topthree = document.getElementById('top-three');
var threenone = document.getElementById('three-none');

topthree.addEventListener("mouseenter", function () {
	threenone.style.display = 'block'
})
topthree.addEventListener("mouseleave", function () {
	threenone.style.display = 'none';
})

// 手机号隐藏显示
var outer = document.getElementById('outer-ophone');
var cuntion = document.getElementById('cuntion');
var ophon = document.getElementById('ophone')
var text = document.getElementById('text')

text.addEventListener("focus", function () {
	$(cuntion).fadeIn();
	$(cuntion).fadeIn(1000);
	outer.src = 'img/wg-up.png';
})
text.addEventListener("blur", function () {
	$(cuntion).fadeOut();
	$(cuntion).fadeOut(1000);
	outer.src = 'img/wg-down.png';
})


// input框
var user = document.getElementById('input-outid');
var pass = document.getElementById('input-outid1');
var number = document.getElementById('text');
var oneok =  document.getElementById('one-ok');
var oneok1 = document.getElementById('two-ok');
var eater = document.getElementById('eater-text');
var eater2 = document.getElementById('eater-text2');

user.onfocus = function(){
	$(oneok).fadeOut();
	$(oneok).fadeOut('slow');
	$(oneok).fadeOut(1000);
	$(eater).fadeOut();
	$(eater).fadeOut('slow');
	$(eater).fadeOut(1000);
	$(sms).fadeOut();
	$(sms).fadeOut(800);
}

user.onblur = function () {
	if (this.value != '') {
		$(oneok).fadeIn();
		$(oneok).fadeIn('slow');
		$(oneok).fadeIn(1000);
	} else {
		$(eater).fadeIn();
		$(eater).fadeIn('slow');
		$(eater).fadeIn(1000);
		
		pass.onfocus = function () {
			$(oneok1).fadeOut();
			$(oneok1).fadeOut('slow');
			$(oneok1).fadeOut(1000);
			$(eater2).fadeOut();
			$(eater2).fadeOut('slow');
			$(eater2).fadeOut(1000);
			$(sms).fadeOut();
			$(sms).fadeOut(800);
		}
		
		pass.onblur = function () {
			if (this.value != '') {
				$(oneok1).fadeIn();
				$(oneok1).fadeIn('slow');
				$(oneok1).fadeIn(1000);
			} else {
				$(eater2).fadeIn();
				$(eater2).fadeIn('slow');
				$(eater2).fadeIn(1000);
			}
		}
	}
}

// 立即注册（gets）
var gets = document.getElementById('get-scc');
var inputout = document.getElementById('input-outid2');
var sms = document.getElementById('sms');
var smsa = document.getElementById('sms-a');
inputout.onfocus = function () {
	$(sms).fadeIn();
	$(sms).fadeIn(800);
	if (inputout.value  === '' || inputout.value.length != 11){
	
	}
}
smsa.onclick = function(){
	smsa.className = 'sen-class1';
}
inputout.onclick = function () {
	smsa.className = 'sen-class';
}
user.onclick = function () {
	smsa.className = 'sen-class';
}
pass.onclick = function () {
	smsa.className = 'sen-class';
}

var limg = document.getElementById('limg');
// var subtext = document.getElementById("subtext");
var tmp = 1;
limg.onclick = function () {
	
	if (tmp === 1) {
		limg.src = 'img/checkbox_normal.png';
		tmp = 2
	} else if (tmp === 2) {
		limg.src = 'img/checkbox_check.png';
		tmp = 1;
	}
	console.log(tmp)
}




gets.onclick = function () {
	if (user.value || pass.value === ''){
		$(eater).fadeIn();
		$(eater).fadeIn("slow");
		$(eater).fadeIn(1000);
		$(eater2).fadeIn();
		$(eater2).fadeIn("slow");
		$(eater2).fadeIn(1000);
		return
	}
	$(sms).fadeOut();
	$(sms).fadeOut(800);
}


// input框
var numtext = document.getElementById('text')
// li
var cuntion = document.getElementById('cuntion');

for (var i = 0 ; i <cuntion.children.length ; i++) {
	// 遍历所有的li
	var link = cuntion.children[i]
	for (var a = 0 ; a <link.children.length ; a++) {
		// 遍历每个li里面的a
		var tmp1 = link.children[a];
		// 当a被点击时
		tmp1.onclick = function () {
			// input的值等于对应的a的值
			var tmp2 = numtext.value;
			tmp2 = this.innerText;
			// 输出当前input的值
			console.log(tmp2)
		}
		
	}
}


var aicon = document.getElementById('adown-icon');
var agreement = document.getElementById('agreement');
var link = 1;
aicon.onclick = function(){
	if (link === 1){
		aicon.src = 'img/wg-up.png';
		$(agreement).fadeIn()
		$(agreement).fadeIn(900)
		link = 2;
	} else if(link === 2){
		aicon.src = 'img/wg-down.png';
		$(agreement).fadeOut()
		$(agreement).fadeOut(900)
		link = 1;
	}
	
}


