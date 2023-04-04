const format = require('date-format');
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello ji</h1>");
})



app.get('/api/v1/instagram', (req, res) => {
    const Jsons = {
        name: "Mann",
        followers: "900",
        following: "80",
        date: format.asString("hh:dd:MM", new Date())
    };
    res.send(Jsons);

})
app.get('/api/v1/facebook', (req, res) => {
    const Jsons = {
        name: "MannPage",
        followers: "100",
        following: "80",
        date: format.asString("hh:dd:MM", new Date())

    };
    res.send(Jsons);

})
app.get('/api/v1/linkedin', (req, res) => {
    const Jsons = {
        name: "MannThakar",
        followers: "0",
        following: "4",
        date: format.asString("hh:dd:MM", new Date())
    };
    res.send(Jsons);

})

app.get("/api/v1/:token", (req, res) => {

    console.log(req.params.token);
    res.status(200).json({ Param: req.params.token })
})


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})