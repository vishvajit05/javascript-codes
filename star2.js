let n = 10;
let star = "*";
let space = "  ";

for (let i = 1; i <= n; i++) {
    let row = space;

    for (let j = 1; j <= n; j++) {
        row += space;
    }
    for (let k = 1; k <= n - i; k++) {
        row += star;

    }

    console.log(row);

}
