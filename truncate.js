function truncateString(str, num) {
    let arr =[];
    if(str.length <= num)
        return str;
    else
        arr = str.split('');
        arr.splice(num,arr.length);
        return arr.join('')+"...";
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
  console.log(truncateString("A-", 1));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
//"A-tisket a-tasket A green and yellow basket".

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
//"A-tisket a-tasket A green and yellow basket".