const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mohit:gujjar123@bank-management.6rywl4w.mongodb.net/BankDB?retryWrites=true&w=majority&appName=bank-management/bankDB')
.then(()=>{
console.log("DATABASE CONNECTED");
})
.catch((error)=>{
console.log(error);
})