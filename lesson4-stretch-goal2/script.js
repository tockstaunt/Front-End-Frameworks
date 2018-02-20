function checker(firstName,lastName){
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById('lastName').value;

    let NameRegex = /(^[A-Z]{1})[a-zA-Z]+$/;
    let returnAnswer = document.getElementById("returnAnswer");
    let returnAnswer2 = document.getElementById("returnAnswer2");
    const returnFirstName = firstName.match(NameRegex) ? returnAnswer.innerHTML = "Thank You" : returnAnswer.innerHTML = "Error";
    const returnLastName = lastName.match(NameRegex) ? returnAnswer2.innerHTML = "Thank You" : returnAnswer2.innerHTML = "Error";

    
}

