const ContactManager = require("./ContactManager");
let contacts = require("./contacts.js");

let test = new ContactManager(contacts);
// test.print()
// test.search("phoneNumber", '93');
// test.search('firstName','')
test.search("firstNamePrefix", 'd')
test.search("firstNamePrefix", "d")
test.print()

// test.searchByPhoneNumber('9')
