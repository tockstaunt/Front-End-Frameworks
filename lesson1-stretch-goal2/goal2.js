let age = 15;

if(age < 10){
    console.log("Not Permitted");
}
else if (age < 15){
    console.log("Permitted with parent")
}
else if(age < 18){
    console.log("Permitted with anyone over 18");
}
else if (age >= 18){
    console.log("Permitted to attend alone");
}