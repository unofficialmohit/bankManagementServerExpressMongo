const User=require('../model/userSchema');


const getAllUsers=async(req,res)=>{
    return res.status(200).send(await User.find({}));
}
const addNewUser=async(req,res)=>{
    // console.log(req.body);
    const newUser=new User(req.body);
    await newUser.save();
    return res.status(200).send(await User.find({}));
}
const getUserByAddress=async(req,res)=>{
    const {accountAddress}=req.params;
    const user=await User.findOne({accountAddress});
    if(!user)
    {
    return res.status(400).send({message:"User doesn't exist on our server"});
    }
    return res.status(200).send(user)
}
const updateUser=async(req,res)=>{
    const {accountAddress}=req.params;
    const user=await User.findOne({accountAddress});
    if(!user)
    {
        return res.status(200).send({message:"User doesn't exist on our server"})
    }    
    await User.findOneAndUpdate({accountAddress},req.body,{new:true});
    return res.status(200).send(await User.find({accountAddress}));
}
module.exports={
    getAllUsers,
    addNewUser,
    getUserByAddress,
    updateUser

}