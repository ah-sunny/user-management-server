const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: "arafat", email: 'arafatcse@gmail.com' },
    { id: 2, name: "suuny", email: 'sunnycse@gmail.com' },
    { id: 3, name: "Mamun", email: 'mamun03cse@gmail.com' },
]

app.get('/', (req, res) => {
    res.send("User management Server")
})

app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users',(req,res)=>{
    // console.log('post api hitting')
    // console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`server is running on port : ${port}`)
})

