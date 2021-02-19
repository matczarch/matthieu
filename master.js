var animation = bodymovin.loadAnimation({
// on demande à bodymovin de charger l'animation


  // conteneur de l'animation, obligatoire
  container: document.getElementById('mon-animation'),

  // chemin vers le fichier JSON, obligatoire
  path: 'mon-animation.json',

  // moteur de rendu (svg, canvas ou html), obligatoire
  renderer: 'svg',

  // si l'animation est une boucle
  loop: false,

  // si l'animation se lance autmatiquement
  autoplay: false,

  // nom permettant de référencer l'expression
  name: "Hello World",
})

// random reponse
var essai; 
var sequences = [
   [543,1049],
   [1129,1625],
   [1712,2221],
   [2296,2802],
   [2893,3400],
   [3489,3996],
   [4106,4612],
   [4652,5160],
   [5221,5729],
   [5802,6309],

];

function animation_a_hasard () {
   var sequence = sequences[ Math.floor( Math.random() * (sequences.length - 1) ) ];
   console.info('séquence sélectionnée', sequence);
   essai = sequence; 
   return sequence, essai;
}


animation.addEventListener( 'DOMLoaded', function () {
    animation.playSegments([0,326],true);
   animation.wrapper.addEventListener('click', function () {
   	console.log(animation.currentFrame)

      // si on est entre la frame 100 ET la frame 400 incluses
      // ou plutôt : si la frame actuelle >= 100 et <= 400
      if ( animation.currentFrame >= 180 && animation.currentFrame <= 325 ) {
         animation.playSegments([ [326,542] , animation_a_hasard() ],true);
         console.info(essai);

      // autre test si le premier n'est pas vrai
      // si la frame courant est >= 0 ET <= 50
      // OU (||)
      // si entre 550 et 600 incluses
      } else if (false) {
         console.info('restart');
      
      }
   });
} )

if (essai = [543,1049]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [1129,1625]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  == [1712,2221]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [2296,2802]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [2893,3400]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [3489,3996]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [4106,4612]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [4652,5160]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [5221,5729]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}
else if (essai  = [5802,6309]) {
   animation.addEventListener( 'DOMLoaded', function () {
      animation.playSegments([0,325],true);
     animation.wrapper.addEventListener('click', function () {
        console.log(animation.currentFrame)
   
        // si on est entre la frame 100 ET la frame 400 incluses
        // ou plutôt : si la frame actuelle >= 100 et <= 400
        if ( animation.currentFrame >= 150 && animation.currentFrame <= 505) {
           console.info('vitesse : 2x');
           animation.playSegments([0,325],true);
   
   
        // autre test si le premier n'est pas vrai
        // si la frame courant est >= 0 ET <= 50
        // OU (||)
        // si entre 550 et 600 incluses
        } else if (false) {
           console.info('restart');
        
        }
     });
   } )
}








