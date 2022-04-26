//hides all div
$(".Part-Two-Yes, .Part-Two-No, .Story-Ending-Yes, .Story-Ending-No").hide();

// yes part
$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".firstScene").hide();

});


$(".jude").click(function() {
    $(".Story-Ending-Yes").show();
    $(".Part-Two-Yes").hide();
});

// no part

$(".no-button").click(function() {
    $(".Part-Two-No").show();
    $(".firstScene").hide();
});

$(".taryn").dblclick(function() {
    $(".Story-Ending-No").show();
    $(".Part-Two-No").hide();
});