(function () {
    'use strict';

    const buttonOne = document.getElementById('buttonOne');

    buttonOne.addEventListener('click', (event) => {
        console.log('button one clicked', event);

        event.stopPropagation();
        
    });

    const theDiv = document.getElementById('theDiv');
    theDiv.addEventListener('click', (event) => {
        console.log('the div was clicked', event);
        
        console.log('Do the same thing for', event.target.innerHTML);
        if(event.target.innerHTML === '2'){
            console.log('button 2 was clicked');
        }
    });

})();

