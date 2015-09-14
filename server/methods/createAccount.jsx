Meteor.methods({
  createAccount(username, password, confirmPassword) {
    let obj = {username, password, confirmPassword};
    let userId;

    check(obj, CreateAccountSchema);

    userId = Accounts.createUser({username});

    Accounts.setPassword(userId, password);

    return Meteor.users.findOne(userId).username;
  },
});
