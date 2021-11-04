const myslide = document.querySelectorAll('.myslide'),
    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }
    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
}
$(document).ready(function() {

    $(".menu-link").click(function() {
        $(".nav_overlay").show();
        $(".nav_hiddent").show();
        $(".closer").show();
    })
    $(".nav_overlay").click(function() {
        $(".nav_hiddent").hide();
        $(".nav_overlay").hide();
        $(".closer").hide();
    })

    $(".closer").click(function() {
        $(".closer").hide();
        $(".nav_hiddent").hide();
    });
    $(".about_drop").click(function() {
        $(".menu_home").hide();
        $(".about").show();
    })
    $(".back_menu").click(function() {
        $(".about").hide();
        $(".menu_home").show();
    })
    $(".language_home").click(function() {
        $(".menu_home").hide();
        $(".language-hiddent").show();
    })
    $(".back_menu_language").click(function() {
        $(".menu_home").show();
        $(".language-hiddent").hide();
    })

})