const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Replace with your actual Azure Function URL including the function key
const AZURE_FUNCTION_URL = "https://smartretail-func-1739.azurewebsites.net/api/StockUpdateHandler?code=L72CVk3kBq2YdBRavOK4Fyjhx6Z9MZ9A_p612PawRX-JAzFuPwmf-w==";

// Test endpoint to simulate stock update
app.post("/update-stock", async (req, res) => {
    try {
        const response = await axios.post(AZURE_FUNCTION_URL, req.body, {
            headers: { "Content-Type": "application/json" }
        });

        res.status(200).json({
            message: "Stock update sent to Azure Function",
            azureResponse: response.data
        });
    } catch (error) {
        console.error("Error sending stock update:", error.message);
        res.status(500).json({ error: "Failed to send stock update" });
    }
});

app.listen(3000, () => {
    console.log("Backend server running on http://localhost:3000");
});
