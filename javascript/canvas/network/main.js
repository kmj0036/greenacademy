import utill from "./utill.js";

let randomNum =utill.randomFloat(1,5)
console.log(randomNum);

const canavas= document.querySelector("canvas");
canavas.width=window.innerWidth;
canavas.height=window.innerHeight;
const ctx= canavas.getContext("2d");

//파티클 클래스
class Particle {
    constructor(x,y,radius,velocity){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.velocity=velocity;
    }
    draw(){
        //펜 시작
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle="#fff";
        ctx.fill();
        ctx.closePath();
    }
    animate(){
        //파티클의 좌표가 canvas의 크기보다 커질때 나 0이될때
        if(this.x<=0||this.x >=window.innerWidth||this.y<=0||this.y>=window.innerHeight){
            this.x=utill.randomFloat(0,innerWidth)
            this.y=utill.randomFloat(0,innerHeight)
        }
        //선객체 생성하기
        particles.forEach(Particle=>{
            let distance=utill.distance(Particle.x,Particle.y,this.x,this.y);
            if(distance<300){
                let from = {x:this.x,y:this.y};
                let to ={x:Particle.x,y:Particle.y};
                new Line(from,to,distance).draw();
            }
        })
        this.x+=this.velocity.x;
        this.y+=this.velocity.y;
        this.draw(); 
    }
}
//선클래스 정의
class Line {
    constructor(from,to,distance){
        this.from=from;
        this.to=to;
        this.distance=distance;
    }
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.from.x,this.from.y);
        ctx.lineTo(this.to.x,this.to.y)
        ctx.strokeStyle= "rgba(215,205,0,0.4)";
        ctx.lineWidth=1
        ctx.stroke();
        ctx.closePath();
    }
}
//마우스 객체 만든길
let mouse = {
    x: 0,
    y:0,
    isActive:false,
    radius:5
}
//particle 만들기
const TOTAL= 50;
let particles =[];
for(let i=0;i<TOTAL;i++){
    let x= utill.randomFloat(0,innerWidth);
    let y= utill.randomFloat(0,innerHeight);
    let radius= utill.randomFloat(0.5,2);
    let velocity= {
        x:utill.randomFloat(-2,2),
        y:utill.randomFloat(-2,2)
    }
    particles.push(new Particle(x,y,radius,velocity));
}
// 매 프레임마다 실행되는 재귀함수
function render(){
    ctx.clearRect(0,0,canavas.width,canavas.height);
    requestAnimationFrame(render);
    if(mouse.isActive){
        let velocity={
            x:0,
            y:0
        }
        new Particle(mouse.x,mouse.y,mouse.radius,velocity).animate();
    }
    particles.forEach(Particle=>Particle.animate());
}
render();

//이벤트 연결하기
canavas.addEventListener("mouseenter",function(){
    mouse.isActive=true;
})
canavas.addEventListener("mouseleave",function(){
    mouse.isActive=false;
})
canavas.addEventListener("mousemove",function(e){
    mouse.x=e.pageX;
    mouse.y=e.pageY;
})