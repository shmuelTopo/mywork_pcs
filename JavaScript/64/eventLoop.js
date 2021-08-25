(function () {
    'use strict';
    
    const theButton = document.getElementById('theButton'); 
    const theButtonBox = document.getElementById('theButtonBox');

    const upButton = document.getElementById('upButton');
    const upRight = document.getElementById('upRight');
    const upLeft = document.getElementById('upLeft');
    const downButton = document.getElementById('downButton');
    const downRight = document.getElementById('downRight');
    const downLeft = document.getElementById('downLeft');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');
    const middleButton = document.getElementById('middleButton');
    
    let boxHeight = window.innerHeight - 200;
    theButtonBox.style.height = boxHeight + 'px';

    let theButtonHeight = 80;
    let theButtonWidth = 180;
    theButton.style.height = theButtonHeight + 'px';
    theButton.style.width = theButtonWidth + 'px';

    // speed is hom much ms to wait in between each move
    let speed = 20;
    // numOfPixles as for how much pixles to move each time the buttom is moved
    let numOfPixles = 5;

    // Up and down axis (positive number if you want the button to go down and nagative for up)
    let verticalAmount = numOfPixles;
    // Left and right axis (positive number if you want the button to go left negative for right)
    let horizantolAmount = numOfPixles;
    
    function centerButtonLocation(){
        theButton.style.top = boxHeight / 2 - theButtonHeight / 2 + 'px';
        theButton.style.left = window.innerWidth / 2 - theButtonWidth / 2 + 'px';
    }
    centerButtonLocation();

    function detectWallCollison() {
        // get the current location of the top right corner of the button
        let topLocation = parseInt(theButton.style.top);
        let leftLocation = parseInt(theButton.style.left);

        // the left border is the 0 + 10% of the width of the screen
        let leftBorder = 0 + window.innerWidth * 0.095; // for some reason 10% is not accurate, (and 9.5% is somewhat accurate) probable because of the border
        let rightBorder = window.innerWidth - theButtonWidth - window.innerWidth * 0.105;

        // detect collision with top wall
        if (topLocation < 0) {
            // change the amount of pixles that the button is moving 
            // from negative number to a positive
            verticalAmount = Math.abs(verticalAmount);

        }

        // detect collision with bottom wall
        if (topLocation > (boxHeight - theButtonHeight)){
            verticalAmount = -Math.abs(verticalAmount);
        }

        // detect collison with right wall
        if (leftLocation < leftBorder) {
            horizantolAmount = Math.abs(horizantolAmount);
        }
        // detect collison with left wall
        if (leftLocation > rightBorder) {
            horizantolAmount = -Math.abs(horizantolAmount);
        }
    }

    let intervalId = 0;
    function moveIt() {
        detectWallCollison();
        //move it horizantol
        if(horizantolAmount){
            theButton.style.left = `${parseInt(theButton.style.left) + horizantolAmount}px`;
        }

        //move it vertical
        if(verticalAmount){
            theButton.style.top = `${parseInt(theButton.style.top) + verticalAmount}px`;
        }
    }

    function changeCurse(){
        clearInterval(intervalId);
        intervalId = setInterval(moveIt, speed);
    }

    function addEventToArrow(arrowButton, verticalAmountOfPx, horizantolAmountOfPx){
        /*
        Param verticalAmountOfPx, pass negative numOfPixles if you want the button to go up, positive for down,
            and 0 if you want the button to go left or right
        Param horizantolAmountOfPx, pass negative numOfPixles if you want the button to go left, positive for right,
            and 0 if you want the button to go up or down
        */
        arrowButton.addEventListener('click', () => {
            verticalAmount = verticalAmountOfPx;
            horizantolAmount = horizantolAmountOfPx;
            changeCurse();
        });
    }

    addEventToArrow(upButton, -numOfPixles, 0);
    addEventToArrow(upRight, -numOfPixles, numOfPixles);
    addEventToArrow(upLeft, -numOfPixles, -numOfPixles);
    addEventToArrow(downButton, numOfPixles, 0);
    addEventToArrow(downRight, numOfPixles, numOfPixles);
    addEventToArrow(downLeft, numOfPixles, -numOfPixles);
    addEventToArrow(rightButton, 0, numOfPixles);
    addEventToArrow(leftButton, 0, -numOfPixles);

    middleButton.addEventListener('click', () => {
        if (middleButton.innerText === 'Start') {
            changeCurse();
            middleButton.innerText = 'Stop';
        } else {
            clearInterval(intervalId);
            middleButton.innerText = 'Start';
        }

    });

})();