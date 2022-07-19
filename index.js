const express = require('express')
const exhbs = require("express-handlebars");
const Handlebars = require("handlebars");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

const mainRoute = require('./routes/main')
const signinRoute = require('./routes/signin')
const signupRoute = require('./routes/signup')

let app = express();

const hbs = exhbs.create({
    defaultLayout: "mainLayout",
    extname: "hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(mainRoute)
app.use(signinRoute)
app.use(signupRoute)

async function startServer() {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        });
    } catch (e) {
        throw new Error(e)
    }
}

startServer();