$(function () {

    $('#esconder').on('click', function () {

        $('h1').fadeOut();
    });

    $('#mostrar').click(function () {

        $('h1').fadeIn();
    });

    $('#vermelho').click(function () {

        $('h1').addClass('red');
        $('span')
        .addClass('red')
        .text('Cor alterada para vermelho')
        .fadeIn()
        .delay(1500)
        .fadeOut('slow');
    });

    $('#azul').click(function () {

        $('h1').addClass('blue')
        $('span')
        .addClass('blue')
        .text('Cor alterada para azul')
        .fadeIn()
        .delay(1500)
        .fadeOut('slow');
    });
});