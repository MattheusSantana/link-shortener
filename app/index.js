import express from 'express';

const app = express();
const port = process.env.port || 4000;



app.get('/', async (req, res) => {
    res.send("Hello world!");
});


app.listen(port, () => console.log('Server up!'));