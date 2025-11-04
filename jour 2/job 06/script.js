const KONAMICODE = ["ArrowUp", "ArrowUp", "ArrowDown","ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let userTouch = [];

document.addEventListener("keydown", function(event) {

    const key = event.key;


    userTouch.push(key);


    if (userTouch.length > 10) {
        userTouch.shift();
    }


    if (userTouch.join(",") === KONAMICODE.join(",")) {

        document.body.classList.add("konami-active");
        console.log("Code Konami activé !");
    }

    console.log(userTouch);
});