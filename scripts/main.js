let MyImage = document.querySelector('img');

MyImage.onclick = function() {
    let mySrc = MyImage.getAttribute('src');
    if(mySrc === 'images/img1.PNG'){
        MyImage.setAttribute('src', 'images/img2.PNG');
    } else {
        MyImage.setAttribute ('src', 'images/img1.PNG')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Zalupa is cool, ' + myName;
    }
}

    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.localStorage = 'Zalupa is cool, ' + storedName;
    }

    myButton.onclick = function() {
        setUserName();
    
}

