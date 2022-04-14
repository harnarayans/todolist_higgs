var todolist=[];
function addTodo(){
    var inputReference = document.getElementById("inp");
    var inputValue = inputReference.value;
    todolist.push(inputValue);
    showList();
}

function showList(){
    var listRef = document.getElementById("list");
    listRef.innerHTML=null;
    todolist.map((s)=>{
        var item = document.createElement("li");
        item.innerHTML = s;
        listRef.appendChild(item); 
    })
}