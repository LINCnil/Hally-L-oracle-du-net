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

//--------------------------------------------//
//               Variables                    //
//--------------------------------------------//

var maxDivNumber = 7,
    mandatoryDivNumber = 3,
    currentFoundDivNumber = 0,
    firstTrigger = false,
    customDivContent = {
        googlehome: 'En général, pour une requête de recherche, il existe des milliers, voire des millions de pages Web correspondantes qui contiennent des informations utiles. Les algorithmes sont des processus et des formules informatiques qui convertissent tes questions en réponses. À l\'heure actuelle, les algorithmes de Google font appel à plus de 200 signaux ou indices uniques qui permettent de deviner plus précisément ce que tu recherche. Ces signaux comprennent entre autres les termes figurant sur les sites Web, le niveau d\'actualisation du contenu, ta localisation ainsi que la fonctionnalité PageRank.',
        searchbar: 'Outre les mots-clés de la barre de recherche, les algorithmes recherchent des indices pour te donner ce que tu recherches. Ils analysent si les pages incluent du contenu pertinent.',
        searchresults_amount: 'Pour une requête typique, il existe des millions de pages contenant des informations pertinentes. \nPour les hiérarchiser — fonction première du search — Google utilise des centaines de facteurs dont le nombre de lien qui pointent vers une page.\n#popularité',
        searchresults: 'Afin d\'évaluer la fiabilité et l\'autorité d\'un site sur son sujet, Google recherche des sites que de nombreux utilisateurs semblent valoriser pour des recherches similaires. Si d\'autres sites Web éminents sur le sujet se lient à la page, c\'est un bon signe, l\'information est de haute qualité.',
        knowledgegraph: 'Voilà le Knowledge Graph, le “graphique du savoir”! Grâce à sa base de données de plus d\'un milliard de personnes, de lieux et de choses du monde réel et plus de 50 milliards de faits et de connexions parmi eux Google essaye ici de montrer comment les choses sont connectées.',
        googleshopping: 'Les annonces ciblées par emplacements te touchent en fonctions de sites spécifiques que tu visites, des mots clés de ta recherche et de tes données démographiques et du remarketing.\nTout est fait pour que tu t\'intéresses à ces marques! C’est un des systèmes qui fait que Google est gratuit.',
        googlecarousel: 'Ici, on a affaire à un travail de type cyborgien. Ce sont les algorithmes qui sélectionnent les résultats qui apparaissent dans les recherches de tendance et l\'équipe de News Lab de Google qui choisis lesquels seront en vedette.',
        googleads: 'Ici, c’est Adword qui travaille. Voici certains des éléments qui sont pris en compte pour diffuser les annonces :\n— Les types de sites Web que tu consultes et les applications installées sur ton appareil\n— Les cookies installés dans ton navigateur\n— Ton activité sur un autre appareil\n— Si tu as déjà interagis avec des annonces ou des services publicitaires de Google\n— L’activité, les paramètres et les informations disponibles sur ton compte Google',
        googlerichlist: 'En combinant son Knowledge Graph avec la sagesse collective du Web,\nGoogle raffine la nature de ses réponses en tissant des liens entre des contenus aussi divers que des choses, des lieux, des personnes...',
        googlefeaturedsnippet: 'Cet extrait a été mis en vedette grâce à son contenu, sa méta-description et l’engagement qu’il génère auprès des internautes. Plus l\'extrait de résultat de recherche est pertinent, plus les gens cliquent et plus Google se porte bien.',
        googleassociatedsearch: 'Si tu as saisi ta requête dans la bar de recherche, tu en trouveras peut-être une meilleure ici \noù l\'on te montre les recherches fréquemment associées à la tienne et qui pourraient donc t’intéresser.',
        googlemap: 'L\'algorithme utilise la géolocalisation pour te délivrer l’information la plus pertinente à un instant et un endroit T.'
    },
    mandatoryDivs = {
        'div.sfbgx': ['searchbar', 'searchbar', 'searchbar_innerdiv', 'searchbar_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/searchbar.png'), customDivContent.searchbar],
        'div.srg': ['searchresults', 'searchresults', 'searchresults_innerdiv', 'searchresults_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/research.png'), customDivContent.searchresults],
    },
    notMandatoryDivs = {
        'div._Jw': ['knowledgegraph', 'knowledgegraph', 'knowledgegraph_innerdiv', 'knowledgegraph_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/knowgraph.png'), customDivContent.knowledgegraph],
        'div._oc': ['googleshopping', 'googleshopping', 'googleshopping_innerdiv', 'googleshopping_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/shopping.png'), customDivContent.googleshopping],
        'div._Ncr': ['googlecarousel', 'googlecarousel', 'googlecarousel_innerdiv', 'googlecarousel_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/alaune.png'), customDivContent.googlecarousel],
        'div._Ocr': ['googlecarouselmid', 'googlecarouselmid', 'googlecarouselmid_innerdiv', 'googlecarouselmid_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/alaune.png'), customDivContent.googlecarousel],
        'div._Ak': ['googleads', 'googleads', 'googleads_innerdiv', 'googleads_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/adwords.png'), customDivContent.googleads],
        'div.kappbar': ['googlerichlist', 'googlerichlist', 'googlerichlist_innerdiv', 'googlerichlist_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/richlist.png'), customDivContent.googlerichlist],
        'div._Z7': ['googlefeaturedsnippet', 'googlefeaturedsnippet', 'googlefeaturedsnippet_innerdiv', 'googlefeaturedsnippet_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/featured.png'), customDivContent.googlefeaturedsnippet],
        'div#botstuff': ['googleassociatedsearch', 'googleassociatedsearch', 'googleassociatedsearch_innerdiv', 'googleassociatedsearch_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/connected_research.png'), customDivContent.googleassociatedsearch],
        'div._L6k': ['googlemap', 'googlemap', 'googlemap_innerdiv', 'googlemap_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/map.png'), customDivContent.googlemap]
    },
    phase2_gifs = {
        'div.sfbgx': [chrome.extension.getURL('src/img/aspiration.png'), chrome.extension.getURL('src/img/aspiration.gif')],
        'div#slim_appbar': [chrome.extension.getURL('src/img/sagessebig.gif'), chrome.extension.getURL('src/img/sagessebig.gif')],
        'div.srg': [chrome.extension.getURL('src/img/highway.png'), chrome.extension.getURL('src/img/highway.gif')],
        'div._Jw': [chrome.extension.getURL('src/img/attentionbig.gif'), chrome.extension.getURL('src/img/attentionbig.gif')],
        'div._oc': [chrome.extension.getURL('src/img/attention.png'), chrome.extension.getURL('src/img/attention.gif')],
        'div._Ncr': [chrome.extension.getURL('src/img/gouvernance.jpg'), chrome.extension.getURL('src/img/gouvernance.gif')],
        'div._Ocr': [chrome.extension.getURL('src/img/gouvernance.jpg'), chrome.extension.getURL('src/img/gouvernance.gif')],
        'div._Ak': [chrome.extension.getURL('src/img/datamoney.png'), chrome.extension.getURL('src/img/datamoney.gif')],
        'div.kappbar': [chrome.extension.getURL('src/img/sagesse.png'), chrome.extension.getURL('src/img/sagesse.gif')],
        'div._Z7': [chrome.extension.getURL('src/img/sagesse.png'), chrome.extension.getURL('src/img/sagesse.gif')],
        'div#botstuff': [chrome.extension.getURL('src/img/bulle.jpg'), chrome.extension.getURL('src/img/bulle.gif')],
        'div._L6k': [chrome.extension.getURL('src/img/aspiration.png'), chrome.extension.getURL('src/img/aspiration.gif')]
    },
    discoveredDivs = [],
    randomMandatoryDiv = {
        good: {},
        bad: {}
    };

//---------------------------------------------//
//   		       Helpers                    //
//--------------------------------------------//

//Width based ratio

function contenu1(dessin, someText, sizeWidth, sizeHeight) {

    fontRatio = (sizeHeight / 10);
    if (fontRatio > 25) {
        fontRatio = 25;
    }
    if (fontRatio < 20) {
        fontRatio = 20;
    }

    var textSize = new fabric.Text(someText);
    var textBoxWidth = textSize.getWidth();

    if (dessin.width < textBoxWidth) {
        textBoxWidth = dessin.width - 10;
    }

    var width = sizeWidth - 50;
    if (dessin.width > 700) {
        width = sizeWidth - 650;
    }


    var textBox1 = new fabric.Textbox(someText, {
        width: width,
        height: sizeHeight,
        fontSize: fontRatio,
        textAlign: 'center',
        fontFamily: 'Arial',
    });

    textBox1.set({
        fill: '#FFFFFF'
    });

    return textBox1;
}

//Height based ratio

function contenu2(dessin, someText, sizeWidth, sizeHeight) {

    fontRatio = (sizeHeight / 10);
    if (fontRatio > 25) {
        fontRatio = 22;
    }
    if (fontRatio < 20) {
        fontRatio = 18;
    }

    var textSize = new fabric.Text(someText);
    var textBoxWidth = textSize.getWidth();

    if (dessin.width < textBoxWidth) {
        textBoxWidth = dessin.width - 10;
    }

    var width = sizeWidth - 50;
    if (dessin.width > 700) {
        width = sizeWidth - 800;
    }

    var textBox1 = new fabric.Textbox(someText, {
        width: width,
        height: sizeHeight,
        fontSize: fontRatio,
        textAlign: 'center',
        fontFamily: 'Arial'
    });

    textBox1.set({
        fill: '#FFFFFF'
    });

    return textBox1;
}

function refreshTextbox(canvas, textbox) {
    canvas.add(textbox);
    canvas.centerObject(textbox);
    canvas.bringToFront(textbox);
}

function getRandomObjectProp(obj) {
    var keys = Object.keys(obj),
        randomValue = Math.floor(keys.length * Math.random()),
        result = {};

    result[keys[randomValue]] = obj[keys[randomValue]];
    return result;
}
//---------------------------------------//
//   	      Main functions             //
//---------------------------------------//

/*
 *
 */

function mandatoryDivNumber_listener() {
    if (mandatoryDivNumber === 0) {
        display_level2_div();
    } else {
        return false;
    }
}

/*
 *
 */

function display_level2_div() {
    var level2_div = $(document.createElement('div')),
        overlay_div = $(document.createElement('span')),
        confirm_input = $(document.createElement('input'));
    level2_input = $(document.createElement('input'));

    overlay_div
        .attr('id', 'overlay')
        .css({
            'background-color': 'rgba( 255, 255, 255, 0.7 )',
            'z-index': '1000100',
            'position': 'fixed',
            'top': 0,
            'bottom': 0,
            'left': 0,
            'right': 0
        });

    level2_div
        .addClass('customAlert')
        .html('<div class=quotacontainer style="padding-bottom:2em;"><p class="message">Bravo!</br>Tu peux maintenant découvrir la couche 2.</p></div>')
        .css('z-index', '1000101');

    confirm_input.attr({
        type: 'button',
        class: 'buttonExplore active',
        value: 'Ok !'
    });

    level2_input.attr({
        type: 'button',
        class: 'next_level active',
        value: 'Explorer le second niveau'
    });

    $('.quotacontainer').append(level2_input);

    level2_input.on('click', function(event) {
        event.preventDefault();

        confirm_input.appendTo(level2_div);
        overlay_div.appendTo('body');
        level2_div.appendTo('body').show();

        confirm_input.on('click', function(event) {
            event.preventDefault();
            level2_div.fadeOut('400', function() {
                toggle_phase_2();
            });
        });
    });

}

/*
 *
 */

function display_google_home_div() {
    var homeDiv = $(document.createElement('div')),
        home_input = $(document.createElement('input'));

    homeDiv
        .addClass('customAlert')
        .html('<p class="message">Lance une recherche et réouvre moi sur la page suivante !</p>')
        .css('z-index', '1000000');

    home_input.attr({
        type: 'button',
        class: 'buttonExplore active',
        value: 'Ok'
    });

    home_input.appendTo(homeDiv);
    homeDiv.appendTo('body').show();

    home_input.on('click', function(event) {
        event.preventDefault();
        window.location.reload();
    });
}

/*
 *
 */

function display_dashboard() {
    var dashboard = $(document.createElement('div'));
    dashboard
        .addClass('quota')
        .html('<h10 class="quotacontainer, neonText-pink"><br>Révèle les algorithmes qui se cachent derrière tes posts!</h10>')
        .css({
            'color': 'black',
            'background-color': 'white',
            'width': '20%',
            'min-height': '300px',
            'position': 'fixed',
            'right': '12px',
            'top': '25px',
            'z-index': '100020'
        })
        .insertBefore('#legende');

    $('#legende').css('top', '350px');
    $('#legende').css('right', '22px');
    $('#legende').css('width', '20%');
}

/*
 *
 */

function prepare_dashboard() {
    $('.quota').html('<div class="quotacontainer"><h13 style="color: #4fff8d; padding-top:0;">Niveau 1</h13><div class="suivi"></div><div class="progress"></div></div><input type="button" value="Recommencer" class="buttonsmall" />');

    var progress = $('.quota .progress');

    progress.html('<ul id="progressbar"></ul>');

    for (var i = 0; i < mandatoryDivNumber; i++) {
        $('.quota #progressbar').append('<li></li>');
    }

    $('.quota #progressbar li:last-of-type').html('Niveau 2');

    $('.quota .buttonsmall').on('click', function(event) {
        event.preventDefault();
        window.location.reload();
    });

}

/*
 *
 */

function update_dashboard() {
    var discoveredDivsNumber = discoveredDivs.length,
        award = '',
        suivi = $('.quota .suivi'),
        progressbar = $('.quota #progressbar');

    switch (discoveredDivsNumber) {
        case 1:
            award = "<h13>🔎  Novice 🔎 </h13>";
            break;
        case 2:
            award = "<h13>🔦 Curieux 🔦</h13>";
            break;
        case 3:
            award = "<h13>🔬 Chercheur 🔬</h13>";
            break;
        case 4:
            award = "<h13>🔮 Aventurier 🔮</h13>";
            break;
        case 5:
            award = "<h13>🚀 Explorateur 🚀</h13>";
            break;
        case 6:
            award = "<h13>☄️ Intrépide ☄️</h13>";
            break;
        case 7:
            award = "<h13>🛰 Conquérant 🛰</h13>";
            break;
    }

    suivi.html(award);
}

/*
 *
 */

function handleRedondantDiv() {
    $('.quota #progressbar li').removeClass('twice');
    $('.quota #progressbar li.active').last().addClass('twice');
    setTimeout(function() {
        $('.quota #progressbar li.active').last().removeClass('twice');
    }, 2000);
}

/*
 *
 */

function replaceDiv(element, elementId, elementClass, innerElementId, innerElementClass, customCursorUrl, customBrushUrl, customText, mandatory) {
    var elements = $(element);
    mandatory = (typeof mandatory !== 'undefined') ? mandatory : 0;

    /*
     * Check if element exists
     */

    if (elements.length <= 0) {
        return false;
    }

    $.each(elements, function(index, elem) {
        var rect = elem.getBoundingClientRect(),
            parent = $(elem).parent(),
            that = $(this),
            textDisplayed = false,
            elemWidth = that.width(),
            elemHeight = that.height();

        /*
         * Create new HTML element
         */

        var newDiv = $(document.createElement('div'));

        newDiv.attr({
            id: elementId + '_' + index,
            class: elementClass
        });
        newDiv.css({
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: elemWidth,
            height: elemHeight,
            zIndex: '99999'
        });

        /*
         * Insert new HTML element in DOM
         */

        parent.css('position', 'relative');
        newDiv.appendTo(parent);

        var newInnerDiv = $(document.createElement('canvas'));

        newInnerDiv.attr({
            id: innerElementId + '_' + index,
            class: innerElementClass
        });
        newInnerDiv.css({
            width: '100%',
            height: '100%',
            zIndex: '99999'
        });

        newInnerDiv.appendTo(newDiv);

        /*
         * Fabric JS Init
         */

        var dessin = new fabric.Canvas(innerElementId + '_' + index, {
            isDrawingMode: true,
            width: elemWidth,
            height: elemHeight
        });

        var textureBrushImg = new Image();
        textureBrushImg.src = customBrushUrl;

        var textureBrush = new fabric.PatternBrush(dessin);
        textureBrush.source = textureBrushImg;

        dessin.freeDrawingCursor = 'url(' + customCursorUrl + '),default';
        dessin.freeDrawingBrush = textureBrush;
        dessin.freeDrawingBrush.width = 100;
        dessin.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: 25,
            offsetX: 8,
            offsetY: 8
        });

        dessin.on('mouse:up', function() {

            if ($('#search').length === 0) {
                display_google_home_div();
            } else {
                var contenu;

                if (element == 'div.sfbgx' || element == 'div#slim_appbar') {
                    contenu = contenu2(dessin, customText, elemWidth, elemHeight);
                } else {
                    contenu = contenu1(dessin, customText, elemWidth, elemHeight);
                }
                /*
                 * If div hasn't been scratched before
                 */

                if (textDisplayed === false) {
                    refreshTextbox(dessin, contenu);
                    textDisplayed = true;

                    /*
                     * On first elem mouse:up, prepare dashboard appearance
                     */

                    if (firstTrigger === false) {
                        prepare_dashboard();
                        firstTrigger = true;
                    }

                    /*
                     * If div is mandatory to go to phase 2
                     */

                    if (mandatory === 1) {

                        if ($.inArray(element, discoveredDivs) === -1) {
                            mandatoryDivNumber--;
                            currentFoundDivNumber++;

                            $('.quota #progressbar').find('li').eq(currentFoundDivNumber - 1).addClass('active');

                            if (mandatoryDivNumber === 0) {
                                mandatoryDivNumber = 0;
                            }

                        } else {
                            handleRedondantDiv();
                        }

                        mandatoryDivNumber_listener();
                    }

                    if ($.inArray(element, discoveredDivs) === -1) {
                        discoveredDivs.push(element);
                        update_dashboard();
                    }

                } else {
                    refreshTextbox(dessin, contenu);
                    handleRedondantDiv();
                }
            }

        });

    });

}

function replaceDivs_phase2(element, elementId, elementClass, innerElementId, innerElementClass, customCursorUrl, customBrushUrl, gifUrl, customUrl) {
    var elements = $(element);

    /*
     * Check if element exists
     */

    if (elements.length <= 0) {
        return false;
    }

    $.each(elements, function(index, elem) {
        var rect = elem.getBoundingClientRect(),
            parent = $(elem).parent(),
            that = $(this),
            imgDisplayed = false,
            elemWidth = that.width(),
            elemHeight = that.height();

        /*
         * Create new HTML element
         */

        var newDiv = $(document.createElement('div'));

        newDiv.attr({
            id: elementId + '_' + index + '_phase2',
            class: elementClass + '_phase2'
        });
        newDiv.css({
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: elemWidth,
            height: elemHeight,
            zIndex: '100015'
        });

        /*
         * Insert new HTML element in DOM
         */

        parent.css('position', 'relative');
        newDiv.appendTo(parent);

        var newInnerDiv = $(document.createElement('canvas'));

        newInnerDiv.attr({
            id: innerElementId + '_' + index + '_phase2',
            class: innerElementClass + '_phase2'
        });
        newInnerDiv.css({
            width: '100%',
            height: '100%',
            zIndex: '100015'
        });

        newInnerDiv.appendTo(newDiv);

        /*
         * Fabric JS Init
         */

        var dessin = new fabric.Canvas(innerElementId + '_' + index + '_phase2', {
            isDrawingMode: true,
            width: elemWidth,
            height: elemHeight
        });

        var textureBrushImg = new Image();
        textureBrushImg.src = customBrushUrl;

        var textureBrush = new fabric.PatternBrush(dessin);
        textureBrush.source = textureBrushImg;

        dessin.freeDrawingCursor = 'url(' + customCursorUrl + '),default';
        dessin.freeDrawingBrush = textureBrush;
        dessin.freeDrawingBrush.width = 100;
        dessin.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: 25,
            offsetX: 8,
            offsetY: 8
        });

        dessin.on('mouse:up', function() {
            if (imgDisplayed === false) {
                loadGif('#' + elementId + '_' + index + '_phase2', gifUrl, customUrl);
                imgDisplayed = true;
            }
        });

    });

}

function loadGif(elemId, gifUrl, customUrl) {

    if (firstTrigger === false) {
        $('.quota').append('<div class="quotacontainer"><div class="neonText-Lightgreen"><h13 style="color:white; padding-top:10em;">clique sur les gifs...<br>ils t\'en diront plus!</h13></div></div>').css('min-height', '350px');

        firstTrigger = true;
    }

    var gif = $(document.createElement('img'));

    gif
        .addClass('gif')
        .attr('src', gifUrl);

    $(elemId)
        .addClass('box')
        .css('cursor', 'url(' + chrome.extension.getURL('src/css/lsdpointer.cur') + '), pointer')
        .html(gif);

    $(elemId).on('click', function() {
        window.open(customUrl, 'target: _blank');
    });
}

function toggle_phase_2() {
    $('#overlay').remove();
    $('#legende').remove();
    $('.quota').html('<h13 style="color: #25d7fb">Niveau 2</h13><p id="revealgif">Révèle les grandes tendances qui se cachent derrière la conception de ton interface!</p></div>');

    firstTrigger = false;

    /*
     *
     */

    for (var k in mandatoryDivs) {
        replaceDivs_phase2(k, mandatoryDivs[k][0], mandatoryDivs[k][1], mandatoryDivs[k][2], mandatoryDivs[k][3], chrome.extension.getURL('src/css/cursor2.cur'), phase2_gifs[k][0], phase2_gifs[k][1], 'https://oracledu.net/tendancesweb/');
    }

    if (Object.keys(randomMandatoryDiv.good).length > 0) {
        for (var l in randomMandatoryDiv.good) {
            replaceDivs_phase2(l, randomMandatoryDiv.good[l][0], randomMandatoryDiv.good[l][1], randomMandatoryDiv.good[l][2], randomMandatoryDiv.good[l][3], chrome.extension.getURL('src/css/cursor2.cur'), phase2_gifs[l][0], phase2_gifs[l][1], 'https://oracledu.net/tendancesweb/');
        }
    }

    for (var j in randomMandatoryDiv.bad) {
        replaceDivs_phase2(j, randomMandatoryDiv.bad[j][0], randomMandatoryDiv.bad[j][1], randomMandatoryDiv.bad[j][2], randomMandatoryDiv.bad[j][3], chrome.extension.getURL('src/css/cursor2.cur'), phase2_gifs[j][0], phase2_gifs[j][1], 'https://oracledu.net/tendancesweb/');
    }

}

/*----------------------------------------------------------------------------------------------*\
                                        Run functions
\*----------------------------------------------------------------------------------------------*/

;
(function($) {

    if ($('#search').length === 0) {

        /*
         * Google home
         */

        replaceDiv('div#viewport', 'googlehome', 'googlehome', 'googlehome_innerdiv', 'googlehome_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/accueil.png'), customDivContent.googlehome);

    } else {

        /*
         * Handle case where there are no search result amount
         */

        if ($('div#slim_appbar').length > 0) {
            mandatoryDivs['div#slim_appbar'] = ['searchresults_amount', 'searchresults_amount', 'searchresults_amount_innerdiv', 'searchresults_amount_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/google/brushes/results_number.png'), customDivContent.searchresults_amount];
        } else {
            mandatoryDivNumber--;
        }

        /*
         * Insert dashboard in the page
         */

        display_dashboard();

        /*
         * Check which div exists on the page and which and store them
         */

        for (var i in notMandatoryDivs) {
            if ($(i).length) {
                randomMandatoryDiv.good[i] = notMandatoryDivs[i];
            } else {
                randomMandatoryDiv.bad[i] = notMandatoryDivs[i];
            }
        }

        /*
         * Get random div in existing ones and add it too mandatories
         */

        if (Object.keys(randomMandatoryDiv.good).length > 0) {
            var randomDiv = getRandomObjectProp(randomMandatoryDiv.good);
            mandatoryDivs[Object.keys(randomDiv)[0]] = randomDiv[Object.keys(randomDiv)[0]];

            if ($('div#slim_appbar').length > 0) {
                mandatoryDivNumber = 4;
            }

            /*
             * Delete randomized div to avoid calling replaceDiv() twice
             */

            delete randomMandatoryDiv.good[Object.keys(randomDiv)[0]];
        }

        /*
         * Search results (mandatory)
         */

        for (var k in mandatoryDivs) {
            replaceDiv(k, mandatoryDivs[k][0], mandatoryDivs[k][1], mandatoryDivs[k][2], mandatoryDivs[k][3], mandatoryDivs[k][4], mandatoryDivs[k][5], mandatoryDivs[k][6], 1);
        }

        /*
         * Search results (not mandatory)
         */

        if (Object.keys(randomMandatoryDiv.good).length > 0) {
            for (var l in randomMandatoryDiv.good) {
                replaceDiv(l, randomMandatoryDiv.good[l][0], randomMandatoryDiv.good[l][1], randomMandatoryDiv.good[l][2], randomMandatoryDiv.good[l][3], randomMandatoryDiv.good[l][4], randomMandatoryDiv.good[l][5], randomMandatoryDiv.good[l][6]);
            }
        }

        for (var j in randomMandatoryDiv.bad) {
            replaceDiv(j, randomMandatoryDiv.bad[j][0], randomMandatoryDiv.bad[j][1], randomMandatoryDiv.bad[j][2], randomMandatoryDiv.bad[j][3], randomMandatoryDiv.bad[j][4], randomMandatoryDiv.bad[j][5], randomMandatoryDiv.bad[j][6]);
        }
    }


})(jQuery);
