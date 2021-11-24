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

    $("#management").click(function() {
        $("#management p").css('color', '#029A3C')
        $("#oveview p").css('color', 'unset')
        $(".ourmanagerment").toggle();
        $(".overview").hide();
        $(".history").hide();
        $(".bg-light").css("opacity", '1');
    })

    $("#overview").click(function() {
        $("#overview").css('color', '#029A3C!important')
        $("#management p").css('color', 'unset')
        $(".overview").toggle();
        $(".ourmanagerment").hide();
        $(".history").hide();
        $(".bg-light").css("opacity", '0.7');
    })

    $("#history").click(function() {
        $("#history").css('color', '#029A3C!important')
        $("#management p").css('color', 'unset')
        $(".history").toggle();
        $(".ourmanagerment").hide();
        $(".overview").hide();
        $(".bg-light").css("opacity", '1');
    })

    let check = 0;
    $(".text-p1-arrow").on("click", function() {
        if (check === 0) {
            $(".text-p1-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check = 1;
        } else {
            $(".text-p1-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check = 0;
        }

        $(".text-p1").toggle();
    })

    let check1 = 0;
    $(".text-p2-arrow").on("click", function() {
        if (check1 === 0) {
            $(".text-p2-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check1 = 1;
        } else {
            $(".text-p2-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check1 = 0;
        }
        $(".text-p2").toggle();
    })
    let check3 = 0;
    $(".text-p3-arrow").on("click", function() {
        if (check3 === 0) {
            $(".text-p3-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check3 = 1;
        } else {
            $(".text-p3-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check3 = 0;
        }
        $(".text-p3").toggle();
    })
    let check4 = 0;
    $(".text-p4-arrow").on("click", function() {
        if (check4 === 0) {
            $(".text-p4-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check4 = 1;
        } else {
            $(".text-p4-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check4 = 0;
        }
        $(".text-p4").toggle();
    })
    let check5 = 0;
    $(".text-p5-arrow").on("click", function() {
        if (check5 === 0) {
            $(".text-p5-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check5 = 1;
        } else {
            $(".text-p5-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check5 = 0;
        }
        $(".text-p5").toggle();
    })
    let check6 = 0;
    $(".text-p6-arrow").on("click", function() {
        if (check6 === 0) {
            $(".text-p6-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check6 = 1;
        } else {
            $(".text-p6-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check6 = 0;
        }
        $(".text-p6").toggle();
    })
    let check7 = 0;
    $(".text-p7-arrow").on("click", function() {
        if (check7 === 0) {
            $(".text-p7-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check7 = 1;
        } else {
            $(".text-p7-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check7 = 0;
        }
        $(".text-p7").toggle();
    })
    let check8 = 0;
    $(".text-p8-arrow").on("click", function() {
        if (check8 === 0) {
            $(".text-p8-arrow i").removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
            check8 = 1;
        } else {
            $(".text-p8-arrow i").removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
            check8 = 0;
        }
        $(".text-p8").toggle();
    })

})

function removeClass(nameclass) {

}