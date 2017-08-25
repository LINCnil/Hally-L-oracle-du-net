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
//   	                             	NEW LEGEND                                    //
//------------------------------------------------------------------------------------//
function advicecard(div) {

    var rect = div.getBoundingClientRect();
    var parent = div.parent;
    var parentNode = div.parentNode;

    var advice = document.createElement('div');
    advice.id = "advice";
    advice.style.color = "#000000";
    advice.style.position = "fixed";
    advice.style.backgroundColor = "white";
    advice.style.left = rect.left;
    advice.style.right = rect.right;
    advice.style.width = "22.5%";
    advice.style.height = "50%";
    advice.style.zIndex = "150";

    var element = document.querySelector(".Footer.module.roaming-module");
    element.parentNode.insertBefore(advice, element);

    advice.style.height = "40%";
    var niveau = "<h13 style='color: #25d7fb; padding-top: 1.7em;'>Niveau 2</h13>";
    decouvre = "<p id='revealgif'>Révèle les grandes tendances qui se cachent derrière la conception de ton interface!</p>";
    advice.innerHTML = '<div id="advicecontainer">' + niveau + decouvre + '</div>';
    // custom alert box
}

//------------------------------------------------------------------------------------//
//   	                     Function to load gifs                                      //
//------------------------------------------------------------------------------------//


function setCursor(canvas) {
    canvas.freeDrawingCursor = 'url(' + chrome.extension.getURL('src/css/cursor2.cur') + '),default';
}


function loadGif(id, gif, canvas, page) {
    var newadvice = document.getElementById('#advice');
    niveau = "<h13 style='color: #25d7fb;'>Niveau 2</h13>";
    decouvre = "<p id='revealgif'>Révèle les grandes tendances qui se cachent derrière la conception de ton interface!</p>";
    clic = "<div class='neonText-Lightgreen'><h13 style='color:white; padding-top:0;'>clique sur les gifs...<br>ils t'en diront plus!</h13></div>";
    advice.innerHTML = '<div id="advicecontainer">' + niveau + decouvre + clic + '</div>';
    var divcouche3 = document.getElementById(id);
    divcouche3.id = "niveaux_trois";
    divcouche3.innerHTML = "";
    var rect = divcouche3.getBoundingClientRect();
    var parent = divcouche3.parent;
    var parentNode = divcouche3.parentNode;
    divcouche3.style.position = "absolute";
    divcouche3.style.top = 0;
    divcouche3.style.bottom = 0;
    divcouche3.style.left = rect.left;
    divcouche3.style.right = rect.right;
    divcouche3.style.width = "100%";
    divcouche3.style.height = "100%";
    divcouche3.style.zIndex = "999";
    //divcouche3.style.borderRadius = "5px";
    divcouche3.className = "BOX";
    animation = document.createElement("IMG");
    animation.style.zIndex = "inherit";
    animation.className = "GIF";
    animation.src = chrome.extension.getURL(gif);
    divcouche3.appendChild(animation);
    divcouche3.style.cursor = 'url(' + chrome.extension.getURL('src/css/lsdpointer.cur') + '), pointer';
    divcouche3.onclick = function() {
        window.open(page, 'target: _blank');
    };
}

//------------------------------------------------------------------------------------//
//   	                             	COUCHE 2                                          //
//------------------------------------------------------------------------------------//

function niveauDeux() {

    //-----------------------------------------//
    //   		TWITTER trends2                   //
    //---------------------------------------//

    function maptrends2(div) {
        var rect = div.getBoundingClientRect();

        var parent = div.parent;
        var parentNode = div.parentNode;

        divCouche2 = document.createElement("div");
        divCouche2.id = "niveau_deux";
        divCouche2.className = "niveaux_deux";

        div.parentNode.insertBefore(divCouche2, div.nextSibling);

        divCouche2.style.position = "absolute";
        divCouche2.style.top = 0;
        divCouche2.style.bottom = 0;
        divCouche2.style.left = rect.left;
        divCouche2.style.right = rect.right;
        document.getElementById("niveau_deux").style.marginLeft = "-15px";
        divCouche2.style.width = "100%";
        divCouche2.style.height = "100%";
        divCouche2.style.zIndex = "20";


        var innerDivCouche2 = document.createElement('canvas');


        innerDivCouche2.className = 'niveaux_deux_innerdiv';
        divCouche2.appendChild(innerDivCouche2);
        innerDivCouche2.style.width = "100%";
        innerDivCouche2.style.height = "100%";
        innerDivCouche2.id = "canvasparent";
        innerDivCouche2.style.zIndex = "20";

        var sizeWidth = innerDivCouche2.clientWidth;
        var sizeHeight = innerDivCouche2.clientHeight;


        var dessincouche2 = new fabric.Canvas("canvasparent");
        setCursor(dessincouche2);
        dessincouche2.className = dessincouche2;
        dessincouche2.setWidth(sizeWidth);
        dessincouche2.setHeight(sizeHeight);
        dessincouche2.isDrawingMode = true;
        var img3 = new Image();
        img3.style.width = sizeWidth;
        img3.style.height = sizeHeight;
        img3.src = chrome.extension.getURL('src/img/attentionbig.gif');
        var texturePatternBrush = new fabric.PatternBrush(dessincouche2);
        texturePatternBrush.source = img3;
        dessincouche2.freeDrawingBrush = texturePatternBrush;
        dessincouche2.freeDrawingBrush.width = 100;
        dessincouche2.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: blur,
            offsetX: 8,
            offsetY: 8
        });
        dessincouche2.freeDrawingBrush.shadow.blur = 25;


        dessincouche2.on('mouse:up', function() {
            loadGif('niveau_deux', 'src/img/attentionbig.gif', dessincouche2, 'https://oracledu.net/tendancesweb/');
        });
    }

    //---------------------------------------//
    //   		TWITTER suggestions2             //
    //---------------------------------------//


    function mapSuggestion2(div) {
        var rect = div.getBoundingClientRect();

        var parent = div.parent;
        var parentNode = div.parentNode;

        divSugs2 = document.createElement("div");
        divSugs2.id = "niveau_deux_sugs";

        div.parentNode.insertBefore(divSugs2, div.nextSibling);

        divSugs2.style.position = "absolute";
        divSugs2.style.top = 0;
        divSugs2.style.bottom = 0;
        divSugs2.style.left = rect.left;
        divSugs2.style.right = rect.right;
        divSugs2.style.width = "100%";
        divSugs2.style.height = "100%";
        divSugs2.style.zIndex = "810";
        document.getElementById("niveau_deux_sugs").style.marginLeft = "-15px";


        var innerdivSugs2 = document.createElement('canvas');

        innerdivSugs2.className = 'niveau_deux_sugs_innerdiv';
        divSugs2.appendChild(innerdivSugs2);
        innerdivSugs2.style.width = "100%";
        innerdivSugs2.style.height = "100%";
        innerdivSugs2.id = "canvasparentmap";
        innerdivSugs2.style.zIndex = "inherit";

        var sizeWidth = innerdivSugs2.clientWidth;
        var sizeHeight = innerdivSugs2.clientHeight;

        var dessinsugs2 = new fabric.Canvas("canvasparentmap");
        setCursor(dessinsugs2);
        dessinsugs2.className = dessinsugs2;
        dessinsugs2.setWidth(sizeWidth);
        dessinsugs2.setHeight(sizeHeight);
        dessinsugs2.isDrawingMode = true;
        var imgSug = new Image();
        imgSug.style.width = sizeWidth;
        imgSug.style.height = sizeHeight;
        imgSug.src = chrome.extension.getURL('src/img/bulle.gif');
        var texturePatternBrush = new fabric.PatternBrush(dessinsugs2);
        texturePatternBrush.source = imgSug;
        dessinsugs2.freeDrawingBrush = texturePatternBrush;
        dessinsugs2.freeDrawingBrush.width = 100;
        dessinsugs2.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: blur,
            offsetX: 8,
            offsetY: 8
        });
        dessinsugs2.freeDrawingBrush.shadow.blur = 25;

        dessinsugs2.on('mouse:up', function() {
            loadGif('niveau_deux_sugs', 'src/img/bulle.gif', dessinsugs2, 'https://oracledu.net/tendancesweb/');
        });
    }

    function mapSponso2(div, i) {
        //-----------------------------//
        // trouve les div des Sponso  //
        //-----------------------------//
        superparent = div.closest('div.tweet');
        var parentNode = superparent;
        var rect = superparent.getBoundingClientRect();
        Sponso2 = document.createElement("div");
        Sponso2.id = "Sponso2" + i;
        superparent.parentNode.insertBefore(Sponso2, superparent.nextSibling);
        Sponso2.style.position = "absolute";
        Sponso2.style.top = 0;
        Sponso2.style.bottom = 0;
        Sponso2.style.left = rect.left;
        Sponso2.style.right = rect.right;
        Sponso2.style.width = "100%";
        Sponso2.style.height = "100%";
        Sponso2.style.zIndex = "920";

        //-----------------------------//
        // créé le canvas dans la div  //
        //-----------------------------//
        var SponsoInner2 = document.createElement('canvas');
        Sponso2.appendChild(SponsoInner2);
        SponsoInner2.style.width = "99.5%";
        SponsoInner2.style.height = "99%";
        SponsoInner2.id = "canvasparentSponso2" + i;
        SponsoInner2.style.zIndex = "inherit";

        var sizeWidth = SponsoInner2.clientWidth;
        var sizeHeight = SponsoInner2.clientHeight;

        var dessinSponso2 = new fabric.Canvas("canvasparentSponso2" + i);
        setCursor(dessinSponso2);
        dessinSponso2.setWidth(sizeWidth);
        dessinSponso2.setHeight(sizeHeight);
        dessinSponso2.isDrawingMode = true;
        var imgSponso = new Image();
        imgSponso.style.width = sizeWidth;
        imgSponso.style.height = sizeHeight;
        imgSponso.src = chrome.extension.getURL('src/img/aspiration.gif');
        var texturePatternBrush = new fabric.PatternBrush(dessinSponso2);
        texturePatternBrush.source = imgSponso;
        dessinSponso2.freeDrawingBrush = texturePatternBrush;
        dessinSponso2.freeDrawingBrush.width = 100;
        dessinSponso2.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: blur,
            offsetX: 8,
            offsetY: 8
        });
        dessinSponso2.freeDrawingBrush.shadow.blur = 25;

        dessinSponso2.on('mouse:up', function() {
            loadGif("Sponso2" + i, 'src/img/aspiration.gif', dessinSponso2, 'https://oracledu.net/tendancesweb/');
        });
    }



    function replaceOriginal2() {
        var tweetContent2 = document.querySelectorAll(".FullNameGroup");
        if ($(tweetContent2).closest('div.tweet').not(".promoted-tweet"))
            [].forEach.call(tweetContent2, function(div, i) {

                superparent = div.closest('div.tweet');
                var rectget = superparent.getBoundingClientRect();
                var rect = rectget - 10;


                var parent = div.parent;
                var parentNode = div.parentNode;

                divOriginalCouche2 = document.createElement("div");
                divOriginalCouche2.id = "niveau_deux_original" + i;

                superparent.parentNode.insertBefore(divOriginalCouche2, superparent.nextSibling);

                divOriginalCouche2.style.position = "absolute";
                divOriginalCouche2.style.top = 0;
                divOriginalCouche2.style.bottom = 0;
                divOriginalCouche2.style.left = rect.left;
                divOriginalCouche2.style.right = rect.right;
                divOriginalCouche2.style.width = "100%";
                divOriginalCouche2.style.height = "100%";
                divOriginalCouche2.style.zIndex = "810";


                var innerdivOriginalCouche2 = document.createElement('canvas');

                innerdivOriginalCouche2.className = 'niveaux_deux_innerdiv';
                divOriginalCouche2.appendChild(innerdivOriginalCouche2);
                innerdivOriginalCouche2.style.width = "100%";
                innerdivOriginalCouche2.style.height = "100%";
                innerdivOriginalCouche2.id = "canvasparent" + i;
                innerdivOriginalCouche2.style.zIndex = "inherit";

                var sizeWidth = innerdivOriginalCouche2.clientWidth;
                var sizeHeight = innerdivOriginalCouche2.clientHeight;


                var dessinOriginalCouche2 = new fabric.Canvas("canvasparent" + i);
                setCursor(dessinOriginalCouche2);
                dessinOriginalCouche2.className = dessinOriginalCouche2;
                dessinOriginalCouche2.setWidth(sizeWidth);
                dessinOriginalCouche2.setHeight(sizeHeight);
                dessinOriginalCouche2.isDrawingMode = true;
                var img4 = new Image();
                img4.style.width = sizeWidth;
                img4.style.height = sizeHeight;
                img4.src = chrome.extension.getURL('src/img/highway.gif');
                var texturePatternBrush = new fabric.PatternBrush(dessinOriginalCouche2);
                texturePatternBrush.source = img4;
                dessinOriginalCouche2.freeDrawingBrush = texturePatternBrush;
                dessinOriginalCouche2.freeDrawingBrush.width = 100;
                dessinOriginalCouche2.freeDrawingBrush.shadow = new fabric.Shadow({
                    blur: blur,
                    offsetX: 8,
                    offsetY: 8
                });
                dessinOriginalCouche2.freeDrawingBrush.shadow.blur = 25;

                dessinOriginalCouche2.on('mouse:up', function() {
                    loadGif("niveau_deux_original" + i, 'src/img/highway.gif', dessinOriginalCouche2, 'https://oracledu.net/tendancesweb/');
                });

            });
    }

    function replaceRetweet2(div, i) {

        //-----------------------------//
        // trouve les div des retweet  //
        //-----------------------------//
        superparent = div.closest('div.tweet');
        //$(".niveaux_un_tweet").remove();
        //$(".niveau_unchild").remove();
        //$('div.tweet').remove(".niveaux_un_tweet");
        //$('div.tweet').remove(".niveau_unchild");

        var parentNode = superparent;
        var rect = superparent.getBoundingClientRect();
        Retweet2 = document.createElement("div");
        Retweet2.id = "retweet2" + i;
        superparent.parentNode.insertBefore(Retweet2, superparent.nextSibling);
        Retweet2.style.position = "absolute";
        Retweet2.style.top = 0;
        Retweet2.style.bottom = 0;
        Retweet2.style.left = rect.left;
        Retweet2.style.right = rect.right;
        Retweet2.style.width = "100%";
        Retweet2.style.height = "100%";
        Retweet2.style.zIndex = "920";

        //-----------------------------//
        // créé le canvas dans la div  //
        //-----------------------------//
        var RetweetInner2 = document.createElement('canvas');
        Retweet2.appendChild(RetweetInner2);
        RetweetInner2.style.width = "99.5%";
        RetweetInner2.style.height = "99%";
        RetweetInner2.id = "canvasparentRetweet2" + i;
        RetweetInner2.style.zIndex = "inherit";

        var sizeWidth = RetweetInner2.clientWidth;
        var sizeHeight = RetweetInner2.clientHeight;

        var dessinRetweet2 = new fabric.Canvas("canvasparentRetweet2" + i);
        setCursor(dessinRetweet2);
        dessinRetweet2.setWidth(sizeWidth);
        dessinRetweet2.setHeight(sizeHeight);
        dessinRetweet2.isDrawingMode = true;
        var img5 = new Image();
        img5.style.width = sizeWidth;
        img5.style.height = sizeHeight;
        img5.src = chrome.extension.getURL('src/img/gouvernance.gif');
        var texturePatternBrush = new fabric.PatternBrush(dessinRetweet2);
        texturePatternBrush.source = img5;
        dessinRetweet2.freeDrawingBrush = texturePatternBrush;
        dessinRetweet2.freeDrawingBrush.width = 100;
        dessinRetweet2.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: blur,
            offsetX: 8,
            offsetY: 8
        });
        dessinRetweet2.freeDrawingBrush.shadow.blur = 25;

        dessinRetweet2.on('mouse:up', function() {
            loadGif("retweet2" + i, 'src/img/gouvernance.gif', dessinRetweet2, 'https://oracledu.net/tendancesweb/');
        });

    }


    //-----------------------------------------//
    // REMPLACE LES POSTS A AIMÉ              //
    //----------------------------------------//


    function replaceAime2(div, i) {
        //-------------------------------------//
        // trouve les div mères de a aimé  //
        //-------------------------------------//
        superparent = div.closest('div.tweet');
        //$('.tweet div.niveau_deux_original').remove();
        //$('.tweet div.niveaux_deux_innerdiv').remove();

        var parentNode = superparent;
        var rect = superparent.getBoundingClientRect();
        nouveauDiv = document.createElement("div");
        nouveauDiv.id = "niveau_deux_aime" + i;
        nouveauDiv.className = "niveaux_deux_aime";

        superparent.parentNode.insertBefore(nouveauDiv, superparent.nextSibling);
        nouveauDiv.style.position = "absolute";
        nouveauDiv.style.top = 0;
        nouveauDiv.style.bottom = 0;
        nouveauDiv.style.left = rect.left;
        nouveauDiv.style.right = rect.right;
        nouveauDiv.style.width = "100%";
        nouveauDiv.style.height = "100%";
        nouveauDiv.style.zIndex = "920";

        //-----------------------------//
        // créé le canvas dans la div  //
        //-----------------------------//
        var innerDiv = document.createElement('canvas');
        innerDiv.className = 'niveau_deux_aime_child';
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
        img2.src = chrome.extension.getURL('src/img/aspiration.gif');
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
        // créé le gif  //
        //-------------------------------//
        dessin.on('mouse:up', function() {
            loadGif("niveau_deux_aime" + i, 'src/img/aspiration.gif', dessin, 'https://oracledu.net/tendancesweb/');
        });


    }


    //-----------------------------------------------------------//
    // 	AU CAS OU VOUS L'AURIEZ MANQUé   VOUS POUURIEZ AIMER    //
    //---------------------------------------------------------//

    function replaceMissed2() {
        var missedContent = document.querySelector('.js-stream-item.stream-item.has-recap');
        if (missedContent.closest('ol.stream-items.recap-module')) {
            // If you find the list of posts replace them all with
            $('ol li').each(function(div) {
                var rect = div.getBoundingClientRect();
                var parent = div.parent;
                nouveauDiv = document.createElement("div");
                nouveauDiv.id = "niveau_deux_missed" + i;
                nouveauDiv.className = "niveaux_deux_missed";
                div.parentNode.insertBefore(nouveauDiv, div.nextSibling);
                nouveauDiv.style.position = "absolute";
                nouveauDiv.style.top = 0;
                nouveauDiv.style.bottom = 0;
                nouveauDiv.style.left = rect.left;
                nouveauDiv.style.right = rect.right;
                nouveauDiv.style.width = "100%";
                nouveauDiv.style.height = "100%";
                nouveauDiv.style.zIndex = "930";

                //-----------------------------//
                // créé le canvas dans la div  //
                //-----------------------------//
                var innerDiv = document.createElement('canvas');

                innerDiv.className = 'niveau_un_missed_child';
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
                img2.src = chrome.extension.getURL('src/img/aspiration.gif');
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
                // créé le gif                   //
                //-------------------------------//
                dessin.on('mouse:up', function() {
                    loadGif("niveaux_deux_missed" + i, 'src/img/aspiration.gif', dessin, 'https://oracledu.net/tendancesweb/');
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
                nouveauDiv.id = "missed_deux";
                nouveauDiv.className = "niveaux_deux_missed";

                superparent.parentNode.insertBefore(missedDiv, superparent.nextSibling);
                nouveauDiv.style.position = "absolute";
                nouveauDiv.style.top = 0;
                nouveauDiv.style.bottom = 0;
                nouveauDiv.style.left = rect.left;
                nouveauDiv.style.right = rect.right;
                nouveauDiv.style.width = "100%";
                nouveauDiv.style.height = "100%";
                nouveauDiv.style.zIndex = "930";

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
                img2.src = chrome.extension.getURL('src/img/aspiration.gif');
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
                // créé le gif                   //
                //-------------------------------//
                dessin.on('mouse:up', function() {
                    loadGif("niveaux_deux_missed" + i, 'src/img/aspiration.gif', dessin, 'https://oracledu.net/tendancesweb/');
                });


            });

        }


    }
    /*----------------------------------------------------------------------------------------------*\
                                            Run functions
    \*----------------------------------------------------------------------------------------------*/
    replace('div.Footer.module.roaming-module', advicecard);
    replace('div.trends-inner', maptrends2);
    replace('div.flex-module div.js-recommended-followers', mapSuggestion2);
    replace('.promoted-tweet', mapSponso2);
    replaceOriginal2();
    replace('.js-retweet-text', replaceRetweet2);
    replace('span.Icon.Icon--small.Icon--heartBadge', replaceAime2);
    if ($('.stream-items.recap-module').length) {
        replaceMissed2();
    }


}
