let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin ([A-Z]\. )?|Eleanor ([A-Z]\. )?)Roosevelt/;; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works