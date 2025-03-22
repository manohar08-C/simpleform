const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "form_db"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL database.");
});

// API Route for Form Submission
app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
    
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error inserting data" });
        }
        res.json({ message: "Data inserted successfully!" });
    });
});

// Start Server
app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on http://localhost:5000");
});
