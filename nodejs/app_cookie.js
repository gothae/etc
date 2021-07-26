var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
// app.use(cookieParser());
//임의의 값 8NEC@*N98c#@om2@CNAfs 집어넣은것임 ->key값으로 사용
app.use(cookieParser('8NEC@*N98c#@om2@CNAfs'));

var products = {
    1:{title:'The history of web 1'},
    2:{title:'The next web'}
};

app.get('/products', function(req,res){
    var output = '';
    for(var name in products){
        output += `
        <li>
        <a href="/cart/${name}">${products[name].title}</a>
        </li>`
    }
    res.send(`<h1>Products</h1><ul>${output}</ul>
    <a href="/cart">Cart</a>`);
});

app.get('/cart/:id', function(req,res){
    var id = req.params.id;
    var cart = req.signedCookies.cart || {};
    
    if (!cart[id]){
        cart[id] = 0;
    }
    cart[id] = parseInt(cart[id]) + 1;
    //쿠키에 의해서 전달된 값은 문자이므로 int로 변환하여 계산해야한다

    res.cookie('cart',cart, {signed:true});
    res.redirect('/cart');
});

app.get('/cart', function(req,res){
    var cart = req.signedCookies.cart;
    if (!cart){
        res.send('Empty!');
    }else{
        var output = '';
        for (var id in cart){
            output += `<li>${products[id].title} (${cart[id]})</li>`;
        }//cart[id]를 통해서 갯수를 표현함 how?
    }
    res.send(`
    <h1>Cart</h1>
    <ul>${output}</ul>
    <a href="/products">Products List</a>
    `);
});

app.get('/count', function(req,res){
    // if (req.cookies.count){
    // cookies 대신 signedCookies를 사용함으로써 암호화
    if (req.signedCookies.count){
        var count = parseInt(req.signedCookies.count);
    }else{
        var count = 0;
    }
    //위 식을 var count = parseInt(req.cookies.count) || 0; 으로 표현할 수도 있다.
    count += 1;
    res.cookie('count', count, {signed:true});
    res.send('count : '+ count);
});

app.listen(3003, function(){
    console.log('Connected port successfully!');
});