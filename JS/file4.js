    // loops
console.log("while loop");
let a=0;
while(a<=5){
    console.log(a);
    a++;
}

console.log("for loop")
for(let i=0;i<5;i++){
    console.log(i);
}

console.log("break statement")
for(let i=0;i<5;i++){
    if(i == 3){
        break;
    }
    console.log(i);
}

console.log("continue statement")
for(let i=0;i<5;i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}