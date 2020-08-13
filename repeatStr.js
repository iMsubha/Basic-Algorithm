function repeatStringNumTimes(str, num) {
    let string =[];
    if(num<=0){
        return "";
    }
    while(num > 0){
        console.log(num);
        string.push(str);
        num--;
         
    }
    return string.join('');
  }
  
 console.log(repeatStringNumTimes("abc", ));