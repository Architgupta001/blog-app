const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true})) 
app.use(express.static('public'))

const homeStartingContent = "ijhfuilebfwukjf";
const aboutContent = "hbuibihj";
const contactContent = "afwjhgli";


app.listen(3000,()=>{
    console.log("server started on port 3000....");
})