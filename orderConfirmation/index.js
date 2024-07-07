const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

app.post('/confirm', (req, res) => {
    console.log(req.body);
    res.send('Order Confirmed');
});

app.listen(port, () => {
    console.log(`orderConfirmation service listening at http://localhost:${port}`);
});
