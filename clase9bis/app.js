const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/users');


app.use(bodyParser.json());
app.use(cors());

// request, response.
app.get('/', function (req, res) {

    console.log('Entro un pedido en /');
    res.json({ message: 'hola!'});

});

app.use('/users/', userRouter);



app.listen(3000);

