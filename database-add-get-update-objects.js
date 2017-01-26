var database = {};

function createPerson(name, age, city) {
    var person = {};
    person.name = name;
    person.age = age;
    person.city = city;
    return person;
};

function addCollectionToDatabase(nameOfCollection) {
    database[nameOfCollection] = {};
};

function addPersonToCollection(nameOfCollection, id, data) {
    database[nameOfCollection][id] = (data);
};

function getDataFromCollection(nameOfCollection, id) {
    var gotData = database[nameOfCollection][id];
    return gotData;
};

function updateDataInCollection(nameOfCollection, id, newData) {
    database[nameOfCollection][id] = newData;
};

function changeNameOfPeople(id, name) {
    var personX = getDataFromCollection('people', id);
    personX.name = name;
    updateDataInCollection('people', id, personX);
};

function changeAgeOfPeople(id, age) {
    var personX = getDataFromCollection('people', id);
    personX.age = age;
    updateDataInCollection('people', id, personX);
};

function deleteDataFromCollection(nameOfCollection, id) {
    delete database[nameOfCollection][id];
};

function changePropertyOfCollection(nameOfCollection, id, nameOfPropery, newValueOfProperty) {
    var record = getDataFromCollection(nameOfCollection, id);
    record[nameOfPropery] = newValueOfProperty;
    updateDataInCollection(nameOfCollection, id, record);
}

addCollectionToDatabase('people');

addPersonToCollection('people', 'p1', createPerson('marc', 24, 'Paris'));
addPersonToCollection('people', 'p2', createPerson('Alex', 30, 'Madrid'));

getDataFromCollection('people', 'p2');

updateDataInCollection('people', 'p2', createPerson('Paul', 21, 'Rome'));

changeNameOfPeople('p1', 'Leon');
changeAgeOfPeople('p2', 40);

changePropertyOfCollection('people', 'p1', 'age', 80);

//deleteDataFromCollection('people', 'p2');
