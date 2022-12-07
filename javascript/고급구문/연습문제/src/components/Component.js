export default class Component {
    target;
    props;
    state;
    constructor(target, props){ 
        this.target = target; //<div>안에 줄려면 target을 줘야함(화면 나타내기)타겟값 받기</div>
        this.props = props;   
        this.setup();   //셋업 호출
        this.render();  ////렌더 호출
        this.setEvent();  //셋이벤트  호출
    }
    render(){
        this.target.innerHTML = this.template();  //모든 클래스는 랜더 호출되고 마운트가 호출됨
        this.mounted() //랜더후 마운트 호출
    }
    setState(newState){
        this.state = { ...this.state, ...newState };
        this.render();
        console.log(this.state);
    }
    setup(){}
    mounted(){}
    setEvent(){}
}