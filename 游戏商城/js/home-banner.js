
var video = document.getElementById('vid');
// video.play();
$(video).click(function () {
	video.play();
});
// video.onloadstart = function () {
// 	console.log(1);
// };

video.ontimeupdate=function () {
	if (video.currentTime >= video.duration - 1) {
		setTimeout(function () {
			video.currentTime = 0;
			video.play();
		},1000)
	}
}

$(".banner .item").css('height',$(window).height());
$("body").css({
	'height':$(window).height(),
	'width': "100%"
});

var num = 0;
$(document.body).on('mousewheel DOMMouseScroll', onMouseScroll);
function onMouseScroll(e){
	e.preventDefault();
	var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
	var delta = Math.max(-1, Math.min(1, wheel) );
	if(delta<0){//向下滚动
		if(num < 3){
			num++;
		}else if(num == 3){
			$('footer').css("bottom",'0');
			return;
		}
	}else{//向上滚动
		if(num > 0){
			num--;
		}
	}
	if(num < 0 || num > $('.item').length - 1){
		return false;
	}
	$('footer').css("bottom",'-211px');
	$('.box').css('top',-$(window).height() * num);
}