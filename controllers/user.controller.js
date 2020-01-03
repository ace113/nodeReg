const User = require('../models/users')
const bcrypt = require('bcryptjs')

module.exports = {
    
    postRegister:  async (req, res) =>{
        let { fname, lname, uname, email, password } = req.body;

        // check if email and username already exists
        const userExists = await User.findOne({uname, email})
        if(userExists) {
            return res.json('User already exists')
        }
        // check if the password match
        if(password !== req.body.password2) {
            return res.json(`passwords don't match`)
        }

        // generate hashed password
        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
  
        

    const newUser = new User({
        fname,
        lname,
        uname,
        email,
        password:hashPassword
    })
    await newUser.save((err, user)=>{
        if(err) { return console.log(err)}
        else {
            res.json(user);
        }
    })},

    postLogin: async (req, res) => {
        
    }
}