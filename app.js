const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')

// import routes
const userRoutes = require('./routes/user')


// dot env config
dotenv.config();

// initialize express app
const app = express()

// bodyparser middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ejs
app.use(expressLayouts)
app.set('view engine', 'ejs')


// connect to database
const DB = process.env.DATABASE_URL
mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('database connected'))
.catch(err => console.log(err))


// routes
// homepage route
app.get('/', (req, res) => {
    res.render('index')
})
// user routes
app.use('/user', userRoutes);


// listen to port
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log('Server has been started...'))