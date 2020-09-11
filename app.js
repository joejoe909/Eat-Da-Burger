const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
    res.render('home');
});

app.listen(PORT, function(){
    console.log("Server listening on:" + PORT);
});

