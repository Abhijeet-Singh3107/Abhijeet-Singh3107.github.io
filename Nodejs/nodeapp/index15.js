import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/students").then(() => {
    app.listen(8080, () => {
        console.log("App started on server 8080");
    });

});

const userSchema = mongoose.Schema({
    user: {type: String}
})

const userModel = mongoose.model("UserName", userSchema);

app.post("/", async (req,res) => {
    const {user} = req.body;
    const result = await userModel.create({user});
    res.status(201).json({"message":"Data Saved..."})
})