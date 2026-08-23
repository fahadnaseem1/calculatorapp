  let todoList=[];
  displayElement();

 function addTodo(){
    let inputElement = document.querySelector('.input');
    let dateElement = document.querySelector('.date');
    let dateItem = dateElement.value;
    let todoItem= inputElement.value;
    todoList.push({item: todoItem, date: dateItem});
    inputElement.value='';
    dateElement.value='';
    displayElement(); 
 } 

  function displayElement(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml='';
    for( let i =0;i< todoList.length;i++){
      let {item , date} = todoList[i];
        newHtml+= `
        <div>
            <span>${item} </span>
            <span>${date}</span>
            <button onClick="todoList.splice(${i},1); displayElement();">delete</button>
        </div>
        `; 
    }
    containerElement.innerHTML=newHtml;
  }
