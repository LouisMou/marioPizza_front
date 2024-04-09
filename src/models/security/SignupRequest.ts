export default class Signin {
  lastname: string;
  firstname: string;
  password: string;
  address: string;
  username: string;

  constructor(
    lastname: string,
    firstname: string,
    password: string,
    address: string,
    username: string
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.password = password;
    this.address = address;
    this.username = username;
  }
}
