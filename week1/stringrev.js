let str = "madam";   

let chars = str.split("");

let reversedStr = "";
for (let i = chars.length - 1; i >= 0; i--) {
    reversedStr += chars[i];
}

console.log("Reversed String:", reversedStr);

if (str === reversedStr) {
    console.log(true);
} else {
    console.log(false);
}