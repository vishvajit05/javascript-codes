const prompt = require("prompt-sync")();

let ogpass = 1234;

let a = ogpass;
for (let i = 1; i <= 3; i++) {

    let userpass = prompt("Enter user pass:");
    userpass = parseInt(userpass);

    if (a === userpass) {
        console.log("unlocked");
        break;
    } else {

        console.log("incorrect password");
        if (i === 3) {
            let sec = 15;
            let timer = setInterval(() => {

                console.log("wait for " + sec + " seconds");
                sec--;
                if (sec == 0) {
                    clearInterval(timer);
                    console.log("try again now");


                }
            }, 1000);

            if (a !== userpass) {
                console.log("try again");
            }

        }


    }

}