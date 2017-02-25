var database = [
    { name: 'Luis', age: 23, city: 'Neapol'}, 
    { name: 'Anne', age: 44, city: 'London'}, 
    { name: 'Paul', age: 32, city: 'Paris'}, 
    { name: 'Eva', age: 67, city: 'Berlin'}, 
    { name: 'Marc', age: 50, city: 'Paris'} ];

function findInParis(db, city){
    db.filter(function (object) {
        return object.city == city; 
        }).forEach(function (object) {
        console.log(object);
    });
};

findInParis(database, 'Paris');
