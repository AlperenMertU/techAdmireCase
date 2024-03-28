const express = require('express');
const connectDB = require("./connection");
const User = require("./userschema");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())

connectDB();


app.post('/signup', async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json('Email address already exists');
        }

        const user = new User(req.body);
        console.log(user);
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json('Error creating user');
    }
});




app.post("/login", async (req, res) => {

    //coming email and pass fielad from login screen 
    const { email, password } = req.body;


    try {

        //find mail from database 
        const user = await User.findOne({ email });

        //if database not have mail, 404 error 
        if (!user) {
            return res.status(404).send("User not found");
        }

        //coming pass from login screen compare with database pasasowrd if true scusses
        const isPasswordMatch = password === user.password;
        if (isPasswordMatch) {
            return res.json({ message: 'Login successful', token: "", status: 200 });
        } else {
            return res.status(401).send("Incorrect password");
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error occurred");
    }
})


app.listen(5000, () => {
    console.log('Server running on port 5000');
});

