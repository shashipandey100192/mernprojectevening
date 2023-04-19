
const express = require("express");
const userdata = require("../modals/Schema");
const router = express.Router();
const authenticat = require('../midilware/webtoken');

/*create or post api */
router.post("/regs", async(req,res)=>{
    const {fullname,email,phone,pass} = req.body;
    const adduser = new userdata({
        fullname,email,phone,pass
    });
        await adduser.save();
        // return res.status(400).json(adduser);
        console.log(adduser)
});


/* get api*/
router.get("/getdata", async(req,res)=>{
    const adduser = await userdata.find();
    res.json(adduser);
    console.log(adduser);
});


/* delete api*/
router.delete("/deletecurrentrecord/:id", async(req,res)=>{
    const {id} = req.params;
    const a = await userdata.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});



/*get single data api */
router.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleuser = await userdata.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);

});



/*update api */
router.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await userdata.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});



/*get single data api */
router.get("/userdetail/:id",async(req,res)=>{
    const {id} = req.params;
    const singleuser = await userdata.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});


router.post("/login", async(req,res)=>{
    console.log(req.body);
    const {email,pass} = req.body;
    const uservalidation = await userdata.findOne({email:email});
});





// user validation
router.get("/validuser",authenticat,async(req,res)=>{
    try{
        const firsttimevalid = await userdata.findOne({_id:req.userId});
        res.status(201).json({status:201,firsttimevalid});
    }
    catch(error)
    {
        res.status(401).json({status:401,error})
    }
});






module.exports = router;