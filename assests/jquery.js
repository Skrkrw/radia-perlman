var score = 0;
$(document).ready(function () {

    $("#start-button").click(function () {
        $(this).css("display", "none");
        // $("#box1").css("display", "block");
        $("#box1").removeClass("d-none")
    });


    $(".cardright1").click(function () {
        $(".card1").fadeOut(500);
        $("#question1").fadeOut(500);
        
        $("#box2").removeClass("d-none")
        alert("Good job");
        // $("#good1").removeClass("d-none").fadeOut(40000);
        score +=1;
    });

    $(".cardleft1").click(function () {
        alert("Try again");
    });


    $(".cardleft2").click(function () {
        $(".card2").fadeOut(500);
        $("#question2").fadeOut(500);
        $("#box3").removeClass("d-none")
        alert("Good job");
        $("#good2").removeClass("d-none").fadeOut(4000);
        score +=1;
    });

    $(".cardright2").click(function () {
        alert("Try again");
    });


    $(".cardleft3").click(function () {
        $(".card3").fadeOut(500);
        $("#question3").fadeOut(500);
        $("#box4").removeClass("d-none")
        alert("Good job");
        $("#good3").removeClass("d-none").fadeOut(4000);
        score +=1;
    });

    $(".cardright3").click(function () {
        alert("Try again");
    });


    $(".cardright4").click(function () {
        $(".card4").fadeOut(500);
        $("#question4").fadeOut(500);
        $("#box5").removeClass("d-none")
        alert("Good job");
        $("#good4").removeClass("d-none").fadeOut(4000);
        score +=1;
    });

    $(".cardleft4").click(function () {
        alert("Try again");
    });


    $(".cardleft5").click(function () {
        $(".card5").fadeOut(500);
        $("#question5").fadeOut(500);
        $("#box6").removeClass("d-none")
        alert("Good job");
        $("#good5").removeClass("d-none").fadeOut(4000);
        score +=1;
        console.alert(score);
    });

    $(".cardright5").click(function () {
        alert("Try again");
    });


});//DRY Dont Reapeat Yourself