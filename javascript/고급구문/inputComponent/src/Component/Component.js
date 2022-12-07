export default class Component {
    target;
    props;
    state;
    constructor(target,props){
        this.target = target;
        this.props = props;
        // 메서드 호출
        this.setup();
        this.render();
        this.setEvent();
    }
    template(){ return""}
    render (){
        this.target.innerHTML = this.template()
        this.mounted();
    }
    setState(newState){
        this.state = {...this.state,...newState};
        this.render();
    }
    setup(){};
    mounted(){};
    setEvent(){};
}