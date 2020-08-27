var move = document.getElementById("move");
var smabox = document.getElementById('sam-box')

move.onmousemove =function () {
	smabox.style.display = 'block'
}
move.onmouseout = function () {
	smabox.style.display = 'none';
}


var bannback = document.getElementById("banner-background");
var btnex = document.getElementById('btn-ex')
var cov = document.getElementById('cover')
var reg = document.getElementById('region');
var tmp = 1;

// 收起专题隐藏显示
bannback.onmouseover = function(){
	btnex.style.bottom = '0px';
}
bannback.onmouseout = function(){
	btnex.style.bottom = '-13px';
}
// 背景图大图和小图的切换还有小图标的切换
btnex.onclick = function () {
	if (bannback.style.height = '568' +'px' && tmp === 1){
		bannback.style.height = '130px';
		setTimeout(function () {
			cov.style.opacity = 1;
			
			$(document).ready(function() {
				$(cov).fadeIn();
				$(cov).fadeIn("slow");
				$(cov).fadeIn(300);
			})
			btnex.className = 'btn-ex';
		},500)
		tmp = 2;
	}else if (bannback.style.height = '130' +'px' && tmp ===2){
		bannback.style.height = '568px';
		cov.style.opacity = 0;
		setTimeout(function () {
			$(document).ready(function() {
				$(cov).fadeOut();
				$(cov).fadeOut("slow");
				$(cov).fadeOut(100);
			})
		},300)
		btnex.className = 'btn-expand';
		tmp = 1;
	}
}

// APP下载
var bannerdown = document.getElementById('banner-left-down');
var bannernone = document.getElementById('banner-box-none');
// 移动盒子里
bannerdown.onmouseenter = function () {
	bannernone.style.opacity = 10;
	bannernone.style.left = '84px';
}
// 移除盒子
bannerdown.onmouseleave = function () {
	bannernone.style.opacity = 0;
	bannernone.style.left = '67px';
}


// 首页 轮播图

var timer = null,
	index = 0,
	pics = document.getElementsByClassName("banner-slide"),
	bannerul = document.getElementById('banner-ul');
	lis = bannerul.getElementsByTagName('li');

	// console.log(lis)

//封装一个代替getElementById()的方法
function Id(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

function slideImg() {
	var main = Id("main");
	var banner = Id("banner");
	main.onmouseover = function(){
		stopPlay();
	}
	main.onmouseout = function(){
		startPlay();
	}
	main.onmouseout();
	
	//点击导航栏切换图片
	for(var i=0;i<pics.length;i++){
		lis[i].id = i;
		//给每个li项绑定点击事件
		lis[i].onclick = function(){
			//获取当前li项的index值
			index = this.id;
			changeImg();
		}
	}
}
//开始播放轮播图
function startPlay(){
	timer = setInterval(function(){
		index++;
		if(index>6){
			index = 0;
		}
		changeImg();
	},1400);
}
//暂停播放
function stopPlay(){
	if (timer) {
		clearInterval(timer);
	}
}
//改变轮播图
function changeImg(){
	for(var i=0;i<pics.length;i++){
		pics[i].style.display = "none";
		lis[i].className = "";
	}
	pics[index].style.display = "block";
	lis[index].className = "changeColor";
}
slideImg();



// 热点
let vuls = document.getElementById('view-list');
let vtexts = document.getElementsByClassName('wight-view-text');
let vlis = vuls.getElementsByTagName('li')


for (var i = 0 ; i < vlis.length ; i++) {
	vlis.index = i;
	vlis[i].onmouseover = function () {
		for (var e = 0 ; e < vtexts.length ; e++) {
			vtexts[e].index = e;
			// console.log(link);
			vtexts[e].onmouseover = function () {
				this.style.bottom = '40px';
			}
			
		}
	}
	vlis[i].onmouseout = function () {
		for (var e = 0 ; e < vtexts.length ; e++) {
			vtexts[e].index = e;
			// console.log(link);
			vtexts[e].onmouseout = function () {
				this.style.bottom = '0px';
			}
			
		}
	}

}




// 倒计时
// var time = document.getElementById('time');


function gettime(id,time) {
	// 结束时间
	var enddate = new Date(time);
// 当前时间
	var nowtime = new Date();
// 相差时间
	var secend =  parseInt((enddate - nowtime) / 1000);
//天数
	var days = Math.floor(secend / (60 * 60 * 24));
// 输出
	document.getElementById(id).innerHTML= days;
	// 延迟多少秒执行
	setTimeout(function () {
		gettime(id,time);
	},1000)
}

// gettime('time','2020-4')



