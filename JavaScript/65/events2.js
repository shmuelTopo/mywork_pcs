(function () {
    'use strict';

    let LicenseAccepted = false;
    const theLink = document.getElementById('theLink');
    const license = document.getElementById('license');

    license.addEventListener('click', (event) => {
        console.log('license was clicked');

        LicenseAccepted = true;
        license.disable = true';
    });


    theLink.addEventListener('click', (event) => {
        console.log('Link was clicked');
    
        if (!LicenseAccepted) {
            event.preventDefault();
        }
    });
})();