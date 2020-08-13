function findLongestWordLength(str) {
    let arr = str.split(" ");
    let value = 0;
    let temp = " ";
    let arr1 = [];
    //console.log(arr.length); 9
    for(let i=0; i < arr.length; i++){
        temp = arr[i];
        arr1[i]=temp.length;
        //console.log(temp.length);
    }
    //console.log(arr1);

    for(let i=0; i < arr1.length -1; i++){
       // console.log(arr1[i]+ " " + arr1[i+1]);
        if(arr1[i] >= arr1[i+1]){
            if(value <arr1[i]){
              value = arr1[i];
            }
        }else{
            if(value <arr1[i+1]){
               value = arr1[i+1];
            }
        }
    }
    
    return value;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));