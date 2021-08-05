var btn_home = document.querySelector('#btn_home');
var btn_intro = document.querySelector('#btn_intro');
var btn_pic = document.querySelector('#btn_pic');
var btn_time = document.querySelector('#btn_time');

btn_home.addEventListener('click',function(){
    location.href = "localhost/index.html";
});
btn_intro.addEventListener('click',function(){
    location.href = "localhost/intro.html";
});
btn_pic.addEventListener('click',function(){
    location.href = "localhost/picture.html";
});
btn_time.addEventListener('click',function(){
    location.href = "localhost/time.html";
});