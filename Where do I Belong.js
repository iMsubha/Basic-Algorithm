function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a,b) {return a - b})
    for(let i=0;i<arr.length;i++){
       if(arr[i] == num) return i;
       //console.log("arr[i] :" +arr[i]);
    }
  }
  
  //getIndexToIns([40, 60], 50);

  
  
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //a number.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //2.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //a number.
console.log(getIndexToIns([40, 60], 50)); // 1.
console.log(getIndexToIns([40, 60], 50)); // a number.
console.log(getIndexToIns([3, 10, 5], 3)); // 0.
console.log(getIndexToIns([3, 10, 5], 3)); //a number.
console.log(getIndexToIns([5, 3, 20, 3], 5)); //2.
console.log(getIndexToIns([5, 3, 20, 3], 5)); // a number.
console.log(getIndexToIns([2, 20, 10], 19)); // 2.
console.log(getIndexToIns([2, 20, 10], 19)); //number.
console.log(getIndexToIns([2, 5, 10], 15)); // 3.
console.log(getIndexToIns([2, 5, 10], 15)); //a number.
console.log(getIndexToIns([], 1)); // 0.
console.log(getIndexToIns([], 1)); // a number.*/