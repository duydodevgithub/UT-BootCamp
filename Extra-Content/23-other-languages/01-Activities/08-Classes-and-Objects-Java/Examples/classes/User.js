// A TypeScript version of the User class. Looks similar, no?
var User = (function() {
  function User(username, email) {
    this._username = username;
    this._email = email;
    User.created += 1;
  };
  Object.defineProperty(User.prototype, "username", {
    get: function() {
      return this.username;
    },
    enumerable: true,
    configurable: true
  });
  User.prototype.SetUsername = function(username) {
    this._username = username;
  };
  Object.defineProperty(User.prototype, "email", {
    get: function() {
      return this.email;
    },
    enumerable: true,
    configurable: true
  });
  User.prototype.setEmail = function(email) {
    this._email = email;
  };
  User.getCreated = function() {
    return User.created;
  };
  return User;
}());
User.created = 0;
User.getCreated();
