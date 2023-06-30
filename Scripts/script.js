function GetPic(x) {
    var arr = new Array("images/img_126.jpg", "images/img_127.jpg", "images/img_128.jpg");
    return arr[x];
}

function checkNumber() {
    var count = document.getElementsByClassName("heead")[0].getAttribute("data-counter");
    count = parseInt(count) + 1;
    if (count === 3) {
        count = 0;
    }
    document.getElementsByClassName("heead")[0].setAttribute("data-counter", count);
    return count;
}

function changePic(c, select = "no", selectId = 0) {
    if (select == "no") {
        var pic = checkNumber();
    } else if (select == "yes") {
        var pic = selectId;
    }
    document.getElementsByClassName("heead")[0].setAttribute("data-counter", pic);
    //alert(pic);
    document.getElementsByClassName("heead")[0].src = GetPic(pic);
    //document.getElementsByClassName("header")[0].style.backgroundImage="url(../"+GetPic(pic)+")";
    changeTextColor(pic);
}

function changeTextColor(d) {
    for (i = 0; i < 3; i++) {
        document.getElementsByClassName("square")[i].classList = "square";
    }
    document.getElementsByClassName("square")[d].classList = "square square-pink";
}
h = setInterval(changePic, 5000);


function OpenMenu() {
    var adad = document.getElementsByClassName("part-menu")[0].getAttribute("data-coun");
    adad2 = parseInt(adad) + 10;
    if (adad2 === 0) {
        clearInterval(b);
    }
    document.getElementsByClassName("part-menu")[0].style.left = adad2 + "px";
    document.getElementsByClassName("part-menu")[0].setAttribute("data-coun", adad2);
}

function setOpenMenu() {
    b = setInterval(OpenMenu, 20);
}
document.getElementsByClassName("menu-icon-box")[0].addEventListener("click", setOpenMenu);





function CloseMenu() {
    var adadC = document.getElementsByClassName("part-menu")[0].getAttribute("data-coun");
    adadC2 = parseInt(adadC) - 10;
    if (adadC2 === -280) {
        clearInterval(d);
    }
    document.getElementsByClassName("part-menu")[0].style.left = adadC2 + "px";
    document.getElementsByClassName("part-menu")[0].setAttribute("data-coun", adadC2);
}

function setCloseMenu() {
    d = setInterval(CloseMenu, 20);
}
document.getElementById("box-m").addEventListener("click", setCloseMenu);




function headScroll() {
    var c = window.innerWidth;
    if (c > 500) {
        document.getElementsByClassName("logo-box")[0].style.backgroundColor = "rgb(25, 31, 40)";
        document.getElementsByClassName("logo-box")[0].style.boxShadow = "0 7px 30px 0 rgba(0, 0, 0, 0.3)";
        document.getElementsByClassName("logo-box")[0].style.position = "fixed";
    } else {
        document.getElementsByClassName("logo-box")[0].style.boxShadow = "0 7px 30px 0 rgba(0, 0, 0, 0.3)";
        document.getElementsByClassName("logo-box")[0].style.backgroundColor = "rgba(25, 31, 40,0)";

    }

}

function SlideBox(oprat) {
    var move = document.getElementsByClassName("container5-bottom")[0].getAttribute("data-move");
    if (oprat == "plus") {
        var move2 = parseInt(move) + 10;
        if (move2 == "-1350") {
            clickOnCircle(1);
            clearInterval(c);
        } else if (move2 == "-2690") {
            clickOnCircle(2);
            clearInterval(c);
        }
    } else if (oprat == "minus") {
        var move2 = parseInt(move) - 10;
        if (move2 == "-1350") {
            clickOnCircle(1);
            clearInterval(c);
        } else if (move2 == "-2690") {
            clickOnCircle(2);
            clearInterval(c);
        }
    }
    document.getElementsByClassName("container5-bottom")[0].style.transform = "translateX(" + move2 + "px)";
    document.getElementsByClassName("container5-bottom")[0].setAttribute("data-move", move2);
}

function setSlides(oprat) {
    setInterval(SlideBox, 100, oprat);
}

/*function SlideBox(plus,minus,numP1,numP2,numM1,numM2) {
    var move=document.getElementsByClassName("container5-bottom")[0].getAttribute("data-move");
    var move2=parseInt(move)-10;
        if (move2=="-1350"){
            clickOnCircle(1);
            clearInterval(c);
        }else if (move2=="-2690"){
            clickOnCircle(2);
            clearInterval(c);
        }

    document.getElementsByClassName("container5-bottom")[0].style.transform="translateX("+move2+"px)";
    document.getElementsByClassName("container5-bottom")[0].setAttribute("data-move",move2);
}*/
function clickOnCircle(x) {
    for (i = 0; i < 3; i++) {
        document.getElementsByClassName("circle")[i].classList = "circle";
    }
    document.getElementsByClassName("circle")[x].classList = "circle circle-active";
}

function clearTxt(x, event) {
    if (event.onvisibilitychange) {
        document.getElementsByTagName("input")[x].placeholder = "";
    } else if (event.click) {

    }
}