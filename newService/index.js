const express = require('express');
const app = express();
const port = 3005;

app.use(express.json());

app.post('/newservice', (req, res) => {
    console.log(req.body);
    res.send('newservice');
});

app.listen(port, () => {
    console.log(`newservice service listening at http://localhost:${port}`);
});