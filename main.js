//-- VERSIONE VUE --

var app = new Vue({

    el: '#app',
    data: {
        contatore: 0,
        img: [
            'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
            'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
        ]
    },
    methods: {
        //-- per UNICA FUNZIONE PASSO UN PARAMETRO A @click="..." --
        cambiaPic(direzione){
            if (direzione == 'prev') {
                if (this.contatore === 0) {
                    this.contatore = this.img.length - 1;
                }
                else {
                    this.contatore--;
                }
            }
            else {
                if (this.contatore < this.img.length - 1) {
                    this.contatore++;
                }
                else {
                    this.contatore = 0;
                }    
            }
        }
        // prevPic() {
        //     if (this.contatore === 0) {
        //         this.contatore = this.img.length - 1;
        //     }
        //     else {
        //         this.contatore--;
        //     }
        // },
        // nextPic() {
        //     if (this.contatore < this.img.length - 1) {
        //         this.contatore++;
        //     }
        //     else {
        //         this.contatore = 0;
        //     }
        // }
    }

})

//-- VERSIONE JS-JQ --
// per tornare alla immagine precedente
// con cerchio corrispondente:
// $(document).ready(function(){
//
//     $('.prev').click(function(){
//         prevImg();
//     });
//
//     function prevImg() {
//         var imgAttiva = $('.images img.active');
//         var cerchioAttivo = $('.nav i.active');
//
//         imgAttiva.removeClass('active');
//         cerchioAttivo.removeClass('active');
//
//         if (imgAttiva.hasClass('first')) {
//             $('.images img.last').addClass('active');
//             $('.nav i.last').addClass('active');
//         } else {
//             imgAttiva.prev().addClass('active');
//             cerchioAttivo.prev().addClass('active');
//         }
//     }

// per vedere l'immagine successiva
// con cerchio corrispondente:

//     $('.next').click(function(){
//         nextImg();
//     });
//
//     function nextImg() {
//         var imgAttiva = $('.images img.active');
//         var cerchioAttivo = $('.nav i.active');
//
//         imgAttiva.removeClass('active');
//         cerchioAttivo.removeClass('active');
//
//         if (imgAttiva.hasClass('last')) {
//             $('.images img.first').addClass('active');
//             $('.nav i.first').addClass('active');
//         } else {
//             imgAttiva.next().addClass('active');
//             cerchioAttivo.next().addClass('active');
//         }
//     }
// });

// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS

// $('.nav i').click(
//     function() {
//         var posizione = $(this).index();
//         console.log(posizione);
//
//         $('.images img').removeClass('active');
//         $('.images img').eq(posizione).addClass('active');
//
//         $('.nav i').removeClass('active');
//         $('.nav i').eq(posizione).addClass('active');
//
//     }
// )
