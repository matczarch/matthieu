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
   console.info( 'séquence sélectionnée', sequence );
   return sequence;
}

animation.addEventListener( 'DOMLoaded', function () {
    animation.playSegments([0,326],true);
   animation.wrapper.addEventListener('click', function () {
   	console.log(animation.currentFrame)

      // si on est entre la frame 100 ET la frame 400 incluses
      // ou plutôt : si la frame actuelle >= 100 et <= 400
      if ( animation.currentFrame >= 300 && animation.currentFrame <= 325 ) {
         console.info('vitesse : 2x');
         animation.playSegments([ [326,542] , animation_a_hasard() ],true);


      // autre test si le premier n'est pas vrai
      // si la frame courant est >= 0 ET <= 50
      // OU (||)
      // si entre 550 et 600 incluses
      } else if (false) {
         console.info('restart');
      
      }
   });
} )








//boutons
  var mon_bouton = document.getElementById( 'bouton-lire' );

  mon_bouton.addEventListener( 'click', function () {
   animation.play();
})

var mon_bouton = document.getElementById( 'bouton-pause' );

  mon_bouton.addEventListener( 'click', function () {
   animation.pause();
})

var mon_bouton = document.getElementById( 'bouton-1' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 0,326 ], true );
})

var mon_bouton = document.getElementById( 'bouton-2' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 327,542 ], true );
   sequence;

})

var mon_bouton = document.getElementById( 'bouton-3' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 543,1049 ], true );
})

var mon_bouton = document.getElementById( 'bouton-4' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 1129,1625 ], true );
})

var mon_bouton = document.getElementById( 'bouton-5' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 1712,2221 ], true );
})

var mon_bouton = document.getElementById( 'bouton-6' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 2296,2802 ], true );
})

var mon_bouton = document.getElementById( 'bouton-7' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 2893,3400 ], true );
})

var mon_bouton = document.getElementById( 'bouton-8' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 3489,3996 ], true );
})

var mon_bouton = document.getElementById( 'bouton-9' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 4106,4612 ], true );
})

var mon_bouton = document.getElementById( 'bouton-10' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 4652,5160 ], true );
})

var mon_bouton = document.getElementById( 'bouton-11' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 5221,5729 ], true );
})

var mon_bouton = document.getElementById( 'bouton-12' );

  mon_bouton.addEventListener( 'click', function () {
   animation.playSegments( [ 5802,6309 ], true );
})