const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");


router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
}); 


/*register part */

router.post("/signup", async (req, res) => {
    const {TbyeOfBusiness ,BusinessName,OwnerName,BusinessAddress,Pincode,city,area,state,PhoneNumber,password,ConfirmPassword,email,Pname1,PphoneNo,Adln,Gn,PanNumber } = req.body;

  if (!TbyeOfBusiness || !BusinessName || !OwnerName || !BusinessAddress ||!Pincode||!city||!area||!state||!PhoneNumber||!password||!ConfirmPassword||!email||!Pname1||!PphoneNo||!Adln||!Gn||!PanNumber) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
try{
     const userExist = await User.findOne({ email: email  });
     if (userExist) {
      return res.status(422).json({ error: "Email already register" });
       } else {

      if(password== ConfirmPassword )
      {
        const user = new User({
          "Type Of Business":TbyeOfBusiness ,
          "Business Name":BusinessName,
          "Owner Name": OwnerName,
          "Business Address":BusinessAddress,
            "Pincode": Pincode,
            "city":city,
            "Area":area,
            "Select state":state,
            "PhoneNumber":PhoneNumber,
            "password": password,
            "confirm password": ConfirmPassword,
            "email":email,
            "Pharmacist name 1":Pname1,
            "Pharmacist Phone No. 1":PphoneNo,
            "Add Drug License number":Adln,
            "GSTIN Number":Gn,
            "Pan Number":PanNumber,
          });
          /*name:name (first database name and  second user field name) */
          
          


          const userRegister = await user.save();
          if (userRegister) {
            res.status(201).json({ message: "user registered successfully" });
          } else {
            res.status(500).json({ error: "Failed to registerd" });
          }
         
      }
      else{
        return res.status(422).json({ error: "Password not matching" });
      }


    }
    } catch (err) {
    console.log(err);
  }
});








/*login  part */
router.post("/signin", async (req, res) => {
  
  const  {PhoneNumber,password}= req.body;
  console.log(PhoneNumber)
    
        if(!PhoneNumber || !password)
        {
            return res.status(422).json({ error: "Plz filled the field properly" });
        }
    try {
        const userLogin = await User.findOne({ PhoneNumber:PhoneNumber });
        console.log(userLogin.PhoneNumber)
        
        const isMatch = await bcrypt.compare(password, userLogin.password);

  
        
        
        
        if (isMatch) {
               res.jsonp({message:"user signin successfully"})
             } else {
           res.status(422).json({error:"user error"})
           }
 } catch(err) {
      console.log(err)
    }
  });



 
 
 
 


  
module.exports = router;
