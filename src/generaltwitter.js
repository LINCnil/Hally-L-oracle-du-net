//+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+//
//                      |H|a|l|l|y|                     //
//              +-+-+-+-+-+-+ +-+-+ +-+-+-+             //
//              |O|r|a|c|l|e| |d|u| |N|e|t|             //
//+-+-+-+-+-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+-+-+-+-//

//-------------------------------------------------------//
//       Un projet en partenariat avec la CNIL           //
//     Designer & développeur : Victoria Duchatelle      //
//                                                       //
//    Remerciements à Jérôme Gorin, Vincent Toubiana,    //
//    Jules Alexiu et Vera Van de Seyp pour leur aide    //
//                                                       //
//          Licence creative common BY-NC-SA             //
//                                                       //

var browser = chrome; /*for firefox*/

/*keep the original interface header on top of everything*/
var header = document.querySelector(".global-nav");
header.id = "header";


//---------------------------------------------//
//   		Function to replace the divs           //
//--------------------------------------------//

function replace(queryselectorvalue, callback){
  var card = document.querySelectorAll(queryselectorvalue);
    [].forEach.call(card, callback);
}

//---------------------------------------------//
//   	 Function to replace the divs ends       //
//--------------------------------------------//



    function legende(div){
      var profilecard = document.querySelector(".DashboardProfileCard.module");
      profilecard.id = "profilecard";

       $("#profilecard").hide();


        var rect = div.getBoundingClientRect();
        var parent = div.parent;
        var parentNode = div.parentNode;

        var legende = document.createElement('div');
        legende.id = "legende";
        console.log(legende.id);
        legende.style.color = "#000000";
        legende.style.color = "#000000";
        legende.style.backgroundColor = "white";
        legende.style.display = "block";
        legende.style.left = rect.left;
        legende.style.right = rect.right;
        legende.style.height = "100%";
        legende.style.overflow = "hidden";
        legende.style.marginTop = "0.1em";
        legende.style.marginBottom = "1em";
        legende.style.paddingRight= "2em";
        legende.style.paddingLeft= "1.2em";
        legende.style.paddingBottom = "1.5em";
        legende.style.overflowX = "hidden";

        $(document).scroll(function(){
        if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
        legende.style.position = "fixed";
        legende.style.display = "block";
        legende.style.marginTop = "0.1em";
        legende.style.marginBottom = "1em";
        legende.style.left = "3.6%";
        legende.style.height = "30%";
        legende.style.width = "19.3%";
        legende.style.overflow = "scroll";
        legende.style.overflowX = "hidden";
  }  else if (document.body.scrollTop < 260 || document.documentElement.scrollTop < 260){

        legende.style.position = "";
        legende.style.display = "block";
        legende.style.left = rect.left;
        legende.style.right = rect.right;
        legende.style.height = "100%";
        legende.style.width = "83.3%";
        legende.style.overflow = "hidden";
        legende.style.marginTop = "0.1em";
        legende.style.marginBottom = "1.5em";
        legende.style.paddingBottom = "1.5em";
        legende.style.paddingRight= "1.9em";
        legende.style.paddingLeft= "1.1em";
        legende.style.zIndex = "0";
      }
    });

        var type = "<h9>LES COULEURS DES ALGOS T'EN DISENT PLUS SUR LEUR CARACTÈRE</h9>";
        var definitions = "<ul class='accordion'><li><a class='toggle' href='javascript:void(0);' id='pink'>LE BOSS</a><ul class='inner'>FONCTIONNEMENT<br>Plus on crée de liens, plus on est visible. Estime le nombre de reprises d’une page Internet dans le Web tout entier. Les contenus les plus «&nbspindexés&nbsp» sont les plus mis en avant.<br><br>OBJECTIF<br>Hiérarchiser, classer des résultats<br><br>EFFET<br>Uniformise et influence nos comportements, car nous utilisons davantage les services et les contenus mis en avant sur les moteurs de recherches et les réseaux sociaux.</ul></li><li><a class='toggle' href='javascript:void(0);' id='green'>LE DÉMAGO</a><ul class='inner'>FONCTIONNEMENT<br>Compte le nombre de clics et de vues des internautes qui manifestent activement un intérêt particulier. Mesure la popularité d’un site, évalue la gloire de ceux qui façonnent leur réputation sur les réseaux sociaux.  <br><br>OBJECTIF<br>  Hiérarchiser, classer sur la base des interactions avec les utilisateurs. Mesurer l'influence.<br><br>EFFET<br>Favorise le quantitatif plutôt que le qualitatif. La viralité des contenus mène à l’uniformisation culturelle.</ul></li><li><a class='toggle' href='javascript:void(0);' id='blue'>LE MÉDIUM</a><ul class='inner'>FONCTIONNEMENT<br>Analyse les comportements passés pour prédire les comportements futurs.Les systèmes de recommandations («&nbsptu as aimé ceci&nbsp», «&nbsptu aimeras cela&nbsp») reposent dessus. Ainsi que la publicité comportementale, qui nous propose des liens censés coller aux centres d’intérêt d’un utilisateur en matière d’achats.<br><br>OBJECTIF<br>Anticiper, devancer, deviner ce qui devrait plaire.<br><br>EFFET<br>Uniformise et influence nos comportements, car nous utilisons davantage les services et les contenus mis en avant sur les moteurs de recherches et les réseaux sociaux. </ul></li><li><a class='toggle' href='javascript:void(0);' id='orange'>LE SERVITEUR</a><ul class='inner'>FONCTIONNEMENT<br>Programmes mathématiques très complexes, deep learning.On apprend aux machines à déchiffrer dans quel environnement elles se trouvent. À reconnaître des images par exemple. C’est le futur cerveau des voitures autonomes.<br><br>OBJECTIF<br>Augmentation de nos capacités, gain de temps, exécuter certaines tâches complexe à la place des humains.<br><br>EFFET<br>Délégation de notre libre arbitre.</ul></li></ul>";
        var popularite = "<h12 style='color: rgb(79, 255, 141);'' id='popularite'>LE POPULAIRE</h12><br>";
        var prediction = "<h12 style='color: rgb(0, 60, 255);' id='prediction'>LE PRÉDICTIF</h12><br>";
        var delegation = "<h12 style='color: rgb(255, 171, 0);'' id='delegation'>L'AUTONOME</h12><br>";
        legende.innerHTML = type + definitions ;
        var definition = "";
        var element = document.querySelector(".trends");
        element.parentNode.insertBefore(legende, element);

        $('.toggle').click(function(e) {
          	e.preventDefault();

            var $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }
        });

    }

    replace('div.DashboardProfileCard.module', legende);
