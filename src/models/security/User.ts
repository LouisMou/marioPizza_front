export default class User {
  username: string;
  firstname: string;
  lastname: string;
  role: string;
  address: string;
  constructor(
    username: string,
    firstname: string,
    lastname: string,
    role: string,
    address: string
  ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
    this.address = address;
  }
}
