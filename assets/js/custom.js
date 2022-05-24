
/**
 * Constant variables
 * */
const constants = {
    home: {
        banner: document.querySelector('.banner-five'),
        headerPlayerPlayButton : document.getElementById('jp-play')
    }
}


/**
 * Fireworks settings
 * */
const container = document.querySelector('.banner-five')
const fireworks = new Fireworks(container, {
    rocketsPoint: 50,
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    speed: 2,
    acceleration: 1.05,
    friction: 0.95,
    gravity: 1.5,
    particles: 50,
    trace: 3,
    explosion: 5,
    autoresize: true,
    brightness: {
        min: 50,
        max: 100,
        decay: { min: 0.015, max: 0.03 }
    },
    mouse: {
        click: false,
        move: false,
        max: 3
    },
    boundaries: {
        x: 50,
        y: 50,
        width: container.clientWidth,
        height: container.clientHeight
    },
    sound: {
        enable: true,
        files: [
            'explosion0.mp3',
            'explosion1.mp3',
            'explosion2.mp3'
        ],
        volume: { min: 1, max: 2 },
    }
});


const pageLoadHandler = () => {
    window.addEventListener('load', ()=>{
        fireworks.start();

        $('#preloader').removeClass('d-none')

        setTimeout(function() {
            $('#preloader').addClass('d-none')
        }, 3000);


    })
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('header').classList.add('sticky-navbar');
        } else {
            document.querySelector('header').classList.remove('sticky-navbar');
        }
    });
}
pageLoadHandler()


AOS.init();


