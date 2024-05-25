const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

const postModel = require('./models/post');

const port = "https://travel-experience-backend.vercel.app/";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://21955a1206:nikhil1528@project.cyg4qu7.mongodb.net/Travel?retryWrites=true&w=majority&appName=Project"
)

app.get('/',(req,res) => {
    postModel.find({})
    .then(users => res.json(users))
    .catch(error => res.json(error))
})

app.post('/',(req,res) => {
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
