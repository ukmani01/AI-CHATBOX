const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// ✅ Test route
app.get("/", (req, res) => {
    res.send("hello");
});

// ✅ Auth routes
app.use("/api/auth", authRoutes);

// ✅ Chat routes
app.use("/chat", chatRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/uk', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// ✅ Start server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
