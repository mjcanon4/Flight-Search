const express = require("express");

const app = express();

app.get("/", req, (res) => res.json({ msg: "Find your flights here..." }));

const PORT = process.env.PORT || 4873;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
