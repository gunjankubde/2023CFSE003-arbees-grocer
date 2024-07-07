const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/track', (req, res) => {
    res.send('Order Tracking Information');
});

app.listen(port, () => {
    console.log(`orderTracking service listening at http://localhost:${port}`);
});
