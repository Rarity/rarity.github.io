
 //Katawa Shoujo

// function validate(input){
//   var regemail = /[a-z0-9][-a-z0-9_]*@[-a-z0-9_]*\.[a-z0-9.]*/gi
//   return regemail.test(input)
// }


// console.log(validate('abc@example.com'), 'abc@example.com');
// console.log(validate('_bc@example.com'), '_bc@example.com');
// console.log(validate('abc_123@a-1_23.co.uk'), 'abc_123@a-1_23.co.uk');
// console.log(validate('abc@abc'), 'abc@abc');

// username = /[a-z0-9][-a-z0-9_]*/gi
// hostname = /[-a-z0-9_]*.[a-z0-9.]*/gi





// Write a function to test whether a given input is a valid email address.

// For the purposes of this kata, here is what makes a valid email:
//    -At least one letter character at the beginning
//    -All characters between the first character and the @ (if any) must be letters, numbers, or underscores
//    -There must be an @ character (after the points listed just now)
//    -After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen
//    -The email must end with at least one set of a dot followed by one or more word characters.
//    -The input must NOT be case-sensitive

// The function should return true or false.


/*function ArithmeticSequenceSum(a, r, n) {
  return (2*a+r*(n - 1))/2 * n;
}

console.log(ArithmeticSequenceSum(3, 2, 20),'is 440');
console.log(ArithmeticSequenceSum(2, 2, 10),'is 110');
console.log(ArithmeticSequenceSum(1, -2, 10),'is -80');*/


// function stripIt(code){
//   return code.replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/gi,"") 
// }


// console.log(stripIt("1 /* some shit*/ + /*//*//*fuck yuo */+/* *//* */1"))

// String.prototype.capitalize = function(){
//   if (this.charCodeAt(0) > 96 && this.charCodeAt(0) < 123){
//   return String.fromCharCode(this.charCodeAt(0)-32) + this.slice(1);
//   }
//   return this
// }

// console.log("a".charCodeAt()); //97
// console.log("z".charCodeAt()); //122
// console.log("hello world".capitalize());
// console.log("an apple a day keeps the doctor away".capitalize());
// console.log("today, I have a dream ... ".capitalize());

// if charcode -32


// function isOdd(n) {
//   console.log(Math.abs(n)%2);
//   return Math.abs(n % 2) == 1  
// };


// function orangeFraction(fractions){
//   var len = fractions.split(" ").length;
//   var total = fractions.split(" ").reduce(function(a, b) {
//     return +a + +b;
//   });
//   return (total / (len)).toFixed(4);
// }


// console.log(orangeFraction("0 25 50 75"), " 37.5000");
// console.log(orangeFraction("50 50 100"), " 66.6667");


// function GeometricSequenceSum(a, r, n) {
//   if (r == 1) {
//     return n*a
//   } else {
//     return (a*(1-Math.pow(r,n)))/(1-r)
//   }
// }



// function getCount(words) {
//   var result = {vowels:0,consonants:0};
//   var v,c;
//   if (typeof words == 'string' && words.length > 0){
//     c = words.match(/[b-df-hj-np-tv-z]/ig);
//     v = words.match(/[aeiouy]/ig);
//     if (c != null) {
//       result.consonants = c.length;
//     }
//     if (v != null) {
//       result.vowels = v.length;
//     }
//   }
//   return result
// }

// function reverseString(str) {
//    console.log(str.split(""));1
//    return str
// }

// console.log(reverseString("test"))


// function avg(a){var result=a.reduce(function(sum,cur){return sum+cur;},0);return result/(a.length)}

// console.log(avg([0, 1, 2, 3, 4]));

// function fib(n) {
//   var cur = 1, prev = 0;
//   for (var i = 1; i < n; i++){
//     cur += prev;
//     prev = cur;
//   }
//   return cur;asa
// }

// console.log(fib(3));
// console.log(fib(20));

//---------------------- version 6kui------------------------- 
// function nextVersion(version){
//   var version = version.split('.').map(Number);
//   version[version.length-1] += 1;
//   for (var i = 1; i < version.length;i++)
//     if (version[version.length-i]==10){
//       version[version.length-i] = 0;
//       version[version.length-i-1] += 1;
//     }
//   return version.join(".");
// }
//   ---------    ^shit     this ok -----------------
// function nextVersion(v){
//   return /\.9$/.test(v) ? v.replace(/\.9(?=(\.9|$))/g,".0").replace(/\d+(?=(\.0)+$)/,x=>+x+1) : v.replace(/\d+$/,x=>+x+1);
// }
 



// --------------------- govnokod ---------------
// function findSum(){
//   var sum = 0
//   for (i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//     console.log();
//     if (arguments[i]<0){
//       return -1
//     }
//   }
//   return sum
// }
// ---------------same shit ------------
// function findSum(...nums) {
//   return nums.reduce((a, b) => a < 0 || b < 0 ? - 1 : a + b, 0)
// }

// function pipeFix(numbers){
//   var res = []
//   console.log(numbers[numbers.length-1]);
//   for (var i=numbers[0]; i<=numbers[numbers.length-1]; i++){
//     res.push(i);
//   }
//   return res
// }

// console.log(pipeFix([1,2,3,5,6,8,9]));

// {
//   mounth: {
//     day: Naughty or Nice
//   }
// }

function naughtyOrNice(data) {
  for (var i=0; i<=12; i++){
    console.log(data[1])
  }
  
}

console.log(naughtyOrNice({"January": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Naughty", "25": "Nice", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Nice", "31": "Nice"}, "February": {"1": "Nice", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Nice", "17": "Nice", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Nice"}, "March": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Nice", "5": "Nice", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, "April": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty"}, "May": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Naughty", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Nice", "16": "Nice", "17": "Naughty", "18": "Naughty", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Nice", "29": "Nice", "30": "Naughty", "31": "Nice"}, "June": {"1": "Nice", "2": "Naughty", "3": "Naughty", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "July": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Nice"}, "August": {"1": "Naughty", "2": "Naughty", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Nice", "24": "Nice", "25": "Nice", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Naughty", "30": "Naughty", "31": "Nice"}, "September": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty"}, "October": {"1": "Nice", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Nice", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Nice", "29": "Nice", "30": "Naughty", "31": "Nice"}, "November": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Nice", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Nice", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty"}, "December": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Naughty", "21": "Naughty", "22": "Nice", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Nice", "31": "Naughty"}}) == "Nice!")



