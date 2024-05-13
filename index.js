const express=require('express');
const app=express();
const cors=require('cors');
const router = require('./routes/userRoutes');
const PORT=4000;
require('./database/database');
app.use(express.json());
const corsOptions = {
    origin: ['http://localhost', 'https://bankmanagement-nextjs.netlify.app'],
    methods: 'GET, PUT, POST, PATCH, DELETE',
    allowedHeaders: '*',
    credentials: true,
    exposedHeaders: 'Access-Control-Allow-Private-Network',
};
app.use(cors(corsOptions));
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use(router);

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT "+PORT);
})