var database = {};

function createPerson(name, age, city){
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

function findDocumentInCollection(nameOfCollection, nameofProperty, valueOfProperty){
    for (var i = 0; i < database[nameOfCollection].length; i++){
        if (database[nameOfCollection][i][nameofProperty] == valueOfProperty){
            return database[nameOfCollection][i];
        };
    };
    return null;
};  

addCollectionToDatabase('people');

addDataToCollection('people', createPerson('Jaque', 44, 'Rome'));
addDataToCollection('people', createPerson('Paul', 55, 'Berlin'));
addDataToCollection('people', createPerson('marc', 24, 'Madrid'));
addDataToCollection('people', createPerson('Luis', 33, 'Paris'));

findDocumentInCollection('people', 'city', 'Paris');

console.log(findDocumentInCollection('people', 'city', 'Paris'));