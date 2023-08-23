const {login} = require("./auth.service");

module.exports = {
    login: (req, res) => {
        const body = req.body
        login(body, (err, result) => {
            if (err) {
                console.log(err)

                return res.status(500).json({
                    message: err.message
                })
            }

            return res.status(201).json({
                message: "Login successfully",
                access_token: result
            })
        })
    },


}