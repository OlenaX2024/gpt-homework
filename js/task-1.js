function checkDay(number) {
    let day;
    switch (number) {
        case "1":
            day = `Monday`;
            break;
        case "2":
            day = `Tuesday`;
            break;
        case "3":
            day = `Wednesday`;
            break;
        case "4":
            day = `Thursday`;
            break;
        case "5":
            day = `Friday`;
            break;
        case "6":
            day = `Saturday`;
            break;
        case "7":
           day = `Sunday`;
        default:
    }
    return `Today ${number} August , ${day}`; 
}

console.log(checkDay("1"));
console.log(checkDay("2"));
console.log(checkDay("3"));
console.log(checkDay("4"));
console.log(checkDay("5"));
console.log(checkDay("6"));
console.log(checkDay("7"));
