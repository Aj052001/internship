const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");


router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
}); 


/*register part */

router.post("/signup", async (req, res) => {
    const {firstname,lastname,PhoneNumber,email,Pincode,city,area,state,password,ConfirmPassword,DisCode,DisType} = req.body;

  if (!firstname || !lastname || !PhoneNumber || !email ||!Pincode||!city||!area||!state||!password||!ConfirmPassword||!DisCode||!DisType) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
try{
     const userExist = await User.findOne({ email: email});
     if (userExist) {
      return res.status(422).json({ error: "Email already register" });
       } else {

      if(password== ConfirmPassword )
      {
        const user = new User({
          "First Name":firstname,
          "Last Name":lastname,
          "PhoneNumber":PhoneNumber,
          "email":email,
            "Pincode": Pincode,
            "city":city,
            "Area":area,
            "Select state":state,
            "password": password,
            "confirm password": ConfirmPassword,
            "Distributor Code":DisCode,
            "Distributor Type":DisType
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
