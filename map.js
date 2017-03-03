
 var mots = ['bonjour', 'ciao', 'salut', 'merci', 'au revoir', 'de rien', 'bye'].filter(mot => mot.length > 4)
    .map(mot => mot.toUpperCase()
 );

var mots4 = ['bonjour', 'ciao', 'salut', 'merci', 'au revoir', 'de rien', 'bye']
    .filter(function(mot) {return mot.length > 4})
    .map(function (mot) {
        if (mot.length == 5) {
            mot = mot.toUpperCase() 
        }
    return mot;
});

var mots4 = ['bonjour', 'ciao', 'salut', 'merci', 'au revoir', 'de rien', 'bye'].filter(mot => mot.length > 4)
    .map(mot => {if (mot.length == 5){mot = mot.toUpperCase()} return mot});
