const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  const word1 = data1;
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    const word2 = data2;
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      const word3 = data3;
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const arrayTostr = data4.replace(/[\[\]"]/g, "");
        const word4 = arrayTostr.trim().split(", ");
        console.log(
          `${word1} ${word2} is ${word3} years old and his hobbies are ${word4[0]} and ${word4[1]}`
        );
      });
    });
  });
});
