var fs = require("fs");

class ContactManager {
  // constructor expects a array of objects file
  constructor(file) {
    this.file = file;
  }
  //method to add a contact
  add(arg) {
    this.file.push({
      firstName: arg.firstName,
      lastName: arg.lastName,
      phoneNumber: arg.phoneNumber,
      // arg
    });
  }
  search(typeOfSearch, searchedTerm) {
    // method to search by first name
    if (typeOfSearch === "firstName") {
      const newContacts = this.file.filter((contact) => {
        if (
          contact.firstName.toLowerCase().includes(searchedTerm.toLowerCase())
        ) {
          let index = this.file.indexOf(contact);
          if (this.file[index - 1]) {
            swapElements(this.file, index - 1, index);
          }
        }
        return contact.firstName
          .toLowerCase()
          .includes(searchedTerm.toLowerCase());
      });
      console.log(newContacts);
    }
    // method to search by last name
    if (typeOfSearch === "lastName") {
      const newContacts = this.file.filter((contact) => {
        if (
          contact.lastName.toLowerCase().includes(searchedTerm.toLowerCase())
        ) {
          let index = this.file.indexOf(contact);
          if (this.file[index - 1]) {
            swapElements(this.file, index - 1, index);
          }
        }
        return contact.lastName
          .toLowerCase()
          .includes(searchedTerm.toLowerCase());
      });
      console.log(newContacts);
    }
    // method to search by phone number
    if (typeOfSearch === "phoneNumber") {
      const newContacts = this.file.filter((contact) => {
        if (
          contact.firstName.toLowerCase().includes(searchedTerm.toLowerCase())
        ) {
          let index = this.file.indexOf(contact);
          if (this.file[index - 1]) {
            swapElements(this.file, index - 1, index);
          }
        }
        return contact.phoneNumber.includes(searchedTerm);
      });
      console.log(newContacts);
    }
    if (typeOfSearch === "firstNamePrefix") {
      let newContacts = [];
      this.file.map((contact) => {
        if (contact.firstName.startsWith(searchedTerm)) {
          let index = this.file.indexOf(contact);
          if (this.file[index - 1]) {
            swapElements(this.file, index - 1, index);
          }
          newContacts.push(contact);
        }
      });
      console.log(newContacts);
    }
    if (typeOfSearch === "lastNamePrefix") {
      let newContacts = [];
      this.file.map((contact) => {
        if (contact.lastName.startsWith(searchedTerm)) {
          let index = this.file.indexOf(contact);
          if (this.file[index - 1]) {
            swapElements(this.file, index - 1, index);
          }
          newContacts.push(contact);
        }
      });
      console.log(newContacts);
    }
    if (typeOfSearch === "phoneNumberPrefix") {
      let newContacts = [];
      this.file.map((contact) => {
        if (contact.phoneNumber.startsWith(searchedTerm)) {
          newContacts.push(contact);
        }
      });
      console.log(newContacts);
    }
  }
  print() {
    console.log(this.file);
  }
}

function reverse(s) {
  return s.split("").reverse().join("");
}

const swapElements = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

module.exports = ContactManager;
