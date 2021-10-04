(function() {
    'use strict';

    const contactTable = get('contactsTable');
    const addContactForm = get('addContactForm');
    const firstNameInput = get('first');
    const lastNameInput = get('last');
    const emailInput = get('email');
    const phoneInput = get('phone');
    const contacts = [];

    function get(id) {
        return document.getElementById(id);
    }
    
    get('addContact').addEventListener('click', () => {
        addContactForm.style.display = 'block';
    });

    addContactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if(!contacts.length){
            contactTable.deleteRow(1);
        }

        const newContact = {
            first: firstNameInput.value,
            last: lastNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        contacts.push(newContact);

        /*firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';*/

        const row = contactTable.insertRow();
        const firstNameCell = row.insertCell();
        const lastNameCell = row.insertCell();
        const emailCell = row.insertCell();
        const phoneCell = row.insertCell();

        firstNameCell.innerText = newContact.first;
        lastNameCell.innerText = newContact.last;
        emailCell.innerText = newContact.email;
        phoneCell.innerText = newContact.phone;

        /*addContactForm.reset();
        addContactForm.style.display = 'none';*/
        hideAndResetAddContactForm();

    });

    get('cancel').addEventListener('click', () => {
        hideAndResetAddContactForm();
    });

    function hideAndResetAddContactForm() {
        addContactForm.reset();
        addContactForm.style.display = 'none';
    }

})();