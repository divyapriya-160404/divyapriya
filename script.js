var a = 10;
var b = 20;

console.log(a)
console.log(b)

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a >> b)
console.log(a << b)
console.log(a == b)
console.log(a != b)
console.log(a !== b)


function add() {
    var a = 10;
    var b = 30;
    console.log(a + b)
}
add()
function add(a, b) {

    console.log(a + b)


}
add(20, 30)
add(50, 30)
add(10, 30)
var a = 10
var b = 20
console.log(`${a}+${b}=${a + b}`)


//n = 10
//if (n % 2 == 0) {
//   console.log("even")
// }
//   else {
//      console.log("odd")
//  }

for (n = 1; n <= 10; n++) {
    if (n % 2 == 0) {
         console.log(`${n}is even`) 
        }
    else { console.log(`${n}is odd`)
 }n++

}

n = 1;
while (n <= 10) {
    if (n % 2 == 0) {
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }
    n++;
}

n = 1;
do {
    if (n % 2 === 0) {
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }
    n++;
}
while (n <= 10);

n = 4
switch (n) {
 case 1:
      console.log("sunday")
      break;
case 2:
       console.log("monday")
     break;
  case 3:
      console.log("tuesday")
      break;
  case 4:
      console.log("wednesday")
      break;
  case 5:
      console.log("thursday")
      break;
  case 6:
      console.log("friday")
      break;
  case 7:
      console.log("saturday")
      break;
  default:
      console.log("enter the valid number")

}
const sum =() => {
    console.log(10 + 20)
}
sum()

var element = document.createElement("div")
element.setAttribute("class", "main")
element.innerText = "this is element for dom"

document.body.append(element);

n=10
var result = (n%2===0)? "even" : "odd"
console.log(result)






