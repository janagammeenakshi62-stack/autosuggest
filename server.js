const express = require('express');
const app = express();
const port = process.env.PORT ||3000;

// To tell app, where to find static files
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("app running on http://localhost:"+port);
});
