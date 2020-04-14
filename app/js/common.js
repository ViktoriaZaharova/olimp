$('.main-slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true
});

$('.product-sale__slider').slick({
    slidesToShow: 4,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1460,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.popular-category__slider').slick({
    slidesToShow: 4,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1460,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 576) {
        $('.team-wrapper:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('.analog-product__wrapper:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    } else {
        $(".team-wrapper.slick-initialized").slick("unslick");
        $(".analog-product__wrapper.slick-initialized").slick("unslick");
    }
});
// slick active

$('.product-slider__max').slick({
    slidesToShow: 1,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    asNavFor: '.product-slider__min',
});

$('.product-slider__min').slick({
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    asNavFor: '.product-slider__max',
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeToggle();
});

$('.links-item__search').click(function () {
    $('.header-center').fadeToggle();
});


$('.mobile-menu .btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

$('.sidebar .btn-close').click(function () {
    $('.sidebar').fadeOut();
});

$('.panel-heading .dropdown-menu__title').click(function () {
    $(this).parent().toggleClass('open').find('.block-hidden').slideToggle();
});


$('.dropdown-item__button-click').click(function () {
    $('.dropdown-menu-wrapper').slideToggle();
});

$('.mobile-menu .dropdown-item__button').click(function () {
    $(this).siblings('.dropdown-menu-wrapper').slideToggle();
});

$('.down').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1 + 'шт';
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1 + 'шт');
    $input.change();
    return false;
});

$(function () {
    $("#filter__range").slider({
        min: 0,
        max: 100000,
        values: [2500, 10000],
        range: true,
        stop: function (event, ui) {

            $('.price-range-min.value').html($("#filter__range").slider("values", 0));
            $('.price-range-max.value').html($("#filter__range").slider("values", 1));
        },

        slide: function (event, ui) {

            $('.price-range-min.value').html($("#filter__range").slider("values", 0));
            $('.price-range-max.value').html($("#filter__range").slider("values", 1));
        }
    });


    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1) + '</span>');
});

// hidden list > 5
$('.brands-filter').each(function () {
    if ($(this).find('.brands-item').length > 8) {
        $(this).find('.brands-item').slice(8).hide();
    }

});

// hidden list > 5

// show list all
$('.all-brands').on('click', function (e) {
    e.preventDefault();
    $('.brands-item:hidden').slice(0, 8).slideDown();

    var onBlock = $('.brands-item:hidden').length;
    if (onBlock <= 0) {
        $('.all-brands').hide();
    }
});

// show list all

$('.btn-filter').click(function () {
    $('.sidebar').fadeToggle();
});

$(function () {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});
