// Q#1
// var fname = prompt("Enter your First name:");
// var lname = prompt("Enter your Last name:");
// var fullname = fname + " " + lname;
// console.log("Hello, " + fullname + "!");

// Q#2
// var mobile = prompt("Enter your favorite mobile model:");
// console.log("My favorite phone is: " + mobile);
// console.log("Length of String = " + mobile.length);

// Q#3
// var country = "Pakistan";
// console.log("String : " + country);
// for (i = 0; i < country.length; i++) {
//   if (country[i] === "n") {
//     console.log('Index of "n" = ' + i);
//     break;
//   }
// }

// OR

// var country = "Pakistan";
// console.log("String : " + country);
// var result = country.indexOf("n");
// console.log('Index of "n" = ' + result);

// Q#4
// var country = "Hello World";
// console.log("String : " + country);
// for (i = country.length - 1; i >= 0; i--) {
//   if (country[i] === "l") {
//     console.log('Last index of "l" = ' + i);
//     break;
//   }
// }
// OR
// var country = "Hello World";
// console.log("String : " + country);
// var result = country.lastIndexOf("l");
// console.log('Last index of "l" = ' + result);

// Q#6
// var fname = prompt("Enter your First name:");
// var lname = prompt("Enter your Last name:");
// var fullname = fname.concat(" ", lname);
// console.log("Hello, " + fullname + "!");

// Q#7
// var a = "Hyderabad";
// var b = "Islamabad";
// var r = a.replace("Hyder", "Islam");
// console.log("City: " + a);
// console.log("After Replacement: " + r);

// Q#8
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// console.log("Before = " + message);
// for (i = 0; i < message.length; i++) {
//   if (message.slice(i, i + 3) == "and") {
//     message = message.replace("and", "&");
//   }
// }
// console.log("After = " + message);

// Q#9
// var str = "786";
// console.log("String = \n" + str + "\n" + "Number = ");
// console.log(Number(str));

// Q#10
// var enter = prompt("Enter in Lower Case :");
// console.log("User Input = " + enter);
// console.log("Upper case = " + enter.toUpperCase());

// Q#11
// var enter = prompt("Enter in Lower Case :");
// console.log("User Input = " + enter);
// console.log(
//   "Title Case = " +
//     enter.slice(0, 1).toUpperCase() +
//     enter.slice(1).toLowerCase()
// );

// Q#12
// var num = 35.36;
// console.log("Number = " + num);
// var look = num.toString().replace(".", "");
// console.log("Replace = " + look);

// Q#13
// var enter = prompt("Enter Your name :", "Don't use (@ , . !)");
// var match = false;
// for (i = 0; i < enter.length; i++) {
//   if (
//     enter[i] == "@" ||
//     enter[i] == "." ||
//     enter[i] == "," ||
//     enter[i] == "!"
//   ) {
//     alert("Don't use (@ , . !) ");
//     match = true;
//   }
// }
// if (match === false) {
//   document.write("Your name = " + enter);
// }

// Q#14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var enter = prompt("What do ypu want to order:");
// var prom = enter.toLowerCase();
// var match = false;
// for (i = 0; i < arr.length; i++) {
//   if (prom == arr[i]) {
//     console.log(prom + " is available at " + i + " index");
//     match = true;
//     break;
//   }
// }
// if (match == false) {
//   console.log("Not Found");
// }

// Q#15

// Q#16
// var university = "University of Karachi";
// for (i = 0; i < university.length; i++) {
//   console.log(university[i] + "\n");
// }

// Q#17
// var enter = prompt("Enter Value = ");
// var last = enter.length - 1;
// for (i = 0; i < enter.length; i++) {
//   if (i == last) {
//     console.log(enter[last]);
//     break;
//   }
// }

// Q#18
// var para = "The quick brown fox jumps over the lazy dog";
// var change = para.toLowerCase();
// var found = "the";
// var iterate = 0;
// for (i = 0; i < para.length; i++) {
//   if (found == change.slice(i, i + 3)) {
//     iterate = iterate + 1;
//   }
// }
// console.log("Word occurrence of 'the' = " + iterate);
