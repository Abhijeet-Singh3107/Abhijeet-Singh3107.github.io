function main() {
    let b = 1;
    function sub() {
        return b++;
    }
    return sub;
}

let f1 = main();        // f1 will store what sub function will return...
console.log(f1());
console.log(f1());
console.log(f1());