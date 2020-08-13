function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let count = arr.length/size; //6/2=3
    let index = 0;
    for(let i= 0; i < count; i++){
        if(index >= 0){
            newArr.push(arr.slice(index,index+size));
            index += size;
        }
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  //console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //should return [["a", "b"], ["c", "d"]].
  //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //should return [[0, 1, 2], [3, 4, 5]].
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //should return [[0, 1], [2, 3], [4, 5]].
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //should return [[0, 1, 2, 3], [4, 5]].
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));// should return [[0, 1, 2], [3, 4, 5], [6]].
  //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
