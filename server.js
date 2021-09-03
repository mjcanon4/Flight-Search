const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Find your flights here..." }));

// Define routes
app.use("/api/flights", require("./routes/flights"));
app.use("api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 4873;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
