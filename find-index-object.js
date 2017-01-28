var arr = [
 {n1:'ab', n2: 'cd', n3:'ef', n4:'gh'},
 {n1:'aa', n2: 'qq', n3: 'ee', n4: 'rr'},
 {n1:'aa', n2: 'qq', n3: 'as', n4: 'rr'}
];
function findAKeyValue(myArray, nameProperty, valueObj){
    for (var i = 0; i < myArray.length; i++){
        if (myArray[i][nameProperty] == valueObj){
            return i;
        }
    }
    return null;
}
/*
function whereIs(i){
    findAKeyValue(myArray, nameProperty, valueObj);
    alert(i)
}
*/
findAKeyValue(arr, 'n2', 'cd');
