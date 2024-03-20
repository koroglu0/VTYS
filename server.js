const express = require('express');
const dotenv = require("dotenv").config()
const connectDb = require('./config/dbConnection')
const app = express();
const path = require("path");
const homeRoutes = require("./routes/user")
// const adminRoutes = require("./routes/admin")
const bookRoutes = require("./routes/bookRoute")
const movieRoutes = require("./routes/movieRoute")
const userRoutes = require("./routes/userRoute")
const donateRoutes = require("./routes/donateRoute")


app.use(express.json())
app.use("/libs", express.static(path.join(__dirname, "node_modules")))
app.use("/views", express.static(path.join(__dirname, "views")))

// app.use(adminRoutes);
app.use(homeRoutes);
app.use("/user", userRoutes)
app.use("/donate", donateRoutes)
app.use("/book", bookRoutes)
app.use("/movie", movieRoutes)


app.listen(3000, ()=>{ 
    console.log(`Listening on port 3000`)
})
connectDb()

    