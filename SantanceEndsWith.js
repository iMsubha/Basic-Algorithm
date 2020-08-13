/*
Check if a string (first argument, str) ends with the given target 
string (second argument, target).

This challenge can be solved with the .endsWith() method, 
which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.*/



function confirmEnding(str, target) {
    let slen= str.length; 
    let len= target.length;
  
    let string =str.substring(slen-len,slen); 
    if(string === target){
        return true;
    }
      return false;
  }
  
  console.log(confirmEnding("Bastian", "ian"));
  console.log(confirmEnding("Congratulation", "on"));
  
  console.log(confirmEnding("Open sesame", "game"));
  console.log(confirmEnding("Open sesame", "sage"));
  console.log(confirmEnding("If you want to save our world, you must hurry We dont know how much longer we can withstand the nothing", "mountain"));