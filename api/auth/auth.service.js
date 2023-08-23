const pool = require('../../config/database')
const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");

module.exports = {
    login: (data, callback) => {
        const {email, password} = data
        pool.query('select * from users where email = ?', [
            email
        ], (error, results, fields) => {
            if (!results.length) {
                return callback({message: "email is invalid"});
            }
            const user = results[0]
            console.log(typeof password, typeof user.password)
            const isPasswordCorrect = compareSync(password,  user.password);
            console.log(isPasswordCorrect)
            if (!isPasswordCorrect) {
                return callback({message: "password is invalid"});
            }
            user.password = null
            const accessToken = sign({user}, 'secret', {
                expiresIn: '1h'
            })

            return callback(null, accessToken)
        })
    },


}