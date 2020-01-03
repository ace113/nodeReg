const User = require('../models/users')

module.exports = {
    
    postRegister:  async (req, res) =>{
        let { fname, lname, uname, email, password } = req.body;

        // check if email and username already exists
        const userExists = await User.findOne({uname, email})
        if(userExists) {
            return res.json('User already exists')
        }

    const newUser = new User({
        fname,
        lname,
        uname,
        email,
        password
    })
    await newUser.save((err, user)=>{
        if(err) { return console.log(err)}
        else {
            res.json(user);
        }
    })}
}