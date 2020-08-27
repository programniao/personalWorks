$(document).ready(function() {
	// inputbox淡入淡出
	// 获取焦点
	$('#text2').focus(function () {
		// $('#input-none2').style.display = 'block';
		$('#input-none2').fadeIn();
		$('#input-none2').fadeIn("slow")
		$('#input-none2').fadeIn(1000)
	})
	// 失去焦点
	$('#text2').blur(function () {
		$('#input-none2').fadeOut();
		$('#input-none2').fadeOut("slow");
		$('#input-none2').fadeOut(1000);
	})
})