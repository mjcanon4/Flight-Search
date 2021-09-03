const express = require("express");

app.get("/", req, (res) => res.json({ msg: "Find your flights here..." }));
