const express = require('express');
const path = require('path');


const app = express();


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

app.use("/", require("./routes/pages"));
app.use("/totalcost", require("./routes/pages"));

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running on 5000");
})
