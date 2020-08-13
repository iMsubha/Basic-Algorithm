function booWho(bool) {
    return (bool===true ||bool===false)? true: false;
  }
  
  console.log(booWho(null));
  console.log(booWho(true));//true
  console.log(booWho(false));//true
  console.log(booWho([1, 2, 3]));//false;
  console.log(booWho([].slice));//false
  console.log(booWho({ "a": 1 }));//false
  console.log(booWho(1));//false
  console.log(booWho(NaN))//f
  console.log(booWho("a"))//f
  console.log(booWho("true"))//f
  console.log(booWho("false"));//false