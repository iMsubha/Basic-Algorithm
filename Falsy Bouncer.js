function bouncer(arr) {
    //return arr.filter(Boolean);
    let array = [];
    for(let i=0; i<arr.length;i++){
         if(arr[i]) array.push(arr[i]);
    }
    return array;
  }
  
  //bouncer([7, "ate", "", false, 9]);

  console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9].
  console.log(bouncer(["a", "b", "c"])); // ["a", "b", "c"].
  console.log(bouncer([false, null, 0, NaN, undefined, ""])); // [].
  console.log(bouncer([null, NaN, 1, 2, undefined])); // [1, 2].