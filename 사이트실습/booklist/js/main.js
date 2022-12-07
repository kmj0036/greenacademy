fetch("data/data.json")
.then(response=>response.json())
.then(data=> {
    displayBooks(data.books)
    setEventBooks(data.books)
    reset(data.books)
});
function reset (){
    const reset =document.querySelector("h1");
    reset.addEventListener("click",function(){
        const ul =document.querySelector("#topic")
         let str="";
        str = books.map(book=>{
        return `<li><p>${book.author}</p>
        <p>${book.name}</p>
        <p>${book.year}</p></li>`;
    }).join("")
    topic.innerHTML=str;
    })
}

function setEventBooks(books){
    const Booklist =document.querySelector("#buttons");
    Booklist.addEventListener("click",function(e){
        const { value}= e.target.dataset;
        let filtered = books.filter(book=>book["year"]===value);
        displayBooks(filtered);
        console.log(value)
    })
    
}

function displayBooks(books){
    const ul =document.querySelector("#topic")
    let str="";
    str = books.map(book=>{
        return `<li><p>${book.author}</p>
        <p>${book.name}</p>
        <p>${book.year}</p></li>`;
    }).join("")
    topic.innerHTML=str;
}
    
    
