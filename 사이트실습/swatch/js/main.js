//윈도우의 높이 구하기
let winh=window.innerHeight;
const lis =document.querySelectorAll("#menu li");
let sections= document.querySelectorAll("section");

lis.forEach((li,index)=>{
    li.addEventListener("click",function(e){
        // 기존이벤트를 제거
        e.preventDefault();
        window.scrollTo({top:index*winh,behavior:"smooth"})
       
    })
})
lis[0].classList.add("on")
// scroll event가 발생했을때
document.addEventListener("scroll",function(){
    // 스크롤값
    let sct = document.documentElement.scrollTop;
     // scroll값이 0~1*winh 까지면
        // 첫번째 li에 클래스 on을 붙이고
        // 스크롤 값이 1*winh보다 같거나 크면서2*winh보다 작을때 
        // 두번째 li에 클래스에 on을 붙인다.
        // lis.[0].classList.add("on");
        if(sct>=0 && sct<1*winh){
            // (스크롤값이 0과 같거나 크며 window의 높이*1보다 작을때)
            lis[0].classList.add("on");
            lis[1].classList.remove("on");
            lis[2].classList.remove("on");
            lis[3].classList.remove("on");
        } 
        if(sct>=1*winh && sct<2*winh){
            lis[0].classList.remove("on");
            lis[1].classList.add("on");
            lis[2].classList.remove("on");
            lis[3].classList.remove("on");
        }
        if(sct>=2*winh && sct<3*winh){
            lis[0].classList.remove("on");
            lis[1].classList.remove("on");
            lis[2].classList.add("on");
            lis[3].classList.remove("on");
        }
        if(sct>=3*winh && sct<4*winh){
            lis[0].classList.remove("on");
            lis[1].classList.remove("on");
            lis[2].classList.remove("on");
            lis[3].classList.add("on");
        }
    // console.log(sct);
})

// mousemove event
sections[0].addEventListener("mousemove",function(e){
    console.log(e);
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img11").style.right=20+(x/30)+"px";
    document.querySelector(".img12").style.right=20-(x/30)+"px";
    document.querySelector(".img13").style.right=20+(x/30)+"px";
})
sections[1].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img21").style.right=20+(x/30)+"px";
    document.querySelector(".img22").style.right=20-(x/30)+"px";
})
sections[2].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img31").style.right=20+(x/30)+"px";
    document.querySelector(".img32").style.right=20-(x/30)+"px";
    document.querySelector(".img33").style.right=20+(x/30)+"px";
})
sections[3].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img41").style.right=20+(x/30)+"px";
    document.querySelector(".img42").style.right=20-(x/30)+"px";
})