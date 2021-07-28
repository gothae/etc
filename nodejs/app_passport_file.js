var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
//session-file-store는 express-session에 의존관계이기 때문에 이처럼 표현
var bodyParser = require('body-parser');
var md5 = require('md5');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

//세션 사용하도록
app.use(session({
    secret : '8NEC@*N98c#@om2@CNAfs',
    resave : false,
    saveUninitialized : true,
    store : new FileStore()
    //session 데이터를 저장하는 저장소 sessions 디렉토리 생성하게 된다
    //새로운 session 생성할 떄마다 이 디렉토리에 파일이 생성된다 
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

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
        <ul>
            <li><a href="/auth/login">Login</a></li>
            <li><a href="/auth/register">Register</a></li>
        </ul>
        `);
    }
});
var users = [
    {
        username : 'koxogml',
        // password : '111', 111을 md5로 해쉬화하면 밑과 같이된다
        salt : "#VO1%O24%VBO691Yc5qct",
        password : '664ed91f8436e87d1cf062732c72f320',//'111'+salt
        displayName : 'gothae'
    },
    {
        username : 'kth',
        salt : "4n^8^&65e1ayj2^$ya$#!@6",
        password : 'b348ad40a5a7b1181206a0779d09679d',
        //위 사용자와 비밀번호가 111로 같지만 salt가 달라서 다른 해쉬값가짐
        displayName : 'kth'
    }
    ];//DB대신 사용

// app.post('/auth/login', function(req,res){

//     var uname = req.body.username;
//     var pwd = req.body.password;
//     for (var i=0; i<users.length; i++){
//         var user = users[i];

//         if(uname === user.username && md5(pwd+user.salt) === user.password){
//             req.session.displayName = user.displayName;
//             return req.session.save(function(){
//                 res.redirect('/welcome');
//             });
//         }
//     }
//     res.send('Incorrect <a href="/auth/login">login</a>');
// });
passport.serializeUser(function(user,done){
    done(null, user.username);
});
passport.deserializeUser(function(id, done){
    for (var i=0; i<users.length; i++){
        var user = users[i];
        if (user.username === id){
           return done(null, user);
        }
    }
    User.findById(id, function(err, user){
        done(err, user);
    });
});
passport.use(new LocalStrategy(
    function(username, password, done){
        var uname = username;
        var pwd = password;
        for (var i=0; i<users.length; i++){
            var user = users[i];

            if(uname === user.username && md5(pwd+user.salt) === user.password){
                done(null, user);
            }else{
                done(null, false);
            }
        }
        done(null, false);
    }
));
app.post('/auth/login', 
    passport.authenticate('local',
        {   
            successRedirect : '/welcome',
            failureRedirect : '/auth/login',
            failureFlash : false
        }
    )
);

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

app.post('/auth/register', function(req,res){
    var user={
        username : req.bosy.username,
        password : req.body.password,
        displayName : req.body.displayName
    };
    users.push(user);
    req.session.displayName = req.body.displayName;
    req.session(save(function(){
        res.redirect('/welocome');
    }));
});

app.listen(3003, function(){
    console.log('Connected port successfully!');
});