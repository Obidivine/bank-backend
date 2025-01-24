const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  personalInfo: {
    firstName: String,
    lastName: String,
    currencyType: String,
    accountType: String,
    country: String,
  },
  residentialAddress: {
    stateAddress: String,
    aptSuite: String,
    city: String,
    state: String,
    zipCode: String,
  },
  loginInfo: {
    email: String,
    phoneNumber: String,
    username: String,
    password: String,
  },
  identityInfo: {
    ssn: String,
    dob: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
