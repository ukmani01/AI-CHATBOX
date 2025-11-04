const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  aiReply: { type: String, required: true }
});

// 👇 'uk' is your MongoDB collection name
module.exports = mongoose.model('Aireplay', chatSchema, 'uk');
