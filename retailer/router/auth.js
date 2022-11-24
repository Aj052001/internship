const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require('multer')
const path = require('path');

//upload image and storage engine
const storage = multer.diskStorage({
  destination:'./router/upload/images',
  filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({storage:storage})
const mulupload = upload.fields([{name:'UpDrugLimage'},{name:'UpGstCimage'}])

router.use('/profile',express.static('router/upload/images'));

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
}); 


/*register part */

router.post("/signup",mulupload, async (req, res) => {
    const {TbyeOfBusiness ,BusinessName,OwnerName,BusinessAddress,Pincode,city,area,state,PhoneNumber,password,ConfirmPassword,email,Pname1,PphoneNo,Adln,Gn,PanNumber } = req.body;
    filename1 = req.files.UpDrugLimage[0].filename;
    filename2 = req.files.UpGstCimage[0].filename;

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
            "Drug License number":Adln,
            "Drug License Image":filename1,
            "GSTIN Number":Gn,
            "GST Certificate Image":filename2,
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
