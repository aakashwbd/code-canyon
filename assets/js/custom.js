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



//
// $('#demo').equalizer({
//
//     // height / width
//     width: 400,
//     height: 150,
//
//     // colors
//     color: "#0f1957",
//     color1: "#a94442",
//     color2: "#f2b400",
//
//     // the number of bars
//     bars: 15,
//
//     // margin between bars
//     barMargin: 0.5,
//
//     // the number of components in one bar
//     components: 10,
//
//     // margin between components
//     componentMargin: 0.5,
//
//     // rate of equalizer frequency
//     frequency: 10,
//
//     // refresh time of animation
//     refreshTime: 100
//
// });

// //A function to return a random number between a min and a max value
// function randomNumber(min, max) {
//     number =  Math.floor((Math.random()*(max-min))+ min);
//     return number;
// }
//
// //Initialise starting values
// var purple, blue, cyan, green, yellow, orange, red;
// purple = 160;
// blue = 140;
// cyan = 100;
// green = 140;
// yellow = 180;
// orange = 70;
// red = 200;
//
// //To start with the equalizer is paused
// var playing=false;
//
// // A Function to change the height of a column more or less randomly
// function changeHeight(column, height) {
//     height-=randomNumber(-20,20);
//     if (height>200) height=200;
//     if (height<5) height=5;
//     column.style.height=height + "px";
//     return height;
// }
//
//
// //A Function that will be run every 50ms to animate the equalizer
// function animate() {
//     if (playing) {
//         purple = changeHeight(document.getElementById("purple"),purple);     blue = changeHeight(document.getElementById("blue"),blue);
//         cyan = changeHeight(document.getElementById("cyan"),cyan);
//         green = changeHeight(document.getElementById("green"),green);
//         yellow = changeHeight(document.getElementById("yellow"),yellow);
//         orange = changeHeight(document.getElementById("orange"),orange);
//         red = changeHeight(document.getElementById("red"),red);
//
//         //Repeat this function every 50 ms
//         setTimeout(animate, 50);
//     }
// }
//
// //A Function to play or pause the animation
// function play() {
//     if (playing) {
//         playing=false;
//         document.getElementById("button").value="Play";
//     } else {
//         playing=true;
//         document.getElementById("button").value="Pause";
//         animate();
//     }
// }