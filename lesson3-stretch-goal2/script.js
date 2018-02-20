function putTogetherText(){
let month = document.getElementById("month").value;
let day = parseInt(document.getElementById("day").value);
let year = parseInt(document.getElementById("year").value);

let returnInput = document.getElementById("returnInput")
returnInput.innerHTML = "Your birthday is: "+month+" "+day+", "+year;

}

