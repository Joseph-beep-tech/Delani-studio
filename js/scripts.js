$(document).ready(function() {
    $(".deg").click(function() {
    $(".me").show(1500);
    $(".me").show(1500);
    });
    $(".me").click(function() {
        $(".me").hide(1500);
        $(".deg").show(1500);
    });
    $(".deg").click(function() {
        $(".deg").hide(1500);
        $(".me").show(1500);
    });
    $(".clue").click(function() {
        $(".wes").show(1500);
        $(".wes").show(1500);
    });
    $(".wes").click(function() {
        $(".wes").hide(1500);
        $(".clue").show(1500);
    });
    $(".clue").click(function() {
        $(".clue").hide(1500);
        $(".wes").show(1500);
    });
    $(".icon").click(function() {
        $(".overlay-1").show(1500);
        $(".overlay-1").show(1500);
    });
    $(".overlay-1").click(function() {
        $(".overlay-1").hide(1500);
        $(".icon").show(1500);
    });
    $(".icon").click(function() {
        $(".icon").hide(1500);
        $(".overlay-1").show(1500);
    });
});
$(document).ready(function() {
    $(".j1").hover(function() {
        $("#dark").toggle();
    });

    $(".j2").hover(function() {
    $("#ont").toggle();
    });

    $(".j3").hover(function() {
    $("#mid").toggle();
    });

    $(".j4").hover(function() {
    $("#car").toggle();
    });
  
    $(".j5").hover(function() {
    $("#gud").toggle();
    });

    $(".j6").hover(function() {
    $("#sach").toggle();
    });

    $(".j7").hover(function() {
    $("#bun").toggle();
    });

    $(".j8").hover(function() {
    $("#gif").toggle();
    });

});
function  love() {
    var name = document.getElementById("name").value;
    if(name){
    alert("Thank you " + name + " for being in touch with us!");
} else{
    alert(" please enter your name and email");
}
};


