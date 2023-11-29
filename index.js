import express from "express";
import path from 'path';

const app  = express();

app.get("/", (req, res) => {
    res.sendfile('./index.html')
})

app.get('/carch/pipelining', (req, res) => {
    res.sendfile('./pipelining.html')
})

app.listen(3030, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
  });
