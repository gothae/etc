<%@ page language = "java" contentType = "time/html; charset=UTF-8"
pageEncoding = "UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p><a href="index.html">메인화면</a></p>
    <% LocalDate currentDate = LocalDate.now() %>
    <% LocalTime currentTime = LocalTime.now() %>
    out.print(currentDate+currentTime)
    <h1>현재시간 : </h1>
    
</body>
</html>