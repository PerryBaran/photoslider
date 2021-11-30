export function something(myArray) {
    myArray.push(myArray.shift())
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].id = '';
    }
    myArray[0].id = 'previous';
    myArray[1].id = 'current';
    myArray[2].id = 'next';
}