const {create, getUsers, getUserById, updateUserNameById, deleteUserById} = require("./user.service");

module.exports = {
    createUser: (req, res) => {
        const body = req.body
        create(body, (err, result) => {
            if (err) {
                console.log(err)

                return res.status(500).json({
                    message: err.message
                })
            }

            return res.status(201).json({
                message: "User created successfully",
                data: result
            })
        })
    },
    getUsers: (req, res) => {
        getUsers((err, result) => {
            if (err) {
                console.log(err)

                return res.status(500).json({
                    message: err.message
                })
            }

            return res.status(200).json({
                message: "All users fetch successfully",
                data: result
            })
        })
    },
    getUserById: (req, res) => {
        console.log(req.param('id'))
        getUserById(req.param('id'), (err, result) => {
            if (err) {
                console.log(err)

                return res.status(err.code).json({
                    message: err.message
                })
            }

            return res.status(200).json({
                message: "User fetch successfully",
                data: result
            })
        })
    },
    updateUserNameById: (req, res) => {
        console.log(req.param('id'))
        updateUserNameById(req.param('id'), req.body.name, (err, result) => {
            if (err) {
                console.log(err)

                return res.status(500).json({
                    message: err.message
                })
            }

            return res.status(200).json({
                message: "User updated successfully",
                data: result
            })
        })
    },
    deleteUserById: (req, res) => {
        console.log(req.param('id'))
        deleteUserById(req.param('id'), (err, result) => {
            if (err) {
                console.log(err)

                return res.status(500).json({
                    message: err.message
                })
            }

            return res.status(204).json({
                message: "User deleted successfully",
                data: null
            })
        })
    },

}