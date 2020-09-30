const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
// parse application/json
app.use(bodyParser.json());

const name = ['abir','nahid','mim'];
// function rootCall(req,res){
//     res.send('Thank You Vary Much');
// }

app.get('/', (req,res) => {
    const product = {
        product: 'ada',
        price: '$20'
    }
    res.send(product);
});

// app.get('/frouts/banana', (req,res) => {
//     res.send({frouts: 'banana', price: 10000, quantity: 1000});
// })

app.get('/users/:id', (req,res) => {
    const id = req.params.id; //get user id given by url
    const userName = name[id]; //find name in array by url index number
    res.send({id,userName}); // display name in array
})


//post
app.post('/addUser', (req,res) => {
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(2247,()=>console.log('listening on port 2247'));