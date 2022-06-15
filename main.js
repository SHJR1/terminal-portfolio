
function date(){
    let date = new Date();
    let strDate = date.toDateString();
    let strTime = date.toLocaleTimeString();

    document.getElementById("date").innerHTML = strDate + ' ' + strTime;
}