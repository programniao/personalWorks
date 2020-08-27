//淡入效果
function fadeIn(elem, speed, opacity){
	/*
	 * elem==>需要淡入的元素
	 * speed==>淡入速度,正整数(可选)
	 * opacity==>淡入到指定的透明度,0~100(可选)
	 */
	speedspeed = speed || 20;
	opacityopacity = opacity || 100;
	//显示元素,并将元素值为0透明度(不可见)
	elem.style.display = 'block';
	elem.SetOpacity(elem, 0);
	//初始化透明度变化值为0
	var val = 0;
	//循环将透明值以5递增,即淡入效果
	(function(){
		elem.SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}

//淡出效果
function fadeOut(elem, speed, opacity){
	/*
	 * elem==>需要淡入的元素
	 * speed==>淡入速度,正整数(可选)
	 * opacity==>淡入到指定的透明度,0~100(可选)
	 */
	speedspeed = speed || 20;
	opacityopacity = opacity || 0;
	//初始化透明度变化值为0
	var val = 100;
	//循环将透明值以5递减,即淡出效果
	(function(){
		iBase.SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		}else if (val < 0) {
			//元素透明度为0后隐藏元素
			elem.style.display = 'none';
		}
	})();
}