console.log("exercice 4");


$(document).ready(() => {

    $('button').on('click', () => {
        let mail = $('input').val();
        alert('Merci ' + mail + ' ,nous vous tiendrons informé des différentes offres');
    })

    $("a:contains('Products')").on('dblclick', (event) => {
        $(event.currentTarget).hide();
    })

    let more = 0;
    $("img").on('click', () => {
        let caddy = $(".glyphicon-shopping-cart")
        more++
        $(" a:contains(Cart)").text(' Cart ' + more).prepend(caddy);
    })

    $('img').on('mouseenter', (event) => {
        $(event.currentTarget)
        console.log("L'utilisateur regarde " + $(event.currentTarget).parents('.panel').find('.panel-footer').text());
    });

    $('input').on('click', function() {
        console.log("tu clic!")

    });
    $('input').on('keypress', () => {
        console.log("arrete d'ecrire")
    });

});


console.log($("a:contains('Products')"))