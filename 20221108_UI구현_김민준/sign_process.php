<?php
    $conn = mysqli_connect("localhost","root","1234","sign");
    $name =$_POST["name"];
    $birth =$_POST["year"];
    $gender =$_POST["gender"];
    $ID =$_POST["ID"];
    $PW =$_POST["PW"];
    $email =$_POST["email"];
    $sql = "insert into sign(name,birth,gender,ID,PW,email)
    values('{$name}','{$birth}','{$gender}','{$ID}','{$PW}','{$email}')";
    echo $sql;
    $result = mysqli_query($conn,$sql);
    if($result){
        echo "성공했습니다.";
    }else {
        echo "실패했습니다.";
    }
?>