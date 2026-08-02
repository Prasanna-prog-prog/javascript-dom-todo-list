const input = document.getElementById("taskInput");
const button = document.getElementById("btn-1");
const tasklist = document.getElementById("taskList");


button.addEventListener("click" , myFunction);

function myFunction(){

 let userInput = input.value; 
 let li=document.createElement("li");//cretated the userInput 

// for userInput when it click on addtask it should come with checkbox
 let checkbox = document.createElement("input");
 checkbox.type = "checkbox";
 li.appendChild(checkbox);//add checkbox

 
 let text=document.createTextNode(" " + userInput);//createTextNode is used to keep together the checkbox and taask
 li.appendChild(text);//add text after checkbox

 
 tasklist.appendChild(li);  //add li to ul

 input.value="";

}

//for userInput when it click on addtask it should come with checkbox.----done
// when the user click the checkbox it marks as (rightmark) then it should get deleted
//total is always increased when the add task button is clicked
//completed also should increase when the checkbox mark as(rightmark) and pending should be decreased.
