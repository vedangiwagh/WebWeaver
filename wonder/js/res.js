// $("body").on("mousemove", function (e) {
//   //   var x = e.pageX,
//   //       y = e.pageY,
//   //       w = $(window).width()/2;

//   //   if(x > w){
//   //     var dir = "right"
//   //     } else if(x < w){
//   //       var dir = "left"
//   //       }

//   //   console.log(dir);


// });

particlesJS("particles-js", {

  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "http://www.stickpng.com/assets/images/58e9117beb97430e819064d6.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 2,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "top-right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },



  "interactivity": {
    "detect_on": "canvas",

    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },

      "onclick": {
        "enable": true,
        "mode": "remove"
      },
      "resize": true
    },

    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 10,
        "size": 40,
        "duration": 2,
        "opacity": 5,
        "speed": 3
      },

      "repulse": {
        "distance": 200,
        "duration": 0.5
      },

      "push": {
        "particles_nb": 5
      },

      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});