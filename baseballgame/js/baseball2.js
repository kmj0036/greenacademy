while(true) /*조건*/{
    userName = prompt("당신을 이름을 입력해주세요(세글자)");
    console.log(userName);
    if(userName.length <= 3 && userName.length != 0){
        break;
    }
    alert("이름을 다시 입력하시오");
}
// 해당조건을 통과한 이름을 전광판 userName에 입력
document.querySelector("#userName").innerHTML = userName;
alert(`${userName} 팀의 승리를 응원합니다!`);

//변수 선언
let strike = 0; // 스트라이크 카운터
let ball = 0; // 볼 카운트
let out = 0; // 아웃 카운트
let foul = 0; // 파울 카운트
let roo = 0;
let homerun = 0;
let hit = 0;
let turn = 0; // 턴 확인 : 0이면 컴퓨터의 공격 1이면 사용자 공격
let roo1 = 0;
let roo2 = 0;
let roo3 = 0;
let score = 0;
let thisscore =0;
// sbo 객체 선언
let strikeCount = document.querySelector('.strike');
let ballCount = document.querySelector('.ball');
let outCount = document.querySelector('.out');
// roo 객체 선언
let  base1= document.querySelector('.base1');
let  base2= document.querySelector('.base2');
let  base3= document.querySelector('.base3');
roocount();
//sbo 구현
let strk1 = document.querySelector("#strk1");
let strk2 = document.querySelector("#strk2");
let ball1 = document.querySelector("#ball1");
let ball2 = document.querySelector("#ball2");
let ball3 = document.querySelector("#ball3");
let out1 = document.querySelector("#out1");
let out2 = document.querySelector("#out2");


// 컨트롤러
const button1 = document.querySelectorAll(".btn")[0];
const button2 = document.querySelectorAll(".btn")[1];
const button3 = document.querySelectorAll(".btn")[2];

//출력값 알림판
let noticeElem = document.getElementById("alert_text");
let comScoreElem = document.querySelector('.com_score');
let userScoreElem = document.querySelector('.user_score');
let comTotalScoreElem = document.querySelector('.com_total_score');
let userTotalScoreElem = document.querySelector('.user_total_score');
let game = {
    isComputerAttack: true,
    computerScore: 0,
    playerScore: 0
};
let isComputer = true;
//sbo 카운트 함수값
function sboclear(){
    strike = 0;
    ball = 0;
    foul = 0;
}

// 버튼 부분

function btn1() {
    if(isComputer){
        let com_strike = Math.ceil(Math.random() * 100);
        if (com_strike < 6) { // com_strike가 5%의 확률로 홈런일 때
            noticeElem.innerHTML = ('컴퓨터가 HOMERUN을 쳤습니다 !');
            score+=roo+1;
            thisscore+=roo+1;
            comScores[turn].innerHTML=thisscore;
            roo = 0;
            sboclear();
        } else if (com_strike >= 6 && com_strike < 46) { // com_strike이 6-45일 때 (40% 확률)
            noticeElem.innerHTML = ('컴퓨터의 스트라이크 !');
            strike += 1;
        } else if (com_strike >= 46 && com_strike < 66) { // com_strike이 46-65일 때 (20% 확률)
            noticeElem.innerHTML = ('컴퓨터의 안타 !');
            roo += 1;
            hit += 1;
            sboclear();
        } else if (com_strike >= 66 && com_strike < 86) { // com_strike이 66-85일 때 (20%)
            noticeElem.innerHTML = ('컴퓨터의 파울 !');
            foul += 1;
            if(strike<2){
                strike +=1; //strike = strike +1 ;
            }           
            console.log("foul:",foul);
        } else { // com_strike이 86-100일 때 (15% 확률)
            noticeElem.innerHTML = ('컴퓨터의 볼 !');
            ball += 1;
            console.log("ball:",ball);
        }       
        sboCount();
        roocount();
    }else{
        let com_strike = Math.ceil(Math.random() * 100);
        if (com_strike < 6) { // com_strike가 5%의 확률로 홈런일 때
            noticeElem.innerHTML = (`${userName} 팀이 HOMERUN을 쳤습니다 !`);
            score+=roo+1;
            thisscore+=roo+1;
            roo = 0;
            sboclear();
            userScores[turn].innerHTML=thisscore;
            console.log("homerun:",homerun);
            console.log(roo);
        } else if (com_strike >= 6 && com_strike < 46) { // com_strike이 6-45일 때 (40% 확률)
            noticeElem.innerHTML = (`${userName} 팀 스트라이크 !`);
            strike += 1;
            console.log("strike:",strike);
        } else if (com_strike >= 46 && com_strike < 81) { // com_strike이 46-80일 때 (35% 확률)
            noticeElem.innerHTML = (`${userName} 팀 안타 !`);
            roo += 1;
            hit += 1;
            sboclear();
            console.log(roo);
            console.log("hit;",hit);
        } else { // com_strike이 81-100일 때 (20%)
            noticeElem.innerHTML = (`${userName} 팀 파울 !`);
            foul += 1;
            if(strike<2){
                strike +=1; //strike = strike +1 ;
            }           
            console.log("foul:",foul);
        }
        sboCount();
        roocount();
    }
}


// 상황판 조건문
function sboCount() {
    if(strike>=3){
    out +=1;
    sboclear();
    }
    if(ball>=4){
        roo+=1;
        sboclear();
    }
    if(out>=3){
        roo=0;
        sboclear();
        if(isComputer){
            Number(thisscore);
            comScores[turn].innerHTML=thisscore;
            thisscore=0;
            isComputer = false;
        }else{
            Number(thisscore);
            userScores[turn].innerHTML=thisscore;
            thisscore=0;
            isComputer = true;
            turn+=1; 
        }
        out =0;
        
    }
    if(strike==0){
        strk1.style.backgroundSize="0"
        strk2.style.backgroundSize="0"
    }
    if(ball==0){
        ball1.style.backgroundSize="0"
        ball2.style.backgroundSize="0"
        ball3.style.backgroundSize="0"
    }
    if(out==0){
        out1.style.backgroundSize="0"
        out2.style.backgroundSize="0"
    }
    if(strike>=1||foul>=1){
        strk1.style.backgroundSize="100%"
    }
    if(strike>=2){
        strk2.style.backgroundSize="100%"
    }
    if(ball>=1){
        ball1.style.backgroundSize="100%"
    }
    if(ball>=2){
        ball2.style.backgroundSize="100%"
    }
    if(ball>=3){
        ball3.style.backgroundSize="100%"
    }
    if(out>=1){
        out1.style.backgroundSize="100%"
    }
    if(out>=2){
        out2.style.backgroundSize="100%"
    }
    if(foul>=2){
        strk2.style.backgroundSize="100%"
    }
}

// roo 조건문 roo는 0~4까지이며 roo가 4가되면 1을 빼고 score에 1을 더한다.
function roocount(){
    if(roo==0){
        base1.style.width='0'
        base2.style.width='0'
        base3.style.width='0'
    }
    if (roo==1){
        base1.style.width="70px"
    }
    if (roo==2){
        base1.style.width="70px"
        base2.style.width="70px"
    }
    if (roo==3){
        base1.style.width="70px"
        base2.style.width="70px"
        base3.style.width="70px"
    }if (roo==4){
        base1.style.width="70px"
        base2.style.width="70px"
        base3.style.width="70px"
        score +=1;
        thisscore+=1;
        if(isComputer){
            comScores[turn].innerHTML=thisscore;
        }else{
            userScores[turn].innerHTML=thisscore;
        }   
    }
}
// 점수판 선언할때
// thisscore를 컴퓨터tr의 1번인덱스부터 9번까지 작성하되
// 컴퓨터와 사용자까지 왔다갔다 해야한다.
let comScores = document.querySelectorAll(".com_score");
let userScores = document.querySelectorAll(".user_score");





