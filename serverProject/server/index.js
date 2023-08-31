const express = require('express')
const path = require("path")
const server = express()
let fs = require("fs")

server.use(express.urlencoded())
server.use(express.static(path.resolve("client")))

server.post('/signup', (req, res) => {
    let users = []
    const data = fs.readFileSync('server/info.json', 'utf8')

    users = JSON.parse(data)
    users.push(req.body)

    fs.writeFileSync('server/info.json', JSON.stringify(users))
    res.redirect("/login")
})

server.post('/login', (req, res) => {
    const user = req.body
    const file = JSON.parse(fs.readFileSync('server/info.json', 'utf8'))

    const find = file.find((users) => users.user === user.user && users.password === user.password)

    if (find) {
        res.redirect("/home")
    } else {
        res.send(`Wrong user or password! <br> <a href="/login">back to login</a>`)
    }
})

server.get('/login', (req, res) => {
    res.sendFile(path.resolve('client/login.html'))
})

server.get('/signup', (req, res) => {
    res.sendFile(path.resolve('client/signup.html'))
})

server.get('/home', (req, res) => {
    res.sendFile(path.resolve('client/home.html'))
})

server.listen(3000, () => {
    console.log(`Server started`)
}) 
