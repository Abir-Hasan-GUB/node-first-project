const express = require('express');

const app = express();

// function rootCall(req,res){
//     res.send('Thank You Vary Much');
// }

app.get('/', (req,res) => {
    res.send('Thank You for Calling me');
});

app.listen(2247,()=>console.log('listening on port 2247'));