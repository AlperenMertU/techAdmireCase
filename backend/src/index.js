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
        const { email } = req.body;

        // Veritabanında aynı email adresine sahip kullanıcıyı ara
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send('Bu email adresi zaten kullanımda');
        }

        // Email adresi kullanılmıyorsa yeni kullanıcı oluştur
        const user = new User(req.body);
        await user.save();
        res.status(201).send('Kullanıcı başarıyla oluşturuldu');
    } catch (error) {
        console.error(error);
        res.status(400).send('Kullanıcı oluşturulurken bir hata oluştu');
    }
});

app.get("/", (req, res) => {
    res.render("login")
})


app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log(req);
    if (!username || !password) {
        return res.send("Username and password are required");
    }

    try {
        const user = await User.findOne({ username });
        console.log(user);
        if (!user) {
            return res.send("User not found");
        }
        console.log(user);
        const isPasswordMatch = user.password
        if (isPasswordMatch) {
            return res.json({ message: 'Login successful', token: "asdasd", status: 200 });
        } else {
            return res.json({ message: 'Login successful', status: 400 });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error occurred");
    }
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
});




