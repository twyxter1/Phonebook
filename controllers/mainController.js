const Contact = require('../models/contact');

exports.getMainPage = (request, response)=> {
    Contact.fetchAllContacts(contactsFromFile => {
        let contactsToRender = contactsFromFile;
        response.render("index.ejs", {contacts: contactsToRender});
    })

    
};

exports.addContact = (request, response) => {

    let userContact = {
        name: request.body.nimi,
        phone: request.body.telefon
    }

    let newContact = new Contact(userContact);

    newContact.saveContact();
    response.redirect('/');



}

exports.deleteTask = (req, res) => {
Contact.deleteItem(req.body.checkbox);
res.redirect('/');
}