var database = {}; //object database 

function createPerson(name, age, city){   //  function  pure
    var person = {};    
    person.name = name;
    person.age = age;
    person.city = city;
    return person; 
};

function addCollectionToDatabase(nameOfCollection) { //ajoute tabeleau 
    database[nameOfCollection] = []; // {}
};

function addDataToCollection(nameOfCollection, data) { //ajoute data
    database[nameOfCollection].push(data) ; 
};

function getDataFromCollection(nameOfCollection, positionInCollection){ //pure
    var ourData = database[nameOfCollection][positionInCollection]; //donne data
    return console.log(ourData);
};
//OK.
function addChangedDataToCollection(nameOfCollection, positionInCollection, data) {
    database[nameOfCollection][positionInCollection] = data; //change data
};

function updateDataInCollection(nameOfCollection, positionInCollection, newData){ // non pure
    addChangedDataToCollection(nameOfCollection, positionInCollection, newData)
return console.log(database[nameOfCollection][positionInCollection]);
}

addCollectionToDatabase('meubles');
addDataToCollection('meubles', createPerson('sofa', 999, 'living'));
addCollectionToDatabase('people');
addDataToCollection('people', createPerson('marc', 24, 'Paris'));
addDataToCollection('people', createPerson('Paul', 55, 'Bxl'));

getDataFromCollection('people', 1);
updateDataInCollection('people', 1, createPerson('Paul', 33, 'Madrid'));
