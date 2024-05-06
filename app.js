let inpBx = document.querySelector("#inpBx");
let list = document.querySelector("#list");

inpBx.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addItem(this.value);
        this.value = "";
    }
})

let addItem = (inpBx)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inpBx}<i></i>`;
    listItem.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    listItem.querySelector('i').addEventListener("click",function(){
        listItem.remove();
    })
    list.appendChild(listItem);
}

