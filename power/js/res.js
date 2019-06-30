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
      "value": 250,
      "density": {
        "enable": true,
        "value_area": 3000
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://image.ibb.co/g9eFcF/logo_transparent.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.6,
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
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 8,
      "direction": "random",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 3600,
        "rotateY": 3600
      }
    }
  },



  "interactivity": {
    "detect_on": "canvas",

    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
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
        "distance": 100,
        "size": 4,
        "duration": 2,
        "opacity": 1,
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