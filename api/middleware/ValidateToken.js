const {verify} = require("jsonwebtoken");
module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get('authorization')
        // console.log(token)
        if (token) {
            token = token.slice(7)
            // console.log(token)

            verify(token, "secret", (err, decoded) => {
                if (err) {
                    console.log(err)
                    return res.json({
                        success: false,
                        message: "Invalid token"
                    })
                }
                console.log(decoded)
                next()
            })
        } else {
            res.json({
                success: false,
                message: "No token provided"
            })
        }
    }
}