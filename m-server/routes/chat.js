const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const GEMINI_URL =
//  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
// ✅ POST /chat → Send message to Gemini API
router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ reply: "No message received" });

  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: message }] }] }
    );

    const aiReply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini";

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    res.status(500).json({ reply: "Error fetching response from Gemini" });
  }
});

module.exports = router;
