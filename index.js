const express=require('express');
const PORT=6000;
const router = require('./routes/userRoutes');
const app=express();
require('./database/database');

app.use(express.json());

app.use(router);

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT "+PORT);
})