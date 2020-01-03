const router = require('express').Router()
const User = require('../models/users')
const {postRegister} = require('../controllers/user.controller')

// register routes

// get register page route
router.get('/register', (req, res) =>{
    res.render('register')
})
router.post('/register',  postRegister)

// login routes

// get register page route
router.get('/login', (req, res) =>{
    res.send('login form')
})

module.exports = router;