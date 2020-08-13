function mutation(arr) {
    return arr;
  }
  

mutation(["hello", "hey"]) // false.
mutation(["hello", "Hello"]) // true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // true.
mutation(["Mary", "Army"]) // true.
mutation(["Mary", "Aarmy"]) // true.
mutation(["Alien", "line"]) // true.
mutation(["floor", "for"]) // true.
mutation(["hello", "neo"]) // false.
mutation(["voodoo", "no"]) // false.
mutation(["ate", "date"] //false.
mutation(["Tiger", "Zebra"]) // false.
mutation(["Noel", "Ole"]) //true.