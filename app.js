function createPerson(firsName, lastName) {
  (this.firsName = firsName),
    (this.lastName = lastName),
    (this.fullName = function () {
      console.log(`my name is ${this.firsName} ${this.lastName} and I love js`);
    });
}

const Kiran = new createPerson('Kiran', 'Pant');
Kiran.fullName();
const Lalit = new createPerson('Lalit', 'Pant');
Lalit.fullName();
