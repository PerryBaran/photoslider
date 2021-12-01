function reset(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function nextPhoto(myArray) {
    myArray.push(myArray.shift());
    assignId(myArray);
    createNavButtons(myArray)
}

export function previousPhoto(myArray) {
    myArray.unshift(myArray.pop());
    assignId(myArray);
    createNavButtons(myArray)
}


export function assignId(myArray) {
    if (myArray.length < 3) {
        return
    } 
    const midPoint = Math.floor(myArray.length/2)

    for (let i = 0; i < myArray.length; i++) {
        if (i < midPoint) {
            myArray[i].id = 'previous';
        } else if (i > midPoint) {
            myArray[i].id = 'next';
        } else {
            myArray[i].id = 'current';
        }
    }
    
}

export function removeStyle(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].removeAttribute('style');
    }
}

export function createNavButtons(myArray) {
    const container = document.getElementById('container')
    reset(container);
    const midPoint = Math.floor(myArray.length/2)

    for (let i = 0; i < myArray.length; i++) {
        const button = document.createElement('button');
        button.dataset.index = i;
        if (i === midPoint) {
            button.className = 'nav-buttons mid'
            const toolTip = document.createElement('span');
            toolTip.innerHTML = 'Curent Photo';
            toolTip.className = 'tooltip';
            button.appendChild(toolTip);
        } else if (i < midPoint) {
            button.className = 'nav-buttons' 
            button.innerHTML = '<';
            const toolTip = document.createElement('span');
            toolTip.innerHTML = 'Previous Photo';
            toolTip.className = 'tooltip';
            button.appendChild(toolTip);
        } else if (i > midPoint) {
            button.className = 'nav-buttons' 
            button.innerHTML = '>';
            const toolTip = document.createElement('span');
            toolTip.innerHTML = 'Next Photo';
            toolTip.className = 'tooltip';
            button.appendChild(toolTip);
        }
    
        container.appendChild(button);
        button.addEventListener('click', () => {
            changePhoto(myArray, button);
        })
    }
}

function changePhoto(myArray, button) {
    const midPoint = Math.floor(myArray.length/2)
    if (button.dataset.index === midPoint) {
        return
    } else if (button.dataset.index < midPoint) {
        for (let i = button.dataset.index; i < midPoint; i++) {
            myArray.unshift(myArray.pop());
        }
    } else if (button.dataset.index > midPoint) {
        for (let i = midPoint; i < button.dataset.index; i++) {
            myArray.push(myArray.shift());
        }
    }
    assignId(myArray);
}