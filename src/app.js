const express = require('express');
const t = require("../utils/generate_token");


const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Worldly!!')
})

app.post('/api/createNewUser', (req, res) => {    
    
    if(req.body.username != null) {
        const token = t.generateAccessToken({username: req.body.username})
    res.json(token);    
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})