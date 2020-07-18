


function DisableDefaultFunc(event) {
    var event = event || window.event;
    if (event.preventDefault){
        event.preventDefault();
    }
    event.returnValue = false;  
}

function DisableKeyDown(event) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [32, 33, 34, 35,36];

    for (var i = keys.length; i--;) {
        if (event.keyCode === keys[i]) {
            DisableDefaultFunc(event);
            return(null)
        }
    }
}

function DisableWheel(event) {
    DisableDefaultFunc(event);
}

function DisableScroll() {
    //設置滑鼠滾輪
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', DisableWheel, false);
    }
    window.onmousewheel = document.onmousewheel = DisableWheel;
    
    //設置鍵盤
    document.onkeydown = DisableKeyDown;
}

function EnableScroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', DisableWheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}