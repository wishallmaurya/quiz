require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const env = process.env.NODE_ENV
const cookieSession=require("cookie-session")
var path = require('path');
const morgan = require("morgan")
// const passport=require("passport")
const app = express();

//Root Router
const routes = require("./routes");
// const passportSetup=require('./passport')
if (env === 'development') {
    mongoose.set('debug', true);
}

//Middleware
app.use(
	cookieSession({
		name: "session",
		keys: ["hello"],
		
	})
);
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev'))
app.use(cors());

// app.use(passport.initialize())
// app.use(passport.session())


app.use("/api/v1", routes);
const authRoutes = require('./routes/auth.route')
app.use('/auth',authRoutes)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

const db = process.env.DB_URL
const PORT = process.env.PORT || 8080
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const connect = async () => {
    try {
        await mongoose.connect(db, config)
    } catch (err) {
        throw err
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", () => {
    console.log("Connnected to database")
})
//Server
app.listen(PORT, () => {
    connect()
    console.log(`server is listening on port ${PORT}`)
})

