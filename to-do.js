

 let total = 0;
 let pending = 0;
 let completed =0;

const input = document.getElementById("taskInput");
const button = document.getElementById("btn-1");
const tasklist = document.getElementById("taskList");

function updateTotal(){
    document.getElementById("Total").innerHTML = "Total : "+ total;
    document.getElementById("Completed").innerHTML = "Completed : "+ completed;
    document.getElementById("Pending").innerHTML = "Pending : "+ pending;
}


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


// all about delete button added when the user create the the task and click on add task
 let del = document.createElement("button");
 del.type = "button";
 del.innerText = "Delete"
// when click on delete button the task should get deleted.
 del.onclick=function(){
    li.remove();

    total--;

    if (checkbox.checked){
        pending--;
        completed++;
    }else{
        completed--;
        pending++;
    }
    updateTotal();
 };

 

li.appendChild(document.createTextNode(" "));
li.appendChild(del);
tasklist.appendChild(li); //add li to ul


total++;
pending++;
updateTotal();

 
 input.value="";

}
