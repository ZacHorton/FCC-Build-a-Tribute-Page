const Person = function(first, last) {
    let firstName = first;
    let lastName  = last;
  
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.getFullName = () => `${this.getFirstName()} ${this.getLastName()}`;

    this.setFirstName = input => firstName = input;
    this.setLastName = input => lastName = input;
    this.setFullName = (first, last) => {
      this.setFirstName(first);
      this.setLastName(last);
      this.getFullName();
      }
}
