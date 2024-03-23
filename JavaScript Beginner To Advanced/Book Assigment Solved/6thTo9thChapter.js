// var myNum = 10;

// document.write(`
// Total Number is ${myNum};
// <br>
// Pre Increament Value - ${++myNum}
// <br>
// Total Number After Pre Increament ${myNum}
// <br>
// Post Increament Value - ${myNum++}
// <br>
// Total Number After Post Increament ${myNum}
// <br>
// <br>
// <br>
// Pre Deccreament Value - ${--myNum}
// <br>
// Total Number After Pre Deccreament ${myNum}
// <br>
// Post Deccreament Value - ${myNum--}
// <br>
// Total Number After Post Deccreament ${myNum}
// `);

// -------------------------------------------------------------------------------------

// var a = 2;
// var b = 1;

// document.write(`<b>${--a - --b + ++b + b--}</b>`);
//                       1  -  0  + 1  +

// -------------------------------------------------------------------------------------

// var userInput = prompt("Enter Your Name");
// alert(`Welcome ${userInput}.`);

// -------------------------------------------------------------------------------------

// var numOfTable = +prompt("Enter Table Number", 5);
// var num = 0;

// document.write(` Table Of ${numOfTable} </br>`);
// document.write(
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>",
//   numOfTable + "+" + ++num + "=" + numOfTable * num + "<br>"
// );

// -------------------------------------------------------------------------------------

var userName = prompt("Enter Your Name");
var totalNum = 100;

var englishNum = +prompt("Enter English Number");
var physicsNum = +prompt("Enter Physics Number");
var mathNum = +prompt("Enter Math Number");
var urduNum = +prompt("Enter Urdu Number");

var obtMarks = englishNum + physicsNum + urduNum + mathNum;

document.write(
  `
  <table border="1">
  <tr>
    <th>Subject Name</th>
    <th>Total Marks</th>
    <th>Obtained Marks Marks</th>
    <th>Percentage</th>
  </tr>
  <tr>
    <td>English Number</td>
    <td>${totalNum}</td>
    <td>${englishNum}</td>
    <td>${(englishNum * 100) / totalNum}%</td>
  </tr>
  <tr>
    <td>Physics Number</td>
    <td>${totalNum}</td>
    <td>${physicsNum}</td>
    <td>${(physicsNum * 100) / totalNum}%</td>
  </tr>
  <tr>
    <td>Math Number</td>
    <td>${totalNum}</td>
    <td>${mathNum}</td>
    <td>${(mathNum * 100) / totalNum}%</td>
  </tr>
  <tr>
    <td>Urdu Number</td>
    <td>${totalNum}</td>
    <td>${urduNum}</td>
    <td>${(urduNum * 100) / totalNum}%</td>
  </tr>
  <tr>
    <th>Total Marks</th>
    <th>400</th>
    <th>${obtMarks}</th>
    <th>${(obtMarks * 100) / 400}%</th>
  </tr>
</table>
  `
);
