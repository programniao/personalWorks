let seetion1Item1 = document.getElementById('seetion2-item1');
let seetion1Item2 = document.getElementById('seetion2-item2');
let seetionvl = document.getElementById('seetion2-vl');
let seetionvr = document.getElementById('seetion2-vr');


seetion1Item1.onmouseenter =  function() {
    // 控制播放
    seetionvl.play();
    // 添加class 添加不是覆盖
    seetion1Item2.classList.add("mask");
}
seetion1Item2.onmouseenter =  function() {
    seetionvr.play();
    seetion1Item1.classList.add("mask");
}
seetion1Item1.onmouseleave = function() {
    // 控制暂停
    seetionvl.pause();
    // 移除class 不是全部移除
    seetion1Item2.classList.remove("mask");
}
seetion1Item2.onmouseleave = function() {
    seetionvr.pause();
    seetion1Item1.classList.remove("mask");
}



// 网页可见区域的宽度
const rightwidth = document.body.offsetWidth;

const floatright = document.getElementById('float-right');
const righticon = document.getElementById('right-icon');

righticon.onclick = function() {
    animate(floatright, rightwidth + 133, 40);
}


