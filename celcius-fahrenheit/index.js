function f1(){
    var data = document.querySelector("#x1").value;
    console.log(data);
    console.log(isNaN(data));
    var message="";


    if(data==""){
        message = "please Enter Temperature";
    }
    else if(isNaN(data)){
        message = "Invalid Value as Temperature";
    }
    else{
        data = Number(data);
        var answer = (data*9/5) + 32;
        message = `
        Temperature in Degree Celcius : ${data}\u00B0C <br/>
        Temperature in Fahrenheit : ${answer} \u00B0F <br/>
        
        `
    }
    document.querySelector("p").innerHTML=message;
}
