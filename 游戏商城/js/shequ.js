//  栏目绑定点击事件
$('.comleft>a').click(function () {
	$(this).addClass('comactive').siblings().removeClass('comactive');
});

// 数据
var data = []
if(localStorage.fb){
	data = JSON.parse(localStorage.fb);
}else{
	data = [
		{
			user: "PlayGame 玩家中心",
			nc: "PlayGame 玩家中心",
			text: "第一条",
			img:[
				'images/farcry5_box.jpg'
			],
			id:'i1',
			txImg: "images/photo.jpg",
			z: parseInt(Math.random() * 100)
		},
		{
			user: "PlayGame 玩家中心",
			nc: "PlayGame 玩家中心",
			text: "第二条",
			img: [
				'images/honor_box.jpg'
			],
			id:'i2',
			txImg: "images/photo.jpg",
			z: parseInt(Math.random() * 100)
		},
		{
			user: "PlayGame 玩家中心",
			nc: "PlayGame 玩家中心",
			text: "第三条",
			id:'i3',
			txImg: "images/photo.jpg",
			z: parseInt(Math.random() * 100)
		},
		{
			user: "PlayGame 玩家中心",
			nc: "PlayGame 玩家中心",
			text: "第四条",
			id:'i4',
			txImg: "images/photo.jpg",
			z: parseInt(Math.random() * 100)
		},
	]
}
var hotHt = [
	'英雄联盟S8竞猜',
	'金秋十月福满国庆',
	'中国式家长',
	'这个十一玩堡垒',
	'游戏之余',
	'脑动时间'
]
var gz = [
	{
		img: 'images/中国式家长.png',
		name: '中国式家长',
	},
	{
		img: 'images/dnf.jpg',
		name: '地下城与勇士',
	},
	{
		img: 'images/user.png',
		name: '星露谷物语',
	},
	{
		img: 'images/photo.jpg',
		name: 'Player Game',
	},
]

var num = 4;
var nData = {
	data: data.slice(0, num)
};
var row = $('.textBox');
function xrdt(data){
// 渲染动态
	var string = template('tem', data);
	row.html(string);
}
xrdt(nData);
var srcc =[];
var ht = $('.huati p');
$('.qb').click(function () {
	data = JSON.parse(localStorage.fb);
	console.log(data);
	nData = {
		data: data
	};
	xrdt(nData);
})
$('.rm').click(function () {
	nData.data = []
	for (var i = 0 ; i < data.length ; i++) {
		if(data[i].z > 30){
			nData.data.push(data[i]);
		}
	}
	xrdt(nData);
})


// 渲染热点话题
var s2 = '';
for (var i = 0 ; i < hotHt.length ; i++) {
	s2 += ('<a href="javascript:;" type="btn" class="df">#' + hotHt[i] + '#</a>');
}
ht.html(s2);

//渲染推荐用户
var s3 = '';
for (var i = 0 ; i < gz.length ; i++) {
	s3 += (' <li><img src="' +
		gz[i].img + '" alt="">' +
		gz[i].name + '<span class="fa fa-diamond"></span>' +
		'<a class="btn gz">关&nbsp;&nbsp;注</a>' +
		'</li>')
}
$('.guanzhu ul').html(s3);


// 点赞功能
$('.textBox').on('click',function (event) {
	var target = $(event.target);
	if(target.attr('class') == 'dz fa fa-thumbs-o-up'){
		var nm = target.next().html() - 0;
		target.addClass('fa-thumbs-up').removeClass('fa-thumbs-o-up').next().html(nm + 1);
	}else if(target.attr('class') == 'dz fa fa-thumbs-up'){
		var nm = target.next().html() - 0;
		target.addClass('fa-thumbs-o-up').removeClass('fa-thumbs-up').next().html(nm - 1);
	}
});

//随机颜色
len = $(".widget_ui_tags .items a").length - 1;
$(".huati .df").each(function(i) {
	var let = new Array( '27ea80','3366FF','ff5473','df27ea', '31ac76', 'ea4563', '31a6a0', '8e7daa', '4fad7b', 'f99f13', 'f85200', '666666');
	var random1 = Math.floor(Math.random() * 12) + 0;
	var num = Math.floor(Math.random() * 5 + 12);
	$(this).attr('style', 'background:#' + let[random1] + '; opacity: 0.6;'+'');
	if ($(this).next().length > 0) {
		last = $(this).next().position().left
	}
});
var ndata = [];
if(localStorage.Duser){
	ndata = JSON.parse(localStorage.user);
}
// 发布功能
$(".fbBtn").click(function () {
	if(localStorage.Duser == undefined || localStorage.Duser == ''){
		$.tooltip('请先登录！！！');
		return false;
	}
	$('#wj').html(JSON.parse(localStorage.nc));
	for (var i = 0 ; i < ndata.length ; i++) {
		if (ndata[i].name == JSON.parse(localStorage.Duser)) {
			$('#fatx').attr('src',ndata[i].txImg);
		}
	}
	
	$('.fabu').css("display","block");
	$('.kuang').animate({
		opacity:"1",
	},300)
});
$('.fabu').click(function (e) {
	var event = $(e.target);
	if(event.attr("class") == 'fabu'){
		$('.fabu').css({
			display: 'none'
		})
	}
	
})
var ofb = {}
$(".tj .orj").click(function () {
	//提交前 验证消息 不能为空
	var strs = $('.loginh').css("backgroundImage")+'';
	
	if($('#fb').val() != ''){
		ofb.data = [{
			user: JSON.parse(localStorage.Duser),
			nc: JSON.parse(localStorage.nc),
			text: $('#fb').val(),
			id: "i" + (data.length + 1),
			txImg: strs.slice(5,strs.length-2),
			z: parseInt(Math.random() * 100)
		}]
		if(srcc){
			ofb.data[0].img=[];
			ofb.data[0].img=srcc;
			srcc = [];
		}
		$('#fb').val("");
		// 更新数据
		data.push(ofb.data[0]);
		// 重新渲染
		var s = template('tem', ofb);
		row.html(s + row.html());
		$('.fabu').css('display','none');
		$('.kuang').animate({
			opactiy:'0'
		},300);
		$.tooltip('成功发布',2000,true);
		$('.imgj').siblings('img').remove();
		localStorage.fb = JSON.stringify(data);
	}else{
		$.tooltip('不能发布空白内容！');
	}
})


$('.searchBtn').click(function () {
	var st = $('.Sinp').val();
	var xdt = {
		data:[]
	}
	for (var i = 0 ; i < data.length ; i++) {
		if (data[i].user == st) {
			xdt.data.push(data[i]);
		}
	}
	if(xdt.data.length == 0){
		$.tooltip('没有该用户！！！');
	}else{
		var s = template('tem', xdt);
		row.html(s);
	}
})

$('.gz').click(function () {
	if ($(this).html() == '关&nbsp;&nbsp;注') {
		$(this).css({
			background:"#bfbfbf",
			border: "1px solid #989898",
			color: "#5f5d5d"
		})
		$(this).html('已关注');
	}else{
		$(this).css({
			background:"orange",
			border: "1px solid  #c58104",
			color: "#7171e2"
		})
		$(this).html('关&nbsp;&nbsp;注');
	}
})
var numi = 0;
$('.imgj').click(function () {
	numi = $(this).index();
})

$('.fabu').change(function (e) {
	var event = $(e.target);
	if(event.attr('id') == 'file'){
		var img = new Image();
		var data = document.querySelector("#file").files[0];
		srcc.push(URL.createObjectURL(data));
		img.src = URL.createObjectURL(data);
		$('.imgj').before(img);
	}
})
$('.search').keydown(function (e) {
	var k = e.keyCode;
	if(k == 13){
		$('.searchBtn').click();
	}
})
$('.kuang').keydown(function (e) {
	var k = e.keyCode;
	if(k == 13){
		$('.orj').click();
	}
})


