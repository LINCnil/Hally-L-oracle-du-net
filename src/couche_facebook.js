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
var sponsoredMessage = 'div#u_ps_0_0_9 .fbUserContent._5pcr, #u_ps_0_0_l .fbUserContent._5pcr, #u_ps_0_0_i .fbUserContent._5pcr, #u_ps_0_0_e .fbUserContent._5pcr, #u_ps_0_0_t .fbUserContent._5pcr, #u_ps_0_0_e .fbUserContent._5pcr';
var maxDivNumber = 7,
    mandatoryDivNumber = 3,
    currentFoundDivNumber = 0,
    firstTrigger = false,
    customDivContent = {
        sponsoredside: 'Tu te demandais ce que Facebook pouvait bien faire de toutes tes données ?\nTes activités, tes likes, ton âge...construisent un profil que les annonceurs peuvent cibler.',
        expressyourself: 'Sais-tu que les émotions que tu partages influencent\u00A0ta\u00A0communauté\u00A0?\nC\'est ce qu\'on appelle la contagion émotionnelle :\ntrès intéressant pour Facebook et les médias qui savent ce que tu aimes dans ton fil.',
        postdate: 'Plus besoin d’avoir peur de rater quelque chose, FB fait remonter les publications qui auraient pu te plaire depuis ta dernière connexion.',
        emojireaction: 'Mieux que les like, tes réactions renseignent encore davantage sur ce qui est susceptible de te plaire.',
        views: 'Quantitatif is qualitatif, plus c’est vu, plus c’est bon.',
        shares: 'Ici on mesure l\'audimat. Plus la publication aura d’engagements, plus l’algorithme de Facebook l’affichera sur les timelines.',
        engagement: 'Dis-moi ce qu’aiment tes amis, je te dirai qui tu es. Si ton réseau a particulièrement apprécié une publication tu ne la louperas pas',
        author: 'Plus tu interagis avec les publications d’un émetteur, plus Facebook en déduit qu\'il t\'intéresse et affichera ses contenus. ',
        suggested: 'Facebook dit vouloir te faire découvrir des contenus.\nBel objectif! Seulement, pour cela, il te renvoie les publications les plus populaires du réseau.\nLe risque est que nous fassions tous les mêmes découvertes sur notre fil.',
        sponsoredmessage: 'Sur la base de ton activité ici sur Facebook ou sur d’autres sites,\ntu es associé à un profil que les annonceurs peuvent cibler.',
        comment:'Jette-moi le premier like si tu n\'as jamais publié du contenu uniquement dans l’objectif de créer le plus de réactions possibles!'
    },
    mandatoryDivs = {
        // SPONSORED SIDE MESSAGE
        'div.home_right_column': ['sponsorise', 'sponsorise', 'sponsorise_innerdiv', 'sponsorise_innerdivs', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/sponsorise.png'), customDivContent.sponsoredside],
        //EXPRIMEZ VOUS
        'div._3u16': ['sponsorise3', 'sponsorise3', 'sponsorise_innerdiv3', 'sponsorise_innerdivs3', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/sponsorise.png'), customDivContent.expressyourself],
        // AUTHOR
        'div._5x46': ['sponsorise8', 'sponsorise8', 'sponsorise_innerdiv8', 'sponsorise_innerdivs8', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/author.png'), customDivContent.author]

    },
    notMandatoryDivs = {
        // POST DATE
        'div.fsm.fwn.fcg': ['sponsorise0', 'sponsorise0', 'sponsorise_innerdiv0', 'sponsorise_innerdivs0', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/comment.png'), customDivContent.postdate],

        // EMOJI REACTION
        'div._3t53._4ar-._ipn': ['sponsorise5', 'sponsorise5', 'sponsorise_innerdiv5', 'sponsorise_innerdivs5', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/emojireaction.png'), customDivContent.emojireaction],

        // VIEWS
        'div.clearfix._3-8n': ['sponsorise6', 'sponsorise6', 'sponsorise_innerdiv6', 'sponsorise_innerdivs6', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/views.png'), customDivContent.views],

        //  SHARES
        'div.UFIRow.UFIShareRow': ['sponsorise12', 'sponsorise12', 'sponsorise_innerdiv12', 'sponsorise_innerdivs12', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/views.png'), customDivContent.shares],

        // ENGAGEMENT WITH POST
        'div._3399._a7s.clearfix._zw3': ['sponsorise9', 'sponsorise9', 'sponsorise_innerdiv9', 'sponsorise_innerdivs9', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/views.png'), customDivContent.engagement],

        // COMMENT
        'div.UFIImageBlockContent._42ef': ['sponsorise7', 'sponsorise7', 'sponsorise_innerdiv7', 'sponsorise_innerdivs7', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/engagement.png'), customDivContent.comment],

        //SUGGESTED POSTS
        'div._1dwg._1w_m:has( > ._5g-l)': ['sponsorise10', 'sponsorise10', 'sponsorise_innerdiv10', 'sponsorise_innerdivs10', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/pushed.png'), customDivContent.suggested],

        //  SPONSORED FEED MESSAGE
        sponsoredMessage: ['sponsorise3', 'sponsorise3', 'sponsorise_innerdiv3', 'sponsorise_innerdivs3', chrome.extension.getURL('src/css/cursor.cur'), chrome.extension.getURL('src/facebook_fonds/sponsorise_feed.png'), customDivContent.sponsoredmessage]

    },
    phase2_gifs = {
        sponsoredMessage: [chrome.extension.getURL('src/img/aspiration.png'), chrome.extension.getURL('src/img/aspiration.gif')],
        'div._3u16': [chrome.extension.getURL('src/img/gouvernance.jpg'), chrome.extension.getURL('src/img/gouvernance.gif')],
        'div.UFIImageBlockContent._42ef': [chrome.extension.getURL('src/img/selfie.png'), chrome.extension.getURL('src/img/selfie.gif')],
        'div._1dwg._1w_m:has( > ._5g-l)': [chrome.extension.getURL('src/img/highway.png'), chrome.extension.getURL('src/img/highway.gif')],
        'div.home_right_column': [chrome.extension.getURL('src/img/attentionbig.gif'), chrome.extension.getURL('src/img/attentionbig.gif')],
        'div._5x46': [chrome.extension.getURL('src/img/aspiration.png'), chrome.extension.getURL('src/img/aspiration.gif')],
        'div._5jmm._5pat._3lb4.e_1jjjku0h-6:first-of-type': [chrome.extension.getURL('src/img/gouvernance.jpg'), chrome.extension.getURL('src/img/gouvernance.gif')],
        'div._3t53._4ar-._ipn': [chrome.extension.getURL('src/img/moneybig.gif'), chrome.extension.getURL('src/img/moneybig.gif')],
        'div.clearfix._3-8n': [chrome.extension.getURL('src/img/sagessebig.gif'), chrome.extension.getURL('src/img/sagessebig.gif')],
        'div.fsm.fwn.fcg': [chrome.extension.getURL('src/img/bulle.jpg'), chrome.extension.getURL('src/img/bulle.gif')],
        'div._3399._a7s.clearfix._zw3': [chrome.extension.getURL('src/img/bulle.jpg'), chrome.extension.getURL('src/img/bulle.gif')]
    },
    discoveredDivs = [],
    randomMandatoryDiv = {
        good: {},
        bad: {}
    };

//---------------------------------------------//
//   		       Helpers                    //
//--------------------------------------------//

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

    return textBox1;
}

function contenu2(dessin, someText, sizeWidth, sizeHeight) {

    fontRatio = (sizeHeight / 15);
    if (fontRatio > 25) {
        fontRatio = 25;
    }
    if (fontRatio < 16) {
        fontRatio = 16;
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
    if (mandatoryDivNumber === 0 && $('.next_level.active').length <= 0) {
        if ($('.next_level.active').length) {
        $('.next_level.active').remove();
        }
        display_level2_div();
    } else {
        return false;
    }
}

/*
 *
 */
  //Remove general conditions to avoid bug confision with shares
  $('._45mq').remove();
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
        .html('<div class=quotacontainer style="top:2em; padding-bottom:2.5em;"><p class="message">Bravo!<br />Tu peux maintenant découvrir la couche 2.</p></div>')
        .css('z-index', '1000101');

    confirm_input.attr({
        type: 'button',
        class: 'buttonExplore active',
        value: 'Ok'
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

function display_dashboard() {
    var dashboard = $(document.createElement('div'));
        dashboardWidth = $('#sideNav').width();
    dashboard
        .addClass('quota')
        .html('<h10 class="quotacontainer, neonText-pink">Révèle les algorithmes qui se cachent derrière tes posts!</h10>')
        .css({
            'color': 'black',
            'background-color': 'white',
            'width': dashboardWidth,
            'min-height': '300px',
            'position': 'fixed',
            'top': '300px',
            'margin-right': '20px',
            'z-index': '100000'
        })
        .insertAfter('#legende');
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



    // SPONSORED SIDE MESSAGE
    if (element == ('div.home_right_column')) {
        elementfeed = 'div.home_right_column';
    //EXPRIMEZ VOUS
    } else if (element == 'div._3u16') {
        elementfeed = '#pagelet_composer';
    //AUTEUR
    } else if (element == 'div._5x46') {
        elementfeed = '._4r_y';
    //TOUS LES POSTS
    }else {
        elementfeed = '#stream_pagelet';
    }


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
            elemWidth = $(elementfeed).width(),
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

            var contenu = contenu2(dessin, customText, elemWidth, elemHeight);

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


        });

    });

}

function replaceDivs_phase2(element, elementId, elementClass, innerElementId, innerElementClass, customCursorUrl, customBrushUrl, gifUrl, customUrl) {
    $(window).scrollTop(0);
    var elements = $(element);
    // SPONSORED SIDE MESSAGE
    if (element == ('div.home_right_column' || 'div.home_right_column')) {
        elementfeed = 'div.home_right_column';
    //EXPRIMEZ VOUS
    } else if (element == 'div._3u16') {
        elementfeed = '#pagelet_composer';
    //AUTEUR
    } else if (element == 'div._5x46') {
        elementfeed = '._4r_y';
    //TOUS LES POSTS
    }else {
        elementfeed = '#stream_pagelet';
    }

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
            elemWidth = $(elementfeed).width(),
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
        $('.quota').append('<div class="quotacontainer, neonText-Lightgreen">clique sur les gifs...<br>ils t\'en diront plus!</div>');
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
    $('.quota').css({

        'min-height': '300px',
        'height': 'auto',
        'top': '20px',
    });
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


(function($) {
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



})(jQuery);
