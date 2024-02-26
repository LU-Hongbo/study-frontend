import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: "testType",
        dayAction: "testAction"
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});