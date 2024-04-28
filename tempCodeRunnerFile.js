ry = "Hello World";
console.log("String : " + country);
for (i = country.length - 1; i >= 0; i--) {
  if (country[i] === "l") {
    console.log('Last index of "l" = ' + i);
    break;
  }
}