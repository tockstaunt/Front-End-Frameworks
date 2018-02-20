let newNumber = 10;

try{
    if(newNumber === 10)throw 1;
    if(newNumber <= 5)throw 2;
    if(newNumber === 5)throw 3;

}catch(err){
    console.log(err);
    
}