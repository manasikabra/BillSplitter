const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
// Increase limit for base64 images
app.use(express.json({ limit: '10mb' }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to serve the main HTML file by default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'BillSplitter.htm'));
});

// Secure API endpoint for communicating with Google Gemini
app.post('/api/scan', async (req, res) => {
    console.log("--> Received scan request from frontend!");
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: { message: "API key is not configured on the server." } });
        }

        // Forward the exact JSON body that the frontend sent to Google's API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body)
            }
        );

        const data = await response.json();
        
        if (!response.ok) {
            console.error("Gemini API Error:", response.status, data);
            return res.status(response.status).json(data);
        }

        console.log("Gemini API Success!");
        res.json(data);
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({ error: { message: "Internal server error connecting to the AI API." } });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running securely at http://localhost:${PORT}`);
});

module.exports = app;
