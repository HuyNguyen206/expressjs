require('dotenv').config()

const express = require('express');
const {userRouter} = require("./api/users/user.router");
const {authRouter} = require("./api/auth/auth.router");
const app = express();
// app.set('view engine', 'ejs')

app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.listen(process.env.APP_PORT)



























// app.get('/api', (req, res) => {
//     res.json({
//         success: 1,
//         message: 'Hello World!'
//     })
// })
// app.get('/', function(req, res  ) {
//     // res.send('Hello World!');
//     // res.sendFile('./views/index.html', {root: __dirname})
//     res.render('index')
// })
//
// app.get('/about', function(req, res  ) {
//     res.render('about')
//
// })
//
// app.get('/about-us', function(req, res  ) {
//     res.redirect('/about');
// })
//
// app.use((req, res) => {
//     res.status(404).render('404')
// })