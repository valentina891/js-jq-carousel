// per tornare alla immagine precedente
// con cerchio corrispondente:
$(document).ready(function(){

    $('.prev').click(function(){
        prevImg();
    });

    function prevImg() {
        var imgAttiva = $('.images img.active');
        var cerchioAttivo = $('.nav i.active');

        imgAttiva.removeClass('active');
        cerchioAttivo.removeClass('active');

        if (imgAttiva.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            imgAttiva.prev().addClass('active');
            cerchioAttivo.prev().addClass('active');
        }
    }

// per vedere l'immagine successiva
// con cerchio corrispondente:

    $('.next').click(function(){
        nextImg();
    });

    function nextImg() {
        var imgAttiva = $('.images img.active');
        var cerchioAttivo = $('.nav i.active');

        imgAttiva.removeClass('active');
        cerchioAttivo.removeClass('active');

        if (imgAttiva.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            imgAttiva.next().addClass('active');
            cerchioAttivo.next().addClass('active');
        }
    }
});


// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS

$('.nav i').click(
    function() {
        var posizione = $(this).index();
        console.log(posizione);

        $('.images img').removeClass('active');
        $('.images img').eq(posizione).addClass('active');

        $('.nav i').removeClass('active');
        $('.nav i').eq(posizione).addClass('active');

    }
)
