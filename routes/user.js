const router = require('express').Router()
const User = require('../models/users')
const {postRegister, postLogin} = require('../controllers/user.controller')

// register routes

// get register page route
router.get('/register', (req, res) =>{
    res.render('register')
})
// post register page route
router.post('/register',  postRegister)

// login routes

// get register page route
router.get('/login', (req, res) =>{
    res.render('login')
})

// post login page route
router.post('/login', postLogin)

module.exports = router;