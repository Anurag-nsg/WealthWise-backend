let mongoose = require('mongoose');

let signup = new mongoose.Schema({
    "name": String,
    "phone": String,
    "email": {
        type: String,
        unique: true
    },
    "password": String,
    "profile": String,
    "count": Number
}, {
    timestamps: true 
});

let UserDataSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    income: { type: Number, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    foodAtHome: { type: String, default: '' },
    foodAwayFromHome: { type: String, default: '' },
    housing: { type: String, default: '' },
    transportation: { type: String, default: '' },
    healthcare: { type: String, default: '' },
    education: { type: String, default: '' },
    entertainment: { type: String, default: '' },
    personalCare: { type: String, default: '' },
    apparelAndServices: { type: String, default: '' },
    tobaccoProducts: { type: String, default: '' },
    cashContributions: { type: String, default: '' },
    alcoholicBeverages: { type: String, default: '' },
    savings: { type: String, default: '' }
});

  const csvfile = new mongoose.Schema({
    fileName: { type: String, required: true },
    data: { type: Array, required: true }
}, { timestamps: true });

  const csvFile = mongoose.model('Data', csvfile);

  const UserData = mongoose.model('UserData', UserDataSchema);
  
  let Signup = mongoose.model('signup', signup);
  
  module.exports = { Signup, UserData,csvFile};
