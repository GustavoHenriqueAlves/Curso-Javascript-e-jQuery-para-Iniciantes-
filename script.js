$(function () {

    $('#esconder').on('click', function () {

        $('h1').fadeOut();
    });

    $('#mostrar').click(function () {

        $('h1').delay(3000);
        $('h1').fadeIn();
    });

    $('#vermelho').click(function () {

        $('h1').css('color', 'red');
    });

    $('#azul').click(function () {

        $('h1').css('color', 'blue');
    });
});