$(function () {

    $('#esconder').on('click', function () {

        $('h1').fadeOut();
    });

    $('#mostrar').click(function () {

        $('h1').fadeIn();
    });

    $('#vermelho').click(function () {

        $('h1').css('color', 'red');
        $('span').text('Cor alterada para vermelho');
        $('span').fadeIn();
        $('span').css('color', 'red');
        $('span').delay(1500);
        $('span').fadeOut('slow');
    });

    $('#azul').click(function () {

        $('h1').css('color', 'blue');
        $('span').text('Cor alterada para azul');
        $('span').fadeIn();
        $('span').css('color', 'blue');
        $('span').delay(1500);
        $('span').fadeOut('slow');
    });
});