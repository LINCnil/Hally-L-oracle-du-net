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
//-------------------------------------------------------//

//------------------------------------------------------------------------------------//
//   	                             	COUCHE 1                                      //
//------------------------------------------------------------------------------------//

//---------------------------------------//
//   	      Main functions             //
//---------------------------------------//

/*
 *
 */

//--------------------------------------------//
//   		         Text                     //
//--------------------------------------------//

//ratio basé sur la largeur

function contenu(dessin, someText, sizeHeight) {
    var textOptions = {
        fontSize: 20,
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
    };
    var textSize = new fabric.Text(someText, textOptions);
    var textBoxWidth = textSize.getWidth();

    if (dessin.width < textBoxWidth) {
        textBoxWidth = dessin.width - 10;
    }

    var textBox1 = new fabric.Textbox(someText, {
        width: textBoxWidth - 50,
        height: sizeHeight,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Arial',
    });

    textBox1.set({
        fill: '#FFFFFF'
    });

    dessin.add(textBox1);
    dessin.centerObject(textBox1);
    dessin.bringToFront(textBox1);
    mouseout = 0;
}

//ratio basé sur la hauteur

function contenu2(dessin, someText, sizeWidth, sizeHeight) {

    fontRatio = (sizeHeight / 15);
    if (fontRatio > 25) {
        fontRatio = 25;
    }
    if (fontRatio < 13) {
        fontRatio = 13;
    }

    var textSize = new fabric.Text(someText);
    var textBoxWidth = textSize.getWidth();

    if (dessin.width < textBoxWidth) {
        textBoxWidth = dessin.width - 10;
    }

    var textBox1 = new fabric.Textbox(someText, {
        width: sizeWidth - 50,
        height: sizeHeight,
        fontSize: fontRatio,
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
        textAlign: 'center',
        fontFamily: 'Arial',
    });

    textBox1.set({
        fill: '#FFFFFF'
    });

    dessin.add(textBox1);
    dessin.centerObject(textBox1);
    dessin.bringToFront(textBox1);
    mouseout = 0;
}

/*
 *
 */

//---------------------------------------//
//   		TWITTER TRENDS               //
//---------------------------------------//
function mapTrends(div, i) {

    /*
     * Create new HTML element
     */

    var rect = div.getBoundingClientRect();

    var parent = div.parent;
    var parentNode = div.parentNode;

    trendDiv = document.createElement("div");
    trendDiv.id = "trend";
    trendDiv.className = "trends";

    div.parentNode.insertBefore(trendDiv, div.nextSibling);


    trendDiv.style.position = "absolute";
    trendDiv.style.top = 0;
    trendDiv.style.bottom = 0;
    trendDiv.style.left = 0;
    trendDiv.style.right = 0;


    trendDiv.style.left = rect.left;
    trendDiv.style.right = rect.right;
    trendDiv.style.width = "100%";
    trendDiv.style.height = "100%";
    trendDiv.style.zIndex = "11";

    var innerTrendDiv = document.createElement('canvas');
    trendDiv.appendChild(innerTrendDiv);

    innerTrendDiv.style.width = "100%";
    innerTrendDiv.style.height = "100%";
    innerTrendDiv.className = 'trends_innerdivs';
    innerTrendDiv.id = "trends_innerdiv" + i;

    var sizeWidth = innerTrendDiv.clientWidth;
    var sizeHeight = innerTrendDiv.clientHeight;


    var trendsdessin = new fabric.Canvas("trends_innerdiv" + i);
    trendsdessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';
    trendsdessin.id = "trends_dessin";
    trendsdessin.setWidth(sizeWidth);
    trendsdessin.setHeight(sizeHeight);
    trendsdessin.isDrawingMode = true;
    var img2 = new Image();
    img2.src = chrome.extension.getURL('src/twitter/trends6.png');
    var texturePatternBrush = new fabric.PatternBrush(trendsdessin);
    texturePatternBrush.source = img2;
    trendsdessin.freeDrawingBrush = texturePatternBrush;
    trendsdessin.freeDrawingBrush.width = 100;
    trendsdessin.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: blur,
        offsetX: 8,
        offsetY: 8
    });
    trendsdessin.freeDrawingBrush.shadow.blur = 25;

    function texte() {
        trendsdessin.on('mouse:up', function() {
            if (mouseout === 1) {
                someText = "Tes tendances sont déterminées par tes abonnements, tes centres d'intérêt et ta localisation. Pour autant, Twitter nous dit qu'il les choisi aussi en fonction de leur popularité en temps réel.";
                contenu(trendsdessin, someText, sizeHeight);
            }

        });
    }
    trendsdessin.on('mouse:down', function() {
        clic = 1;
        mouseout = 1;
        if (clic === 1) {
            texte();
        }
    });
}



//---------------------------------------//
//   		TWITTER SUGGESTIONS          //
//---------------------------------------//

function mapSuggestions(div) {

    var rect = div.getBoundingClientRect();

    var parent = div.parent;
    var parentNode = div.parentNode;

    sugDiv = document.createElement("div");
    sugDiv.id = "sug";
    sugDiv.className = "sugs";

    div.parentNode.insertBefore(sugDiv, div.nextSibling);

    sugDiv.style.position = "absolute";
    sugDiv.style.top = 0;
    sugDiv.style.bottom = 0;
    sugDiv.style.left = 0;
    sugDiv.style.right = 0;

    sugDiv.style.left = rect.left;
    sugDiv.style.right = rect.right;
    sugDiv.style.width = "100%";
    sugDiv.style.height = "100%";
    sugDiv.style.zIndex = "20";

    var innerSugDiv = document.createElement('canvas');

    innerSugDiv.className = 'sugs_innerdivs';
    sugDiv.appendChild(innerSugDiv);
    innerSugDiv.style.width = "100%";
    innerSugDiv.style.height = "100%";
    innerSugDiv.id = "sugs_innerdiv";
    innerSugDiv.style.zIndex = "22";

    var sizeWidth = innerSugDiv.clientWidth;
    var sizeHeight = innerSugDiv.clientHeight;


    var sugdessin = new fabric.Canvas("sugs_innerdiv");
    sugdessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';
    sugdessin.setWidth(sizeWidth);
    sugdessin.setHeight(sizeHeight);
    sugdessin.isDrawingMode = true;
    var img2 = new Image();
    img2.src = chrome.extension.getURL('src/twitter/sugs3.png');
    var texturePatternBrush = new fabric.PatternBrush(sugdessin);
    texturePatternBrush.source = img2;
    sugdessin.freeDrawingBrush = texturePatternBrush;
    sugdessin.freeDrawingBrush.width = 100;
    sugdessin.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: blur,
        offsetX: 8,
        offsetY: 8
    });
    sugdessin.freeDrawingBrush.shadow.blur = 25;


    function texte() {
        sugdessin.on('mouse:up', function() {
            if (mouseout === 1) {
                console.log('up');
                var someText = "Les suggestions personnalisées sont basées sur tes contacts, des informations qui te concernent importées d'autres Twitteriens, ta localisation, tes tweets, tes abonnements, tes interactions. Twitter nous dit que c'est par la magie de son «algorithme» que tout cela fonctionne.";
                var textSize2 = new fabric.Text(someText, {
                    fontSize: 17
                });
                var textBoxWidth2 = textSize2.getWidth();

                if (sugdessin.width < textBoxWidth2) {
                    textBoxWidth2 = sugdessin.width - 20;
                }

                var textBox2 = new fabric.Textbox(someText, {
                    width: textBoxWidth2,
                    height: 200,
                    fontSize: 17,
                    textAlign: 'center',
                    fontFamily: 'Arial'

                });
                textBox2.set({
                    fill: '#FFFFFF'
                });
                sugdessin.add(textBox2);
                sugdessin.centerObject(textBox2);
                sugdessin.bringToFront(textBox2);
                mouseout = 0;
            }

        });
    }
    sugdessin.on('mouse:down', function() {
        clic = 1;
        mouseout = 1;
        console.log(clic);
        if (clic === 1) {
            texte();
        }

    });

}

function replaceOriginal() {
    /*
     * Check if element exists
     */
    var tweetContent = document.querySelectorAll(".FullNameGroup");
    if ($(tweetContent).closest('div.tweet').not(".promoted-tweet"))
        [].forEach.call(tweetContent, function(div, i) {
            //--------------------------------//
            // Find the divs of the tweets    //
            //--------------------------------//
            superparent = div.closest('div.tweet');
            var parentNode = superparent;
            var rect = superparent.getBoundingClientRect();
            nouveauDiv = document.createElement("div");
            nouveauDiv.id = "niveau_un" + i;
            nouveauDiv.className = "niveaux_un_tweet";
            superparent.parentNode.insertBefore(nouveauDiv, superparent.nextSibling);
            nouveauDiv.style.position = "absolute";
            nouveauDiv.style.top = 0;
            nouveauDiv.style.bottom = 0;
            nouveauDiv.style.left = rect.left;
            nouveauDiv.style.right = rect.right;
            nouveauDiv.style.width = "100%";
            nouveauDiv.style.height = "100%";
            nouveauDiv.style.zIndex = "800";
            //--------------------------------//
            // Create New HTML Element        //
            //--------------------------------//
            var innerDiv = document.createElement('canvas');
            innerDiv.className = 'niveau_un_tweet_child';
            /*
             * Insert new HTML element in DOM
             */
            nouveauDiv.appendChild(innerDiv);
            innerDiv.style.width = "99.5%";
            innerDiv.style.height = "99%";
            innerDiv.id = "canvasparent" + i;
            innerDiv.style.zIndex = "inherit";
            /*
             * Fabric JS Init
             */
            var sizeWidth = innerDiv.clientWidth;
            var sizeHeight = innerDiv.clientHeight;
            var dessin = new fabric.Canvas("canvasparent" + i, {});
            dessin.hoverCursor = 'pointer';
            dessin.className = "dessin";

            dessin.setWidth(sizeWidth);
            dessin.setHeight(sizeHeight);
            dessin.isDrawingMode = true;
            dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';

            var img2 = new Image();
            img2.src = chrome.extension.getURL('src/twitter/tweet2.png');
            var texturePatternBrush = new fabric.PatternBrush(dessin);
            texturePatternBrush.source = img2;
            dessin.freeDrawingBrush = texturePatternBrush;
            dessin.freeDrawingBrush.width = 100;
            dessin.freeDrawingBrush.shadow = new fabric.Shadow({
                blur: blur,
                offsetX: 8,
                offsetY: 8
            });
            dessin.freeDrawingBrush.shadow.blur = 25;

            //-------------------------------//
            // create text in canvas         //
            //-------------------------------//
            var clic = 0;
            var mouseout = 0;


            function texte() {
                dessin.on('mouse:up', function() {
                    if (mouseout === 1) {
                        someText = "Tu crois que tu vois tous les tweets des comptes que tu suis ? En réalité, tu ne vois que ceux qui que l'algorithme a sélectionné pour toi. Sur la base des comptes et des tweets avec lesquels tu interagis.";
                        contenu2(dessin, someText, sizeWidth, sizeHeight);
                    }


                });
            }
            dessin.on('mouse:down', function() {
                clic = 1;
                mouseout = 1;
                console.log(clic);
                if (clic === 1) {
                    texte();
                }

            });

        });


}

function replaceOriginalNewPosts() {
    var tweetContent = document.querySelectorAll(".FullNameGroup");
    if (!$(this).hasClass("niveaux_un_tweet")) {
        if ($(tweetContent).closest('div.tweet').not(".promoted-tweet"))
            [].forEach.call(tweetContent, function(div, i) {
                //-----------------------------//
                // trouve les div des tweet    //
                //-----------------------------//
                superparent = div.closest('div.tweet');
                var parentNode = superparent;
                var rect = superparent.getBoundingClientRect();
                nouveauDiv = document.createElement("div");
                nouveauDiv.id = "niveau_un" + i;
                nouveauDiv.className = "niveaux_un_tweet";
                superparent.parentNode.insertBefore(nouveauDiv, superparent.nextSibling);
                nouveauDiv.style.position = "absolute";
                nouveauDiv.style.top = 0;
                nouveauDiv.style.bottom = 0;
                nouveauDiv.style.left = rect.left;
                nouveauDiv.style.right = rect.right;
                nouveauDiv.style.width = "100%";
                nouveauDiv.style.height = "100%";
                nouveauDiv.style.zIndex = "800";

                //-----------------------------//
                // créé le canvas dans la div  //
                //-----------------------------//
                var innerDiv = document.createElement('canvas');

                innerDiv.className = 'niveau_unchild';
                nouveauDiv.appendChild(innerDiv);
                innerDiv.style.width = "99.5%";
                innerDiv.style.height = "99%";
                innerDiv.id = "canvasparent" + i;
                innerDiv.style.zIndex = "inherit";

                var sizeWidth = innerDiv.clientWidth;
                var sizeHeight = innerDiv.clientHeight;
                var dessin = new fabric.Canvas("canvasparent" + i, {});
                dessin.hoverCursor = 'pointer';
                dessin.className = "dessin";

                dessin.setWidth(sizeWidth);
                dessin.setHeight(sizeHeight);
                dessin.isDrawingMode = true;
                dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';

                var img2 = new Image();
                img2.src = chrome.extension.getURL('src/twitter/tweet2.png');
                var texturePatternBrush = new fabric.PatternBrush(dessin);
                texturePatternBrush.source = img2;
                dessin.freeDrawingBrush = texturePatternBrush;
                dessin.freeDrawingBrush.width = 100;
                dessin.freeDrawingBrush.shadow = new fabric.Shadow({
                    blur: blur,
                    offsetX: 8,
                    offsetY: 8
                });
                dessin.freeDrawingBrush.shadow.blur = 25;

                //-------------------------------//
                // créé le texte dans le canvas  //
                //-------------------------------//
                var clic = 0;
                var mouseout = 0;


                function texte() {
                    dessin.on('mouse:up', function() {
                        if (mouseout === 1) {
                            someText = "Tu crois que tu vois tous les tweets des comptes que tu suis ? En réalité, tu ne vois que ceux qui que l'algorithme a sélectionné pour toi. Sur la base des comptes et des tweets avec lesquels tu interagis.";
                            contenu2(dessin, someText, sizeWidth, sizeHeight);
                        }


                    });
                }
                dessin.on('mouse:down', function() {
                    clic = 1;
                    mouseout = 1;
                    console.log(clic);
                    if (clic === 1) {
                        texte();
                    }

                });

            });
    }
}


//-----------------------------------------------------------//
// 	REMPLACE LES RETWEET                                     //
//---------------------------------------------------------//


function replaceRetweet(div, i) {
    //-----------------------------//
    // trouve les div des retweet  //
    //-----------------------------//
    superparent = div.closest('div.tweet');
    $("div").remove(".niveaux_un_tweet");
    $('.tweet div.niveaux_un_tweet').remove();
    var parentNode = superparent;
    var rect = superparent.getBoundingClientRect();
    nouveauDiv = document.createElement("div");
    nouveauDiv.id = "niveau_un" + i;
    nouveauDiv.className = "niveaux_un_retweet";
    superparent.parentNode.insertBefore(nouveauDiv, superparent.nextSibling);
    nouveauDiv.style.position = "absolute";
    nouveauDiv.style.top = 0;
    nouveauDiv.style.bottom = 0;
    nouveauDiv.style.left = rect.left;
    nouveauDiv.style.right = rect.right;
    nouveauDiv.style.width = "100%";
    nouveauDiv.style.height = "100%";
    nouveauDiv.style.zIndex = "900";

    //-----------------------------//
    // créé le canvas dans la div  //
    //-----------------------------//
    var innerDiv = document.createElement('canvas');

    innerDiv.className = 'niveau_unchild';
    nouveauDiv.appendChild(innerDiv);
    innerDiv.style.width = "99.5%";
    innerDiv.style.height = "99%";
    innerDiv.id = "canvasparent" + i;
    innerDiv.style.zIndex = "inherit";

    var sizeWidth = innerDiv.clientWidth;
    var sizeHeight = innerDiv.clientHeight;
    var dessin = new fabric.Canvas("canvasparent" + i, {});
    dessin.hoverCursor = 'pointer';
    dessin.className = "dessin";

    dessin.setWidth(sizeWidth);
    dessin.setHeight(sizeHeight);
    dessin.isDrawingMode = true;
    dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';

    var img2 = new Image();
    img2.src = chrome.extension.getURL('src/twitter/retweet.png');
    var texturePatternBrush = new fabric.PatternBrush(dessin);
    texturePatternBrush.source = img2;
    dessin.freeDrawingBrush = texturePatternBrush;
    dessin.freeDrawingBrush.width = 100;
    dessin.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: blur,
        offsetX: 8,
        offsetY: 8
    });
    dessin.freeDrawingBrush.shadow.blur = 25;

    //-------------------------------//
    // créé le texte dans le canvas  //
    //-------------------------------//
    var clic = 0;
    var mouseout = 0;

    function texte() {
        dessin.on('mouse:up', function() {
            if (mouseout === 1) {
                someText = "Bon les RT c'est pas sorcier ? Mais sais-tu que Twitter les sélectionne en fonction de ce qu'a aimé ton réseau. Bref, si tu ne les aimes pas, change d'amis.";
                contenu2(dessin, someText, sizeWidth, sizeHeight);
            }


        });
    }
    dessin.on('mouse:down', function() {
        clic = 1;
        mouseout = 1;
        console.log(clic);
        if (clic === 1) {
            texte();
        }

    });
}


//-----------------------------------------//
// REMPLACE LES POSTS ET LES SPONSORISE    //
//----------------------------------------//

function replaceSponsorise(div, i) {

    $("div").remove(".niveaux_un_tweet");
    $('.tweet div.niveaux_un_tweet').remove();
    $('.tweet div.niveaux_un_aime').remove();
    $("div").remove(".upper-canvas.niveau_un_sponsochild.__web-inspector-hide-shortcut__");

    superparent = div.closest('div.tweet');
    var parentNode = superparent;
    var rect = superparent.getBoundingClientRect();
    nouveauDiv = document.createElement("div");
    nouveauDiv.id = "niveau_un" + i;
    superparent.parentNode.insertBefore(nouveauDiv, superparent.nextSibling);

    nouveauDiv.style.position = "absolute";
    nouveauDiv.style.top = 0;
    nouveauDiv.style.bottom = 0;
    nouveauDiv.style.left = rect.left;
    nouveauDiv.style.right = rect.right;
    nouveauDiv.style.width = "100%";
    nouveauDiv.style.height = "100%";
    nouveauDiv.style.zIndex = "900";

    //-----------------------------//
    // créé le canvas dans la div  //
    //-----------------------------//
    var innerDiv = document.createElement('canvas');

    innerDiv.className = 'niveau_un_sponsochild';
    nouveauDiv.appendChild(innerDiv);
    innerDiv.style.width = "99.5%";
    innerDiv.style.height = "100%";
    innerDiv.id = "canvasparent" + i;
    innerDiv.style.zIndex = "inherit";

    var sizeWidth = innerDiv.clientWidth;
    var sizeHeight = innerDiv.clientHeight;
    var dessin = new fabric.Canvas("canvasparent" + i, {});
    dessin.hoverCursor = 'pointer';
    dessin.className = "dessin";


    dessin.setWidth(sizeWidth);
    dessin.setHeight(sizeHeight);
    dessin.isDrawingMode = true;
    dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';

    var img2 = new Image();
    img2.src = chrome.extension.getURL('src/twitter/sponsorise.png');
    var texturePatternBrush = new fabric.PatternBrush(dessin);
    texturePatternBrush.source = img2;
    dessin.freeDrawingBrush = texturePatternBrush;
    dessin.freeDrawingBrush.width = 100;
    dessin.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: blur,
        offsetX: 8,
        offsetY: 8
    });
    dessin.freeDrawingBrush.shadow.blur = 25;

    //-------------------------------//
    // créé le texte dans le canvas  //
    //-------------------------------//
    var clic = 0;
    var mouseout = 0;

    function texte() {
        dessin.on('mouse:up', function() {
            if (mouseout === 1) {
                someText = "Si tu te demandais encore ce qui fait tourner Twitter, voici... sa mine d’or! Twitter a donc tout intérêt à ce que ses algo te suggèrent des publicités qui t’intéressent.";
                contenu(dessin, someText, sizeHeight);
            }

        });
    }
    dessin.on('mouse:down', function() {
        clic = 1;
        mouseout = 1;
        if (clic === 1) {
            texte();
        }
    });
}


//-----------------------------------------//
// REMPLACE LES POSTS A AIMÉ              //
//----------------------------------------//


function replaceAime(div, i) {
    //-------------------------------------//
    // trouve les div mères de a aimé  //
    //-------------------------------------//
    console.log("remplace-a aimé");
    superparent = div.closest('div.tweet');
    $('.tweet div.niveaux_un_tweet').remove();
    //alert('removed div.niveaux_un_tweet');
    $('.tweet div.niveau_unchild').remove();


    var parentNode = superparent;
    var rect = superparent.getBoundingClientRect();
    nouveauDiv = document.createElement("div");
    nouveauDiv.id = "niveau_un_aime" + i;
    nouveauDiv.className = "niveaux_un_aime";

    superparent.parentNode.insertBefore(nouveauDiv, superparent.nextSibling);
    nouveauDiv.style.position = "absolute";
    nouveauDiv.style.top = 0;
    nouveauDiv.style.bottom = 0;
    nouveauDiv.style.left = rect.left;
    nouveauDiv.style.right = rect.right;
    nouveauDiv.style.width = "100%";
    nouveauDiv.style.height = "100%";
    nouveauDiv.style.zIndex = "900";

    //-----------------------------//
    // créé le canvas dans la div  //
    //-----------------------------//
    var innerDiv = document.createElement('canvas');
    innerDiv.className = 'niveau_un_aime_child';
    nouveauDiv.appendChild(innerDiv);
    innerDiv.style.width = "99.5%";
    innerDiv.style.height = "99%";
    innerDiv.id = "canvasparent" + i;
    innerDiv.style.zIndex = "inherit";

    var sizeWidth = innerDiv.clientWidth;
    var sizeHeight = innerDiv.clientHeight;
    var dessin = new fabric.Canvas("canvasparent" + i, {});
    dessin.hoverCursor = 'pointer';
    dessin.className = "dessin";
    dessin.setWidth(sizeWidth);
    dessin.setHeight(sizeHeight);
    dessin.isDrawingMode = true;
    dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';


    var img2 = new Image();
    img2.src = chrome.extension.getURL('src/twitter/aime.png');
    var texturePatternBrush = new fabric.PatternBrush(dessin);
    texturePatternBrush.source = img2;
    dessin.freeDrawingBrush = texturePatternBrush;
    dessin.freeDrawingBrush.width = 100;
    dessin.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: blur,
        offsetX: 8,
        offsetY: 8
    });
    dessin.freeDrawingBrush.shadow.blur = 25;

    //-------------------------------//
    // créé le texte dans le canvas  //
    //-------------------------------//
    var clic = 0;
    var mouseout = 0;

    function texte() {
        dessin.on('mouse:up', function() {
            if (mouseout === 1) {
                someText = "Lorsque nous identifions un Tweet, un compte à suivre ou tout autre contenu populaire ou pertinent, nous pouvons l'ajouter à votre fil. Cela signifie que vous voyez parfois des Tweets de comptes que vous ne suivez pas. Chaque tweet est sélectionné à l'aide de divers signaux, notamment sa popularité et la manière dont les personnes de votre réseau interagissent avec lui.";
                contenu2(dessin, someText, sizeWidth, sizeHeight);
            }

        });
    }
    dessin.on('mouse:down', function() {
        clic = 1;
        mouseout = 1;
        if (clic === 1) {
            texte();
        }
    });

}



//-----------------------------------------//
// REMPLACE LES POSTS QUI SUIVRE           //
//----------------------------------------//

function replaceQuiSuivre(div, i) {
    //-------------------------------------//
    // trouve les div mères de qui suivre  //
    //-------------------------------------//

    console.log("remplace-qui suivre");
    var rect = div.getBoundingClientRect();
    var parent = div.parent;
    nouveauDiv = document.createElement("div");
    nouveauDiv.id = "niveau_un" + i;
    nouveauDiv.className = "niveaux_un_follow";
    div.parentNode.insertBefore(nouveauDiv, div.nextSibling);
    nouveauDiv.style.position = "absolute";
    nouveauDiv.style.top = 0;
    nouveauDiv.style.bottom = 0;
    nouveauDiv.style.left = rect.left;
    nouveauDiv.style.right = rect.right;
    nouveauDiv.style.width = "100%";
    nouveauDiv.style.height = "100%";
    nouveauDiv.style.zIndex = "900";

    //-----------------------------//
    // créé le canvas dans la div  //
    //-----------------------------//
    var innerDiv = document.createElement('canvas');

    innerDiv.className = 'niveau_unchild';
    nouveauDiv.appendChild(innerDiv);
    nouveauDiv.style.border = "3px solid";
    nouveauDiv.style.borderColor = "green";
    innerDiv.style.width = "99.5%";
    innerDiv.style.height = "99%";
    innerDiv.id = "canvasparent" + i;
    innerDiv.style.zIndex = "inherit";

    var sizeWidth = innerDiv.clientWidth;
    var sizeHeight = innerDiv.clientHeight;
    var dessin = new fabric.Canvas("canvasparent" + i, {});
    dessin.hoverCursor = 'pointer';
    dessin.className = "dessin";

    dessin.setWidth(sizeWidth);
    dessin.setHeight(sizeHeight);
    dessin.isDrawingMode = true;
    dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';

    var img2 = new Image();
    img2.src = chrome.extension.getURL('src/twitter/sugs3.png');
    var texturePatternBrush = new fabric.PatternBrush(dessin);
    texturePatternBrush.source = img2;
    dessin.freeDrawingBrush = texturePatternBrush;
    dessin.freeDrawingBrush.width = 100;
    dessin.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: blur,
        offsetX: 8,
        offsetY: 8
    });
    dessin.freeDrawingBrush.shadow.blur = 25;

    //-------------------------------//
    // créé le texte dans le canvas  //
    //-------------------------------//
    var clic = 0;
    var mouseout = 0;

    function texte() {
        dessin.on('mouse:up', function() {
            if (mouseout === 1) {
                console.log('up');
                var someText = 'Votre fil dactualités est constitué dun flux de Tweets publiés par les comptes que vous avez choisi de suivre sur Twitter. Mais vous ne voyez pas tous leurs tweets, les algos de twitter choisissent de vous montrer ceux que vous êtes susceptible dapprécier le plus. Cela vous fera rester sur la plateforme et vous voyez aussi dautres contenus choisis par les algos de twitter Dautres contenus sont suggérés dans le fil sur la base de différents signaux. Vous pouvez répondre à un Tweet depuis le fil, le retwitter et laimer. Les Tweets que vous êtes susceptible dapprécier le plus figurent en premier dans votre fil. Nous les choisissons notamment sur la base des comptes avec lesquels vous interagissez le plus et des Tweets qui suscitent votre engagement';
                var textSize = new fabric.Text(someText, {
                    fontSize: 20
                });
                var textBoxWidth = textSize.getWidth();

                if (dessin.width < textBoxWidth) {
                    textBoxWidth = dessin.width - 20;
                }

                var textBox1 = new fabric.Textbox(someText, {
                    width: textBoxWidth,
                    height: 200,
                    fontSize: 20,
                    textAlign: 'center',
                    fontFamily: 'Arial'

                });
                textBox1.set({
                    fill: '#FFFFFF'
                });
                dessin.add(textBox1);
                dessin.centerObject(textBox1);
                dessin.bringToFront(textBox1);
                mouseout = 0;
            }

        });
    }
    dessin.on('mouse:down', function() {
        clic = 1;
        mouseout = 1;
        console.log(clic);
        if (clic === 1) {
            texte();
        }

    });
}


//-----------------------------------------------------------//
// 	AU CAS OU VOUS L'AURIEZ MANQUé   VOUS POUURIEZ AIMER    //
//---------------------------------------------------------//

function replaceMissed() {
    // find the column "au cas où vous l'auriez manqué"
    var missedContent = document.querySelector('.js-stream-item.stream-item.has-recap');
    //alert("jai trouvé: vous l'auriez manqué!");
    if (missedContent.closest('ol.stream-items.recap-module')) {
        //alert("LISTE vous l'auriez manqué!");
        // If you find the list of posts replace them all with
        $('ol li').each(function(div) {
            var rect = div.getBoundingClientRect();
            var parent = div.parent;
            nouveauDiv = document.createElement("div");
            nouveauDiv.id = "niveau_un_missed_header" + i;
            nouveauDiv.className = "niveaux_un_missed";
            div.parentNode.insertBefore(nouveauDiv, div.nextSibling);
            nouveauDiv.style.position = "absolute";
            nouveauDiv.style.top = 0;
            nouveauDiv.style.bottom = 0;
            nouveauDiv.style.left = rect.left;
            nouveauDiv.style.right = rect.right;
            nouveauDiv.style.width = "100%";
            nouveauDiv.style.height = "100%";
            nouveauDiv.style.zIndex = "900";

            //-----------------------------//
            // créé le canvas dans la div  //
            //-----------------------------//
            var innerDiv = document.createElement('canvas');

            innerDiv.className = 'niveau_un_missed_child';
            nouveauDiv.appendChild(innerDiv);
            nouveauDiv.style.border = "3px solid";
            nouveauDiv.style.borderColor = "green";
            innerDiv.style.width = "99.5%";
            innerDiv.style.height = "99%";
            innerDiv.id = "canvasparent" + i;
            innerDiv.style.zIndex = "inherit";

            var sizeWidth = innerDiv.clientWidth;
            var sizeHeight = innerDiv.clientHeight;
            var dessin = new fabric.Canvas("canvasparent" + i, {});
            dessin.hoverCursor = 'pointer';
            dessin.className = "dessin";

            dessin.setWidth(sizeWidth);
            dessin.setHeight(sizeHeight);
            dessin.isDrawingMode = true;
            dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';

            var img2 = new Image();
            img2.src = chrome.extension.getURL('src/test.png');
            var texturePatternBrush = new fabric.PatternBrush(dessin);
            texturePatternBrush.source = img2;
            dessin.freeDrawingBrush = texturePatternBrush;
            dessin.freeDrawingBrush.width = 100;
            dessin.freeDrawingBrush.shadow = new fabric.Shadow({
                blur: blur,
                offsetX: 8,
                offsetY: 8
            });
            dessin.freeDrawingBrush.shadow.blur = 25;

            //-------------------------------//
            // créé le texte dans le canvas  //
            //-------------------------------//
            var clic = 0;
            var mouseout = 0;

            function texte() {
                dessin.on('mouse:up', function() {
                    if (mouseout === 1) {
                        console.log('up');
                        var someText = "Ce post a été pushé par l'algo temporel";
                        var textSize = new fabric.Text(someText, {
                            fontSize: 20
                        });
                        var textBoxWidth = textSize.getWidth();

                        if (dessin.width < textBoxWidth) {
                            textBoxWidth = dessin.width - 20;
                        }

                        var textBox1 = new fabric.Textbox(someText, {
                            width: textBoxWidth,
                            height: 200,
                            fontSize: 20,
                            textAlign: 'center',
                            fontFamily: 'Arial'

                        });
                        textBox1.set({
                            fill: '#FFFFFF'
                        });
                        dessin.add(textBox1);
                        dessin.centerObject(textBox1);
                        dessin.bringToFront(textBox1);
                        mouseout = 0;
                    }

                });
            }
            dessin.on('mouse:down', function() {
                clic = 1;
                mouseout = 1;
                console.log(clic);
                if (clic === 1) {
                    texte();
                }

            });
        });

    } else if (missedContent.closest('div.recap-header.dismissible-content')) {
        // If you find the header do that
        [].forEach.call(missedContent, function(div) {

            superparent = div.closest('div.recap-header.dismissible-content');


            var parentNode = superparent;
            var rect = superparent.getBoundingClientRect();
            nouveauDiv = document.createElement("div");

            nouveauDiv = document.createElement("div");
            nouveauDiv.id = "missed";
            nouveauDiv.className = "niveaux_un_missed";

            superparent.parentNode.insertBefore(missedDiv, superparent.nextSibling);
            nouveauDiv.style.position = "absolute";
            nouveauDiv.style.top = 0;
            nouveauDiv.style.bottom = 0;
            nouveauDiv.style.left = rect.left;
            nouveauDiv.style.right = rect.right;
            nouveauDiv.style.width = "100%";
            nouveauDiv.style.height = "100%";
            nouveauDiv.style.zIndex = "900";

            //-----------------------------//
            // créé le canvas dans la div  //
            //-----------------------------//
            var innerDiv = document.createElement('canvas');

            innerDiv.className = 'niveau_unchild';
            nouveauDiv.appendChild(innerDiv);
            nouveauDiv.style.border = "3px solid";
            nouveauDiv.style.borderColor = "blue";
            innerDiv.style.width = "99.5%";
            innerDiv.style.height = "99%";
            innerDiv.id = "canvasparent" + i;
            innerDiv.style.zIndex = "inherit";

            var sizeWidth = innerDiv.clientWidth;
            var sizeHeight = innerDiv.clientHeight;
            var dessin = new fabric.Canvas("canvasparent" + i, {});
            dessin.hoverCursor = 'pointer';
            dessin.className = "dessin";

            dessin.setWidth(sizeWidth);
            dessin.setHeight(sizeHeight);
            dessin.isDrawingMode = true;
            dessin.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor.cur') + '),default';

            var img2 = new Image();
            img2.src = chrome.extension.getURL('src/test.png');
            var texturePatternBrush = new fabric.PatternBrush(dessin);
            texturePatternBrush.source = img2;
            dessin.freeDrawingBrush = texturePatternBrush;
            dessin.freeDrawingBrush.width = 100;
            dessin.freeDrawingBrush.shadow = new fabric.Shadow({
                blur: blur,
                offsetX: 8,
                offsetY: 8
            });
            dessin.freeDrawingBrush.shadow.blur = 25;


            //-------------------------------//
            // créé le texte dans le canvas  //
            //-------------------------------//
            var clic = 0;
            var mouseout = 0;
            someText = 'EXPLICATION MANQUE';

            function texte() {
                dessin.on('mouse:up', function() {
                    if (mouseout === 1) {
                        console.log('up');
                        var someText = '';
                        var textSize = new fabric.Text(someText, {
                            fontSize: 20
                        });
                        var textBoxWidth = textSize.getWidth();

                        if (dessin.width < textBoxWidth) {
                            textBoxWidth = dessin.width - 20;
                        }

                        var textBox1 = new fabric.Textbox(someText, {
                            width: textBoxWidth,
                            height: 200,
                            fontSize: 20,
                            textAlign: 'center',
                            fontFamily: 'Arial'

                        });
                        textBox1.set({
                            fill: '#FFFFFF'
                        });
                        dessin.add(textBox1);
                        dessin.centerObject(textBox1);
                        dessin.bringToFront(textBox1);
                        mouseout = 0;
                    }

                });
            }
            dessin.on('mouse:down', function() {
                clic = 1;
                mouseout = 1;
                console.log(clic);
                if (clic === 1) {
                    texte();
                }

            });

        });

    }


}

/*----------------------------------------------------------------------------------------------*\
                                        Run functions
\*----------------------------------------------------------------------------------------------*/
replace('div.trends-inner', mapTrends);
replace('div.flex-module div.js-recommended-followers', mapSuggestions);
replace('.js-retweet-text', replaceRetweet);
replace('.promoted-tweet', replaceSponsorise);
replace('.WtfLargeCarouselStreamItem-user', replaceQuiSuivre);
replace('span.Icon.Icon--small.Icon--heartBadge', replaceAime);
if ($('.stream-items.recap-module').length) {
    replaceMissed();
}

replaceOriginal();

function replaceNewPosts(queryselectorvalue, callback) {
    var card = document.querySelectorAll(queryselectorvalue);
    // check if it hasn't been mapped already, if not than do it
    if (!$(this).hasClass("legende" || "quota" || "trends" || "sugs" || "niveaux_un_missed" || "niveaux_un_retweet" || "niveaux_un_sponso" || "niveaux_un_aime" || "niveaux_un_tweet" || "niveaux_un_follow")) {
        console.log('draw over the divs that are not mapped yet');
        [].forEach.call(card, callback);
    }
}

/*----------------------------------------------------------------------------------------------*\
                                        Scrollable feed
\*----------------------------------------------------------------------------------------------*/

function mutationObserver() {
    // select the target node
    var target = document.querySelector('.stream-container');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log(mutation.type);
            console.log('coucouuuuuuuuuuu');
            replaceNewPosts('div.trends-inner', mapTrends);
            replaceNewPosts('div.flex-module div.js-recommended-followers', mapSuggestions);
            replaceNewPosts('.js-retweet-text', replaceRetweet);
            replaceNewPosts('.promoted-tweet', replaceSponsorise);
            replaceNewPosts('.WtfLargeCarouselStreamItem-user', replaceQuiSuivre);
            replaceNewPosts('span.Icon.Icon--small.Icon--heartBadge', replaceAime);
            replaceOriginalNewPosts();
        });
    });

    // configuration of the observer:
    var config = {
        attributes: true,
        childList: true,
        characterData: true
    };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

}

mutationObserver();


//---------------------------------------//
//   		COMPTEUR                     //
//---------------------------------------//
replace('div.Footer.module.roaming-module', quotacard);


function quotacard(div) {

    var rect = div.getBoundingClientRect();
    var parent = div.parent;
    var parentNode = div.parentNode;

    var quota = document.createElement('div');
    quota.className = "quota";
    quota.style.color = "#000000";
    quota.style.position = "fixed";
    quota.style.backgroundColor = "white";
    quota.style.left = rect.left;
    quota.style.right = rect.right;
    quota.style.width = "22.5%";
    quota.style.height = "28.5%";
    quota.style.zIndex = "15";
    var decouvre = '<div class="neonText-pink"><h10 style="color:white;">Révèle les algorithmes qui se cachent derrière tes posts!</h10></div>';
    quota.innerHTML = decouvre;

    var element = document.querySelector(".Footer.module.roaming-module");
    element.parentNode.insertBefore(quota, element);


    //---------------------------------------//
    //   		COMPTEUR                     //
    //---------------------------------------//

    var count = [0, 0, 0];
    var awardcount = [0, 0, 0, 0, 0, 0];
    var trends = document.querySelector(".trends");
    var sugs = document.querySelector(".sugs");
    var niveaux_un_tweet = document.querySelectorAll(".niveaux_un_tweet");
    var niveaux_un_retweet = document.querySelectorAll(".niveaux_un_retweet");
    var niveaux_un_aime = document.querySelector(".niveaux_un_aime");
    var niveaux_un_sponso = document.querySelectorAll(".niveaux_un_sponso");
    var sumClicks = 0;
    var buttonReload = document.createElement('input');
    buttonReload.setAttribute('type', 'button');
    buttonReload.setAttribute('value', 'Recommencer');
    buttonReload.setAttribute('class', 'buttonsmall');
    buttonReload.onclick = function() {
        window.location.reload(true);
    };

    var customAlert = document.createElement('div');
    customAlert.innerHTML = '<p class="message"></p><input type="button" class="confirmButton" value="Go!"">';
    // set style
    customAlert.style.zIndex = '1000000';
    customAlert.setAttribute('class', 'customAlert');
    document.body.appendChild(customAlert);


    var totalAmount = 9;

    function awards() {
        sumClicks = (count[0] + count[1] + count[2]);
        sumAward = (awardcount[0] + awardcount[1] + awardcount[2] + awardcount[3] + awardcount[4] + awardcount[5]);
        sumResteAward = 9 - sumAward;
        var reste;
        sumReste = 3 - sumClicks;
        var bravo = '<h10>Prêt à plonger plus profond?</h10>';
        var dashboard = '<div class="neonText-blue"><h13 style="color:white; padding-bottom:0;">Niveau 2 débloqué</h13></div>';
        var award = '';
        var plusQue = '';
        var gratter = '';
        if (sumResteAward === 1) {
            gratter = '<br><h11 style="padding-bottom:0;>sinon, il te reste une dernière publication à trouver!</h11>';
        } else if (sumResteAward === 0) {
            gratter = '<br><h11 style="padding-bottom:0;>bravo tu as révélé tous les différents types de publications!</h11>';
        } else {
            gratter = '<br><h11 style="padding-bottom:0;">ou continue de révéler les ' + sumResteAward + ' types de publications restantes</h11>';
        }
        score = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active">Niveau 2</li></ul></div id="frame">';

        console.log("total des divs pour débloquer:" + sumClicks);
        if (sumClicks >= 3) {

            switch (true) {
                case (sumAward === 1):
                    //activate next step on bar using the index of next_fs
                    totalAmount = 1;
                    award = "<h13>🔎  Novice 🔎 </h13>";
                    break;
                case (sumAward === 2):
                    totalAmount = 2;
                    award = "<h13>🔦 Curieux 🔦</h13>";
                    break;
                case (sumAward === 3):
                    totalAmount = 3;
                    award = "<h13>🔬 Chercheur 🔬</h13>";
                    break;
                case (sumAward === 4):
                    totalAmount = 4;
                    award = "<h13>🔭 Inquisiteur 🔭</h13>";
                    break;
                case (sumAward === 5):
                    totalAmount = 5;
                    award = "<h13>📡 Pionnier 📡</h13>";
                    break;
                case (sumAward === 6):
                    totalAmount = 6;
                    award = "<h13>🔮 Aventurier 🔮</h13>";
                    break;
                case (sumAward === 7):
                    totalAmount = 7;
                    award = "<h13>🚀 Explorateur 🚀</h13>";
                    break;
                case (sumAward === 8):
                    totalAmount = 8;
                    award = "<h13>☄️ Intrépide ☄️</h13>";
                    break;
                case (sumAward === 9):

                    totalAmount = 9;
                    award = "<h13>🛰 Conquérent 🛰</h13>";
                    break;
            }
            console.log('new couche');
            sumReste = -1;
            sumAward = -1;
            var buttonnode = document.createElement('input');
            quota.style.height = "45%";
            quota.innerHTML = '<div class="quotacontainer">' + dashboard + score + plusQue + award + '<input type="button" id="target" class="buttonExplore active" value="explore le second niveau"></input>' + gratter + '</div>';
            $("#target").click(function() {
                var currentCallback;
                // override default browser alert
                window.alert = function(msg, callback) {
                    $('.message').text(msg);
                    $('.customAlert').css('animation', 'fadeIn 0.3s linear');
                    $('.customAlert').css('display', 'inline');
                    setTimeout(function() {
                        $('.customAlert').css('animation', 'none');
                    }, 300);
                    currentCallback = callback;
                };

                // add listener for when confirmation button is clicked
                $('.confirmButton').click(function() {
                    var colors = {
                        'pink': '#E1499A',
                        'green': '#47e495',
                        'blue': '#003cff'
                    };

                    var color = colors.blue;

                    var radius = 100;
                    var border = 5;
                    var padding = 30;
                    var startPercent = 0;
                    var endPercent = 0.66;


                    var twoPi = Math.PI * 2;
                    var formatPercent = d3.format('.0%');
                    var boxSize = (radius + padding) * 2;


                    var count = Math.abs((endPercent - startPercent) / 0.01);
                    var step = endPercent < startPercent ? -0.01 : 0.01;

                    var arc = d3.svg.arc()
                        .startAngle(0)
                        .innerRadius(radius)
                        .outerRadius(radius - border);

                    var parent = d3.select('div#content');

                    var svg = parent.append('svg')
                        .attr('width', boxSize)
                        .attr('height', boxSize);

                    var defs = svg.append('defs');

                    var filter = defs.append('filter')
                        .attr('id', 'blur');

                    filter.append('feGaussianBlur')
                        .attr('in', 'SourceGraphic')
                        .attr('stdDeviation', '7');

                    var g = svg.append('g')
                        .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

                    var meter = g.append('g')
                        .attr('class', 'progress-meter');

                    meter.append('path')
                        .attr('class', 'background')
                        .attr('fill', '#ccc')
                        .attr('fill-opacity', 0.5)
                        .attr('d', arc.endAngle(twoPi));

                    var foreground = meter.append('path')
                        .attr('class', 'foreground')
                        .attr('fill', color)
                        .attr('fill-opacity', 1)
                        .attr('stroke', color)
                        .attr('stroke-width', 5)
                        .attr('stroke-opacity', 1)
                        .attr('filter', 'url(#blur)');

                    var front = meter.append('path')
                        .attr('class', 'foreground')
                        .attr('fill', color)
                        .attr('fill-opacity', 1);

                    var numberText = meter.append('text')
                        .attr('fill', '#003cff')
                        .attr('text-anchor', 'middle')
                        .attr('dy', '.35em');

                        //------------------------------------------------------------------------------------//
                        //   	                     RUN COUCHE 2                                             //
                        //------------------------------------------------------------------------------------//
                    $(window).scrollTop(0);
                    $("#legende").remove();
                    quota.remove();
                    niveauDeux();
                    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
                    setTimeout(function() {
                        $('.customAlert').css('animation', 'none');
                        $('.customAlert').css('display', 'none');
                    }, 300);
                    //currentCallback();
                });

                $('.buttonExplore').click(function() {
                    alert("Bravo! Tu peux maintenant gratter la deuxième couche.", function() {});
                });

                // custom alert box
                setTimeout(function() {
                    alert('Bravo! Tu peux maintenant gratter la deuxième couche!', function() {});
                }, 500);

            });


        }

    }

    var counttrends = 0;
    var countsugs = 0;
    var counttweet = 0;
    var countretweet = 0;
    var countsponso = 0;
    var countliked = 0;

    $(trends).click(function() {
        dashboard = '<h13 style="color: #4fff8d;">Niveau 1</h13>';
        award = '';
        plusQue = '';
        count[0] = 1;
        awardcount[0] = 1;
        counttrends++;
        awards();
        console.log("COMPTEUR TREND");
        console.log(counttrends);
        switch (true) {
            case (sumAward === 1):
                //activate next step on bar using the index of next_fs
                totalAmount = 1;
                award = "<h13>🔎  Novice 🔎 </h13>";
                break;
            case (sumAward === 2):
                totalAmount = 2;
                award = "<h13>🔦 Curieux 🔦</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 7 types de publications manquantes!</h14>";
                break;
            case (sumAward === 3):
                totalAmount = 3;
                award = "<h13>🔬 Chercheur 🔬</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 6 types de publications manquantes!</h14>";
                break;
            case (sumAward === 4):
                totalAmount = 4;
                award = "<h13>🔭 Inquisiteur 🔭</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 5 types de publications manquantes!</h14>";
                break;
            case (sumAward === 5):
                totalAmount = 5;
                award = "<h13>📡 Pionnier 📡</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 4 types de publications manquantes!</h14>";
                break;
            case (sumAward === 6):
                totalAmount = 6;
                award = "<h13>🔮 Aventurier 🔮</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 3 types de publications manquantes!</h14>";
                break;
            case (sumAward === 7):
                totalAmount = 7;
                award = "<h13>🚀 Explorateur 🚀</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 2 types de publications manquantes!</h14>";
                break;
            case (sumAward === 8):
                totalAmount = 8;
                award = "<h13>☄️ Intrépide ☄️</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher la dernière publication manquante!</h14>&#160";
                break;
            case (sumAward === 9):

                totalAmount = 9;
                award = "<h13>🛰 Conquérent 🛰</h13>";
                break;
        }
        switch (true) {
            case (sumReste === 2):
                if (counttrends > 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active  twice"></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                } else if (counttrends <= 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li></li><li>Niveau 2</li></ul></div id="frame">';

                }
                quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                quota.appendChild(buttonReload);
                break;
            case (sumReste === 1):
                if (counttrends > 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active  twice"></li><li>Niveau 2</li></ul></div id="frame">';
                } else if (counttrends <= 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li>Niveau 2</li></ul></div id="frame">';

                }
                quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                quota.appendChild(buttonReload);
                break;
            case (sumReste === 0):
                if (counttrends > 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li  class="active  twice">Niveau 2</li></ul></div id="frame">';
                } else if (counttrends <= 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active">Niveau 2</li></ul></div id="frame">';

                }
                quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                quota.appendChild(buttonReload);
                break;
        }
    });

    $(sugs).click(function() {
        var dashboard = '<h13 style="color: #4fff8d;">Niveau 1</h13>';
        var award = '';
        var plusQue;
        count[1] = 1;
        awardcount[1] = 1;
        countsugs++;
        awards();
        console.log("COMPTEUR SUGS");
        console.log(countsugs);
        switch (true) {
            case (sumAward === 1):
                //activate next step on bar using the index of next_fs
                totalAmount = 1;
                award = "<h13>🔎  Novice 🔎 </h13>";
                break;
            case (sumAward === 2):
                totalAmount = 2;
                award = "<h13>🔦 Curieux 🔦</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 7 types de publications manquantes!</h14>";
                break;
            case (sumAward === 3):
                totalAmount = 3;
                award = "<h13>🔬 Chercheur 🔬</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 6 types de publications manquantes!</h14>";
                break;
            case (sumAward === 4):
                totalAmount = 4;
                award = "<h13>🔭 Inquisiteur 🔭</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 5 types de publications manquantes!</h14>";
                break;
            case (sumAward === 5):
                totalAmount = 5;
                award = "<h13>📡 Pionnier 📡</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 4 types de publications manquantes!</h14>";
                break;
            case (sumAward === 6):
                totalAmount = 6;
                award = "<h13>🔮 Aventurier 🔮</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 3 types de publications manquantes!</h14>";
                break;
            case (sumAward === 7):
                totalAmount = 7;
                award = "<h13>🚀 Explorateur 🚀</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 2 types de publications manquantes!</h14>";
                break;
            case (sumAward === 8):
                totalAmount = 8;
                award = "<h13>☄️ Intrépide ☄️</h13>";
                reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher la dernière publication manquante!</h14>&#160";
                break;
            case (sumAward === 9):

                totalAmount = 9;
                award = "<h13>🛰 Conquérent 🛰</h13>";
                break;
        }
        switch (true) {
            case (sumReste === 2):
                if (countsugs > 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active  twice"></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                } else if (countsugs <= 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li></li><li>Niveau 2</li></ul></div id="frame">';

                }
                quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                quota.appendChild(buttonReload);
                break;
            case (sumReste === 1):
                if (countsugs > 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active twice"></li><li>Niveau 2</li></ul></div id="frame">';
                } else if (countsugs <= 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li>Niveau 2</li></ul></div id="frame">';

                }
                quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                quota.appendChild(buttonReload);
                break;
            case (sumReste === 0):
                if (countsugs > 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li  class="active  twice">Niveau 2</li></ul></div id="frame">';
                } else if (countsugs <= 1) {
                    plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><<li class="active">Niveau 2</li></ul></div id="frame">';

                }
                quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                quota.appendChild(buttonReload);
                break;
        }
    });


    [].forEach.call(niveaux_un_tweet, function(niveaux_un_tweet) {
        niveaux_un_tweet.onclick = function() {
            var dashboard = '<h13 style="color: #4fff8d;">Niveau 1</h13>';
            var award = '';
            var plusQue;
            count[2] = 1;
            awardcount[2] = 1;
            counttweet++;
            awards();
            console.log("COMPTEUR TWEET");
            switch (true) {
                case (sumAward === 1):
                    //activate next step on bar using the index of next_fs
                    totalAmount = 1;
                    award = "<h13>🔎  Novice 🔎 </h13>";
                    break;
                case (sumAward === 2):
                    totalAmount = 2;
                    award = "<h13>🔦 Curieux 🔦</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 7 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 3):
                    totalAmount = 3;
                    award = "<h13>🔬 Chercheur 🔬</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 6 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 4):
                    totalAmount = 4;
                    award = "<h13>🔭 Inquisiteur 🔭</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 5 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 5):
                    totalAmount = 5;
                    award = "<h13>📡 Pionnier 📡</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 4 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 6):
                    totalAmount = 6;
                    award = "<h13>🔮 Aventurier 🔮</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 3 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 7):
                    totalAmount = 7;
                    award = "<h13>🚀 Explorateur 🚀</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 2 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 8):
                    totalAmount = 8;
                    award = "<h13>☄️ Intrépide ☄️</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher la dernière publication manquante!</h14>&#160";
                    break;
                case (sumAward === 9):

                    totalAmount = 9;
                    award = "<h13>🛰 Conquérent 🛰</h13>";
                    break;
            }
            switch (true) {
                case (sumReste === 2):
                    if (counttweet > 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active  twice"></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                    } else if (counttweet <= 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li></li><li>Niveau 2</li></ul></div id="frame">';

                    }
                    quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                    quota.appendChild(buttonReload);
                    break;
                case (sumReste === 1):
                    if (counttweet > 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active  twice"></li><li>Niveau 2</li></ul></div id="frame">';
                    } else if (counttweet <= 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li>Niveau 2</li></ul></div id="frame">';

                    }
                    quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                    quota.appendChild(buttonReload);
                    break;
                case (sumReste === 0):
                    if (counttweet > 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li  class="active  twice">Niveau 2</li></ul></div id="frame">';
                    } else if (counttweet <= 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active">Niveau 2</li></ul></div id="frame">';

                    }
                    quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                    quota.appendChild(buttonReload);
                    break;
            }
        };
    });


    [].forEach.call(niveaux_un_retweet, function(niveaux_un_retweet) {
        $(niveaux_un_retweet).click(function() {
            var dashboard = '<h13 style="color: #4fff8d;">Niveau 1</h13>';
            var award = '';
            var plusQue;
            //count[3] = 1;
            awardcount[3] = 1;
            countretweet++;
            awards();
            console.log("COMPTEUR RETWEET");
            switch (true) {
                case (sumAward === 1):
                    //activate next step on bar using the index of next_fs
                    totalAmount = 1;
                    award = "<h13>🔎  Novice 🔎 </h13>";
                    break;
                case (sumAward === 2):
                    totalAmount = 2;
                    award = "<h13>🔦 Curieux 🔦</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 7 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 3):
                    totalAmount = 3;
                    award = "<h13>🔬 Chercheur 🔬</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 6 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 4):
                    totalAmount = 4;
                    award = "<h13>🔭 Inquisiteur 🔭</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 5 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 5):
                    totalAmount = 5;
                    award = "<h13>📡 Pionnier 📡</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 4 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 6):
                    totalAmount = 6;
                    award = "<h13>🔮 Aventurier 🔮</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 3 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 7):
                    totalAmount = 7;
                    award = "<h13>🚀 Explorateur 🚀</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 2 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 8):
                    totalAmount = 8;
                    award = "<h13>☄️ Intrépide ☄️</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher la dernière publication manquante!</h14>&#160";
                    break;
                case (sumAward === 9):

                    totalAmount = 9;
                    award = "<h13>🛰 Conquérent 🛰</h13>";
                    break;
            }

        });
    });

    if ($(".niveaux_un_aime")[0])
        [].forEach.call(niveaux_un_aime, function(niveaux_un_aime) {
            $(niveaux_un_aime).click(function() {
                var dashboard = '<h13 style="color: #4fff8d;">Niveau 1</h13>';
                var award = '';
                var plusQue;
                awardcount[4] = 1;
                countliked++;
                awards();
                console.log("COMPTEUR LIKED");
                switch (true) {
                    case (sumAward === 1):
                        //activate next step on bar using the index of next_fs
                        totalAmount = 1;
                        award = "<h13>🔎  Novice 🔎 </h13>";
                        break;
                    case (sumAward === 2):
                        totalAmount = 2;
                        award = "<h13>🔦 Curieux 🔦</h13>";
                        reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 7 types de publications manquantes!</h14>";
                        break;
                    case (sumAward === 3):
                        totalAmount = 3;
                        award = "<h13>🔬 Chercheur 🔬</h13>";
                        reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 6 types de publications manquantes!</h14>";
                        break;
                    case (sumAward === 4):
                        totalAmount = 4;
                        award = "<h13>🔭 Inquisiteur 🔭</h13>";
                        reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 5 types de publications manquantes!</h14>";
                        break;
                    case (sumAward === 5):
                        totalAmount = 5;
                        award = "<h13>📡 Pionnier 📡</h13>";
                        reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 4 types de publications manquantes!</h14>";
                        break;
                    case (sumAward === 6):
                        totalAmount = 6;
                        award = "<h13>🔮 Aventurier 🔮</h13>";
                        reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 3 types de publications manquantes!</h14>";
                        break;
                    case (sumAward === 7):
                        totalAmount = 7;
                        award = "<h13>🚀 Explorateur 🚀</h13>";
                        reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 2 types de publications manquantes!</h14>";
                        break;
                    case (sumAward === 8):
                        totalAmount = 8;
                        award = "<h13>☄️ Intrépide ☄️</h13>";
                        reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher la dernière publication manquante!</h14>&#160";
                        break;
                    case (sumAward === 9):
                        totalAmount = 9;
                        award = "<h13>🛰 Conquérent 🛰</h13>";
                        break;
                }
                switch (true) {
                    case (sumReste === 3):
                        if (countliked > 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active twice"></li><li></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                        } else if (countliked <= 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                        }
                        quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                        quota.appendChild(buttonReload);
                        break;
                    case (sumReste === 2):
                        if (countliked > 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active  twice"></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                        } else if (countliked <= 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li></li><li>Niveau 2</li></ul></div id="frame">';

                        }
                        quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                        quota.appendChild(buttonReload);
                        break;
                    case (sumReste === 1):
                        if (countliked > 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active  twice"></li><li>Niveau 2</li></ul></div id="frame">';
                        } else if (countliked <= 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active"></li><li>Niveau 2</li></ul></div id="frame">';

                        }
                        quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                        quota.appendChild(buttonReload);
                        break;
                    case (sumReste === 0):
                        if (countliked > 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active"></li><li  class="active  twice">Niveau 2</li></ul></div id="frame">';
                        } else if (countliked <= 1) {
                            plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active"></li><li class="active">Niveau 2</li></ul></div id="frame">';

                        }
                        quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                        quota.appendChild(buttonReload);
                        break;
                }

            });
        });

    [].forEach.call(niveaux_un_sponso, function(niveaux_un_sponso) {
        $(niveaux_un_sponso).click(function() {
            var dashboard = '<h13 style="color: #4fff8d;">Niveau 1</h13>';
            var award = '';
            var plusQue;
            awardcount[5] = 1;
            countsponso++;
            awards();
            console.log("COMPTEUR SPONSO");
            switch (true) {
                case (sumAward === 1):
                    //activate next step on bar using the index of next_fs
                    totalAmount = 1;
                    award = "<h13>🔎  Novice 🔎 </h13>";
                    break;
                case (sumAward === 2):
                    totalAmount = 2;
                    award = "<h13>🔦 Curieux 🔦</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 7 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 3):
                    totalAmount = 3;
                    award = "<h13>🔬 Chercheur 🔬</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 6 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 4):
                    totalAmount = 4;
                    award = "<h13>🔭 Inquisiteur 🔭</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 5 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 5):
                    totalAmount = 5;
                    award = "<h13>📡 Pionnier 📡</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 4 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 6):
                    totalAmount = 6;
                    award = "<h13>🔮 Aventurier 🔮</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 3 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 7):
                    totalAmount = 7;
                    award = "<h13>🚀 Explorateur 🚀</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher les 2 types de publications manquantes!</h14>";
                    break;
                case (sumAward === 8):
                    totalAmount = 8;
                    award = "<h13>☄️ Intrépide ☄️</h13>";
                    reste = "<h14 style='padding-left: 1em; padding-right: 1em;'>Prêt à plonger plus profond? Sinon tu peux continuer à chercher la dernière publication manquante!</h14>&#160";
                    break;
                case (sumAward === 9):

                    totalAmount = 9;
                    award = "<h13>🛰 Conquérent 🛰</h13>";
                    break;
            }
            switch (true) {
                case (sumReste === 3):
                    if (countsponso > 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active twice"></li><li></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                    } else if (countsponso <= 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                    }
                    quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                    quota.appendChild(buttonReload);
                    break;
                case (sumReste === 2):
                    if (countsponso > 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active  twice"></li><li></li><li>Niveau 2</li></ul></div id="frame">';
                    } else if (countsponso <= 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li></li><li>Niveau 2</li></ul></div id="frame">';

                    }
                    quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                    quota.appendChild(buttonReload);
                    break;
                case (sumReste === 1):
                    if (countsponso > 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active  twice"></li><li>Niveau 2</li></ul></div id="frame">';
                    } else if (countsponso <= 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active"></li><li>Niveau 2</li></ul></div id="frame">';

                    }
                    quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                    quota.appendChild(buttonReload);
                    break;
                case (sumReste === 0):
                    if (countsponso > 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active"></li><li  class="active  twice">Niveau 2</li></ul></div id="frame">';
                    } else if (countsponso <= 1) {
                        plusQue = '<div id="frame"><ul id="progressbar"><li class="active"></li><li class="active"></li><li class="active"></li><li class="active">Niveau 2</li></ul></div id="frame">';

                    }
                    quota.innerHTML = '<div class="quotacontainer">' + dashboard + plusQue + award + '</div>';
                    quota.appendChild(buttonReload);
                    break;
            }
        });
    });

}
