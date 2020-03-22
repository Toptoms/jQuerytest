console.log("exercice 8");

$(document).ready(function () {
    $('.group1').colorbox({rel: 'group1', transition: "fade", width: "75%", height: "75%"});

    $('#datepicker').datepicker({
        inline: true
    });
});