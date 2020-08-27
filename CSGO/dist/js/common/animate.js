function animate(element, distance, time) {

    if(element.timerId) {
        clearInterval(element.timerId);
        element.timerId = null;
    }

    element.timerId = setInterval(() => {
        let target = distance;
        let step = 26;

        if(element.offsetLeft > distance){
            step = - Math.abs(step)
        }

        if(Math.abs(element.offsetLeft - distance) < Math.abs(step)){
            clearInterval(element.timerId);
            element.style.left = distance + 'px';
            // 用来跳出函数
            return;
        }
        element.style.left = element.offsetLeft + step + 'px';
    }, time);
}