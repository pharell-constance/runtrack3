let button = document.getElementById("button");



let text = ""

button.addEventListener("click", async function(e) {
    let text = (await fetch('./expression.txt')).text();
    console.log(await text);
});

