const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

app.post('/delivery', (req, res) => {
    console.log(req.body);
    res.send('Delivery Complete');
});

app.listen(port, () => {
    console.log(`deliveryConfirmation service listening at http://localhost:${port}`);
});
