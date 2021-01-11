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

    $('#a1').click(function(){

        $('#i2').hide();
        $('#i1').show();
    });

    $('#a2').click(function(){

        $('#i1').hide();
        $('#i2').show();
    });
});