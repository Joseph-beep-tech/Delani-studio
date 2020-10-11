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