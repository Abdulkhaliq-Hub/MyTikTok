let ict1 = document.querySelector('.ict1');
let ict2 = document.querySelector('.ict2');
let ict3 = document.querySelector('.ict3');
let upload = document.querySelector('.upload');
let about = document.querySelector('.about-app');


ict1.onclick = function(){
    url = "https://tiktok.com/messages";
    window.open(url);
}
ict2.onclick = function(){
    url = "https://tiktok.com/messages";
    window.open(url);
}
ict3.onclick = function(){
    url = "https://tiktok.com/messages";
    window.open(url);
}


let usmn = document.querySelector('.user-menu');

ict3.addEventListener('mouseenter' , function(){
    usmn.classList.add("user-show");
    ict1.classList.remove("all-db");
    ict2.classList.remove("all-db");
    ict3.classList.remove("all-db");
})  
// ict3.addEventListener('mouseleave' , function(){
//     usmn.classList.remove("user-show");
// })
usmn.addEventListener('mouseenter' , function(){
    // usmn.classList.add("user-show");
    if (usmn.classList.contains("user-show")){
        usmn.classList.remove("user-show")
        usmn.addEventListener('animationend' , remove);
    } else {
        usmn.classList.add("user-show")
        usmn.removeEventListener('animationend' , remove);
    }
})  
usmn.addEventListener('mouseleave' , function(){
    // usmn.classList.remove("user-hide");
    if (usmn.classList.contains("user-hide")){
        usmn.classList.remove("user-show")
        // usmn.addEventListener('animationend' , remove);
    } else {
        usmn.classList.add("user-hide")
        usmn.removeEventListener('animationend' , remove);
    }
})

// Input

function isInputNumber(evt){
    var ch = String.fromCharCode(evt.which)

    if(! (/[0-9]/.test(ch))) {
        evt.preventDefault ();
    }
}
var inputField = document.querySelector('.number-cs')
var inputField2 = document.querySelector('.pl-money')
inputField.onkeyup = function(){
    var removeChar = this.value.replace(/[^0-9\.]/g, '')

    var removeDot = removeChar.replace(/\./g, '')
    this.value = removeDot
    
    var formatedNumber = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    console.log(formatedNumber);
    this.value = formatedNumber 
}
inputField2.onkeyup = function(){
    var removeChar = this.value.replace(/[^0-9\.]/g, '')

    var removeDot = removeChar.replace(/\./g, '')
    this.value = removeDot
    
    var formatedNumber = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    console.log(formatedNumber);
    this.value = formatedNumber 
}
// Input

// Input2
let iv = document.querySelector('.search-top');
let si = document.querySelector('.search-icon');

si.onclick = function(){
    url = "https://www.tiktok.com/search?q="+iv.value
    window.open(url);
}
// Input2

// User Menu Links 
let ms1 = document.querySelector(".ms1");
let ms2 = document.querySelector(".ms2");
let ms3 = document.querySelector(".ms3");
let ms4 = document.querySelector(".ms4");
let ms5 = document.querySelector(".ms5");
let ms6 = document.querySelector(".ms6");
let ms7 = document.querySelector(".ms7");
let ms8 = document.querySelector(".ms8");
let ms9 = document.querySelector(".ms9");
let ms10 = document.querySelector(".ms10");

ms1.onclick = function(){
    url = "https://www.tiktok.com/@coldest_moments_07";
    window.open(url);
} 
ms2.onclick = function(){
    url = "https://www.tiktok.com/@coldest_moments_07";
    window.open(url);
} 
ms3.onclick = function(){
    url = "https://www.tiktok.com/coin/";
    window.open(url);
}
ms4.onclick = function(){
    url = "https://www.tiktok.com/studio/download?enter_from=profile";
    window.open(url);
}
ms5.onclick = function(){
    url = "https://www.tiktok.com/business-suite";
    window.open(url);
}
ms6.onclick = function(){
    url = "https://www.tiktok.com/live/creators/en-US/?enter_from=portrait&lang=en&region=US";
    window.open(url);
} 
ms7.onclick = function(){
    url = "https://www.tiktok.com/setting";
    window.open(url);
}
ms8.onclick = function(){
    url = "https://www.tiktok.com/feedback";
    window.open(url);
}
ms9.onclick = function(){
    url = "https://www.tiktok.com/feedback";
    window.open(url);
}
ms10.onclick = function(){
    url = "https://www.tiktok.com/feedback";
    window.open(url);
}


// Upload
upload.onclick = function(){
    url = "https://www.tiktok.com/upload?lang=en";
    window.open(url);
}
// Upload


// Hover
let pmb1 = document.querySelector('.posf-mn-bx1');
let pmb2 = document.querySelector('.posf-mn-bx2');
let pmb3 = document.querySelector('.posa-mn-bx3');


ict1.addEventListener('mouseenter' , function(){
    pmb1.classList.add("all-db");
    ict2.classList.remove("all-db");
    ict3.classList.remove("all-db");
    usmn.classList.remove("user-show");
})  
ict1.addEventListener('mouseleave' , function(){
    pmb1.classList.remove("all-db");
})

ict2.addEventListener('mouseenter' , function(){
    pmb2.classList.add("all-db");
    ict1.classList.remove("all-db");
    ict3.classList.remove("all-db");
    if (usmn.classList.contains("user-hide")){
        usmn.classList.add("user-show");
        usmn.classList.remove("user-hide");
    } else {
        usmn.classList.remove("user-show")
        usmn.classList.add("user-hide")
    }
})  
ict2.addEventListener('mouseleave' , function(){
    pmb2.classList.remove("all-db");
    if (usmn.classList.contains("user-show")){
        usmn.classList.remove("user-show");
        usmn.classList.add("user-hide");
    } else {
        usmn.classList.add("user-show")
        usmn.classList.remove("user-hide")
    }
})

about.addEventListener('mouseenter' , function(){
    pmb3.classList.add("all-db");
    ict2.classList.remove("all-db");
    ict3.classList.remove("all-db");
    usmn.classList.remove("user-show");
})   
about.addEventListener('mouseleave' , function(){
    pmb3.classList.remove("all-db");
})

// Reading

// Log out
function remove(){
    lognn.classList.remove("log-show", "log-hide");
    rdb.classList.remove("recharge-show", "recharge-hide");
    usmn.classList.remove("user-show" , "user-hide");
}

let ms11 = document.querySelector(".ms11");
let lognn = document.querySelector(".log-nn");
let logout = document.querySelector(".log-out");
let logbx = document.querySelector(".log-box");
let out = document.querySelector(".out");
let cncl = document.querySelector(".cencel");

ms11.addEventListener('click' , function(){

    usmn.classList.remove("user-show");

    if(lognn.classList.contains("log-show")){
        lognn.classList.add("log-hide")
        lognn.addEventListener('animationend' , remove);
    } else {
        lognn.classList.add("log-show")
        lognn.removeEventListener('animationend' , remove);
    }
    
})
cncl.addEventListener('click' , function(){

    if (lognn.classList.contains("log-hide")){
        lognn.classList.add("log-show")
        lognn.addEventListener('animationend' , remove);
    } else {
        lognn.classList.add("log-hide")
        lognn.removeEventListener('animationend' , remove);
    }
    
}) 
logout.addEventListener('click' , function(){
    
    if (lognn.classList.contains("log-hide")){
        lognn.classList.add("log-hide")
        lognn.addEventListener('animationend' , remove);
    } else {
        lognn.classList.add("log-hide")
        lognn.removeEventListener('animationend' , remove);
    }

    if (lognn.classList.contains("log-show")){
        lognn.classList.add("log-show")
        lognn.addEventListener('animationend' , remove);
    } else {
        lognn.classList.add("log-show")
        lognn.removeEventListener('animationend' , remove);
    }

}) 
out.onclick = function(){
    url = "https://www.tiktok.com/logout?redirect_url=https://www.tiktok.com/coin";
    window.open(url);
}
// Log out

// Test Total $
let lb1 = document.querySelector(".lb1");
let lb2 = document.querySelector(".lb2");
let lb3 = document.querySelector(".lb3");
let lb4 = document.querySelector(".lb4");
let lb5 = document.querySelector(".lb5");
let lb6 = document.querySelector(".lb6");
let lb7 = document.querySelector(".lb7");
let lb8 = document.querySelector(".lb8");
let recharge = document.querySelector(".buy");
let nm = document.querySelector(".nm-input");
let mn = document.querySelector(".mn-input");
let total = document.querySelector(".pl-money");
let tm = document.querySelector(".coin-sold-number");

lb1.addEventListener('click' , function(){
    total.value = "0.74";
    recharge.classList.add("buy-recharge");
    show1.value = "0.74";
    show2.value = "70";
    nm.classList.add("nmi1");
    mn.classList.add("mni1");
    
    
    // Remove
    mn.classList.remove("mni4");
    nm.classList.remove("nmi4");
    mn.classList.remove("mni2");
    nm.classList.remove("nmi2");
    mn.classList.remove("mni3");
    nm.classList.remove("nmi3");
    mn.classList.remove("mni5");
    nm.classList.remove("nmi5");
    mn.classList.remove("mni6");
    nm.classList.remove("nmi6");
    mn.classList.remove("mni7");
    nm.classList.remove("nmi7");
    mn.classList.remove("mni8");
    nm.classList.remove("nmi8");
})
lb2.addEventListener('click' , function(){
    total.value = "3.7";
    recharge.classList.add("buy-recharge");
    show1.value = "3.7";
    show2.value = "350";
    nm.classList.add("nmi2");
    mn.classList.add("mni2");
    
    
    // Remove
    mn.classList.remove("mni1");
    nm.classList.remove("nmi1");
    mn.classList.remove("mni4");
    nm.classList.remove("nmi4");
    mn.classList.remove("mni3");
    nm.classList.remove("nmi3");
    mn.classList.remove("mni5");
    nm.classList.remove("nmi5");
    mn.classList.remove("mni6");
    nm.classList.remove("nmi6");
    mn.classList.remove("mni7");
    nm.classList.remove("nmi7");
    mn.classList.remove("mni8");
    nm.classList.remove("nmi8");
})
lb3.addEventListener('click' , function(){
    total.value = "7.4";
    recharge.classList.add("buy-recharge");
    show1.value = "7.4";
    show2.value = "700";
    nm.classList.add("nmi3");
    mn.classList.add("mni3");


    // Remove
    mn.classList.remove("mni1");
    nm.classList.remove("nmi1");
    mn.classList.remove("mni2");
    nm.classList.remove("nmi2");
    mn.classList.remove("mni4");
    nm.classList.remove("nmi4");
    mn.classList.remove("mni5");
    nm.classList.remove("nmi5");
    mn.classList.remove("mni6");
    nm.classList.remove("nmi6");
    mn.classList.remove("mni7");
    nm.classList.remove("nmi7");
    mn.classList.remove("mni8");
    nm.classList.remove("nmi8");
})
lb4.addEventListener('click' , function(){
    total.value = "14.8";
    recharge.classList.add("buy-recharge");
    show1.value = "14.8";
    show2.value = "1400";
    nm.classList.add("nmi4");
    mn.classList.add("mni4");


    // Remove
    mn.classList.remove("mni1");
    nm.classList.remove("nmi1");
    mn.classList.remove("mni2");
    nm.classList.remove("nmi2");
    mn.classList.remove("mni3");
    nm.classList.remove("nmi3");
    mn.classList.remove("mni5");
    nm.classList.remove("nmi5");
    mn.classList.remove("mni6");
    nm.classList.remove("nmi6");
    mn.classList.remove("mni7");
    nm.classList.remove("nmi7");
    mn.classList.remove("mni8");
    nm.classList.remove("nmi8");
})
lb5.addEventListener('click' , function(){
    total.value = "37";
    recharge.classList.add("buy-recharge");
    show1.value = "37";
    show2.value = "3,500";
    nm.classList.add("nmi5");
    mn.classList.add("mni5");
    
    
    // Remove
    mn.classList.remove("mni1");
    nm.classList.remove("nmi1");
    mn.classList.remove("mni2");
    nm.classList.remove("nmi2");
    mn.classList.remove("mni3");
    nm.classList.remove("nmi3");
    mn.classList.remove("mni4");
    nm.classList.remove("nmi4");
    mn.classList.remove("mni6");
    nm.classList.remove("nmi6");
    mn.classList.remove("mni7");
    nm.classList.remove("nmi7");
    mn.classList.remove("mni8");
    nm.classList.remove("nmi8");
})
lb6.addEventListener('click' , function(){
    total.value = "74";
    recharge.classList.add("buy-recharge");
    show1.value = "74";
    show2.value = "7,000";
    nm.classList.add("nmi6");
    mn.classList.add("mni6");
    
    
    // Remove
    mn.classList.remove("mni1");
    nm.classList.remove("nmi1");
    mn.classList.remove("mni2");
    nm.classList.remove("nmi2");
    mn.classList.remove("mni3");
    nm.classList.remove("nmi3");
    mn.classList.remove("mni5");
    nm.classList.remove("nmi5");
    mn.classList.remove("mni4");
    nm.classList.remove("nmi4");
    mn.classList.remove("mni7");
    nm.classList.remove("nmi7");
    mn.classList.remove("mni8");
    nm.classList.remove("nmi8");
})
lb7.addEventListener('click' , function(){
    total.value = "185";
    recharge.classList.add("buy-recharge");
    show1.value = "185";
    show2.value = "17,500";
    nm.classList.add("nmi7");
    mn.classList.add("mni7");
    
    
    // Remove
    mn.classList.remove("mni1");
    nm.classList.remove("nmi1");
    mn.classList.remove("mni2");
    nm.classList.remove("nmi2");
    mn.classList.remove("mni3");
    nm.classList.remove("nmi3");
    mn.classList.remove("mni5");
    nm.classList.remove("nmi5");
    mn.classList.remove("mni6");
    nm.classList.remove("nmi6");
    mn.classList.remove("mni4");
    nm.classList.remove("nmi4");
    mn.classList.remove("mni8");
    nm.classList.remove("nmi8");
})
lb8.addEventListener('click' , function(){
    total.value = "10,600";
    recharge.classList.add("buy-recharge");
    show1.value = "10,600";
    show2.value = "1,000,000";
    nm.classList.add("nmi8");
    mn.classList.add("mni8");
    
    
    // Remove
    mn.classList.remove("mni1");
    nm.classList.remove("nmi1");
    mn.classList.remove("mni2");
    nm.classList.remove("nmi2");
    mn.classList.remove("mni3");
    nm.classList.remove("nmi3");
    mn.classList.remove("mni5");
    nm.classList.remove("nmi5");
    mn.classList.remove("mni6");
    nm.classList.remove("nmi6");
    mn.classList.remove("mni7");
    nm.classList.remove("nmi7");
    mn.classList.remove("mni4");
    nm.classList.remove("nmi4");
})
// Test Total $


// Input Value Other input value =

let rdb = document.querySelector('.recharge-nn');
let rbigbx = document.querySelector('.recharge-big-box');

recharge.addEventListener('click' , function(){
    if (rdb.classList.contains('recharge-show')){
        rdb.classList.add('recharge-hide')
        rdb.addEventListener('animationend' , remove);
    } else {
        rdb.classList.add('recharge-show');
        rdb.removeEventListener('animationend' , remove);
    }
})
rbigbx.addEventListener('click' , function(){
    if (rdb.classList.contains('recharge-hide')){
        rdb.classList.add('recharge-show')
        rdb.removeEventListener('animationend' , remove);
    } else {
        rdb.classList.add('recharge-hide');
        rdb.addEventListener('animationend' , remove);
    }
})


// Input Value Other input value =

total.oninput = showValue;
// coin.oninput = showValue2;


function showValue(){
    show1.value = this.value;
}

// function showValue2(){
//     show2.value = this.value;
// }
// Input Value Other input value =