
function date(){
    let date = new Date();
    let strDate = date.toDateString();
    let strTime = date.toLocaleTimeString();

    document.getElementById("date").innerHTML = strDate + ' ' + strTime;
}

let input = document.querySelector("input");
let terminal = document.querySelector("#terminal");
let all = document.querySelector("html");

focusClick();

//When user clicks anywere on the page, focus on the input box
function focusClick(){
    all.addEventListener('click', function(event){
        input.focus();
    });
}