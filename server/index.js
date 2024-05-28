const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

const postModel = require('./models/post');

const port = 5000;

const app = express();
app.use(cors(
    {
        origin:["https://travel-experience-frontend.vercel.app/"],
        method:["POST","GET"],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials:true
    }
));
app.use(express.json());

mongoose.connect(
    "mongodb+srv://21955a1206:nikhil1528@project.cyg4qu7.mongodb.net/Travel?retryWrites=true&w=majority&appName=Project"
)
.then(() => console.log("MongoDb connected Successfully"))
.catch((err) => console.log(err));

app.get('/post',(req,res) => {
    postModel.find({})
    .then(users => res.json(users))
    .catch(error => res.json(error))
})

app.post('',(req,res) => {
    try {
        const input = req.body;
        const data = new postModel(input);
        data.save();
        res.json(data);
    } catch (error) {
        res.json(error);
    }
    
})

app.listen(port, () =>{
    console.log("Server is running in port number 5000");
})
