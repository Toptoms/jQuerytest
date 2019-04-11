console.log("exercice 5");


$(document).ready (() => {

    $('img').on('click', (event) => {
        $(event.currentTarget)
        var choice = $(event.currentTarget).parents('.panel').find('.panel-heading').text()
        console.log("tu as choisi " + choice);
    });

});

