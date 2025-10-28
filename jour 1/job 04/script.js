let year = undefined;
function checkYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}


console.log(checkYear(2024));