function mutation(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    //console.log(str1)   
    //console.log(str2)
    for(let i =0; i<str2.length;i++){
        if(str1.indexOf(str2[i]) < 0) return false;
    }return true;
  }
  

console.log(mutation(["hello", "hey"])); // false.
console.log(mutation(["hello", "Hello"])); // true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true.
console.log(mutation(["Mary", "Army"])); // true.
console.log(mutation(["Mary", "Aarmy"])); // true.
console.log(mutation(["Alien", "line"])); // true.
console.log(mutation(["floor", "for"])); // true.
console.log(mutation(["hello", "neo"])); // false.
console.log(mutation(["voodoo", "no"])); // false.
console.log(mutation(["ate", "date"])); //false.
console.log(mutation(["Tiger", "Zebra"])); // false.
console.log(mutation(["Noel", "Ole"])); //true.*/