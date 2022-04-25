var todolist=[];

function keyHandler(event){
    if(event.keyCode==13){
        addTodo();
    }
}

function handleSearch(event){
    var searchText = event.target.value;
    var filteredList = todolist.filter(item=>
        item.indexOf(searchText)>=0
    );
    showList(filteredList);
}

function addTodo(){
    var inputReference = document.getElementById("inp");
    var inputValue = inputReference.value;
    todolist.push(inputValue);
    showList(todolist);
    inputReference.value="";
}

function handleDelete(event){
    console.log(event.target);
}

function showList(list){
    var listRef = document.getElementById("list");
    listRef.innerHTML=null;
    list.map((s)=>{
        var item = document.createElement("li");
        item.innerHTML = `${s} <button onClick="handleDelete(event)">Delete</button>`;
        item.classList.add("list-group-item");
        item.classList.add("d-flex");
        item.classList.add("justify-content-between");
        item.classList.add("align-items-center");
        listRef.appendChild(item); 
    })
}