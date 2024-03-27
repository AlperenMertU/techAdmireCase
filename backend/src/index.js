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


app.get("/", (req, res) => {
    res.render("login")
})




app.post("/login", async (req, res) => {
    const { email, password } = req.body;


    //input dolu boş kontrolü
    if (!email || !password) {
        return res.send("Username and password are required");
    }

    try {
        const user = await User.findOne({ email });



        const isPasswordMatch = password
        console.log("bu yazdığım", isPasswordMatch);
        console.log("database şifre", user.password);

        if (isPasswordMatch === user.password) {
            return res.json({ message: 'Login successful', token: "", status: 200 });
        } else {
            return res.status(500).send("user not found");
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error occurred");
    }
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
});




/* app.post("/login", async (req, res) => {
    const { email, password } = req.body;
      
    console.log("adasdasddasdasdasdas",req.body);
    if (!email || !password) {
        return res.send("Username and password are required");
    }

    try {
        const user = await User.findOne({ email });  

        if (!user) {
            return res.send("User not found");
        }

        const isPasswordMatch = password
       
        if (isPasswordMatch) {
            return res.json({ message: 'Login successful', token: "asdasd", status: 200 });
        } else {
            return res.json({ message: 'Login successful', status: 400 });
        }
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error occurred");
    }
}) */
