const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.get('/api/:endpoint', (req, res) => {
    const apiUrl = `http://api.coinlayer.com/${req.params.endpoint}?access_key=${process.env.COINLAYER_API_KEY}&symbols=BTC,ADA,LINK,DOGE,ETH`;

  request(apiUrl).pipe(res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
