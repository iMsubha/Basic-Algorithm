function titleCase(str) {

    let arr = str.toLowerCase().split(' ');
    for(let i = 0; i < arr.length; i++){
          arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
    }
    return arr.join(' ');
  }
  
  
  console.log(titleCase("I'm a little tea pot"));
  //I'm A Little Tea Pot
  console.log(titleCase("sHoRt AnD sToUt"));
  //Short And Stout.

 console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); 
  //Here Is My Handle Here Is My Spout.
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
  //Here Is My Handle Here Is My Spout.'