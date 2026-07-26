  let todoList=[];
  displayElement();



 function addTodo(){
    let inputElement = document.querySelector('.input');
    let todoItem= inputElement.value;
    todoList.push(todoItem);
    inputElement.value='';
    displayElement();
 } 

  function displayElement(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml='';
    for( let i =0;i< todoList.length;i++){
        newHtml+= `
        <div>
            <span>${todoList[i]} </span>
            <button onClick="todoList.splice(${i},1); displayElement();">delete</button>
        </div>
        `; 
    }
    containerElement.innerHTML=newHtml;
  }
