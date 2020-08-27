$(function() {
    let left = $('.icon--1');
    let right = $('.icon-uniE901');
    let ul_width = $('.banner_box').outerWidth();
    let index = 0;


    // 点击向左移动
    $(right).click(function() {
        index++;
        if(index >= 3) {
            index = 2;
            return
        }else {
            console.log(index)
        $('.box_ul').animate({marginLeft: index * -ul_width + 'px'});
        }
        
    })

    // 点击向右移动
    $(left).click(function() {
        index--;
        if(index <= -1) {
            index = 0;
            return
        }else {
            console.log(index)
            $('.box_ul').animate({marginLeft: index * -ul_width + 'px'});
        }
        
        
    })
})