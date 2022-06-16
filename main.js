
let input = document.querySelector("input");
let terminal = document.querySelector("#terminal");
let all = document.querySelector("html");
let commandList = ['about','portfolio', 'socials', 'website', 'clear'];

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
                clearConsole();
                break;
            case "help":
                help();
                break;
            case "about":
                about();
                break;
            case "portfolio":
                clearConsole();
                break;
            case "socials":
                clearConsole();
                break;
            case "website":
                clearConsole();
                break;
            default:
                terminal.innerHTML += `<p class="error"> <span class="errorMessage">"${input}"</span> is not a valid command, try <span class="help">"help"</span></p>`;
        } 

    } else {
        terminal.innerHTML += '<br>'
    }
}

//Displays the input box after message is displayed
//Focuses on text box
//Calls run()
function addInput(){
    terminal.innerHTML += '<span id="caret">root:~$ <span class="codeGreen">></span></span> <input type="text" autofocus/>';
    input = document.querySelector("input");
    input.focus();
    run();
}

function help() {
    terminal.innerHTML += '<br><br>';
    for(let i=0; i<commandList.length;i++){
        terminal.innerHTML += `<span class="error codeGreen">${commandList[i]}</span><br><br>`;
    }
}

//Get date and time, display at #date element
function date(){
    let date = new Date();
    let strDate = date.toDateString();
    let strTime = date.toLocaleTimeString();

    document.getElementById("date").innerHTML = strDate + ' ' + strTime;
}