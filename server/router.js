const router=require("express").Router();
const musicModel=require("./model/musicModel.js")
const userModel=require("./model/userModel.js")
router.post("/music/post",async(req,res)=>{
    try{
        console.log(req.body.Title);
        const newMusic=new musicModel({
            Title:req.body.Title,
            Artist:req.body.Artist,
            Album:req.body.Album,
            Genre:req.body.Genre,
            })

   const saveItem=await newMusic.save()
    res.status(200).json("music Added successfully");
    }
    catch(err){
        res.json(err);
              }
})

//
router.post("/user/signup",async(req,res)=>{
    try{
        console.log(req.body.username);
        const newUser=new userModel({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
            })

   const saveItem=await newUser.save()
    res.status(200).json("you signup successfully");
    }
    catch(err){
        res.json(err);
              }
})
//
router.get('/music',async(req,res)=>{
    try{
        console.log("killed");
        const musicList=await musicModel.find({})
        res.status(200).json(musicList)
    }
    catch(err){
        res.json(err);
            }
})

router.put("/api/music/:id",async(req,res)=>{
    try{
const updateMusic= await musicModel.findByIdAndUpdate(req.params.id,{$set:req.body});
 res.status(200).json("Music updated");
    }
    catch(err){
        res.json(err);
    }
})
router.delete("/api/item/:id",async(req,res)=>{
   try{ const deleteModel=await musicModel.findByIdAndDelete(req.params.id);
    res.status(200).json("item Deleted");
   }
   catch(err){
    res.json(err);
   }
})
module.exports=router;