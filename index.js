import express from "express";
import path from 'path';

const app  = express();

app.get("/", (req, res) => {
    res.sendfile('./index.html')
})

app.get('/carch/pipelining', (req, res) => {
    res.sendfile('./pipelining.html')
})

app.get('/cysec/iitpkd', (req, res) => {
    res.sendfile('./iitpkd-cysec.html')
})

app.get('/eco/cost-revenue', (req, res) => {
    res.sendfile('./cost-revenue.html')
})

app.listen(3030, () => {
    console.log(`Server is listening on http://localhost:3030`);
  });
