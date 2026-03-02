const prompt = require('prompt-sync')();

let n=prompt("enter the number of subjects:");
let marks=[];
for(let i=0;i<n;i++){
    let mark=prompt("enter the mark of subject "+(i+1)+":");
    marks.push(parseFloat(mark));
}
console.log("marks:",marks);

let total=0;

let passCount=0;
let failCount=0;

for(let i=0;i<marks.length;i++){
    total += marks[i];
    if(marks[i]>=40){
        passCount++;
    } else {
        failCount++;
    }
}

let average=total/n;
let grade;

switch(true){
    case average>=90:
        grade="A";
        break;
    case average>=80:
        grade="B";
        break;
    case average>=70:
        grade="C";
        break;
    case average>=60:
        grade="D";
        break;
    default:
        grade="F";
}



console.log("total marks:",total);
console.log("average marks:",total/n);
console.log("grade:",grade);
console.log("pass count:",passCount);
console.log("fail count:",failCount);