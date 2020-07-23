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

// var imgSelezionata = 0;
// $('.nav i:first').addClass('blue');
//
// $('.nav').click(function(){
// 	$('.nav').eq(imgSelezionata).removeClass('blue');
// 	$(this).addClass("blue");
// 	$('img').eq(imgSelezionata).hide();
// 	imgSelezionata=+$(this).data('num')-1;
// 	// $('img').eq(imgSelezionata).fadeIn();
// });
//
// $('.next').click(function(){
// 	$('.images').eq(imgSelezionata).hide();
// 	$('.nav').eq(imgSelezionata).removeClass('blue');
//
//     if(imgSelezionata<3)
// 		imgSelezionata++;
// 	else
// 		imgSelezionata=0;
//
// 	// $('.images').eq(imgSelezionata).fadeIn();
// 	$('.nav').eq(imgSelezionata).addClass('blue');
// });
//
// $('.prev').click(function(){
// 	$('.images').eq(imgSelezionata).hide();
// 	$('.nav').eq(imgSelezionata).removeClass('blue');
//
// 	if(imgSelezionata>0)
// 		imgSelezionata--;
// 	else
// 		imgSelezionata=3;
//
// 	// $('.images').eq(imgSelezionata).fadeIn();
// 	$('.nav').eq(imgSelezionata).addClass('blue');
// });
