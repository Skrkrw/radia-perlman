var score = 0;
$(document).ready(function () {

    $("#start").click(function () {
        $(this).css("display", "none");
        $("#box1").css("display", "block");

    });


    $(".cardright1").click(function () {
        $(".card1").fadeOut(500);
        $("#box2").css("display", "block");
        alert("Good job");
        score +=1;
    });

    $(".cardleft1").click(function () {
        alert("Try again");
    });


    $(".cardleft2").click(function () {
        $(".card2").fadeOut(500);
        $("#box3").css("display", "block");
        alert("Good job");
        score +=1;
    });

    $(".cardright2").click(function () {
        alert("Try again");
    });


    $(".cardleft3").click(function () {
        $(".card3").fadeOut(500);
        $("#box4").css("display", "block");
        alert("Good job");
        score +=1;
    });

    $(".cardright3").click(function () {
        alert("Try again");
    });


    $(".cardright4").click(function () {
        $(".card4").fadeOut(500);
        $("#box5").css("display", "block");
        alert("Good job");
        score +=1;
    });

    $(".cardleft4").click(function () {
        alert("Try again");
    });


    $(".cardleft5").click(function () {
        $(".card5").fadeOut(500);
        $("#box6").css("display", "block");
        alert("Good job");
        score +=1;
        console.alert(score);
    });

    $(".cardright5").click(function () {
        alert("Try again");
    });


});//DRY Dont Reapeat Yourself