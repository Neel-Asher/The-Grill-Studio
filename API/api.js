import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection string
const atlasUri = "mongodb+srv://neelasher20:E205Vallabh#@cluster0.sv8fs7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB Atlas
mongoose.connect(atlasUri, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// API routes
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/users', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port ${PORT}"));
