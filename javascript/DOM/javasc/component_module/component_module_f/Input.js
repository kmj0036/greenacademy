export default function Input({target}){
    //form 생성
    this.element = document.createElement('form');
    //class지정
    this.element.className="inputForm";

    target.appendChild(this.element);
    this.render = () => {
        this.element.innerHTML = `
        <input type="text" placeholder="입력하시오"/>
        `
    }
    this.render();
}