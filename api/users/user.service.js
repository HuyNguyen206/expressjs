const pool = require('../../config/database')
const {genSaltSync, hashSync, compareSync} = require("bcrypt");

module.exports = {
    create: (data, callback) => {
        const salt = genSaltSync()
        const password = hashSync(data.password, salt)

        pool.query('INSERT INTO users(name, email, password) values(?,?,?)', [
            data.name,
            data.email,
            password
        ], (error, results, fields) => {
            if (error) return callback(error)

            return callback(null, results)
        })
    },
    getUsers: (callback) => {
        pool.query('select * from users', [], (error, results, fields) => {
            if (error) return callback(error)

            return callback(null, results)
        })
    },
    getUserById: (id, callback) => {
        pool.query('select * from users where id = ?', [id], (error, results, fields) => {
            if (error) return callback(error)
            if (results.length) {
                return callback(null, results[0])
            }

            return callback({message: `user ${id} not found`, code: 404})
        })
    },
    updateUserNameById: (id, name, callback) => {
        pool.query('update users set name = ? where id = ?', [name, id], (error, results, fields) => {
            if (error) return callback(error)

            return callback(null, results)
        })
    },
    deleteUserById: (id, callback) => {
        pool.query('delete from users where id = ?', [id], (error, results, fields) => {
            if (error) return callback(error)

            return callback(null, results)
        })
    },

}