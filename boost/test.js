var oReq = new XMLHttpRequest();
oReq.addEventListener("load",function (){
    console.log(this.resposneText);
});
oReq.open("GET","./json.txt");
oReq.send();