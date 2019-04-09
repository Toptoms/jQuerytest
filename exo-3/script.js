console.log("exercice 3");


let $jQueryTitre = $('h1');
let $jQueryTagline = $('#tagline');
let $jQueryGly = $('glyphicon-log-in');


$(document).ready(function () {
    console.log('Je peux maintenant écrire du code JQuery')

    //********************************************* avec variable 
    $jQueryTitre.text('TomTom')// rajouter du texte
    $jQueryTagline.text('jQuery it is the life')

    //********************************************* sans variable
    $('#myNavbar > ul:first').remove()// retierer tout e contenu depuis les premier ul
    $('.glyphicon-log-in').removeClass("glyphicon glyphicon-log-in").addClass('glyphicon glyphicon-glass')// remplacer le glyphicon
    $('footer > p').text('**Copyright 2020**').css({ 'font-weight': 'bold' }).addClass('intro')// rajouter du texte
    rename()
    add()

});

function add() {
    let $pic = $('<img></img>')// creer une image
    $pic.attr('src', 'image/fond.jpeg');// integrer src à img
    $pic.css({ 'width': '100%', 'height': '800px' }) // definir un style
    $pic.insertAfter('h3')// insert apres balise h3
    let $text =$('<h2>Bienvenue à la maison</h2>')
    $text.insertAfter($pic)

}

function rename() {
    var i = 1;
    $('.col-sm-3').each(function () {// petite boucle des famille

        $(this).find('p').text('Mon projet ' + i);// partir depuis l'ebjet commun '.col-sm-3' et aller a 'p' puis rajouter du texte +  incrementer de 1 a chaque tour 
        $(this).find('img').attr('src', 'image/' + i + '.jpg').css({ 'width': '280px', 'height': '280px' });// partir depuis l'ebjet commun '.col-sm-3' et aller a 'img' puis rajouter une image differente à chaque tour 

        i++
    })
}





