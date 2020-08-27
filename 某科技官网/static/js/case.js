$(function() {
    // 移动到content_items 下p元素显示
    $('.content_items').each(function(i,e) {
        $(this).mouseenter(function() {
            $(this).children('.item_none').fadeIn(700)
        })
    })

    $('.content_items').each(function(i,e) {
        $(this).mouseleave(function() {
            $(this).children('.item_none').fadeOut(700)
        })
    })
})