//=============================================================================
// fbspl.js
// SimpleFace emoticons for Facebook
// 
// Created by Said Dermoumi on Sun Jan  8 09:52:45 2012
// Copyright (c) 2011 Said Dermoumi. All rights reserved.
//=============================================================================

var rules = [];

// A utility function for making escaped emoticon RegExps
function makeRegExp(str) {
    str = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    return RegExp('^'+str+'$|^'+ str +'([ !?,\.\'"])|([ !?,\.\'"])'+ str +'([ !?,\.\'"])|([ !?,\.\'"])'+ str +'$', 'gm');
}

// Adds a emoticon rule to the file
function addRule(emote, profileId) {
    if (typeof emote == "object") {
        for (n in emote) {
            if (typeof emote[n] != "string") continue;
            rules.push({
                reg: makeRegExp(emote[n]),
                rep: '$4$2[['+ profileId +']]$1$3'
            });
        }
    }
    else if (typeof emote == "string") {
        rules.push({
            reg: makeRegExp(emote),
            rep: '$4$2[['+ profileId +']]$1$3'
        });
    }
}

// Applies rules to a string
function process(str) {
    if (typeof str != 'string') return;
    for (n in rules) {
        str = str.replace(rules[n].reg, rules[n].rep);
    }
    return str;
}

// Watch for when user clicks on "Send" button on message mode
document.addEventListener('mousedown', function(e) {
    if (e.target.parentNode && e.target.parentNode.getAttribute('id') != 'MessagingSendReplyButton') {
        return;
    }

    var targets = e.target.parentNode.parentNode.parentNode.getElementsByClassName('MessagingComposerBody');
    for (n in targets) {
        targets[n].value = process(targets[n].value);
    }
}, true);

// Watch for when user clicks on Enter and is focusing a message textarea
document.addEventListener('keydown', function(e) {
    if (e.keyCode != 13 || e.shiftKey) return;

    var elem = document.activeElement;
    var elemClass = elem.getAttribute('class');
    if ((elemClass.indexOf('MessagingComposerBody') >= 0
        && document.getElementById('MessagingSendOnEnterCheckbox').checked)
        || (elemClass.indexOf('uiTextareaAutogrow') >= 0 && elem.parentNode && elem.parentNode.getElementsByClassName('inputIcon')[0])
    ) {
        elem.value = process(elem.value);
    }

}, true);

// Edit these if you want to customize emoticons
addRule([">:)", ">:-)", ">=)", ">:D", ">=D", ">:-D"], '337683366244900');
addRule([">:P", ">:-P", ">=P", ">:p", ">:-p", ">=p"], '151238381652801');
addRule([":)", "=)", ":-)"],                          '164104313697611');
addRule([":'(", "='("],                               '184678621630976');
addRule([":S", ":-S", "=S", ":s", ":-s", "=s"],       '211036838985323');
addRule([":3", ":-3", "=3"],                          '268411576553642');
addRule([":x", ":-x", "=x", ":X", ":-X", "=X"],       '344415832238119');
addRule([":D", ":-D", "=D"],                          '204596902965712');
addRule([">:/", ">:(", ">:'(", ">:'/", ">=(", ">=/"], '352023391491370');
addRule(["8)", "8-)", "B)", "B-)"],                   '333325090026022');
addRule(["xq", "x-q", "Xq", "X-q"],                   '204363646321398');
addRule(["xD", "x-D", "XD", "X-D"],                   '305131536192226');
addRule(["x)", "x-)", "X)", "X-)"],                   '319216284785857');
addRule(["x(", "x-(", "X(", "X-(", ">.<", ">_<"],     '217385821680703');
addRule([":o", ":-o", "=o", ":O", ":-O", "=O"],       '145393482239598');
addRule([":!:"],                                      '324465504241121');
addRule([":q", ":-q", "=q"],                          '265553776842695');
addRule([":p", ":-p", "=p", ":P", ":-P", "=P"],       '170735919693894');
addRule(["O_O", "O.O"],                               '265329760196296');
addRule([";)", ";-)"],                                '303899189651658');
addRule([":(", ":-(", ":/", ":-/", "=(", "=/"],       '130240357092474');
addRule([":<", "=<", ">:<", ">=<", ">:-<"],           '209826549103810');
addRule([":[]", "=[]"],                               '127222190728782');
addRule(["u_u", "u.u"],                               '284960671551841');
addRule(["^^\"", "^_^\"", "^.^\""],                   '204750932948206');
addRule(["^^", "^.^", "^_^"],                         '337065526322598');
addRule([":y", "=y", "=u", ":u", ":-y", ":-u"],       '142389959208965');
addRule([">_>", ">.>", "<.<", "<_<"],                 '321764657857582');
addRule(["o_O", "O_o"],                               '355724081111066');
addRule(["|-°", ":fiouh:"],                           '317998471556965');
addRule(["\\o/", ":hourray:"],                        '331768860175578');
addRule(["°3°", ":*", ":-*", "=*"],                   '163484183756021');
addRule([":lol:", ":'D", "='D"],                      '147828715328183');
addRule("<3",                                         '149893701787931');
addRule(["|3", "|-3"],                                '302089176493288');
addRule(":?:",                                        '226849060726662');
addRule(":-°",                                        '296405883745220');
addRule([":|", ":-|", "=|"],                          '271459569575165');
addRule(["3:)", "3:-)", "3=)", "3:D", "3=D", "3:-D"], '338514279509481');
addRule("._.",                                        '212999192121322');
addRule(["0:)", "0=)", "0:-)", "O:)", "O=)", "O:-)"], '276988729026771');
