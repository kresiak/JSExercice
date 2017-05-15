doWork();

function doWork() {

var dbStrings = ['zero', 'alex', 'merci', 'abc']
    var sortedStrings = dbStrings.sort();

var dbStrings2 = ['zero', 'alex', 'merci', 'abc']
    var sortedStrings2 = dbStrings2.sort((a, b) => 
    {return a.toLowerCase() < b.toLowerCase()});

    var dbStrings2 = ['zero', 'alex', 'merci', 'abc']
    var temporaryMap = dbStrings2
        .sort(function (a, b) {
            return (a.toUpperCase() < b.toUpperCase())           
        });
     
//    var dbS = ['zero', 'alex', 'merci', 'abc'].sort((a, b) => {return (a.toUpperCase() < b.toUpperCase())})
    
    var dbNumbers = [12, 4, 2, 8, 5, 1]
        var sortedNumbers = dbNumbers.sort((a, b) => a - b);

    var dbNumbers2 = [12, 4, 2, 8, 5, 1]
        var sortedNumbersInverted = dbNumbers2.sort((a, b) => b - a);

    var dbObjects = [{ nom: 'alex', age: 25, lieu: 'Paris' }, { nom: 'paul', age: 12, lieu: 'Londres' }, { nom: 'henri', age: 20, lieu: 'Varsovie' }]
    var sortedObjects = dbObjects.sort((a, b) => a.age - b.age);

    var dbObjects2 = [{ nom: 'alex', age: 25, lieu: 'Paris' }, { nom: 'paul', age: 12, lieu: 'Londres' }, { nom: 'henri', age: 20, lieu: 'Varsovie' }]
    var sortedObjectsInverted = dbObjects2.sort((a, b) => b.age - a.age);

};
