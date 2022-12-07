fetch("data/data.json")
.then(response=>response.json())
.then(data=> {
    displayItems(data.items)
    setEventItems(data.items)
});

// 이벤트 설정하기
function setEventItems(items){
    const btns= document.querySelector(".buttonDiv");
    btns.addEventListener("click",function(e){
    //    const dataset = e.target.dataset;
    //    const key =dataset.key;
    //    const value = dataset.value;
    //    객체구조분해할당
        const {key,value }= e.target.dataset;
        let filtered =items.filter(item=> item[key]===value);
        displayItems(filtered);
    })
}
// 배열을 받으면 받은 배열을 li로 변환해서 표시
function displayItems(items){
    const ul=document.querySelector(".items");
    let str= "";
    str = items.map(item=>{
        return `<li class ="item">
            <img src="${item.image}">
        <span>${item.gender},${item.size}</span>
        </li>`;
    }).join("")
    ul.innerHTML =str;
}