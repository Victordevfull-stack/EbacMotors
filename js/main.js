$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true,
        arrows:false
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{ placeholder: '(00) 98753-5432'});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeinteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu Nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfIvalids();
            console.log(camposIncorretos)
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})