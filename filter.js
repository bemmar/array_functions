const arr = [
    "first",
    "second",
    "third"
];

const newArray = arr.filter((currentValue, index, array) => {
    if (currentValue === "first") {
        return false;
    } else {
        return true;
    }
});

console.log(newArray);