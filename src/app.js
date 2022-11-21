const express = require('express');
const t = require("../utils/generate_token");
const a = require("../utils/authenticate_token");


const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Worldly!!')
})

// handout jwt
app.post('/api/createNewUser', (req, res) => {        
    if(req.body.username != null) {
        const token = t.generateAccessToken({username: req.body.username})
    res.json(token);    
    }
    
});

app.get('/api/version', (req, res) => {
    res.json({version: "1.0"});
});

// check the jwt
app.get('/api/authenticatedRoute', a.authenticateToken, (req,res) => {
    console.log('authenticated user');
    
    res.json({text :'well done!'});
});

app.get('/api/help', (req, res) => {
    console.log('request for help!');
    res.json({text: `I'm afraid there isn't much help to be found here.  Sorry.`});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})