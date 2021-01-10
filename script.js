$(function () {

    $('#esconder').on('click', function () {

        $('h1').hide();
    });

    $('#mostrar').click(function () {

        $('h1').show();
    });

    $('#vermelho').click(function () {

        $('h1').css('color', 'red');
    });


    $('#azul').click(function () {

        $('h1').css('color', 'blue');
    });
});