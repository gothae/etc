var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

//세션 사용하도록
app.use(session({
    secret : '8NEC@*N98c#@om2@CNAfs',
    resave : false,
    saveUninitialized : true
}));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/count', function(req,res){
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send('count : '+req.session.count);
});

app.get('/auth/logout', function(req,res){
    delete req.session.displayName;
    res.redirect('/welcome');
});

app.get('/welcome',function(req,res){
    if(req.session.displayName){//로그인 성공
        res.send(`
        <h1>Hello, ${req.session.displayName}</h1>
        <a href="/auth/logout">logout</a>
        `);
    }else{
        res.send(`
        <h1>Welcome</h1>
        <a href="/auth/login">Login</a>
        `);
    }
});

app.post('/auth/login', function(req,res){
    var user = {
        username : 'koxogml',
        password : '123',
        displayName : 'gothae'
    };//DB대신 사용
    var uname = req.body.username;
    var pwd = req.body.password;

    if(uname == user.username && pwd == user.password){
        req.session.displayName = user.displayName;
        res.redirect('/welcome');
    }else{
        res.send('Incorrect <a href="/auth/login">login</a>');
    }
});

app.get('/auth/login', function(req,res){
    var output = `
    <form action="/auth/login" method="post">
        <p>
            <input type="text" name="username" placeholder="username">
        </p>
        <p>
            <input type="password" name="password" placeholder="password">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>
    `;
    res.send(output);
});

app.listen(3003, function(){
    console.log('Connected port successfully!');
});