var data = [
	{
		url: "images/b0.jpg",
		name: "Jalopy",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:["驾驶","模拟","冒险","开放世界"],
		jiage:"￥28",
	},
	{
		url: "images/b1.jpg",
		name: "AirMech Strike",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:["驾驶","模拟","冒险","开放世界"],
		jiage:"￥58",
	},
	{
		url: "images/b2.jpg",
		name: "Ramen",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:["休闲","模拟","怀旧","剧情丰富"],
		jiage:"￥28",
	},
	{
		url: "images/b3.jpg",
		name: "OF MICE AND SAND -REVISED-",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:["策略","模拟","画景风格",'建筑建造'],
		jiage:"￥259",
	},
	{
		url: "images/b4.jpg",
		name: "TT lsle of Man",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:['竞速','模拟','多人'],
		jiage:"￥248",
	},
	{
		url: "images/b5.jpg",
		name: "孤岛惊魂5",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:['开放世界','动作','合作','多人'],
		jiage:"￥248",
	},
	{
		url: "images/b6.jpg",
		name: "KOEWOTAYORINI/声之寄托",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:['冒险','免费','角色扮演','独立'],
		jiage:"￥33",
	},
	{
		url: "images/b8.jpg",
		name: "Throwgh the Ages",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:['策略','独立','桌游'],
		jiage:"￥79",
	},
	{
		url: "images/b9.jpg",
		name: "Ash of Gods:Redemption",
		durl: "f5.html",
		id: ['g1', 'j1'],
		fsDate: "2012-10-12",
		bq:['角色扮演','策略','冒险','暴力'],
		jiage:"￥90",
	}
]

var nData = {
	data: data.slice(0,4)
};
var string = template('tem', nData);
var row = document.querySelector('.jpGame .row .col-md-8');
var buyBtn = document.querySelector('.gd-game');
row.innerHTML = string;

var ht = $('.menu');
var biaoqian = ["枪战射击","赛车竞速","FPS","角色冒险",
	"动作冒险","单机","大型网游","开放世界","免费","竞技",
	"休闲游戏","驾驶","格斗","模拟经营","篮球","横板过关","RPG"
]
// 渲染热点话题
var s2 = '<p>热门分类</p>';
for (var i = 0 ; i < biaoqian.length ; i++) {
	s2 += ('<a href="javascript:;" type="btn" class="df">' + biaoqian[i] + '</a>');
}
ht.html(s2);



// 更多按钮点击
buyBtn.onclick = function () {
	$('.sy').click();
}

var falg = false;
$('.searchBtn').click(function () {
	if($('.Sinp').val() == ''){
		$.tooltip("请输入内容再进行搜索");
	}else{
		falg = false;
		for (var i = 0 ; i < data.length ; i++) {
			console.log($('.Sinp').val(),data[i].name);
			if($('.Sinp').val() == data[i].name){
				window.open(data[i].durl,"_self");
				falg = true;
			}
		}
		if(!falg){
			$.tooltip("未找到此游戏!");
		}
	}
})
$('.search').keydown(function (e) {
	var k = e.keyCode;
	if(k == 13){
		$('.searchBtn').click();
	}
})
$('.sy').click(function () {
	$('.games-num').html(data.length);
	$('.htt').html(s2);
	$('.games').css("display","none");
	nData = {
		data: data
	};
	$('.sy').addClass('comactive').siblings().removeClass("comactive");
	string = template('tem', nData);
	$(".sy-games").css('display',"block");
	$('.sy-games .row .col-md-8').html(string);
})
$('.jjp').click(function () {
	$('.games').css("display","block");
	$(".sy-games").css('display',"none");
	$(this).addClass('comactive').siblings().removeClass("comactive");
})