window.pcs = window.pcs || {};

window.pcs.messageBox = (function() {
    'use strict';
    

    const offSetIncrement = 30;
    let leftffset = -150;
    let topOffset = -80;
    const width = 300;
    const height = 160;
    let nextZindex = 1;
    
    function showMessageBox(msg){
        const messageBoxDiv = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = msg;
        messageBoxDiv.appendChild(span);

        const buttonDiv = document.createElement('div');
        const okButton = document.createElement('button');
        okButton.innerText = 'Ok';
        buttonDiv.appendChild(okButton);
        messageBoxDiv.appendChild(buttonDiv);


        messageBoxDiv.style.backgroundColor = 'lightblue';
        messageBoxDiv.style.padding = '1em';
        messageBoxDiv.style.paddingBottom = '2em';

        messageBoxDiv.style.boxSizing = 'border-box';
        messageBoxDiv.style.width = `${width}px`;
        messageBoxDiv.style.height = `${height}px`;
        messageBoxDiv.style.position = 'fixed';
        messageBoxDiv.style.top = '50%';
        messageBoxDiv.style.left = '50%';
        messageBoxDiv.style.marginTop = `${topOffset}px`;
        messageBoxDiv.style.marginLeft = `${leftffset}px`;
        messageBoxDiv.style.border = `1px solid black`;


        messageBoxDiv.addEventListener('click', () => {
            messageBoxDiv.style.zIndex = nextZindex++;
        });

        span.style.overflow = 'auto';
        span.style.height = '100%';
        span.style.display = 'inline-block';

        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '8px';
        buttonDiv.style.left = '0';
        buttonDiv.style.textAlign = 'center';
        buttonDiv.style.width = '100%';

        okButton.addEventListener('click', () => {
            //messageBoxDiv.style.display = 'none';
            messageBoxDiv.remove();
        });
        document.body.appendChild(messageBoxDiv);

        topOffset += offSetIncrement;
        leftffset += offSetIncrement;


        if (parseInt(getComputedStyle(messageBoxDiv).top) + topOffset + height > window.innerHeight) {
            topOffset -= window.innerHeight - height;
        }

        if (parseInt(getComputedStyle(messageBoxDiv).left) + leftffset + width > window.innerWidth){
            leftffset -= window.innerWidth - width;
        }

    }
    return {
        show: showMessageBox
    };

})();