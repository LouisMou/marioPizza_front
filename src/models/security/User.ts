export default class User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  address: string;
  password: string;
  constructor(
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    address: string,
    password: string
  ) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.password = password;
  }
}
