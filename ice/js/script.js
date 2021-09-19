window.addEventListener('DOMContentLoaded', function () {

    //sliders
    const swiperOne = new Swiper('.slider-one', {

        simulateTouch: false,
        loop: true,
        speed: 400,

        spaceBetween: 50,
        slidesPerView: 3,

        slideActiveClass: 'slide-one-active',
        slideClass: 'slide-one',
        wrapperClass: 'wrapper-one',


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        centeredSlides: true,


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },

        breakpoints: {

            320: {
                spaceBetween: 150,
                slidesPerView: 1,
                centeredSlides: false,
            },
            640: {
                spaceBetween: 90,
                slidesPerView: 2,
                centeredSlides: false,
            },
            768: {
                spaceBetween: 85,
                slidesPerView: 2,
                centeredSlides: false,
            },

            1024: {
                spaceBetween: 100,
                slidesPerView: 2,
                centeredSlides: false,
            },
            1200: {
                spaceBetween: 50,
                slidesPerView: 3,
            }
        }

    });

    const swiperTwo = new Swiper('.slider-two', {

        simulateTouch: false,
        loop: true,
        speed: 400,
        slidesPerView: 1,

        slideActiveClass: 'slide-two-active',
        slideClass: 'slide-two',
        wrapperClass: 'wrapper-two',


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },


    });

    const swiperThree = new Swiper('.slider-three', {

        simulateTouch: false,
        loop: true,
        speed: 400,
        slidesPerView: 4,
        initialSlide: 2,

        slideActiveClass: 'slide-three-active',
        slideClass: 'slide-three',
        wrapperClass: 'wrapper-three',


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },

        breakpoints: {

            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },

            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }

    });

    const swiperFour = new Swiper('.slider-four', {

        simulateTouch: false,
        loop: true,
        speed: 400,
        slidesPerView: 4,

        slideActiveClass: 'slide-four-active',
        slideClass: 'slide-four',
        wrapperClass: 'wrapper-four',


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },

        breakpoints: {

            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },

            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }


    });


    //menu-burger
    const menuIcon = document.querySelector('.menu__icon'),
        nav = document.querySelector('.nav');

    menuIcon.addEventListener('click', function () {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('_active');
        nav.classList.toggle('_active');
    });


    //scrolls
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            if (menuIcon.classList.contains('_active')) {
                document.body.classList.remove('lock');
                menuIcon.classList.remove('_active');
                nav.classList.remove('_active');
            }

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };



    //selects 
    const defaultSelect = () => {
        const element = document.querySelector('.default');
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: false,
        });
    }

    defaultSelect();

    const multiDefault = () => {
        const elements = document.querySelectorAll('.multi-default');
        elements.forEach(el => {
            const choices = new Choices(el, {
                searchEnabled: false,
                itemSelectText: false,
            });
        })
    }
    multiDefault();

});