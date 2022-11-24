const mongooose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongooose.Schema({
  "Type Of Business": {
    type: String,
    required: true,
  },
  "Business Name": {
    type: String,
    required: true,
  },
  "Owner Name": {
    type: String,
    required: true
  },
  "Business Address": {
    type: String,
    required: true,
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
  "PhoneNumber": {
    type: Number,
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
  "email": {
    type: String,
    required: true,
    unique:true
  },
  "Pharmacist name 1": {
    type: String,
    required: true,
  },
  "Pharmacist Phone No. 1": {
    type: Number,
    required: true,
  },
  "Drug License number": {
    type:Number,
    required: true,
  },
  "Drug License Image":{
    type:String,
  },
  "GSTIN Number": {
    type: Number,
    required: true,
  },
  "GST Certificate Image":{
    type:String,
  },
  "Pan Number": {
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

  
const User = mongooose.model('AURA', userSchema);

module.exports = User;