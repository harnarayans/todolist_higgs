var todolist=[];

function keyHandler(event){
    if(event.keyCode==13){
        addTodo();
    }
}
function addTodo(){
    var inputReference = document.getElementById("inp");
    var inputValue = inputReference.value;
    todolist.push(inputValue);
    showList();
    inputReference.value="";
}

function showList(){
    var listRef = document.getElementById("list");
    listRef.innerHTML=null;
    todolist.map((s)=>{
        var item = document.createElement("li");
        item.innerHTML = s;
        item.classList.add("list-group-item");
        listRef.appendChild(item); 
    })
}