function fizzBuzz(){
    for (let i = 0; i < 152; i++){
        if(i % 15 === 0){
            console.log("fizz");
        }else if(i % 5 === 0){
            console.log("buzz");
        }else if(i % 3 === 0){
            console.log("fizzBuzz");
        }else{
            console.log(i);
        }
    }
}

fizzBuzz();