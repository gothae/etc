const navigation = document.querySelector('#navigation');
const content = document.querySelector('#content');
const footer = document.querySelector('#footer');

function navigator(){
    var btn_home = document.querySelector('#btn_home');
    var btn_intro = document.querySelector('#btn_introduce');
    var btn_pic = document.querySelector('#btn_pic');
    var btn_time = document.querySelector('#btn_time');

    btn_home.addEventListener('click',function(){
        location.href = "index.html";
    });
    btn_intro.addEventListener('click',function(){
        location.href = "intro.html";
    });
    btn_pic.addEventListener('click',function(){
        location.href = "picture.html";
    });
    btn_time.addEventListener('click',function(){
        location.href = "http://localhost:8080/time.jsp";
    });
}