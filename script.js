$(function () {

    $('#esconder').on('click', function () {

        $('h1').fadeOut();
    });

    $('#mostrar').click(function () {

        $('h1').fadeIn();
    });

    $('#vermelho').click(function () {

        $('h1').css('color', 'red');
        $('span')
        .text('Cor alterada para vermelho')
        .fadeIn()
        .css('color', 'red')
        .delay(1500)
        .fadeOut('slow');
    });

    $('#azul').click(function () {

        $('h1').css('color', 'blue')
        $('span')
        .text('Cor alterada para azul')
        .fadeIn()
        .css('color', 'blue')
        .delay(1500)
        .fadeOut('slow');
    });
});