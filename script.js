
const inputText = document.getElementById("inputText");
const list = document.querySelector(".event_list");
const removed = document.getElementById("removed");

const dayNumberResult = document.getElementById("dayNmbResult");
const dayNameResult = document.getElementById("dayNameResult");
const day = document.querySelectorAll("#day");



function addEvent(){
    

    if (inputText.value !== "") 
        var newEvent = document.createElement("li");
       
        list.appendChild(newEvent);
        newEvent.innerHTML = inputText.value;
        inputText.value = "";
        
        removed.innerHTML = "";
}

day.forEach((i) => {
    i.addEventListener("click", showNumber);

    function showNumber(){
        dayNumberResult.innerHTML = this.textContent;
        dayNameResult.innerHTML = this.className;
        dayNameResult.style.consol.log(this.className);
    }
});


