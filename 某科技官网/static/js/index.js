
let public_var = {};

public_var.back_top = function(ele) {
    let ele_var = $(ele);

    $(ele_var).click(function() {
        $('html,body').animate({scrollTop: '0px'})
    })
    
}

