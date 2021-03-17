const express = require('express');

let app = express();
let port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});