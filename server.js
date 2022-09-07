const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('HELLO WORLD'));

app.listen(process.env.PORT || 3000, () => console.log('app is listening'));