var database = [];      //database array
var person = [];

person[1] = { name: 'Alex', age: 67, city: 'Madrid' };
person[2] = { name: 'Nicole', age: 89, city: 'Paris' };
person[3] = { name: 'Jaque', age: 20, city: 'Paris' };

function createPerson(name, age, city){     //  function  pure
    var person = {};    
    person.name = name;
    person.age = age;
    person.city = city;
    return person; 
};

function addCollectionToDatabase(nameOfCollection) {
    database[nameOfCollection] = []; 
};

function addDataToCollection(nameOfCollection, data) {
    database[nameOfCollection].push(data);
};

function getDataFromCollection(nameOfCollection, positionInCollection){
    var gotData = database[nameOfCollection][positionInCollection];
    return gotData;
};

function addChangedDataToCollection(nameOfCollection, positionInCollection, data) {
    database[nameOfCollection][positionInCollection] = data;
};

function updateDataInCollection(nameOfCollection, positionInCollection, newData){ 
    addChangedDataToCollection(nameOfCollection, positionInCollection, newData);
};

function findDocumentInCollection(nameOfCollection, nameOfProperty, valueOfProperty){
    for ( i = 0; i < database[nameOfCollection].length; i++){
    if (database[nameOfCollection][i][nameOfProperty] == valueOfProperty){
       var personInParis = database[nameOfCollection][i];
       return personInParis;
    }
}}

addCollectionToDatabase('people');
addDataToCollection('people', createPerson('Luis', 37, 'Brussels'));
addDataToCollection('people', createPerson('marc', 24, 'Paris'));
addDataToCollection('people', createPerson('Paul', 55, 'Madrid'));
addDataToCollection('people', createPerson('Jaque', 39, 'Bonn'));
addDataToCollection('people', createPerson('Eva', 80, 'Paris'));

findDocumentInCollection('people', 'city', 'Paris');

console.log(findDocumentInCollection('people', 'city', 'Paris'));
