const express = require('express')

const app = express()

const hbs = require('hbs');


app.use(express.static(__dirname + '/public'))


hbs.registerPartials( __dirname + '/views/parciales')
app.set('view engine','hbs');

require('./hbs/helpers')

const port =  process.env.PORT || 3000

app.get('/', function (req,res){
    
    res.render('home',{
        nombre : 'deins',
       
    })
})

app.get('/about', function (req,res){
    
    res.render('about')
})

app.listen(port, ()=>{
    console.log("escuchando peticiones puerto :" + port);
    
})