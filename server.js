const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connecting the database

connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to the Job Portal" }));

// Defining the routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/job", require("./routes/job"));
app.use("/api/questions", require("./routes/questions"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
