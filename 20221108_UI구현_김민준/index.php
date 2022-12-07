<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <form action="/prosee.php" method="get">
            <header>
                <h1></h1>
            </header>
            <maincontent>
                <h2>이름</h2>
                <span>
                    <input type="text" name="name">
                </span>
                <h2>생년월일</h2>
                <div id="birth">
                    <input type="text" maxlength="4" placeholder="ex)2000년" name="year">
                    <select name="month" id="monthsel">
                        <option value="">1월</option>
                        <option value="">2월</option>
                        <option value="">3월</option>
                        <option value="">4월</option>
                        <option value="">5월</option>
                        <option value="">6월</option>
                        <option value="">7월</option>
                        <option value="">8월</option>
                        <option value="">9월</option>
                        <option value="">10월</option>
                        <option value="">11월</option>
                        <option value="">12월</option>
                    </select>
                    <input type="text"maxlength="2" placeholder= "1~ 31일" name="day">

                </div>
                <h2>성별</h2>
                <div id="gender" >
                    <P>남</P>
                    <input type="radio"name="gender" >
                    <p>여</p>
                    <input type="radio"name="gender">
                </div>
                <h2>아이디</h2>
                <input type="text" maxlength="12" name="ID">
                <h2>비밀번호</h2>
                <input type="password" maxlength="12" name="PW">
                <h2>비밀번호 재확인</h2>
                <input type="password" maxlength="12">
                <div id="email" >
                    <h2>본인 확인 이메일</h2>
                    <input type="text" name="email">
                    <select name="" id="">
                        <option value="">daum.net</option>
                        <option value="">naver.com</option>
                        <option value="">google.com</option>
                        <option value="">이외는 직접입력해주세요</option>
                    </select>
                </div>
                <button type="submit" onclick="allclear">회원가입</button>
            </maincontent>
        </form>
    </div>
</body>
</html>