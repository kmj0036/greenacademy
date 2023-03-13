// container 요소를 검색
const body =document.querySelector("#wrap")
const container = document.querySelector(".container");
// 문서객체를 생성
const card = document.querySelector(".card");
const cardInner = document.querySelectorAll(".card-inner");
const cardFront = document.querySelectorAll("card-front");
const cardBack = document.querySelectorAll("card-back");
const left = document.querySelector("#left")
const right= document.querySelector("#right")
const leftimg =document.querySelector(".leftfront")
const rightimg =document.querySelector(".rightfront")
const button = document.querySelectorAll(".button")
const leftfront=document.querySelector("#leftfront")
const rightfront=document.querySelector("#rightfront")
let upbutton = document.querySelector(".up")
let downbutton = document.querySelector(".down")
let soundon=document.querySelector("#soundon")
let soundoff= document.querySelector("#soundoff")
const restart = document.querySelector("#restrat")
const scoreboard= document.querySelector("#score")
const timeboard= document.querySelector("#lefttime")
setTimeout(function(){left.classList.remove("flipped")},3000) 
setTimeout(function(){leftrand()},2500)


let score=0;

function render(){
  scoreboard.innerHTML=`<p style='color:red'>Score:${score}</p>`;
}
render();
restart.addEventListener("click",function(){
  console.log("Restart")
  gameRestart();
})
let leftranNo;
let rightranNo;
left.classList.add("flipped");
right.classList.add("flipped");
leftfront.innerHTML=`<img src="/img/frontcard.png"></img>`
rightfront.innerHTML=`<img src="/img/frontcard.png"></img>`
body.style.backgroundImage="url(/img/backgroundimg.jpg)";


let bgm = new Audio('/audio/bgm.mp3');
let win = new Audio('/audio/win.mp3');
let draw = new Audio('/audio/draw.mp3');
let lose = new Audio('/audio/lose.mp3');
//사운드 구현부 미완성
let Zero;  
let lefttime;
function lefttimer(){
  lefttime=30;
  Zero=setInterval(function(){
    timeboard.innerHTML=`<p>lefttime:${lefttime}</p>`;
    lefttime--
      if(lefttime==-1){
        clearInterval(Zero)
        let half =Math.random()
        if(half<0.5){
          upbutton.click();
        }else{
          downbutton.click();
        }
      }
    },1000)
}

soundon.addEventListener("click",function(){
  bgm.loop=true;
  bgm.volume= 0.20;
  bgm.play();
});
soundoff.addEventListener("click",function(){
  bgm.pause()
});

function gameover(){
    upbutton.disabled = true;
    downbutton.disabled = true;
}

//버튼 클릭시 3초간 비활성화 하는 함수
function btnActive()  {
  upbutton.disabled = true;
  downbutton.disabled = true;
  setTimeout(function(){
    upbutton.disabled = false;
    downbutton.disabled = false;
  },6000)
}
//왼쪽 카드1~9랜덤으로 발생하고 leftranNo에 저장
function leftrand(){
  leftranNo=Math.ceil(Math.random()*9)
  //leftfront에 img태그에 leftranNO이 나온 숫자에 따라 다른 사진이 나오게함
  // leftfront.innerHTML=`<img src="/img/no${leftranNo}.png"></img>`
  setTimeout(function(){leftfront.innerHTML=`<img src="/img/no${leftranNo}.png"></img>`},700) 
  setTimeout(function(){lefttimer()},700)
}
// 오른쪽 카드에 1~9랜덤으로 발생하고 rightranNo에 저장
function rightrand(){
  rightranNo=Math.ceil(Math.random()*9)
  //leftfront에 img태그에 rightranNO이 나온 숫자에 따라 다른 사진이 나오게함
  setTimeout(function(){ rightfront.innerHTML=`<img src="/img/no${rightranNo}.png"></img>`},500) 
  console.log(rightranNo)
}
// 승리,무승부시 카드 2장을 뒤집고 왼쪽 카드가 뒤집히게
function allspin(){
  setTimeout(function(){left.classList.toggle("flipped")},3000) 
  setTimeout(function(){right.classList.toggle("flipped")},3000)
  setTimeout(function(){left.classList.toggle("flipped")},6000)
  setTimeout(function(){leftrand()},6000) 
}
// up,down 버튼 클릭시 오른쪽 카드 뒤집기 이벤트
upbutton.addEventListener("click", () => {
  //up 버튼 클릭시 회전 
  right.classList.toggle("flipped");
  clearInterval(Zero) 
  //rightrand를 실행시켜 오른쪽 카드에 랜덤한 카드앞면이 나오게 해준다.
  rightrand()
  //btnActive는 실행후 3초간 버튼들을 클릭할수 없게해준다.
  document.querySelector(".down").style.display="none"
  if(leftranNo<rightranNo){
    console.log("you win")
    score+=1
    if(score<2){
      body.style.backgroundImage="url(/img/backgroundimg.jpg)";
    }else if(score<5){
      body.style.backgroundImage="url(/img/background3.jpg)";
    }else{
      body.style.backgroundImage="url(/img/background2.jpg)";
    }
    allspin()
    btnActive();
    render()
    bgm.volume=0.05
    win.play()
      win.loop=false;
      win.volume=0.3;
  }else if(leftranNo==rightranNo){
    console.log("draw")
    bgm.volume=0.05
    allspin()
    render()
    btnActive();
    draw.play();{
      // bgm.autoplay= true;
      draw.loop=false;
      draw.volume= 0.3;
    }
}else{
    console.log("you lose")
    bgm.volume=0.05
    gameover()
    lose.play();{
      lose.loop=false;
      lose.volume=0.3
    }
  }
  setTimeout(function(){bgm.volume=0.3},1500)
  setTimeout(function(){downbutton.style.display="inline-block"},6000) 
})
//down 버튼 클릭시 회전 
downbutton.addEventListener("click", () => {
  right.classList.toggle("flipped");
  clearInterval(Zero) 
  rightrand()
  upbutton.style.display="none"
  if(leftranNo>rightranNo){
    score+=1;
    if(score<2){
      body.style.backgroundImage="url(/img/backgroundimg.jpg)";
    }else if(score<5){
      body.style.backgroundImage="url(/img/background3.jpg)";
    }else{
      body.style.backgroundImage="url(/img/background2.jpg)t";
    }
    console.log("you win")
    allspin() 
    render()
    btnActive();
    bgm.volume=0.05
    win.play()
      win.loop=false;
      win.volume=0.3;
  }else if(leftranNo==rightranNo){
    allspin() 
    btnActive();
    bgm.volume=0.05
    draw.play();{
      draw.loop=false;
      draw.volume= 0.3;
    }    
  }else{
    console.log("you lose")
    gameover()
    bgm.volume=0.05
    lose.play();{
      lose.loop=false;
      lose.volume=0.3
    }
  }
  setTimeout(function(){bgm.volume=0.3},1500)
  setTimeout(function(){upbutton.style.display="inline-block"},6000)
});
function gameRestart(){
  left.classList.add("flipped")
  right.classList.add("flipped")
  setTimeout(function(){left.classList.remove("flipped")},3000) 
  setTimeout(function(){leftrand()},3700)
  upbutton.style.display="inline-block"
  upbutton.disabled = false;
  downbutton.style.display="inline-block"
  downbutton.disabled = false;
  score=0;
  render()
}



