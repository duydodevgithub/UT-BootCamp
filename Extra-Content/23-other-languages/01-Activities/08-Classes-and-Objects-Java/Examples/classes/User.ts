// A TypeScript version of the User class. Looks similar, no?
class User {

  private static created : number = 0;

  private _username : string;

  private _email : string;

  constructor(username : string, email : string) {
    this._username = username;
    this._email = email;
    User.created += 1;
  };

  public get username() : string {
    return this.username;
  }

  private SetUsername(username : string) {
    this._username = username;
  }

  public get email() : string {
    return this.email;
  }

  private setEmail(email : string) {
    this._email = email;
  }

  public static getCreated() : number {
    return User.created;
  }

}
User.getCreated();