var Hand = require('pokersolver').Hand;
const express = require('express');
const app = express();

app.get('holeCards', (req, res)=>{
  res.send('5h5s')
})

app.listen(4001, function () {
  console.log('Example app listening on port 4001!')
});
