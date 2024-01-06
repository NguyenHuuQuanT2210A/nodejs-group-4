const express = require("express");
const classRouter = require("./routes/ClassRoute");
const app = express();

//middleware
app.use(express.json());
app.use("/api/class", classRouter);

app.listen(3001, ()  => {
    console.log("Serve is running on port 3001");
});

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Management-Student",
    {
        useNewUrlParser: true,
    useUnifiedTopology: true,
    },).then((res) => {
        console.log("Connected to MongoDB");
      }).catch(error => {
         console.log(error);
       });
       
module.exports = app;