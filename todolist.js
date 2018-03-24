window.onload= function () {

//this one worked fine
var btn= document.getElementById("btn");
var oriList= document.getElementsByTagName("li");  
var textValue= document.getElementById("textBox");
var oriToDoList = document.getElementById("toDoList");

    //To add new items to the todo list
btn.addEventListener("click", function additem () {
    //to create new elements
    var newListItem = document.createElement("li");
    var newToDo = document.createTextNode(textValue.value);
/*I created new li and text values and then I joined them 
together down there, this ensures that I can add stuff to the 
to do list at any time
*/
    newListItem.appendChild(newToDo);

    if (textValue.value===""){
        alert("You must input a value");
    }
    else {
        oriToDoList.appendChild(newListItem);
    };
    
//To add remove items from the todo list
newListItem.addEventListener("dblclick", function removeItem(){
    newListItem.style.display="none";
});

//To indicate done in the todolist
newListItem.addEventListener("click", function doneUndone(){
    newListItem.classList.toggle("doneUndone");
});

   }
);

//End of code
}
