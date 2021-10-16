let n = 9; // you can take input from prompt or change the value
let string = "";
var check = 1;
if(check == 1){
  for (let i = 0; i < n; i++) {
    // printing star
    for (let k = 0; k < n - i; k++) {
      string += "*";
    }
    string += "\n";
  }
}
else{
  for (let i = n; i > 0; i--) {
    // printing star
    for (let k = n - i; k >= 0; k--) {
      string += "*";
    }
    string += "\n";
  }
}
console.log(string);
