export function nextPhoto(myArray) {
    myArray.push(myArray.shift());
    assignId(myArray);
}

export function previousPhoto(myArray) {
    myArray.unshift(myArray.pop());
    assignId(myArray);
}

function assignId(myArray) {
    if (myArray.length < 3) {
        return
    }
    
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].id = ''; //reset all id
    }
    //assign transition positions
    myArray[0].id = 'previous';
    myArray[1].id = 'current';
    myArray[2].id = 'next';
}

export function removeStyle(myArray) {
    myArray[0].removeAttribute('style');
    myArray[2].removeAttribute('style');
}

export function createNavButtons(myArray) {
    const container = document.getElementById('container')

    for (let i = 0; i < myArray.length; i++) {
        const button = document.createElement('button');
        button.dataset.index = i;
        button.className = 'nav-buttons'
        container.appendChild(button);
    }
}
