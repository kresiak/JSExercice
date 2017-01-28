var database = [];

function createPerson(name, age, city){   //  function  pure
    var person = {};    
    person.name = name;
    person.age = age;
    person.city = city;
    return person; 
};

function addCollectionToDatabase(nameOfCollection) { //ajoute tabeleau 
    database[nameOfCollection] = []; 
};

function addDataToCollection(nameOfCollection, data) { //ajoute data
    database[nameOfCollection].push(data) ; 
};

function getDataFromCollection(nameOfCollection, positionInCollection){ //pure
    var ourData = database[nameOfCollection][positionInCollection]; //donne data
    return console.log(ourData);
};

function addChangedDataToCollection(nameOfCollection, positionInCollection, data) {
    database[nameOfCollection][positionInCollection] = data; //change data
};

function updateDataInCollection(nameOfCollection, positionInCollection, newData){ // non pure
    addChangedDataToCollection(nameOfCollection, positionInCollection, newData)
return console.log(database[nameOfCollection][positionInCollection]);
};

function findDocumentInCollection(nameOfCollection, nameofProperty, valueOfProperty){
    for (var i = 0; i < database[nameOfCollection].length; i++){
        if (database[nameOfCollection][i][nameofProperty] == valueOfProperty){
            return [i];
        }
    }
    return null;
};  

addCollectionToDatabase('people');

addDataToCollection('people', createPerson('Jaque', 44, 'Rome'));
addDataToCollection('people', createPerson('Paul', 55, 'Bxl'));
addDataToCollection('people', createPerson('marc', 24, 'Madrid'));
addDataToCollection('people', createPerson('Luis', 33, 'Paris'));

findDocumentInCollection('people', 'city', 'Paris');

console.log(findDocumentInCollection('people', 'city', 'Paris'));
//getDataFromCollection('people', 1);
//updateDataInCollection('people', 1, createPerson('Paul', 33, 'Madrid'));
