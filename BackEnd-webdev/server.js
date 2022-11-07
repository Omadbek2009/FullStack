const express = require("express");
const app = express();
const port = 4900

app.use('/',require('./router'))



app.listen(port, ()=> console.log(`Bu Server ${port} Portda Yuguryapti`))