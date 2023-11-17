
function toCelcius(temp) {
    return (temp -32) * (0.5);
}
function toFahrenheit(temp) {
    return (temp * 9/5)+ 32;
}



document.getElementById("submitButton").onclick = function(){
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelcius (temp);
        document.getElementById("tempLabel").innerHTML = temp + "C"; 
    }
    else if (document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit (temp);
        document.getElementById("tempLabel").innerHTML = temp + "F"; 
 
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit!";
    }
}




   
    
