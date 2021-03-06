
let input = document.querySelector("input");
let terminal = document.querySelector("#terminal");
let all = document.querySelector("html");


run();

//Run program
function run() {
    focusClick();
    pressEnter();
}

//When user clicks anywere on the page, focus on the input box
function focusClick(){
    all.addEventListener('click', function(event){
        input.focus();
    });
}

//When user presses 'enter', call runValue() and pass the value
function pressEnter(){
    input.addEventListener('keydown', function(e){
        if(e.key === "Enter"){
            runValue(input.value);
        }
    });
}

//Remove the input value, display value
//Call checkInput() and pass the input value
//Call addValue()
function runValue(value){
    let storedValue = value;
    input.remove();
    terminal.innerHTML +=  `<span class="codeGreen">${storedValue}</span>`;
    checkInput(storedValue);
    addInput();
}

//Check input
function checkInput(input){
    //split value by each space and get first index
    //set value to lowercase
    let command = input.split(" ")[0].toLowerCase();

    if(command){
        switch(command){
            case "clear":
                clearCommand();
                break;
            case "help":
                help();
                break;
            case "about":
                aboutCommand();
                break;
            case "projects":
                projectCommand();
                break;
            case "socials":
                socialsCommand();
                break;
            case "website":
                websiteCommand();
                break;
            default:
                terminal.innerHTML += `<p class="error"> <span class="errorMessage">"${input}"</span> is not a valid command, try <span class="help">"help"</span></p>`;
        } 

    } else {
        terminal.innerHTML += '<br>';
    }
}

//Displays the input box after message is displayed
//Focuses on text box
//Calls run()
function addInput(){
    terminal.innerHTML += '<br><br><br><span id="caret">root:~$ <span class="codeGreen">></span></span> <input type="text" autofocus/>';
    input = document.querySelector("input");
    input.focus();
    run();
}

function help() {
    terminal.innerHTML += '<br><br>';
    for(let i=0; i<commandList.length;i++){
        terminal.innerHTML += `<br><span class="error codeGreen">${commandList[i]}</span>`;
    }
}

//Clear console
function clearCommand(){
    terminal.innerHTML = ``;
}

//Display about
function aboutCommand(){
    terminal.innerHTML += `<br><br>${aboutList.join(" ")}`;
}

//Display projects
function projectCommand(){
    terminal.innerHTML += `<br><br>${projectList.join(" ")}`;
}

//Display socials
function socialsCommand(){
    terminal.innerHTML += `<br><br>${socialsList.join(" ")}`;
}

//Display website
function websiteCommand(){
    terminal.innerHTML += `<br><span class="error codeGreen">${websiteList.join(" ")}</span>`;
}

//Get date and time, display at #date element
function date(){
    let date = new Date();
    let strDate = date.toDateString();
    let strTime = date.toLocaleTimeString();

    document.getElementById("date").innerHTML = strDate + ' ' + strTime;
}