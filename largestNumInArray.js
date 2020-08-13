function largestOfFour(arr) {
   let array = [];
   
   for(let i =0;i<arr.length;i++){
      let temp =0;
      for(let j =0; j<arr[i].length; j++){
         //console.log(arr[i][j]+" "+arr[i][j+1]);
         if(arr[i][j]>arr[i][j+1]){ 
            if(temp<arr[i][j] || temp==0){
               temp = arr[i][j];
              // console.log(temp);
            }
         }else{
           if(temp<arr[i][j+1] || temp==0){
            temp = arr[i][j+1];
            //console.log(temp);
           }
         }
      }
      
      array.push(temp);
   }
   return array;
}
    
   
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], 
   [32, 35, 37, 39], [1000, 1001, 857, 1]]));    //5 27 39 1001
 
  console.log(largestOfFour([[13, 27, 18, 26], 
   [4, 5, 1, 3], [32, 35, 37, 39],[1000, 1001, 857, 1]]));
   //27, 5, 39, 1001]
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48],
         [4, -10, 18, 21], [-72, -3, -17, -10]])); //[25, 48, 21, -3]
         