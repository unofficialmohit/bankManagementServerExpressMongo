const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/bankDB')
.then(()=>{
console.log("DATABASE CONNECTED");
})
.catch((error)=>{
console.log(error);
})