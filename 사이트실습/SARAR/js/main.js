// 윈도우 넓이
let winw =window.innerWidth;
// 섹션 선언
let sc=document.querySelector("section");
// imgstr이라는 빈칸의 변수 선언
let imgstr= "";
// i는 0부터 200까지 1씩 증가하는 반복문을 만든다.
for(let i=0;i<=200;i++){
    // imgstr은 빈칸이고 빈칸에 `<img src="img/pic${i}.jpg">`를 더해
    // 이미지 태그를 200개 생성하다 사진 번호도 1~200까지 회전
    imgstr = imgstr+ `<img src="img/pic${i}.jpg">`;
}
// sc(section에 imgstr을 html내용으로 넣는다.)
sc.innerHTML=imgstr;
// section의 모든 img 태그를 imgs라는 이름으로 할당해준다.
let imgs = document.querySelectorAll("section img");
// section에 이벤트 속성으로 추가해준다.
//  조건은 마우스가 움직일때마다 function이 발생하게한다. e를 매개변수로
sc.addEventListener("mousemove",function(e){
    //  브라우저의 가로크기 만큼 winw 라는 이름으로 저장한다.
    let winw=window.innerWidth;
    // 현재 마우스 x좌표값을 브라우저 넓이값만큼 나누고 200장 사진비율 만큼 곱해준다.
    // Math.floor로 정수형으로 나타내주며 이 값은 imgNum이라는 변수에 저장
    let imgNum= Math.floor(e.pageX/winw*200);
    console.log(imgNum);
    // img매개변수에는 img태그가 차례로 들어가서 index매개변수에는 index번호가 들어감
    imgs.forEach((img,index)=>{
        // imgs의 인덱스와 imgNum이 일치하지 않으면 디스플레이를 none으로 하고
        if(index !=imgNum){
            img.style.display ="none";
            // 아닌경우는 display를 block으로 한다.  
        }else{
            img.style.display="block"
        }
    })
})