const mongooose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongooose.Schema({
  "First Name": {
    type: String,
    required: true,
  },
  "Last Name": {
    type: String,
    required: true,
  },
  "PhoneNumber": {
    type: Number,
    required: true,
  },
  "email": {
    type: String,
    required: true,
    unique:true
  },
  "Pincode": {
    type: Number,
    required: true,
  
  },
  "city": {
    type:String ,
    required: true,
  },
  "Area": {
    type: String,
    required: true,
  },
  "Select state": {
    type: String,
    required: true,
  },
  "password": {
    type: String,
    required: true,
  },
  "confirm password": {
    type: String,
    required: true,
  },
  "Distributor Code": {
    type: Number,
    required: true,
  },
  "Distributor Type": {
    type: String,
    required: true,
  }
});



/*middle ware   password hash  */
userSchema.pre("save", async function (next) {
    /*keval password modified hone per use hash me change krna hai  */
    if (this.isModified("password")) {
       
        this.password = await bcrypt.hash(this.password, 10);
        
        this.ConfirmPassword = await bcrypt.hash(this.password, 10);
    }
    next();
});

  
const User = mongooose.model('Disttibutor', userSchema);

module.exports = User;