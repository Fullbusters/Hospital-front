const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
// app.listen(process.env.Port || 8080);

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port 3000");
});
