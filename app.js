function getNumber(num){
    // console.log(num)
    var display=document.getElementById("display") // yahn hum "input" ko get kr rhen hen 
    display.value +=num;// old value concadinate with new
}

function clearResult(){
    var display=document.getElementById("display")
    display.value =""
}

function result(){
    var display=document.getElementById("display")
    display.value=eval(display.value) //eval will calculate numbers
}