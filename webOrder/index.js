const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/order', (req, res) => {
    console.log(req.body);
    res.send('Order Received');
});

app.listen(port, () => {
    console.log(`webOrder service listening at http://localhost:${port}`);
});
